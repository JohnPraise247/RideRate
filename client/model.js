/* ================================
 * VARIABLES & FUNCTIONS
 * ================================ */
import m from 'mithril';

 //Todo 

//fix li hover for nav
//fix route to redirect /u/ to /u/dashbaord
//add auto suggest on input
//no results found for location search...
//add scroll to top btn    ---> https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//style upload btn

// export function Main({ attrs }) {

export var Auth = {
    username: "JohnDoe",
    phonenumber: "",
    password: "12341234",
    setUsername: function(value) {
        Auth.username = value
    },
    setPhonenumber: function(value) {
        Auth.phonenumber = value
    },
    setPassword: function(value) {
        Auth.password = value
    },
    canSubmit: function() {
        return Auth.username.trim() !== "" && Auth.password.trim() !== ""
    },
    login: function() {
        //make request
        m.route.set('/u/dashboard')
        // setTimeout("")
      //   fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => response.json())
      // .then(json => console.log(json))

        // m.request({
        //     method: "GET",
        //     url: "http://localhost:3000/api/users",
        //     // url: "/api/v1/auth",
        //     params: {username: Auth.username, password: Auth.password}
        //     // body: {name: "test"}
        // }).then(function(data) {
        //     // xc=data
        //     console.log(data)
        //     // localStorage.setItem("auth-token", data.token)
        //     // m.route.set("/secret")
        // }).catch(function(e) {
        //         console.log(e.message)
        //     })
    },signup: function() {
        m.request({
            method: "POST",
            url: "http://localhost:3000/users",
            params: {username: Auth.username, phonenumber: Auth.phonenumber, password: Auth.password}
        }).then(function(data) {
            console.log(data)
            // localStorage.setItem("auth-token", data.token)
            // m.route.set("/secret")
        }).catch(function(e) {
                console.log(e.message)
            })
    }
}

export var Model ={
    anchor:"",//scrollToAnchor
    transparent:true,
    sidebar:"",
    sidebarBtn:"",
    // colorIndex:-1,//controls how colors are picked
    // colorClasses:[".icon-blue",".icon-green",".icon-yellow",".icon-red"],
    icon: {
        dashboard: ".bx-grid-alt",
        location: ".bx-trip",//current-location
        park: ".bxs-car-garage",
        rates: ".bx-dollar-circle",
        vehicles: ".bx-car",
        user: ".bx-user",
        searchAlt: ".bx-search-alt",
        leftArrowAlt: ".bx-left-arrow-alt",
        plus: ".bx-plus",
        logOut: ".bx-log-out",
    },
    locations:{
        list:[
          { from: "Oye/Ikole", to: "Lagos", desc: "No Description" },
          { from: "Oye/Ikole", to: "Ogun", desc: "No Description" },
          { from: "Oye/Ikole", to: "Ondo", desc: "No Description" },
          { from: "Oye/Ikole", to: "Abuja", desc: "No Description" },
          { from: "Oye/Ikole", to: "Kogi", desc: "No Description" },
          { from: "Oye/Ikole", to: "Oyo", desc: "No Description" },
          { from: "Oye/Ikole", to: "Edo", desc: "No Description" }
        ]
        // list:[]// list:[["Oye to Ikole","1.5 Hours Journey"],["Ado Ekiti to Ilorin","Description . . ."]],
    },
    parks:{
        list:[
          { parkname: "Shell", location: "Ikole", desc: "No Description" }
        ]
    },
    rates:{
        list:[]
    },
    vehicles:{
        list:[]
    },
    addNew:()=>{
        if(m.route.param("urlA") == "location"){
           m.route.set("/u/location/new")
        }else if(m.route.param("urlA") == "parks"){
           m.route.set("/u/parks/new")
        }else if(m.route.param("urlA") == "rates"){
           m.route.set("/u/rates/new")
        }else if(m.route.param("urlA") == "vehicles"){
         m.route.set("/u/vehicles/new")
        }
    },
    edit:(a,b,desc)=>{
        if(m.route.param("urlA") == "location"){
            Model.locations.list.map((e)=>{
                if(e.from == a && e.to == b){
                    localStorage.setItem("location",JSON.stringify({
                        from: e.from, 
                        to: e.to, 
                        desc: e.desc
                    }))
                    m.route.set("/u/location/edit",{from:e.from, to: e.to})
                }
            })
        }else if(m.route.param("urlA") == "rates"){
            Model.rates.list.map((e)=>{
                if(e.price1 == a && e.price2 == b){
                    localStorage.setItem("rates",JSON.stringify({
                        price1: e.price1, 
                        price2: e.price2, 
                        location: e.location
                    }))
                    m.route.set("/u/rates/edit",{location: e.location, price1: e.price1, price2: e.price2})
                }
            })
        }else if(m.route.param("urlA") == "vehicles"){
            Model.vehicles.list.map((e)=>{
                if(e.name == a && e.park == b){
                    localStorage.setItem("vehicles",JSON.stringify({
                        name: e.name, 
                        park: e.park
                    }))
                    m.route.set("/u/vehicles/edit",{name:e.name, park: e.park})
                }
            })
        }
    },
    /*setIconColor:()=>{
        // Model.colorIndex++;
        // if(j > 3) j = 0
        // return Model.colorClasses[j]
        Model.colorIndex++;
        if(Model.colorIndex > 3) Model.colorIndex = 0
        return Model.colorClasses[Model.colorIndex]
    },*/
    closeSidebar:()=>{
        window.innerWidth < 769?(Model.sidebar.classList.remove("active"),(Model.sidebar.classList.contains("active")?Model.sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right"):Model.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu"))
                ):null
    }
}


// Navbar scroll
$(document).scroll(function() {
    let path = m.route.get();
    let pathArray1 =  path == "/about" || path == "/contact-us" || path == "/privacy-policy" || path == "/tac";
    let pathArray2 =  pathArray1 || path == "/check-rates";
    let value = 0;
    let oVal = null;

    (pathArray2)?oVal = ($(window).scrollTop() / 30) : oVal = ($(window).scrollTop() / 270)
    $(".blur").css("opacity", oVal);   

    (path == "/check-rates")? value = 60 : (pathArray1)? value = 50 : value = 630

    if( $(this).scrollTop() > value ) {
        if(Model.transparent) { Model.transparent = false; $('nav[role="navigation"]').removeClass('navbar-transparent') }
    }else{
        if(!Model.transparent) { Model.transparent = true; $('nav[role="navigation"]').addClass('navbar-transparent') }
    }
});

export const scrollToAnchor = ( anchorName ) =>{
    let is = (el)=>{return el !== undefined && el !== null};
    let targetEl = is(Model.anchor) ? document.querySelector("div[id='"+anchorName+"']") : document.body;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let target = is(targetEl) ? targetEl.getBoundingClientRect().top : 0;
    window.scroll({
        top: target + scrollTop - 70,
        left: 0,
        behavior: "smooth"
    });
}

window.addEventListener('hashchange', function () {
    window.scrollTo(0,0);
});






// }

// onback key
// $(document).ready(function($) {
//   if (window.history && window.history.pushState) {
//     $(window).on('popstate', function() {

//     });
//   }
// });













// Model.hideComment(comment).then(m.redraw)
// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })

//                 Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool',
//   cancelButton: '...'
// })