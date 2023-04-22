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






const NavBar = {
	view:()=>{
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
                      m("li.active", m("a[href='#']", "Home")),
                      m("li", m("a",{onclick:()=>{ window.scrollToAnchor("about")} }, "About")),
                      m("li", m("a",{onclick:()=>{ window.scrollToAnchor("features")} }, "Features")),
                      m("li", m("a",{onclick:()=>{ window.scrollToAnchor("contact")} }, "Contact"))
                      // m("li", m("a[href='#/contact-us']", "Features")),
                      // m("li", m("a[href='#/about']", "Contact")),   
                    ]),
                  m("ul.nav.navbar-nav.navbar-right",[
                      m("li", m("a[href='#/signup']", "Register")),
                      m("li", m("a.btn.btn-primary.btn-fill.text-white[href='#/login']",m("i.bx.bx-log-in.bx-sm.mr-2[style='position: relative;top: 3px;']"), "Log in"))
                    ])
              ])
          ])
        )
      ),
      m(".background-container",[
        m(".bg-overlay"),
        m(".motto",[ 
              m("h1","Ride Smarter,"),
              m("h3","Not Harder with ", m("b","RideRate")),
              m(".mt-5",[
                m("a.btn.btn-primary.btn-fill.m-3",{ onclick:()=>{ window.scrollToAnchor("features") }},"Get Started"),
                // m("a.btn.btn-primary.btn-fill.m-3[href='#features']","Get Started"),
                m("button.btn.btn-white.m-3","Check Rates")
              ])
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
	  return m("#features.main",
      m("section.section-spacing",
      m(".container", 
        m(".d-flex.justify-content-center", 
          m("h2.section-heading", "Save your time using RideRate")
        ),
        m(".mt-5.row",[
           m(".col-md-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='']", 
             m(".text-center",
               [
                 m("div.wrap-icon.icon-1", m("i.bx.bx-refresh")),
                 m("h3.mb-3", "Real-Time Updates"),
                 m("p", "Get accurate and up-to-date information on transportation fares" )
               ]
             )
           ),
           m(".col-md-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='100']", 
             m(".text-center",
               [
                 m("div.wrap-icon.icon-1",m("i.bx.bx-sun")),
                 m("h3.mb-3", "Multiple Transportation Options"),
                 m("p", "Find and compare prices for a variety of transportation options, including taxis, ride-sharing services, public transit, and more.")
               ]
             )
           ),
           m(".col-md-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='200']", 
             m(".text-center",
               [
                 m(".wrap-icon.icon-1", m("i.bx.bx-time")),
                 m("h3.mb-3", "Save Time"),
                 m("p", "Avoid the hassle of manually checking fares by using RideRate to get real-time updates.")
               ]
             )
           )
         ])
       ) 
      ),//Mobile app download section
      m("section.section-spacing.cta-section", 
        m(".container", 
          m(".row.align-items-center",[
              m(".col-md-6.mr-auto.text-center.mb-5", 
                m("h2[style='font-weight:600']", 
                  "Get our mobile App"
                )
              ),
              m(".col-md-6.text-center.pt-3", 
                m("p",
                  [
                    m("a.btn.btn-fill.btn-black.d-inline-flex.align-items-center.btn-lg.m-3[href='#']",
                      [
                        m("i.bx.bxl-apple"),
                        m("span", 
                          "App store"
                        )
                      ]
                    ),
                    m("a.btn.btn-fill.btn-black.d-inline-flex.align-items-center.btn-lg.m-3[href='#']",
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
    return m(".footer", 
      m(".overlayer", 
        m(".grey.text-center.container", 
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












// DASHBOARD
const SectionDashboard = {
  view:()=>{
    return m("section.sections", 
            m("div.section-content",[
                m("i.bx.bx-menu",{onclick:()=>{Model.sidebar.classList.toggle("close-sidebar")}}),
                m("span.text", "Dashboard" )
              ]),
            m(".py-5.px-5",[
              m("h5", "Overview" ),
              m(".row.mb-1",[
                m(".container-fluid.mt-3", 
                  m(".col-sm-6", 
                    m(".panel.panel-default", 
                      m(".panel-body",[
                        m(".d-flex.justify-content-between.align-items-center",[
                          m("div",[
                            m("h3","81"),
                             m(".text-muted-2","Locations")
                            ]),
                          m("div",m("i.bx-icon.bx.bx-current-location.bx-lg.bx-border-circle"))
                        ]),
                        // m("small.text-muted","In Total")
                        ]
                      )
                    )
                  )
                ),
                m(".container-fluid.mt-3", 
                  m(".col-sm-6", 
                    m(".panel.panel-default", 
                      m(".panel-body",[
                        m(".d-flex.justify-content-between.align-items-center",[
                          m("div",[
                            m("h3","120"),
                             m(".text-muted-2","Rates")
                            ]),
                          m("div",m("i.bx-icon.bx.bx-purchase-tag.bx-lg.bx-border-circle"))
                        ]),
                        // m("small.text-muted","In Total")
                        ]
                      )
                    )
                  )
                )
              ]),
              m(".row.mb-1",[
                m(".container-fluid.mt-3", 
                  m(".col-sm-6", 
                    m(".panel.panel-default", 
                      m(".panel-body",[
                        m(".d-flex.justify-content-between.align-items-center",[
                          m("div",[
                            m("h3","22"),
                             m(".text-muted-2","Vehicles")
                            ]),
                          m("div",m("i.bx-icon.bx.bx-car.bx-lg.bx-border-circle"))
                        ]),
                        // m("small.text-muted","In Total")
                        ]
                      )
                    )
                  )
                ),
                m(".container-fluid.mt-3", 
                  m(".col-sm-6", 
                    m(".panel.panel-default", 
                      m(".panel-body",[
                        m(".d-flex.justify-content-between.align-items-center",[
                          m("div",[
                            m("h3","8"),
                             m(".text-muted-2","Users")
                            ]),
                          m("div",m("i.bx-icon.bx.bx-user.bx-lg.bx-border-circle"))
                        ]),
                        // m("small.text-muted","In Total")
                        ]
                      )
                    )
                  )
                )
              ])
              
            ])
            
             
             )
  }
}



// Copyright © Your Website 2021
// Privacy Policy
// ·
// Terms & Conditions



// SECTIONS
const SectionLocation = {
  view:()=>{
    return m("section.sections", 
            m("div.section-content",[
                m("i.bx.bx-menu",{onclick:()=>{Model.sidebar.classList.toggle("close-sidebar")}}),
                m("span.text", "Location Entry" ),
                Model.location.list.length != 0?m("button.btn.btn-primary.btn-fill.ml-auto",{onclick:()=>{
                  Model.addNew()
                }},[m("i.bx.bx-plus[style='position: relative;top: 2px;']"),"Add"])
                :null
              ]),
             Model.location.list.length == 0?m(EmptyState):m(Locations)
             )
  }
}

const SectionRates = {
  view:()=>{
    return m("section.sections", 
            m("div.section-content",[
                m("i.bx.bx-menu",{onclick:()=>{Model.sidebar.classList.toggle("close-sidebar")}}),
                m("span.text", "Rates Entry" ),
                Model.rates.list.length != 0?m("button.btn.btn-primary.btn-fill.ml-auto",{onclick:()=>{
                  Model.addNew()
                }},[m("i.bx.bx-plus[style='position: relative;top: 2px;']"),"Add"])
                :null
              ]),
             Model.rates.list.length == 0?m(EmptyState):m(Rates)
            )
  }
}

const SectionVehicles = {
  view:()=>{
    return m("section.sections", 
             m("div.section-content",[
                m("i.bx.bx-menu",{onclick:()=>{Model.sidebar.classList.toggle("close-sidebar")}}),
                m("span.text", "Vehicles Entry" )
              ]),
             m(EmptyState)
          )
  }
}

const SectionNotFound = {
  view:()=>{
    return m("section.sections", 
            m("div.section-content",[
                m("i.bx.bx-menu"),
                m("span.text", "Error 404" )
              ]),
            m(".empty",[
              m("i.bx.bx-icon.bx-search-alt.bx-lg.bx-border-circle"),
              m("h5.strong.text-muted-2","This requested URL was not found on this server."),
              m("button.btn.btn-primary.btn-fill",{onclick:()=>{
                m.route.set("/u/dashboard")
              }},[m("i.bx.bx-left-arrow-alt[style='position: relative;top: 2px;']"),"Goto Dashboard"])
        ])
            )
  }
}

const EmptyState = {
  view:()=>{
    return m(".empty",[
              m("i.bx.bx-icon."+(m.route.param("name") == "location"?".bxs-edit-location"
                :m.route.param("name") == "rates"?".bx-purchase-tag"
                :m.route.param("name") == "vehicles"?".bx-car"
                :null)+".bx-lg.bx-border-circle"),
              m.route.param("name") == "location"?m("h5.strong.text-muted-2","No location added yet")
              :m.route.param("name") == "rates"?(
                Model.location.list.length == 0?m("h5.strong.text-muted-2",["Add a ",m("i.bx.bxs-edit-location.bx-sm.mr-2"),"location first to proceed"]):m("h5.strong.text-muted-2","No Rates added yet")
              ):m.route.param("name") == "vehicles"?(
                Model.location.list.length == 0?m("h5.strong.text-muted-2",["Add a ",m("i.bx.bxs-edit-location.bx-sm.mr-2"),"location first to proceed"]):m("h5.strong.text-muted-2","No Vehicles added yet")
              )
              :null,
              m.route.param("name") == "rates" || m.route.param("name") == "vehicles"?(
                Model.location.list.length != 0?m("button.btn.btn-primary.btn-fill",{onclick:()=>{Model.addNew()}},[m("i.bx.bx-plus.bx-md[style='position: relative;top: 4px;']"),"Add"])
                :null
              )
              :m("button.btn.btn-primary.btn-fill",{onclick:()=>{Model.addNew()}},[m("i.bx.bx-plus.bx-md[style='position: relative;top: 4px;']"),"Add"]),
        ])
          
  }
}







const Locations = {
  view:()=>{
    return m(".px-3",[
      m(".input-group.mt-5",[
        m("input.form-control.bg-white[type='text'][placeholder='Search Locations']"),
        m("span.input-group-addon",m("i.bx.bx-search-alt"))
      ]),
      m(".list-group.mt-5",[
        Model.location.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{onclick:()=>{
            Model.edit(i[0],i[1])
          }},[
                    m(".name-icon",i[0].charAt(0).toUpperCase() + i[0].slice(i[0].lastIndexOf("to")+2).charAt(1).toUpperCase() ),
                    // m("img.img-circle.mr-3[src='./images/tb.png'][width=36][height=36]"),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading",i[0]),
                       m("small.text-muted", i[1])
                    ]),
                    m("small.text-muted",(Model.rates.list.length > 0?(
                      i[0] == Model.rates.list[0][0]?Model.rates.list[0][1]:"???"
                      ):("")))
                  ])
        })

      ])
    ])
  }
}


const Rates = {
  view:()=>{
    return m(".px-3",[
      m(".input-group.mt-5",[
        m("input.form-control.bg-white[type='text'][placeholder='Search Rates']"),
        m("span.input-group-addon",m("i.bx.bx-search-alt"))
      ]),
      m(".list-group.mt-5",[
        Model.rates.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",[
                    m(".name-icon",i[0].charAt(0).toUpperCase() + i[0].slice(i[0].lastIndexOf("to")+2).charAt(1).toUpperCase() ),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading",i[0]),
                       m("small.text-muted", i[1])
                    ])  
                  ])
        })


  ]
)


    ])
  }
}
