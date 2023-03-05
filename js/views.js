const Home = {
	view:()=>{
		return [
			m(NavBar),
			m(Main),
			m(Footer)
		]
	}
}

const ContactUs = {
	view:()=>{
		return m("div","contact-us")
	}
}

const About = {
	view:()=>{
		return m("div","about")
	}
}

const Auth = {
	view:()=>{
		return [
			m("#login-bg",[
				m(".container[style='transform: translate(0,20%);z-index:9;position:relative']",[
					m("h2.title","RideRate"),
				m(".panel.img-rounded.p-4.bg-transparent",[
					m("p.text-white.py-3.text-center","Log in to RideRate"),
					m("div.form-group", 
  				   //m("div.input-group",[m("input.form-control[type='text'][value='Group Addon']"),m("span.input-group-addon",  m("i.fa.fa-user"))]),
                      m("input.form-control.mb-3[type='text'][value=''][placeholder='Email/Phone Number']"),
                      m("input.form-control.mb-3[type='password'][value=''][placeholder='Password']")
                    ),
                    m("button.btn.btn-primary.btn-fill.w-100.strong","Log in"),
                    m("small.text-center.mt-3",m("a[href='#']","Forgot Password?")),
                    m(".split", m("span.or", "or")),
                    m("button.btn.btn-success.btn-fill.w-100.strong","Create new Account"),          
				  ])
				]),
				m(".bg-overlay")
			])
		]
	}
}

m.route.prefix= "#"

m.route(document.body, "/", {
    "/": Home,
    "/contact-us": ContactUs,
    "/about": About,
    "/auth": Auth
})