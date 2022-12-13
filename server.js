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
const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler();

app.prepare().then(() => {
    //Express Connection
    let express = require('express');
    let server = express();
    server.listen(3000, () => {
        console.log('Server is Live');
    });
    //Database Connection
    let mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/helps')
        .then(console.log('Database is Live')).catch(err => console.log(err));
    
    //Required Documents and Resources
    let User = require('./models/userSchema');
    let Product = require('./models/productSchema');
    
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
        charityByTag, charityRecommended } = require('./Explore/controllers/charityControllers');
    let charityByName = require('./Explore/functions/charityByName');
    let { signupPost } = require('./SignUp/controllers/signupController');
    let { loginPost, logout } = require('./Login/controllers/loginControllers');
    let getSession = require('./functions/getSession');
    let { sessionGet, sessionPost } = require('./controllers/sessionControllers');
    let productsGet = require('./middleware/productsGet');
    let {signupValidators, signupValidatorHandler} = require('./SignUp/middleware/signupValidate');

    //Routes
    server.get('/', async (req, res, next) => {
        return app.render(req, res, '/landing', {});
    });

    server.get('/home', async (req, res, next) => {
        app.render(req, res, '/homePage', {});
    })

    server.get('/explore', async (req, res, next) => {
        app.render(req, res, '/userExplore', {});
    });

    server.get('/recommended', async (req, res, next) => {
        app.render(req, res, '/userRecommended', {});
    });

    //API Routes
    server.get('/explore/charities/:cause', charityByCause);
    server.post('/explore/charities/like', likeCharity);
    server.get('/products', productsGet);
    server.get('/charities/recommended', charityRecommended);

    // server.get('/charities/:charityName', async (req, res, next) => {
    //     await charityByName(req, res, next);
    //     app.render(req, res, '/charityPage', {});
    // });

    server.get('/session', sessionGet);
    server.post('/session', sessionPost);

    //login Routes
    server.get('/login', async (req, res, next) => {
        app.render(req, res, '/userLogin', {});
    });
    server.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), loginPost);
    server.get('/logout', logout);

    //Signup Routes
    server.post('/signup', signupValidators, signupValidatorHandler, signupPost);
   


    //Error Handling Middleware
    server.use(errHandler);



    //Nextjs Middleware for handling requests
    server.all('*', async (req, res, next) => {
        await handle(req, res);
});

});

//configure recommended; Still have to get relavent data from charity API

//reconfigure MainContext, so useEffect doesn't have to happen 3 times on load
//Make sure flash is working correctly and currentUser in main context as well
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