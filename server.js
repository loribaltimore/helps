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
        resave: false,
        saveUninitialized: true,
        name: 'helpsSession',
        secret: 'thisIsASecret',
        cookie: {
            httpOnly: true,
            maxAge: 300000
        }
    }));
    server.use(flash());
    server.use(cors());
    server.use(passport.initialize());
    passport.use(new LocalStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());


    //Custom Middleware
    let errHandler = require('./middleware/errorHandling');
    let { getLanding } = require('./controllers/landing');
    let { getCharitiesByCause } = require('./controllers/charity');
    let { signupPost } = require('./SignUp/controllers/signupController');
    let { loginPost } = require('./Login/controllers/loginControllers');
    let getSession = require('./functions/getSession');

    //Routes
    server.get('/', async (req, res, next) => {
        console.log(req.session);
        return app.render(req, res, '/landing', {});
    });

//API Routes
    server.get('/charities/:cause', getCharitiesByCause);
    server.get('/session', async (req, res, next) => {
        res.send(req.session);
    });

//login Routes
    server.get('/login', async (req, res, next) => {
        return app.render(req, res, '/login', {});
    });
    server.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), loginPost);

//Signup Routes
    server.post('/signup', signupPost);

    //Error Handling Middleware
    server.use(errHandler);



    //Nextjs Middleware for handling requests
    server.all('*', async (req, res, next) => {
        await handle(req, res);
});

});
