import { Auth } from './model';
import './bs';
// import 'boxicons'//failed to work

import Admin from './views/admin/admin';
import AdminLogin from './views/admin/login';
import Home from './views/home/home';
import CheckRates from './views/check-rates/check-rates';
import About from './views/about/about';
import ContactUs from './views/contact-us/contact-us';
import Tac from './views/tac/tac';
import PrivacyPolicy from './views/privacy-policy/privacy-policy';
import CookiePolicy from './views/cookie-policy/cookie-policy';
import Login from './views/login/login';
import Signup from './views/signup/signup';
import ForgotPwd from './views/forgot-pwd/forgot-pwd';
import Error404 from './views/404/404';
import { Dashboard } from './views/dashboard/dashboard';



//Todo 
//wow, you can preload image
//<link rel="preload" href="/images/testimonials/malak-profile.webp" as="image" type="image/webp">

//fix li hover for nav
//fix route to redirect /u/ to /u/dashbaord
//add auto suggest on input
//no results found for location search...
//add scroll to top btn    ---> https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//style upload btn
//work on cookie-policy page    
//Cookie add analytics consent   https://www.cookieyes.com/?utm_source=CYB&utm_medium=gdpr+cookie+consent+examples&utm_campaign=l1
//add onbeforeunload="return myFunction()"  useful for when values are inputted without changes
//Fix navbar issues onback-->  
//Add reCAPTCHA
//use gsdk validation class
//create custom scrollbar for admin dashboard

//admmin image <a href="https://www.freepik.com/free-vector/client-database-analysis-marketing-strategy-crm-planning-target-audience-research-expert-analyst-studying-end-user-preferences-profiles-vector-isolated-concept-metaphor-illustration_12083345.htm#query=admin%20illustration&position=11&from_view=search&track=ais">Image by vectorjuice</a> on Freepik



// import { Notifications } from './notification';
// import '../public/css/bs.css';
// import '../public/css/colors.css';
// import '../public/css/dashboard.css';
// import '../public/css/gsdk.css';
// import '../public/css/icon.css';
// import '../public/css/index.css';
// import '../public/css/rates.css';
// import '../public/css/sidebar.css';
// import '../public/css/signin.css';

// index.js
// function load(file) {
//     return m.request({
//         method: "GET",
//         url: file,
//         extract: function(xhr) {
//          // console.log(xhr.responseText)
//          // var module = {};
//          // return eval('var module = {};' + xhr.responseText + ';return module.exports;');
//             return Function("var module = {};" + xhr.responseText + ";return module.exports;")
//         }
//     })
// }
// const signin = getCookie("signin");
// (signin == null || signin == "") ? Auth.signin = false : Auth.signin = true

let pbExists = localStorage.getItem("pocketbase_auth")
pbExists == null ? Auth.signin = false : Auth.signin = true
// pb.authStore.clear();



m.route.prefix = '#'
m.route(document.body, "/", {
    "/": Home,
    "/check-rates": CheckRates,
    "/contact-us": ContactUs,
    "/about": About,
    "/privacy-policy": PrivacyPolicy,
    "/cookie-policy": CookiePolicy,
    "/tac": Tac,
    "/login": Login,
    "/signup": Signup,
    "/forgot-pwd": ForgotPwd,
    // "/load": {
    //     onmatch: function() {
    //         return load("js/load.js")
    // $.getScript
    //     },
    // },
    "/u/:urlA": {
        onmatch: function() {
            return Auth.signin ? Dashboard : Login
        }
    },
    "/u/:urlA/:urlB": {
        onmatch: function() {
            return Auth.signin ? Dashboard : Login
        }
    },
    "/u:404...": {
        onmatch: function() {
            return Auth.signin ? Dashboard : Login
        }
    },
    "/admin/:urlA": {
        onmatch: function() {
            return Auth.adminSignin ? Admin : AdminLogin
        }
    },
    "/admin/:urlA/:urlB": {
        onmatch: function() {
            return Auth.adminSignin ? Admin : AdminLogin
        }
    },
    "/admin:404...": {
        onmatch: function() {
            return Auth.adminSignin ? Admin : AdminLogin
        }
    },
    "/:404...": Error404
        // onmatch: function() {
        //         if (!localStorage.getItem("auth-token")) m.route.set("/login")
        //         else return Home
        //     }
});

// setTimeout(()=>{
//   if(!navigator.onLine) document.write("Refresh page")
// },0)

// try {
//   fs.writeFileSync('build/bundle.min.css', coutput.styles);
//   console.log("CSS files has been minified");
// } catch (err) {
//   console.error(err);
// }