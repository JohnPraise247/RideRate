const NavBar = {
	view:()=>{
	  return m("[id='navbar-full']",[
      m(".container", 
        m("nav.navbar.navbar-ct-blue.navbar-transparent.navbar-fixed-top[role='navigation']", 
          m(".container",[
              m(".navbar-header",[
                  m("button.navbar-toggle[type='button'][data-toggle='collapse'][data-target='#navbar-collapse']",[
                      m("span.sr-only","Toggle navigation"),
                      m("span.icon-bar"),
                      m("span.icon-bar"),
                      m("span.icon-bar")
                    ]),
                  m("a.navbar-brand[href='#']", "RideRate")
              ]),
              m(".collapse.navbar-collapse[id='navbar-collapse']",[
                  m("ul.nav.navbar-nav",[
                      m("li.active", m("a[href='#']", "Home")),
                      m("li", m("a[href='/contact-us']", "Contact")),
                      m("li", m("a[href='/about']", "About")),   
                    ]),
                  m("ul.nav.navbar-nav.navbar-right",[
                      // m("li", m("a[href='/reg']", "Register")),
                      m("li", m("a.btn.btn-round.btn-info.btn-fill[href='#/auth']", "Sign in"))
                    ])
              ])
          ])
        )
      ),
      m(".background-container",[
        m(".bg-overlay"),
        m(".motto",[ 
              m("h1","Ride Smarter"),
              m("h3","Not Harder with ", m("b","RideRate"))
              // "Get Real-Time Price Updates for Your Favorite Transportation with RideRate"
            ]),
          m(".img-src", {"style":{"background-image":"url('images/bg.jpg')"}})
        ]
      )
    ])
	}
}


const Main = {
	view:()=>{
	  return m("div.main", 
      m("section.section",
      m(".container.tim-container", 
        m(".d-flex.justify-content-center", 
          m("h2.section-heading", "Save your time using RideRate")
        ),
        m("div.row",
  [
    m(".col-md-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='']", 
      m("div.feature-1.text-center",
        [
          m("div.wrap-icon.icon-1", 
            m("i.bi.bi-people")
          ),
          m("h3.mb-3", 
            "Real-Time Updates"
          ),
          m("p", 
            "Get accurate and up-to-date information on transportation fares"
          )
        ]
      )
    ),
    m(".col-md-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='100']", 
      m("div.feature-1.text-center",
        [
          m("div.wrap-icon.icon-1", 
            m("i.bi.bi-brightness-high")
          ),
          m("h3.mb-3", 
            "Multiple Transportation Options"
          ),
          m("p", 
            "Find and compare prices for a variety of transportation options, including taxis, ride-sharing services, public transit, and more."
          )
        ]
      )
    ),
    m(".col-md-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='200']", 
      m("div.feature-1.text-center",
        [
          m("div.wrap-icon.icon-1", 
            m("i.bi.bi-bar-chart")
          ),
          m("h3.mb-3", 
            "Save Time"
          ),
          m("p", 
            "Avoid the hassle of manually checking fares by using RideRate to get real-time updates."
          )
        ]
      )
    )
  ]
)

       ) 
      )
    )
	}
}




const Footer = {
  view:()=>{
    return m("div.footer", 
      m("div.overlayer", 
        m("div.container", 
          m("div.row", 
            m("div.credits",
              [
                " © Copyright RideRate. All Rights Reserved "
                // m("i.fa.fa-heart.heart[alt='love']"),
                // " for a better web. "
              ]
            )
          )
        )
      )
    )
  }
}