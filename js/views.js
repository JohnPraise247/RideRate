/* ================================
 * ALL VIEWS
 * ================================ */


const Home = {
	oncreate:() =>{ 
		$("body").removeClass("bg");
		AOS.init({ once: true })
     // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   
     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
     // offset: 120, // offset (in px) from the original trigger point
     // delay: 0, // values from 0 to 3000, with step 50ms
     // duration: 400, // values from 0 to 3000, with step 50ms
     // easing: 'ease', // default easing for AOS animations
      // whether animation should happen only once - while scrolling down
     // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	},
	view:() =>{
		return [
			m(NavBar),
			m(Main),
			m(Footer)
		]
	}
}

const CheckRates = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "Check rates", sub: "Get latest Price Updates for Your Favorite Transportation with RideRate"}),
            m(CheckRatesMain),
            m(Footer)
        ]
    }
}

const ContactUs = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "Contact Us"}),
            /*m("section.container[id='contact']",
  [
    m("h2", 
      "Contact"
    ),
    m("p",
      [
        "Calligraphr.com is provided by:",
        m("br"),
        m("br"),
        m("a[href='https://www.maklabu.com']", 
          "Maklabu GmbH"
        ),
        m("br"),
        " Ausserdorf 5",
        m("br"),
        " 7425 Massein",
        m("br"),
        " Switzerland",
        m("br"),
        m("br"),
        m("a[href='mailto:info@calligraphr.com']", 
          "info@calligraphr.com"
        ),
        m("br")
      ]
    )
  ]
)*/
            m(UnderDev),
            m(Footer)
        ]
    }
}

const About = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "About"}),
            m(UnderDev),
            m(Footer)
        ]
    }
}

const PrivacyPolicy = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "Privacy Policy"}),
            m(UnderDev),
            m(Footer)
        ]
    }
}

const Tac = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "Terms & Conditions"}),
            m(UnderDev),
            m(Footer)
        ]
    }
}

const Login = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return m(ContainerAbsolute, {title: "Log in to RideRate"},[
			  	   m("div.form-group", 
      		       //m("div.input-group",[m("input.form-control[type='text'][value='Group Addon']"),m("span.input-group-addon",  m("i.fa.fa-user"))]),
                    m(Input,{type:"text",placeholder:"Username or Phone Number",value: Auth.username,oninput:(e)=>{ 
                    	 Auth.setUsername(e.target.value)
                    	 }}),
                    m(Input,{type:"password",placeholder:"Password",value: Auth.password,oninput:(e)=>{ 
                    	 Auth.setPassword(e.target.value)
                    	 }})
             ),
  	    	   //m("label.checkbox",[ m("input[type='checkbox'][value='remember-me']")," Remember me "]),
			  	   m("button.btn.btn-primary.btn-fill.w-100.strong",{
                           	 disabled: !Auth.canSubmit(),
                              onclick: Auth.login
              },"Log in"),
              m(".text-center.py-2",m("small.text-center.mt-3",m("a[href='#/forgot-pwd']","Forgot Password?"))),
              m(".split", m("span.or", "or")),
              m("button.btn.btn-success.btn-fill.w-100.strong",{onclick:()=> m.route.set("/signup") },"Create new Account")
			  ])			
	}
}

const Signup = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return m(ContainerAbsolute, {title: "Create a new RideRate account"},[
			  	   m(".form-group", 
	    	          m(Input,{type:"text",placeholder:"Username or Phone Number",value: Auth.username,oninput:(e)=>{ 
                      	 Auth.setUsername(e.target.value)
                     }}),
                  m(Input,{type:"tel",placeholder:"Phone Number",value: Auth.phonenumber,oninput:(e)=>{ 
                      	 Auth.setPhonenumber(e.target.value)
                     }}),
                  m(Input,{type:"password",placeholder:"Password",value: Auth.password,oninput:(e)=>{ 
                      	 Auth.setPassword(e.target.value)
                     }}),
	    	          // m("input.form-control.mb-3[type='text'][value=''][placeholder='Username']"),
	    	          // m("input.form-control.mb-3[type='text'][value=''][placeholder='Phone Number']"),
                  //     m("input.form-control.mb-3[type='password'][value=''][placeholder='Password']")
                   ),
                   m("button.btn.btn-primary.btn-fill.w-100.strong",{
                   	onclick:  Auth.signup
                   },"Sign Up"),
                   m(".text-center.py-3",m("small.text-center.mt-3",m("a[href='#/login']","Already have an account?")))
			  ])	
	}
}


const ForgotPwd = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return m(ContainerAbsolute, {title: "Please enter your mobile number to search for your account"},[
			  	   m("div.form-group", 
	    	          m("input.form-control.mb-3[type='text'][value=''][placeholder='Phone Number']")
              ),
              m("button.btn.btn-primary.btn-fill.w-100.strong.mb-3","Search"),
              m("button.btn.btn-transparent-50.w-100.strong",{onclick:()=>{
                  m.route.set("/login")
              }},"Back")
			  ])	
	}
}

const PageNotFound = {
	oncreate:()=>{ $("body").removeClass("bg") },
	view:()=>{
		return [
				m(".container[style='transform: translate(0,29.5%);z-index:9;position:relative']",[
				   m("h1.title","Error 404"),
				   m("h3.title","Page not fond")
				]),
				// m(".bg-overlay")
		]
	}
}

const UnderDev = {
    view:()=>{
      return m(".main",
        m("section", 
          m(".container.py-5", [
          	m(".space-50"),
          	m(".space-50"),
          	m(".space-50"),
          	m("div.wrap-icon[style='color:#898989;font-size:55px']", m("i.bx.bx-wrench")),
          	m("h3.text-center.text-muted", "This page is under development"),
          	m(".space-50"),
          	m(".space-50"),
          	m(".space-50"),
          	m(".space-50")
          ])
        )
     )
  }
}


const Dashboard = {
	oncreate:()=>{
		$("body").removeClass("bg");
		Model.sidebar = document.querySelector(".sidebar");
    Model.sidebarBtn = document.querySelector(".sidebarBtn");

    
    if(m.route.param("urlB") != "edit" || m.route.param("urlB") != "new"){
    	localStorage.clear("location")
    	localStorage.clear("rates")
    	localStorage.clear("vehicles")
    }   
	},
	view:(vnode)=>{
		return [
     m(".sidebar",[
       m(".logo-details",[
          m("i.bx.bx-car"),
          m("span.logo_name", "RideRate")
        ]),
      m("ul.nav-links",[
          m("li.showMenu", 
            m("a"+(m.route.param("urlA") == "dashboard"?".active":"")+"[href='#/u/dashboard']",[
                m("i.bx"+Model.icon.dashboard),
                m("span.links_name", "Dashboard")
              ]
            ),
            m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/dashboard']", "Dashboard")))
          ),
          m("li", m("a"+(m.route.param("urlA") == "location"?".active":"")+"[href='#/u/location']",[
                m("i.bx"+Model.icon.location),
                m("span.links_name", "Locations")
              ]
            ),
            m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/location']", "Location Entry")))
          ),
          m("li", m("a"+(m.route.param("urlA") == "parks"?".active":"")+"[href='#/u/parks']",[
                m("i.bx"+Model.icon.park),
                m("span.links_name", "Parks")
              ]
            ),
            m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/parks']", "Parks")))
          ),
          m("li", m("a"+(m.route.param("urlA") == "rates"?".active":"")+"[href='#/u/rates']",[
                m("i.bx"+Model.icon.rates),
                m("span.links_name", "Rates")
              ]
            ),
           m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/rates']", "Rates Entry")))
          ),
          m("li", m("a"+(m.route.param("urlA") == "vehicles"?".active":"")+"[href='#/u/vehicles']",[
                m("i.bx"+Model.icon.vehicles),
                m("span.links_name", "Vehicles")
              ]
            ),
          m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/u/vehicles]", "Vehicles entry")))
          ),
          // m("li", m("a[href='#']",[
          //       m("i.bx.bx-cog"),
          //       m("span.links_name", "Setting")
          //     ]
          //   )
          // ),
          m("li.log_out", m("a[href='#']",[
                m("i.bx"+Model.icon.logOut),
                m("span.links_name", "Log out")
              ]
            )
          )
        ]),
      m(".bg-overlay")
    ]), 
     m("section.main-section",[
     	  m(Nav),
      	m.route.param("urlA") == "dashboard"?m(SectionDashboard)
       :m.route.param("urlA") == "location"?m(SectionLocation)
       :m.route.param("urlA") == "parks"?m(SectionParks)
       :m.route.param("urlA") == "rates"?m(SectionRates)
       :m.route.param("urlA") == "vehicles"?m(SectionVehicles)
       :m(SectionNotFound)
     ])  
    ]
	}
}

// index.js
// function load(file) {
//     return m.request({
//         method: "GET",
//         url: file,
//         extract: function(xhr) {
//         	// console.log(xhr.responseText)
//         	// var module = {};
//         	// return eval('var module = {};' + xhr.responseText + ';return module.exports;');
//             return Function("var module = {};" + xhr.responseText + ";return module.exports;")
//         }
//     })
// }

// Routes
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
})