const Input = {
  view:(vnode)=>{
    return m("input.form-control.mb-3[type='"+vnode.attrs.type+"'][value=''][placeholder='"+vnode.attrs.placeholder+"']",{
      oninput:(e)=>{
        vnode.attrs.oninput(e)
      },
      value: vnode.attrs.value
   })
 }
}

const Button = {
  view:(vnode)=>{
    return m("button.btn.btn-primary.btn-fill",{ onclick: vnode.attrs.onclick },[ 
              m("i.bx[style='position: relative;top: 2px;']"+vnode.attrs.icon),
              vnode.attrs.name
           ])
  }
}






const NavBar = {
	view:(vnode)=>{
    vnode.state.view = (vnode.attrs.nav == "nav-small"?".nav-small":"")
	  return m("[id='navbar-full']",[
      m(".container", 
        m("nav.navbar.navbar-default.navbar-transparent.navbar-fixed-top[role='navigation']", 
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
                      m("li"+(m.route.get() == "" || m.route.get() == "/"?".active":""), m("a[href='#']", "Home")),
                      m("li"+(m.route.get() == "/about"?".active":""), m("a[href='/about']", "About")),
                      m("li"+(m.route.get() == "/contact-us"?".active":""), m("a[href='/contact-us']", "Contact us"))
                      // m("li", m("a",{onclick:()=>{ window.scrollToAnchor("about")} }, "About")),
                      // m("li", m("a",{onclick:()=>{ window.scrollToAnchor("features")} }, "Features")),
                      // m("li", m("a",{onclick:()=>{ window.scrollToAnchor("contact")} }, "Contact"))
                    ]),
                  m("ul.nav.navbar-nav.navbar-right",[
                      m("li", m("a[href='/login']", "Log in")),
                      m("li", m("a.btn.btn-primary.btn-fill.text-white[href='/signup']", /*m("i.bx.bx-log-in.bx-sm.mr-2[style='position: relative;top: 3px;']"),*/"Sign up"))
                    ])
              ])
          ])
        )
      ),
      m(".background-container"+vnode.state.view,[
        m(".bg-overlay"),
        m(".motto",[ 
              vnode.attrs.nav != "nav-small"?([
                m("h1[data-aos='fade-in'][data-aos-delay='']","Ride Smarter,"),
                m("h3[data-aos='fade-in'][data-aos-delay='400']","Not Harder with ", m("b","RideRate")),
                m(".mt-5",[
                  m("a.btn.btn-primary.btn-fill.m-3[data-aos='zoom-in'][data-aos-delay='500']",{ onclick:()=>{ window.scrollToAnchor("about")}},"Learn more"),
                  // m("a.btn.btn-primary.btn-fill.m-3[href='#features']","Get Started"),
                  m("a.btn.btn-white.m-3[data-aos='zoom-in'][data-aos-delay='700'][href='#/check-rates']","Check Rates")
                ])
              ])
              :([
                m(".container",[ 
                  vnode.attrs.title.indexOf(' ') >= 0? m("h3", vnode.attrs.title.slice(0,vnode.attrs.title.lastIndexOf(" ")), m("b",vnode.attrs.title.slice(vnode.attrs.title.lastIndexOf(" ")))) : m("h3", vnode.attrs.title),
                  vnode.attrs.sub != null? m("h6", vnode.attrs.sub):null
                  ])
               
                // m("h3[data-aos='fade-in'][data-aos-delay='']","Check ", m("b","rates")),
                // m("h3[data-aos='fade-in']","Get latest Price Updates for Your Favorite Transportation with RideRate")
              ])
              // "Get Real-Time Price Updates for Your Favorite Transportation with RideRate"              
            ]),
          m(".img-src"),
          m(".img-src.blur")
        ]
      )
    ])
	}
}


const Main = {
	view:()=>{
	  return m(".main",
      //About Sections
      m("section.section-spacing.section-about", 
        m("#about.container", 
          m(".row.d-flex.align-items-center.justify-content-center",[
              m(".col-sm-6.mr-auto.text-center.mb-5.img-mobile", 
                m("img[data-aos='zoom-in-up'][width=54%][src='./images/mobile_phone.webp']"),
              ),
              m(".col-sm-6.pt-3", 
                m("h3.section-heading[data-aos='fade-up'][data-aos-delay='']", "What we do"),
                // m("h3[style='font-weight:600']", "R i d e R a t e"),
                m("p.desc[data-aos='fade-up'][data-aos-delay='300']","RideRate helps you to automate various scheduling activities of the transport system and optimize the use of premium resources. Concerned authorities can easily use the system to set the cost of each journey.The solution, that we are going to provide you, has been especially designed considering the challenges University students come across. Some of these challenges are inadequate information, resource optimization, and stability. Emphasis has been given to easy-to-use interface. The users need not to be programmers or database experts to benefit from this system."),
                m(".section-btn",
                  m("a.btn.btn-primary[data-aos='zoom-in'][data-aos-delay='400'][href='#']",m("i.bx.bx-bulb.bx-sm.mr-2[style='position: relative;top: 3px;']"), "Learn more")
                )
              )
            ]
          )
        )
      ),




      //Features Sections
      m("section.section-spacing.section-features",
        // m(".bg-overlay-black"),
      m(".container", 
        m("h3.section-heading[data-aos='fade-up'][data-aos-delay='']", "Features"),
        // m(".space-50"),
        m(".mt-5.row",[
           m(".col-sm-4[data-aos='fade-up'][data-aos-delay='100']", 
            m(".space-50"),
             m(".text-center.mb-5",
               [
                 m("div.wrap-icon.icon-primary", m("i.bx.bx-refresh")),
                 m("h4.feature-title", "Real-Time Updates"),
                 m("p.desc", "Get accurate and up-to-date information on transportation fares" )
               ]
             )
           ),
           m(".col-sm-4[data-aos='fade-up'][data-aos-delay='200']", 
            m(".space-50"),
             m(".text-center.mb-5",
               [
                 m("div.wrap-icon.icon-primary",m("i.bx.bx-car")),
                 m("h4.feature-title", "Multiple Transportation Options"),
                 m("p.desc", "Find and compare prices for a variety of transportation options, including taxis, ride-sharing services, public transit, and more.")
               ]
             )
           ),
           m(".col-sm-4[data-aos='fade-up'][data-aos-delay='300']", 
            m(".space-50"),
             m(".text-center.mb-5",
               [
                 m(".wrap-icon.icon-primary", m("i.bx.bx-time")),
                 m("h4.feature-title", "Save Time"),
                 m("p.desc", "Avoid the hassle of manually checking fares by using RideRate to get real-time updates.")
               ]
             )
           )
         ])
        // m(".space-50")
       )
      // m("div.img-abs[style=background-image: url(images/image_4.jpg)]")
      // <div style="background-image: url(&quot;images/bg.jpg&quot;); filter: blur(43.8667px);" class="img-src"></div>
      ),




      //Mobile app download section
      m("section.section-spacing.cta-section", 
        m(".container", 
          m(".row.align-items-center",[
              m(".col-md-6.mr-auto.text-center.mb-5", 
                m("h2[style='font-weight:600'][data-aos='fade-up'][data-aos-delay='']", 
                  "Get our mobile App"
                )
              ),
              m(".col-md-6.text-center.pt-3", 
                m("p",
                  [
                    m("a.btn.btn-fill.btn-black.d-inline-flex.align-items-center.btn-lg.m-3[href='#'][data-aos='zoom-in'][data-aos-delay='100']",
                      [
                        m("i.bx.bxl-apple"),
                        m("span", 
                          "App store"
                        )
                      ]
                    ),
                    m("a.btn.btn-fill.btn-black.d-inline-flex.align-items-center.btn-lg.m-3[href='#'][data-aos='zoom-in'][data-aos-delay='200']",
                      [
                        m("i.bx.bxl-play-store"),
                        m("span", 
                          "Google play"
                        )
                      ]
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
    return m("footer.footer", 
      m("div.container-fluid",[
        m(".menu",
          m("nav", 
           m("ul.d-flex",[
             // m("li.mr-3", m("a[href='#']", " About us ")),
             m("li.mr-3", m("a[href='#/privacy-policy']", " Privacy Policy ")),
             m("span.mr-3"," | "),
             m("li.mr-3", m("a[href='#/tac']", " Terms & Conditions "))
             // m("li.mr-3", m("a[href='#']", " Contact us "))
          ])
         )
        ),
          m("div.copyright",[
          m("span"," © 2023 "),
          m("a[href='/']", "RideRate"),
          m("span",", All Rights Reserved ")
        ]
         )


         
      /*m("div.social-area.pull-right",[
          m("a.btn.btn-social.btn-facebook.btn-simple", m("i.fa.fa-facebook-square")),
          m("a.btn.btn-social.btn-twitter.btn-simple", m("i.fa.fa-twitter")),
          m("a.btn.btn-social.btn-pinterest.btn-simple", m("i.fa.fa-pinterest"))
        ]
      ),*/
      
    ]
  )
)
  }
}