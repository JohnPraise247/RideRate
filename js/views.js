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
	oncreate:()=>{
		$("body").css({
			"background":"url('./images/yura-forrat.jpg')",
			"background-repeat":"no-repeat",
            "background-size":"cover",
            "background-position": "center center"
		})
	},
	view:()=>{
		return [
			m(".container",[
				m(".panel.img-rounded.p-4.bg-white",[
					m("h3","Sign In"),
					m("div.form-group", 
                      m("input.form-control.mb-3[type='text'][value=''][placeholder='Email/Phone Number']"),
                      m("input.form-control.mb-3[type='password'][value=''][placeholder='Password']")
                    ),
                    m("button.btn.btn-info.btn-fill","Login in")
				])
				
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