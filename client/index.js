// Babel has deprecated @babel/polyfill, and the following two imports are used for polyfills instead.
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import m from 'mithril';
import { Auth, Model } from './model';
import './components';
import './dashboard';
import  './bs';
import { Home, 
         CheckRates, 
         ContactUs, 
         About, 
         PrivacyPolicy, 
         Tac, 
         Login, 
         Signup, 
         ForgotPwd,
         Dashboard,
         PageNotFound
       } from './views';
// import '../public/css/bs.css';
// import '../public/css/colors.css';
// import '../public/css/dashboard.css';
// import '../public/css/gsdk.css';
// import '../public/css/icon.css';
// import '../public/css/index.css';
// import '../public/css/rates.css';
// import '../public/css/sidebar.css';
// import '../public/css/signin.css';


m.route.prefix = '#'
m.route(document.body, "/", {
    "/": Home,
    "/check-rates": CheckRates,
    "/contact-us": ContactUs,
    "/about": About,
    "/privacy-policy": PrivacyPolicy,
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
    "/u/:urlA": {onmatch: function() {
          return Auth.username != "" ? Dashboard : Login
        }},
    "/u/:urlA/:urlB": {onmatch: function() {
          return Auth.username != "" ? Dashboard : Login
        }},
    "/u:404...": {onmatch: function() {
          return Auth.username != "" ? Dashboard : Login
        }},
    "/:404...": PageNotFound
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