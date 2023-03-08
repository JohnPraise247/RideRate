const Input = {
  view:(vnode)=>{
    return m("input.form-control.mb-3[type='"+vnode.attrs.type+"'][value=''][placeholder='"+vnode.attrs.placeholder+"']",{
      oninput:(e)=>{
        // Auth.setUsername(e.target.value)
        vnode.attrs.oninput(e)
    }
    ,value: vnode.attrs.value
  })
    // return m("input.form-control.mb-3[type='"+vnode.attrs.type+"'][value='"+vnode.attrs.value+"'][placeholder='"+vnode.attrs.placeholder+"']")
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
                      m("li", m("a[href='#/contact-us']", "Contact")),
                      m("li", m("a[href='#/about']", "About")),   
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
                m("span.text", "Location" ),
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
                m("span.text", "Rates" )
              ]),
             m(EmptyState))
  }
}

const SectionVehicles = {
  view:()=>{
    return m("section.sections", 
             m("div.section-content",[
                m("i.bx.bx-menu",{onclick:()=>{Model.sidebar.classList.toggle("close-sidebar")}}),
                m("span.text", "Vehicles entry" )
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







const Locations ={
  view:()=>{
    return m(".px-3",[
      m(".input-group.mt-5",[
        m("input.form-control.bg-white[type='text'][placeholder='Search Locations']"),
        m("span.input-group-addon",m("i.bx.bx-search-alt"))
      ]),


      m(".list-group.mt-5",[
        Model.location.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",[
                    m("img.img-circle.mr-3[src='./images/tb.png'][width=36][height=36]"),
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
