//HomePage
const Home = {
	oncreate:() =>{ $("body").removeClass("bg") },
	view:() =>{
		return [
			m(NavBar),
			m(Main),
			m(Footer)
		]
	}
}

const Login = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return [
				// m(".container[style='transform: translate(-50%, -50%);position: absolute;top: 50%;left: 50%;']",[
				m(".container[style='transform: translate(0,20%);z-index:9;position:relative']",[
					m("h2.title","RideRate"),
				    m(".panel.img-rounded.p-4.bg-transparent",[
					   m("p.text-white.py-3.text-center","Log in to RideRate"),
	    	           m("div.form-group", 
      		             //m("div.input-group",[m("input.form-control[type='text'][value='Group Addon']"),m("span.input-group-addon",  m("i.fa.fa-user"))]),
                          m(Input,{type:"text",placeholder:"Username or Phone Number",value: Auth.username,oninput:(e)=>{ 
                          	 Auth.setUsername(e.target.value)
                          	 }}),
                          m(Input,{type:"password",placeholder:"Password",value: Auth.password,oninput:(e)=>{ 
                          	 Auth.setPassword(e.target.value)
                          	 }})
                       ),
                       m("button.btn.btn-primary.btn-fill.w-100.strong",{
                        	 disabled: !Auth.canSubmit(),
                           onclick: Auth.login
                       },"Log in"),
                       m(".text-center.py-2",m("small.text-center.mt-3",m("a[href='#/forgot-pwd']","Forgot Password?"))),
                       m(".split", m("span.or", "or")),
                       m("button.btn.btn-success.btn-fill.w-100.strong",{onclick:()=>{
                          m.route.set("/signup")
                       }},"Create new Account")
				  ])
				]),
				m(".bg-overlay")
		]
	}
}

const Signup = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return [
				m(".container[style='transform: translate(0,22%);z-index:9;position:relative']",[
					m("h2.title","RideRate"),
				    m(".panel.img-rounded.p-4.bg-transparent",[
					   m("p.text-white.py-3.text-center","Create a new RideRate account"),
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
				]),
				m(".bg-overlay")
			]
	}
}


const ForgotPwd = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return [
			m("#bg",[
				m(".container[style='transform: translate(0,29.5%);z-index:9;position:relative']",[
				   m("h2.title","RideRate"),
				   m(".panel.img-rounded.p-4.bg-transparent",[
					  m("p.text-white.py-3.text-center","Please enter your mobile number to search for your account"),
	    	          m("div.form-group", 
	    	              m("input.form-control.mb-3[type='text'][value=''][placeholder='Phone Number']")
                      ),
                      m("button.btn.btn-primary.btn-fill.w-100.strong.mb-3","Search"),
                      m("button.btn.btn-transparent-50.w-100.strong",{onclick:()=>{
                          m.route.set("/login")
                      }},"Back")
				  ])
				]),
				m(".bg-overlay")
			])
		]
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
				m(".bg-overlay")
		]
	}
}


const Dashboard = {
	oncreate:()=>{
		$("body").removeClass("bg");
		Model.sidebar = document.querySelector(".sidebar");
    Model.sidebarBtn = document.querySelector(".sidebarBtn");
		// Model.sidebar = document.querySelector(".sidebar");
    // Model.sidebarBtn = document.querySelector(".bx-menu");

		/*let arrow = document.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
          arrow[i].addEventListener("click", (e)=>{
             let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
             arrowParent.classList.toggle("showMenu");
          });
        }*/     
	},
	view:(vnode)=>{
		return [
     m(".sidebar",[
       m(".logo-details",[
          m("i.bx.bx-car"),
          m("span.logo_name", "RideRate")
        ]),
      m("ul.nav-links",[
          m("li", 
            m("a"+(m.route.param("name") == "dashboard"?".active":"")+"[href='#/u/dashboard']",[
                m("i.bx.bx-grid-alt"),
                m("span.links_name", "Dashboard")
              ]
            ),
            m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/dashboard']", "Dashboard")))
          ),
          m("li", m("a"+(m.route.param("name") == "location"?".active":"")+"[href='#/u/location']",[
                m("i.bx.bx-current-location"),
                m("span.links_name", "Location")
              ]
            )
          ),
          m("li", m("a"+(m.route.param("name") == "rates"?".active":"")+"[href='#/u/rates']",[
                m("i.bx.bx-purchase-tag"),
                m("span.links_name", "Rates")
              ]
            )
          ),
          m("li", m("a"+(m.route.param("name") == "vehicles"?".active":"")+"[href='#/u/vehicles']",[
                m("i.bx.bx-car"),
                m("span.links_name", "Vehicles")
              ]
            )
          ),
          // m("li", m("a[href='#']",[
          //       m("i.bx.bx-cog"),
          //       m("span.links_name", "Setting")
          //     ]
          //   )
          // ),
          m("li.log_out", m("a[href='#']",[
                m("i.bx.bx-log-out"),
                m("span.links_name", "Log out")
              ]
            )
          )
        ]),
      m(".bg-overlay")
    ]), 
     m("section.main-section",[
     	  m(Nav),
      	m.route.param("name") == "dashboard"?m(SectionDashboard)
       :m.route.param("name") == "location"?m(SectionLocation)
       :m.route.param("name") == "rates"?m(SectionRates)
       :m.route.param("name") == "vehicles"?m(SectionVehicles)
       :m(SectionNotFound)
     ])  
    ]
	}
}

// m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/dashboard']", "Dashboard"))),
// m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/location']", "Location Entry"))),
// m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/rates']", "Rates Entry"))),
// m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/u/vehicles]", "Vehicles entry")))


// Routes
m.route.prefix= "#"
m.route(document.body, "/", {
    "/": Home,
    "/login": Login,
    "/signup": Signup,
    "/forgot-pwd": ForgotPwd,
    "/u/:name": {onmatch: function() {
          return Auth.username != "" ? Dashboard : Login
        }},
    "/:404...": PageNotFound
    // onmatch: function() {
    //         if (!localStorage.getItem("auth-token")) m.route.set("/login")
    //         else return Home
    //     }
})