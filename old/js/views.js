const Home = {
	view:()=>{
		return [
			m(NavBar),
			m(PageHeader)
			]
	}
}

const ContactUs = {
	view:()=>{
		return m("div","hi")
	}
}

const About = {
	view:()=>{
		return m("div","hi")
	}
}

const Auth = {
	view:()=>{
		return m("div","hi")
	}
}


m.route(document.body, "/", {
    "/": Home,
    "/contact-us": ContactUs,
    "/about": About,
    "/auth": Auth
})