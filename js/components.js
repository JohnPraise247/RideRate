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
                      // m("li.active", m("a[href='#']", "Home")),
                      // m("li", m("a",{onclick:()=>{ window.scrollToAnchor("about")} }, "About")),
                      // m("li", m("a",{onclick:()=>{ window.scrollToAnchor("features")} }, "Features")),
                      // m("li", m("a",{onclick:()=>{ window.scrollToAnchor("contact")} }, "Contact"))
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
                m("a.btn.btn-primary.btn-fill.m-3",{ onclick:()=>{ window.scrollToAnchor("about")}},"Learn more"),
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
	  return m(".main",
      //About Sections
      m("section.section-spacing.section-about", 
        m("#about.container", 
          m(".row",[
              m(".col-sm-6.mr-auto.text-center.mb-5", 
                m("img.d-sm-none[width=55%][src='./images/mobile_phone.png']"),
              ),
              m(".col-sm-6.pt-3", 
                m("h6", "About"),
                m("h3[style='font-weight:600']", "R i d e R a t e"),
                m("p","RideRate helps you to automate various scheduling activities of the transport system and optimize the use of premium resources. Concerned authorities can easily use the system to set the cost of each journey.The solution, that we are going to provide you, has been especially designed considering the challenges University students come across. Some of these challenges are inadequate information, resource optimization, and stability. Emphasis has been given to easy-to-use interface. The users need not to be programmers or database experts to benefit from this system.")
              )
            ]
          )
        )
      ),




      //Features Sections
      m("section.section-spacing.section-features",
        m(".bg-overlay-black"),
      m(".container", 
        m(".d-flex.justify-content-center", 
          m("h3.section-heading", "Save your time using RideRate")
        ),
        m(".mt-5.row",[
           m(".col-sm-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='']", 
             m(".text-center",
               [
                 m("div.wrap-icon.icon-1", m("i.bx.bx-refresh")),
                 m("h3.mb-3.text-white", "Real-Time Updates"),
                 m("p.text-muted", "Get accurate and up-to-date information on transportation fares" )
               ]
             )
           ),
           m(".col-sm-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='100']", 
             m(".text-center",
               [
                 m("div.wrap-icon.icon-1",m("i.bx.bx-sun")),
                 m("h3.mb-3.text-white", "Multiple Transportation Options"),
                 m("p.text-muted", "Find and compare prices for a variety of transportation options, including taxis, ride-sharing services, public transit, and more.")
               ]
             )
           ),
           m(".col-sm-4.aos-init.aos-animate[data-aos='fade-up'][data-aos-delay='200']", 
             m(".text-center",
               [
                 m(".wrap-icon.icon-1", m("i.bx.bx-time")),
                 m("h3.mb-3.text-white", "Save Time"),
                 m("p.text-muted", "Avoid the hassle of manually checking fares by using RideRate to get real-time updates.")
               ]
             )
           )
         ])
       ),
      m("div.img-abs[style=background-image: url(images/image_4.jpg)]")
      // <div style="background-image: url(&quot;images/bg.jpg&quot;); filter: blur(43.8667px);" class="img-src"></div>
      ),




      //Mobile app download section
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
const Nav = {
  view:()=>{
    return m("nav",[
             m(".sidebar-button",[
              m("i.bx.bx-menu.sidebarBtn",{onclick:()=>{
                 Model.sidebar.classList.toggle("active");
                 Model.sidebar.classList.contains("active")?Model.sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right"):Model.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
                }
              }),
              m("span.dashboard", (m.route.param("name") == "dashboard"?"Dashboard"
                                  :m.route.param("name") == "location"?"Location Entry"
                                  :m.route.param("name") == "rates"?"Rates Entry"
                                  :m.route.param("name") == "vehicles"?"Vehicles Entry"
                                  :"Page not found")
              )
            ]),
          // m("div.search-box",
          //   [
          //     m("input[type='text'][placeholder='Search...']"),
          //     m("i.bx.bx-search")
          //   ]
          // ),
          m(".profile-details",m("img[src='images/profile.jpg'][alt='']"))
        ]
      )
  }
}

const SectionDashboard = {
  view:()=>{
    return  [
      // m(Nav),
      // m("div.home-content")
      m(".section-container",[
            m("h5", "Overview"),
              m(".row.mb-1",[
                m(".container-fluid.mt-3", 
                  m(".col-sm-6", 
                    m(".panel.panel-default", 
                      m(".panel-body",[
                        m(".d-flex.justify-content-between.align-items-center",[
                          m("div",[
                            m("h3",Model.location.list.length),
                            // m("h3","81"),
                             m(".text-muted-2","Locations")
                            ]),
                          m("div",m("i.bx-icon.bx.bx-one.bx-current-location.bx-lg.bx-border-circle"))
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
                          m("div",m("i.bx-icon.bx-two.bx.bx-purchase-tag.bx-lg.bx-border-circle"))
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
                          m("div",m("i.bx-icon.bx-three.bx.bx-car.bx-lg.bx-border-circle"))
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
                          m("div",m("i.bx-icon.bx-four.bx.bx-user.bx-lg.bx-border-circle"))
                        ]),
                        // m("small.text-muted","In Total")
                        ]
                      )
                    )
                  )
                )
              ])
            
          ])
    ]
  }
}



// Copyright © Your Website 2021
// Privacy Policy
// ·
// Terms & Conditions



// SECTIONS
const SectionLocation = {
  view:()=>{
    return m("section.section-container",
             Model.location.list.length == 0?m(EmptyState):m(Locations),
             Model.location.list.length != 0?m("div.floating-container", 
              m("div.floating-button", {onclick:()=>{
                Model.addNew()
              }}, m("i.bx.bx-plus"))
             ):null
             )
  }
}

const SectionRates = {
  view:()=>{
    return m("section.section-container", 
             Model.rates.list.length == 0?m(EmptyState):m(Rates),
             Model.rates.list.length != 0?m("div.floating-container", 
              m("div.floating-button", {onclick:()=>{
                Model.addNew()
              }}, m("i.bx.bx-plus"))
             ):null
            )
  }
}

const SectionVehicles = {
  view:()=>{
    return m("section.section-container", 
             m(EmptyState)
          )
  }
}

const SectionNotFound = {
  view:()=>{
    return m("section.section-container", 
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
  oncreate:(vnode)=>{
    // var input, filter, ul, li, a, i, txtValue;
    // vnode.state.input = document.getElementById("locationInput");
    // vnode.state.filter = vnode.state.input.value.toUpperCase();
    // vnode.state.div = document.getElementById("list-group");
    // vnode.state.a = vnode.state.div.getElementsByTagName("a");

  },
  view:(vnode)=>{
    return m(".px-3",[
      m(".input-group.mt-5",[
        m("input#locationInput.form-control.bg-white[type='text'][placeholder='Search Locations']",{onkeyup:()=>{
          vnode.state.input = document.getElementById("locationInput");
          vnode.state.filter = vnode.state.input.value.toUpperCase();
          vnode.state.div = document.getElementById("list-group");
          vnode.state.a = vnode.state.div.getElementsByTagName("a");
          
          
    
    for (i = 0; i < vnode.state.a.length; i++) {
        a = vnode.state.a[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(vnode.state.filter) > -1) {
            vnode.state.a[i].classList.remove("d-none");
            vnode.state.a[i].classList.add("d-flex");
        } else {
            vnode.state.a[i].classList.add("d-none");
            vnode.state.a[i].classList.remove("d-flex");
        }
    }
    m.redraw()
        }}),
        m("span.input-group-addon",m("i.bx.bx-search-alt"))
      ]),
      m("#list-group.list-group.mt-5",[
        Model.location.list.map((i,j)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{onclick:()=>{
            Model.edit(i[0])
            // Model.edit(i[0],i[1])
          }},[
                    m(".name-icon"+Model.setIconColor(),i[0].charAt(0).toUpperCase() + i[0].slice(i[0].lastIndexOf("to")+2).charAt(1).toUpperCase() ),
                    // m("img.img-circle.mr-3[src='./images/tb.png'][width=36][height=36]"),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading",i[0]),
                       m("small.text-muted", i[1])
                    ]),
                    // console.log(Model.rates.list[0][0]),
                    // console.log(i[0]),
                    // m("small.text-muted",(Model.rates.list.length > 0?(
                    //   i[0] == Model.rates.list[0][j]?Model.rates.list[0][1]:"???"
                    //   ):("")))

                    /*m("small.text-muted",(Model.rates.list.map((a,b)=>{
                      return (i[0] == Model.rates.list[b][0]?Model.rates.list[b][1]:"???")
                      // console.log(a[b])
                      // console.log(Model.rates.list[b][1])
                    })
                    ))*/
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
        Model.rates.list.map((i,j)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",[
                    m(".name-icon"+Model.setIconColor(),i[0].charAt(0).toUpperCase() + i[0].slice(i[0].lastIndexOf("to")+2).charAt(1).toUpperCase() ),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading",i[1]),
                       m("small.text-muted", i[0])
                    ])  
                  ])
        })


  ]
)


    ])
  }
}
