//HomePage
const Home = {
	oncreate:() =>{ $("body").removeClass("bg") },
	view:() =>{
		initViewport();
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
		initViewport()
		return [
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
		initViewport()
		return [
				m(".container[style='transform: translate(0,22%);z-index:9;position:relative']",[
					m("h2.title","RideRate"),
				    m(".panel.img-rounded.p-4.bg-transparent",[
					   m("p.text-white.py-3.text-center","Create a new RideRate account"),
	    	           m("div.form-group", 
	    	              m("input.form-control.mb-3[type='text'][value=''][placeholder='Username']"),
	    	              m("input.form-control.mb-3[type='text'][value=''][placeholder='Phone Number']"),
                          m("input.form-control.mb-3[type='password'][value=''][placeholder='Password']")
                       ),
                       m("button.btn.btn-primary.btn-fill.w-100.strong","Sign Up"),
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
		initViewport()
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
		initViewport()
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
    Model.sidebarBtn = document.querySelector(".bx-menu");
		/*let arrow = document.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
          arrow[i].addEventListener("click", (e)=>{
             let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
             arrowParent.classList.toggle("showMenu");
          });
        }*/     
	},
	view:()=>{
		initViewport()
		return [
           m(".sidebar.close-sidebar",[
              m(".logo-details",[
                  m("i.bx.bx-car"),
                  m("span.logo_name", "RideRate")
                ]),
              m(".bg-overlay"),
              m("ul.nav-links",[
                  m("li",[
                      m("a[href='#/u/dashboard']",[
                          m("i.bx.bx-grid-alt"),
                          m("span.link_name", "Dashboard")
                        ]),
                      m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/dashboard']", "Dashboard")))
                    ]),
                  m("li",[
                      m("a[href='#/u/location']",[
                          m("i.bx.bxs-edit-location"),
                          m("span.link_name", "Location")
                        ]),
                      m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/location']", "Location Entry")))
                    ]),
                  m("li",[
                      m("a[href='#/u/rates']",[
                          m("i.bx.bx-purchase-tag"),
                          m("span.link_name", "Rates")
                        ]),
                      m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/rates']", "Rates")))
                    ]),
                  m("li",[
                      m("a[href='#/u/vehicles']",[
                          m("i.bx.bx-car"),
                          m("span.link_name", "Vehicles")
                        ]),
                      m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/u/vehicles]", "Vehicles entry")))
                    ]),
                  /*m("li",[
                      m("div.iocn-link",[
                          m("a[href='#']",[
                              m("i.bx.bx-collection"),
                              m("span.link_name","Category")
                            ]),
                          m("i.bx.bxs-chevron-down.arrow")
                        ]),
                      m("ul.sub-menu",[
                          m("li",m("a.link_name[href='#']", "Category")),
                          m("li", m("a[href='#']",  "HTML & CSS")),
                          m("li", m("a[href='#']",  "HTML & CSS")),
                          m("li", m("a[href='#']",  "HTML & CSS"))
                        ])
                    ]),*/
                  m("li", m("div.profile-details",[
                        m("div.profile-content", m("img[src='images/profile.jpg'][alt='profileImg']")),
                        m("div.name-job",[
                            m("div.profile_name", Auth.username),
                            m("div.job", "Member")
                          ]),
                        m("i.bx.bx-log-out")
                      ]))
                ])
            ]), 
           m.route.param("name") == "dashboard"?m(SectionDashboard)
           :m.route.param("name") == "location"?m(SectionLocation)
           :m.route.param("name") == "rates"?m(SectionRates)
           :m.route.param("name") == "vehicles"?m(SectionVehicles)
           :m(SectionNotFound)        
       ]
	}
}


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