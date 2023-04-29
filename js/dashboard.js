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
          m(".profile-details",m("img[src='images/avatar.png'][alt='']"))
        ]
      )
  }
}


const dInput = {
  view:(vnode)=>{
    return m("div.mb-4",[
               m("label.form-label[for='"+vnode.attrs.id+"']", vnode.attrs.label),
               m("input.form-control[type='"+(vnode.attrs.type || "text")+"'][placeholder='"+vnode.attrs.placeholder+"'][id='"+vnode.attrs.id+"']")
          ])
  }
}

const dSelect = {
  view:(vnode)=>{
    return m("div.mb-4.form-group", 
      m("label.form-label[for='bootstrap-wizard-validation-gender']", "Seat Number"),
  m("select.form-control[id='SelectLocationn']",
    [
      m("option[disabled]", 
        "Select a location"
      ),
      m("option[value='Oye/Ikole to Lagos']", 
        "Oye/Ikole to Lagos"
      )
    ]
  )
)
  }
}

const dSelectx = {
  view:(vnode)=>{
    return m("div.mb-4",[
      m("label.form-label[for='bootstrap-wizard-validation-gender']", "Gender"),
      m("select.form-select[name='gender'][id='bootstrap-wizard-validation-gender']",
      [
        m("option[value='']", 
          "Select your gender ..."
        ),
        m("option[value='Male']", 
          "Male"
        ),
        m("option[value='Female']", 
          "Female"
        ),
        m("option[value='Other']", 
          "Other"
        )
      ]
    )
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
             Model.location.list.length == 0?m(EmptyState):([
                m(Locations),
                m("div.floating-container", m("div.floating-button", {onclick:()=>{
                    Model.addNew()
                  }}, m("i.bx.bx-plus"))
                )
              ])
             )
  }
}

const SectionRates = {
  view:()=>{
    return m("section.section-container", 
             Model.rates.list.length == 0?m(EmptyState):([
                m(Rates),
                m("div.floating-container", m("div.floating-button", {onclick:()=>{
                     Model.addNew()
                  }}, m("i.bx.bx-plus"))
                )
              ])          
            )
  }
}

const SectionVehicles = {
  view:()=>{
    return m("section.section-container", !Model.newVehicle?(
        Model.vehicles.list.length == 0?m(EmptyState):([
          m(Vehicles),
          m("div.floating-container", 
              m("div.floating-button", {onclick:()=>{
                Model.addNew()
              }}, m("i.bx.bx-plus"))
             )
          ])
      )
      :m(newVehicle)
      )
  }
}

// const SectionVehiclesx = {
//   view:()=>{
//     return m("section.section-container", 
//              Model.vehicles.list.length == 0?m(EmptyState):m(Vehicles),
//              Model.vehicles.list.length != 0?m("div.floating-container", 
//               m("div.floating-button", {onclick:()=>{
//                 Model.addNew()
//               }}, m("i.bx.bx-plus"))
//              ):null
//             )
//   }
// }

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









//Handles location, rates and vehicles list respectively
const Locations = {
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


      ])
    ])
  }
}


const Vehicles = {
  view:()=>{
    return m(".px-3",[
      m(".input-group.mt-5",[
        m("input.form-control.bg-white[type='text'][placeholder='Search Vehicles']"),
        m("span.input-group-addon",m("i.bx.bx-search-alt"))
      ]),
      m(".list-group.mt-5",[
        Model.vehicles.list.map((i,j)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",[
                    m(".name-icon"+Model.setIconColor(),i[0].charAt(0).toUpperCase() + i[0].slice(i[0].lastIndexOf("to")+2).charAt(1).toUpperCase() ),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading",i[1]),
                       m("small.text-muted", i[0])
                    ])  
                  ])
        })
      ])
    ])
  }
}







// Vehicles view
const newVehicle = {
  view:()=>{
    return [
      m("h5","New Vehicle Entry"),
      m(".panel.panel-default.w-100", 
          m(".panel-body",[
            m(dInput,{id:"vehicleName",placeholder:"E.g Toyota",label:"Name of vehicle"}),
            m(dInput,{id:"plateNumber",placeholder:"E.g XXX-XXXX-XXX",label:"Plate number"}),
            m(dSelect)
            // m("div.mb-3",[
            //    m("label.form-label[for='vehicleName']", "Name of vehicle"),
            //    m("input.form-control[type='text'][placeholder='E.g Toyota'][id='vehicleName']")
            // ])
            // m("input.form-control")
            // m(".d-flex.justify-content-between.align-items-center",[
            //   m("div",[
            //     m("h3",Model.location.list.length),
            //     // m("h3","81"),
            //      m(".text-muted-2","Locations")
            //     ]),
            //   m("div",m("i.bx-icon.bx.bx-one.bx-current-location.bx-lg.bx-border-circle"))
            // ]),
            // m("small.text-muted","In Total")
            ]
          )
      ),
      
      ]
  }
}