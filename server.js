//Use .env while in project in dev
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

//Require and Configure Nextjs
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next');
const Product = require('./models/productSchema');
const  axios  = require('axios');
const { MemoryStore } = require('express-session');
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler();

app.prepare().then(() => {
    
    //Database Connection
    let mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/helps')
        .then(console.log('Database is Live')).catch(err => console.log(err));
    
    //Express Connection
    let express = require('express');
    let server = express();
    server.listen(3000, () => {
        console.log('Server is Live');
    });
    
    //Required Documents and Resources
    let User = require('./models/userSchema');
    let Product = require('./models/productSchema');
    let Donation = require('./models/donationSchema');
    let DonationQueue = require('./models/donationQueueSchema');
    let myCache = require('./util/myCache');

    //Required Packages
    let bodyParser = require('body-parser');
    let cookieParser = require('cookie-parser');
    let methodOverride = require('method-override');
    let session = require('express-session');
    let flash = require('connect-flash');
    let cors = require('cors');
    let passport = require('passport');
    let LocalStrategy = require('passport-local');
    const { body, check, validationResult } = require('express-validator');
    let mongoSanitize = require('express-mongo-sanitize');
    let multer = require('multer');
    // let storage = require('./cloudinaryConfig');
    let storage = multer.memoryStorage();
    let uploader = multer({storage});


    //Required Middleware
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(cookieParser('secret'));
    server.use(methodOverride('_method'));
    server.use(express.json());
    server.use(session({
        resave: true,
        saveUninitialized: false,
        name: 'helpsSession',
        secret: 'thisIsASecret',
        cookie: {
            test: Math.floor(Math.random() * 100),
            httpOnly: true,
            maxAge: 300000
        }
    }));
    server.use(flash());
    server.use(cors());
    server.use(mongoSanitize());

    server.use(passport.initialize());
    server.use(passport.session());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());



    //Custom Middleware
    let errHandler = require('./middleware/errorHandling');
    let { getLanding } = require('./controllers/landing');
    let { charityByCause, likeCharity,
        charityByTag, charityRecommended, unlikeCharity } = require('./Explore/controllers/charityControllers');
    let charityByName = require('./Explore/functions/charityByName');
    let { signupPost } = require('./SignUp/controllers/signupController');
    let { loginPost, logout } = require('./Login/controllers/loginControllers');
    let getSession = require('./functions/getSession');
    let { sessionGet, sessionPost } = require('./controllers/sessionControllers');
    let {signupValidators, signupValidatorHandler} = require('./SignUp/middleware/signupValidate');
    let asyncCatch = require('./util/asyncCatch');
    let { productsPost, productsGet, productsDelete, productPut } = require('./Master/controllers/productsController');
    let { checkoutPost } = require('./Cart/controllers/cartControllers');
    let addToQueue = require('./Checkout/functions/addToQueue');
    let addToPool = require('./Checkout/functions/addToPool')

    //Routes
    server.get('/', async (req, res, next) => {
        let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' });
        let queue = await officialQueue.populateQueue().then(data => {return data}).catch(err => console.log(err))
        return app.render(req, res, '/landing', {queue});
    });

    server.get('/home', async (req, res, next) => {
        // console.log(req.sessionID);
        // console.log(MemoryStore.get(req.sessionID));
        let { success } = req.query;
        if (Object.keys(req.query).length > 0) {
            req.session.flash = {};
            if (success !== undefined) {
                req.flash('success', 'Purchase Successful!'); 
                await addToQueue(cart).then(data => { return data }).catch(err => console.log(err));
            } else {
                req.flash('error', 'Purchase Successful!');
            }
        };
        app.render(req, res, '/homePage', {});
    })

    server.get('/explore', async (req, res, next) => {
        app.render(req, res, '/userExplore', {});
    });

    server.get('/donate', async (req, res, next) => {
        app.render(req, res, '/donationPage', {});
    });

    server.get('/recommended', async (req, res, next) => {
    let currentUser = await User.findById(req.user._id);
        let topInterests = currentUser.sortedInterests.slice(0, 3);
    let allRecs = [];
    let apiKey = process.env.CHARITY_API_KEY;
    for (let i = 0; i < topInterests.length; i++){
        let tags = Object.keys(topInterests[i][1].tags).slice(0, 3).join(',');
        console.log(tags);
        let response = await axios({
            method: 'get',
            url: `https://partners.every.org/v0.2/search/${topInterests[i][0]}?apiKey=${apiKey}&take=10&causes=${tags}`
       }).then(data => { return data.data.nonprofits }).catch(err => console.log(err));
        allRecs.push(...response);
    };
        let interestsByName = topInterests.map(x => x[0]);
       return app.render(req, res, '/userRecommended', {allRecs, interestsByName});
    });

    server.get('/master', async (req, res, next) => {
        let officialQueue = await DonationQueue.findOne({ name: 'officialQueue' })
            .then(data => { return data }).catch(err => console.log(err));
        let queuePop = await officialQueue.populate('queue')
            .then(data => { return data.queue }).catch(err => console.log(err));
        app.render(req, res, '/masterPage', { officialQueue: queuePop })
    });

    server.get('/dashboard', async (req, res, next) => {
        app.render(req, res, '/userDashboard', {})
    });

    server.get('/checkout', async (req, res, next) => {
        return app.render(req, res, '/checkoutPage', {})
    });

    //CRUD Routes
    server.post('/products', uploader.array('img'), asyncCatch(productsPost));
    server.put('/products', uploader.array('img'), asyncCatch(productPut));
    server.delete('/products', asyncCatch(productsDelete));
    server.post('/explore/charities/like', likeCharity);
    server.put('/explore/charities/like', unlikeCharity);
    // server.post('/queue', addToQueue);
    // server.delete('/queue', removeFromQueue);

    //API Routes
    server.get('/explore/charities/:cause', charityByCause);
    server.get('/products', productsGet);
    server.get('/charities/recommended', charityRecommended);
    server.get('/session', sessionGet);
    server.post('/session', sessionPost);
    server.get('/tester', async (req, res, next) => {
        let currentUser = await User.findOne({ username: 'dev' })
            .then(data => { return data }).catch(err => console.log(err));
        return res.send({user: currentUser, cart: req.session.cart});
    });
    server.post('/checkout', checkoutPost);
    server.post('/pool', addToPool);
    
    // const endpointSecret = "whsec_a5052c84697a6daa5e024df66ecf25fdaf1aa7e84389d16bb6ff04ea69b0eb32";
    server.post('/webhook', express.raw({ type: 'application/json' }), async (req, res, next) => {
            let { data, type } = req.body;
            // console.log(req.session)
            switch (type) {
                case 'charge.succeeded':
                    console.log('Stripe Charge ID');
                    console.log(data.object.id);
                    // await addToQueue(req.session.cart, data.object.id)
                    // .then(data => console.log(data)).catch(err => console.log(err));

                break;
              default:
                console.log(`Unhandled event type ${type}`);
            }
          
            // Return a 200 response to acknowledge receipt of the event
            res.send(200);
          });
  

    //login Routes
    server.get('/login', async (req, res, next) => {
        app.render(req, res, '/userLogin', {});
    });
    server.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), loginPost);
    server.get('/logout', logout);

    //Signup Routes
    server.post('/signup', signupValidators, asyncCatch(signupValidatorHandler), asyncCatch(signupPost));
   


    //Error Handling Middleware
    server.use(errHandler);



    //Nextjs Middleware for handling requests
    server.all('*', async (req, res, next) => {
        await handle(req, res);
});

});



// set up a front end master GUI that takes the donationQueue

//start working with stripe!!!!

// cloudinary.destroy on deleting products - delete img from cloudinary
//checkout walk through to select which charity to give coin to.
//what they've purchased, total donated, list of orgs, total donated to each
//membership level => goals => etc.



//make contexts for the pages that need it (several props handing down);
//Why can't I create a separate function from the handleChange function in product
///form. That way I didn't have a to make productPut.
//create checkout screen
//make each cause request a request for only the amount you need to make it faster
//set up charity page with larger explanation of charity => allow add/heart/spread
///useRef for currentUser and flash / server related info instead of
///centralized state in MainContext
///Then I can just use getInitialProps on each page to only get information 
//if/ when i need it to avoid unnuecessary re renders
//useMemo to only load components I need to load
//back button not hydrating
//flash on logout/login;
//resize images, because width and height are expensive
///work out font
//integrate cloudinary


//admin account has permissions to see site information
//orders placed, total money raised, most popular products, average purchase amount
//admin account can create new products => multer
//add new options into navbar for admin ^^^^^^^^^^^^^