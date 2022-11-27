//Use .env while in project in dev
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

//Require and Configure Nextjs
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
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
    mongoose.connect('mongodb://localhost:27017/helps')
        .then(console.log('Database is Live')).catch(err => console.log(err));
    
    //Required Documents and Resources
    let User = require('./models/userSchema');
    
    //Required Packages
    let bodyParser = require('body-parser');
    let cookieParser = require('cookie-parser');
    let methodOverride = require('method-override');
    let session = require('express-session');
    let flash = require('connect-flash');
    let cors = require('cors');
    let passport = require('passport');
    let LocalStrategy = require('passport-local');

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
    server.use(passport.initialize());
    server.use(passport.session());

    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());


    //Custom Middleware
    let errHandler = require('./middleware/errorHandling');
    let { getLanding } = require('./controllers/landing');
    let { charityByCause } = require('./Explore/controllers/charityControllers');
    let charityByName = require('./Explore/functions/charityByName');
    let { signupPost } = require('./SignUp/controllers/signupController');
    let { loginPost, logout} = require('./Login/controllers/loginControllers');
    let getSession = require('./functions/getSession');

    //Routes
    server.get('/', async (req, res, next) => {
        console.log('THIS IS SESSION ON LOADING LANDING');
        req.session.test = 'IM HERE'
        console.log(req.session);
        return app.render(req, res, '/landing', {});
    });

    server.get('/explore', async (req, res, next) => {
        app.render(req, res, '/userExplore', {});
    });

//API Routes
    server.get('/explore/charities/:cause', charityByCause);

    // server.get('/charities/:charityName', async (req, res, next) => {
    //     await charityByName(req, res, next);
    //     app.render(req, res, '/charityPage', {});
    // });

    server.get('/session', async (req, res, next) => {
        console.log('THIS IS THE SESSION SERVER SIDE');
        console.log(req.session);
        res.send({ flash: req.session.flash, user: req.user });
    });

//login Routes
    server.get('/login', async (req, res, next) => {
      app.render(req, res, '/userLogin', {});
    });
    server.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), loginPost);
    server.get('/logout', logout);

//Signup Routes
    server.post('/signup', signupPost);


    //Error Handling Middleware
    server.use(errHandler);



    //Nextjs Middleware for handling requests
    server.all('*', async (req, res, next) => {
        await handle(req, res);
});

});


//make each cause request a request for only the amount you need to make it faster
//set up charity page with larger explanation of charity => allow add/heart/spread
///useRef for currentUser and flash / server related info instead of
///centralized state in MainContext
///Then I can just use getInitialProps on each page to only get information 
//if/ when i need it to avoid unnuecessary re renders
//useMemo to only load components I need to load