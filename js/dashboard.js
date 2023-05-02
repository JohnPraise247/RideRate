/* ================================
 * DASHBOARD COMPONENTS & VIEWS
 * ================================ */



//COMPONENTS
const Nav = {
  view:()=>{
    return m("nav",[
             m(".sidebar-button",[
              m("i.bx.bx-menu.sidebarBtn",{ onclick:()=>{
                 Model.sidebar.classList.toggle("active");
                 Model.sidebar.classList.contains("active")?Model.sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right"):Model.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
                }
              }),
              m("span.dashboard", (m.route.param("urlA") == "dashboard"?"Dashboard"
                                  :m.route.param("urlA") == "location"?"Location Entry"
                                  :m.route.param("urlA") == "rates"?"Rates Entry"
                                  :m.route.param("urlA") == "vehicles"?"Vehicles Entry"
                                  :"Page not found")
              )
            ]),
          // m("div.search-box",[
          //     m("input[type='text'][placeholder='Search...']"),
          //     m("i.bx.bx-search")
          //   ]),
          m(".profile-details",m("img[src='images/avatar.png'][alt='']"))
        ])
  }
}

const dInput = {
  view:(vnode)=>{
    return m("div.mb-4",[
               m("label.form-label[for='"+vnode.attrs.id+"']", vnode.attrs.label),
               m("input.form-control[type='"+(vnode.attrs.type || "text")+"'][placeholder='"+vnode.attrs.placeholder+"'][id='"+vnode.attrs.id+"']", {
                  value: vnode.attrs.value,
                  oninput:(e)=> vnode.attrs.oninput(e) 
              })
          ])
  }
}

const dSearchInput = {
  view:(vnode)=>{
    return m(".input-group.mt-5",[
      m("input.form-control.bg-white[type='text'][placeholder='"+vnode.attrs.placeholder+"']#"+vnode.attrs.id,{
      onkeyup:()=>{
          vnode.state.input = document.getElementById(vnode.attrs.id);
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
      ])
  }
}


const dTextarea = {
  view:(vnode)=>{
    return m("div.mb-4",[
               m("label.form-label[for='"+vnode.attrs.id+"']", vnode.attrs.label),
               m("textarea.form-control[placeholder='"+vnode.attrs.placeholder+"'][id='"+vnode.attrs.id+"']")
          ])
  }
}

const dSelect = {
  oncreate:(vnode)=>{
    if(vnode.attrs.id == "selectLocation"){
      for(i in Model.locations.list){ 
        $("#selectLocation").append("<option value='"+Model.locations.list[i].from +" to "+ Model.locations.list[i].to +"' "+(vnode.attrs.selected == Model.locations.list[i].from +" to "+ Model.locations.list[i].to?"selected":"")+">"+Model.locations.list[i].from +" to "+ Model.locations.list[i].to +"</option>") 
      }
    }else if(vnode.attrs.id == "seatSpace"){
      for(i in vnode.attrs.list){ $("#seatSpace").append("<option value='"+vnode.attrs.list[i]+"' "+(i==2?"selected":"")+">"+vnode.attrs.list[i]+"</option>") }
    }else{
      for(i in vnode.attrs.list){ $("#"+vnode.attrs.id).append("<option value='"+vnode.attrs.list[i]+"'>"+vnode.attrs.list[i]+"</option>") }
    }
  },
  view:(vnode)=>{
    return m("div.mb-4.form-group",[ 
        m("label.form-label[for='"+vnode.attrs.id+"']",vnode.attrs.label),
        m("select.form-control[id='"+vnode.attrs.id+"']",{
          onchange:(e)=> vnode.attrs.onchange(e)
        }, m("option[disabled]", vnode.attrs.placeholder))
    ])
  }
}

const dUpload = {
  view:(vnode)=>{
    return m("div.mb-4",[
        m("label.form-label[for='"+vnode.attrs.id+"']",vnode.attrs.label),
        m("input.form-control[type='file'][id='"+vnode.attrs.id+"']")
    ])
  }
}

const dButton = {
  view:(vnode)=>{
    return  m(".mt-4.mb-2",[
      m(".pull-left.mb-2", m("button.btn.btn-primary.w-100",{onclick:()=>{ window.history.back() }},[m("i.bx.bx-left-arrow-alt.mr-2"),"Back"])),
      m(".pull-right.mb-2", m("button.btn.btn-primary.btn-fill.w-100",{onclick:vnode.attrs.click},[m("i.bx.bx-car.mr-2"+vnode.attrs.icon),vnode.attrs.name]))
    ])
  }
}

const dFab = {
  view:(vnode)=>{
    return m("div.floating-container", m("div.floating-button", {onclick:()=>{ Model.addNew() }}, m("i.bx.bx-plus")))
  }
}













//VIEWS
const SectionDashboard = {
  view:()=>{
    return  [
      m(".section-container",{onclick:()=>{ Model.closeSidebar()}},[
            m("h5", "Overview"),
              m(".row.mb-1",[
                m(".container-fluid.mt-3", 
                  m(".col-sm-6", 
                    m(".panel.panel-default", 
                      m(".panel-body",[
                        m(".d-flex.justify-content-between.align-items-center",[
                          m("div",[
                             m("h3",Model.locations.list.length),
                             m(".text-muted-2","Locations")
                            ]),
                          m("div",m("i.bx-icon.bx.bx-one.bx-current-location.bx-lg.bx-border-circle"))
                        ])
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
                            m("h3",Model.rates.list.length),
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
                            m("h3",Model.vehicles.list.length),
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
    return m("section.section-container",{onclick:()=>{ Model.closeSidebar()}},
      m.route.param("urlB") == "new" || m.route.param("urlB") == "edit"?m(locationForm)
      :(
            Model.locations.list.length == 0?m(EmptyState):([ m(Locations), m(dFab) ])
      )
    )
  }
}

const SectionRates = {
  view:()=>{
    return m("section.section-container",{onclick:()=>{ Model.closeSidebar()}}, 
      m.route.param("urlB") == "new" || m.route.param("urlB") == "edit"?m(rateForm)
      :(
            Model.rates.list.length == 0?m(EmptyState):([ m(Rates), m(dFab) ])          
      )
    )
  }
}

const SectionVehicles = {
  view:()=>{
    return m("section.section-container",{onclick:()=>{ Model.closeSidebar()}}, 
      m.route.param("urlB") == "new" || m.route.param("urlB") == "edit"?m(vehicleForm)
      :(
        Model.vehicles.list.length == 0?m(EmptyState):([ m(Vehicles), m(dFab) ])
      )
    )
  }
}

const SectionNotFound = {
  view:()=>{
    return m("section.section-container", 
            m(".empty",[
              m("i.bx.bx-icon.bx-search-alt.bx-lg.bx-border-circle"),
              m("h5.strong.text-muted-2","This requested URL was not found on this server."),
              m(Button,{name: "Goto Dashboard", icon:".bx-left-arrow-alt", onclick:()=> {m.route.set("/u/dashboard")}})
            ])
          )
  }
}

const EmptyState = {
  view:()=>{
    return m(".empty",[
              m("i.bx.bx-icon."+(m.route.param("urlA") == "location"?".bxs-edit-location"
                :m.route.param("urlA") == "rates"?".bx-purchase-tag"
                :m.route.param("urlA") == "vehicles"?".bx-car"
                :null)+".bx-lg.bx-border-circle"),
              m.route.param("urlA") == "location"?m("h5.strong.text-muted-2","No location added yet")
              :m.route.param("urlA") == "rates"?(
                Model.locations.list.length == 0?m("h5.strong.text-muted-2",["Add a ",m("i.bx.bxs-edit-location.bx-sm.mr-2"),"location first to proceed"]):m("h5.strong.text-muted-2","No Rates added yet")
              ):m.route.param("urlA") == "vehicles"?(
                Model.locations.list.length == 0?m("h5.strong.text-muted-2",["Add a ",m("i.bx.bxs-edit-location.bx-sm.mr-2"),"location first to proceed"]):m("h5.strong.text-muted-2","No Vehicles added yet")
              )
              :null,
              m.route.param("urlA") == "rates" || m.route.param("urlA") == "vehicles"?(
                Model.locations.list.length != 0?m("button.btn.btn-primary.btn-fill",{onclick:()=>{Model.addNew()}},[m("i.bx.bx-plus.bx-md[style='position: relative;top: 4px;']"),"Add"])
                :null
              )
              :m("button.btn.btn-primary.btn-fill",{onclick:()=>{Model.addNew()}},[m("i.bx.bx-plus.bx-md[style='position: relative;top: 4px;']"),"Add"]),
        ])
          
  }
}









//Handles location, rates and vehicles list respectively
const Locations = {
  view:(vnode)=>{
    return [
      m(dSearchInput,{id: "locationInput", placeholder: "Search Locations"}),
      m("#list-group.list-group.mt-5",[
        Model.locations.list.map((i,j)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{onclick:()=>{ Model.edit(i.from, i.to, i.desc) }},[
                    // m(".name-icon"+Model.setIconColor(),i.from.charAt(0).toUpperCase() + i.to.charAt(0).toUpperCase() ),
                    m(".name-icon.icon-blue", m("i.bx.bx-current-location")),
                    // m("img.img-circle.mr-3[src='./images/tb.png'][width=36][height=36]"),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading",i.from +" to "+ i.to),
                       m("small.text-muted", i.desc)
                    ])
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
    ]
  }
}


const Rates = {
  view:(vnode)=>{
    return [
      m(dSearchInput,{id: "rateInput", placeholder: "Search Rates"}),
      m("#list-group.list-group.mt-5",[
        Model.rates.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{onclick:()=>{ Model.edit(i.price1, i.price2, i.location) }},[
                   m(".name-icon.icon-green", m("i.bx.bx-purchase-tag")),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading",(i.price2 !=""?"₦"+i.price1 +" - ₦"+ i.price2:"₦"+i.price1)),
                       m("small.text-muted", i.location)
                    ])  
                  ])
        })


      ])
    ]
  }
}


const Vehicles = {
  view:()=>{
    return [
      m(dSearchInput,{id: "vehicleInput", placeholder: "Search Vehicles"}),
      m("#list-group.list-group.mt-5",[
        Model.vehicles.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{onclick:()=>{ Model.edit(i.name, i.park) }},[
                    m(".name-icon.icon-yellow", m("i.bx.bx-car")),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading",i.name),
                       m("small.text-muted", i.park)
                    ])  
                  ])
        })
      ])
    ]
  }
}

















//Add Location entry view
const locationForm = {
  oncreate:(vnode)=>{
    m.redraw()//when back is pressed
  },
  view:(vnode)=>{
    return [
      m("h5",m.route.param("urlB") == "new"?"New Location Entry":"Edit Location Entry"),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(".row",[
              m(".col-sm-6",m(dInput,{ id:"locationInput1",placeholder:"From",label:"Location *", value: m.route.param("from"), 
                oninput:(e)=>{
                  // window.history.pushState(null,null,"/#/u/location/"+m.route.param("urlB")+"?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val()))
                  m.route.set("/u/location/"+m.route.param("urlB")+"?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val()))
                  m.redraw()
                  // m.route.param("urlB") == "edit"?m.route.set("/u/location/edit?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val())) 
                  // :m.route.param("urlB") == "new"?m.route.set("/u/location/new?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val())) 
                  // :""
                }})),
              m(".col-sm-6",m(dInput,{ id:"locationInput2",placeholder:"To",label:"Destination *", value: m.route.param("to"), 
                oninput:(e)=>{
                  m.route.set("/u/location/"+m.route.param("urlB")+"?from="+encodeURI($("#locationInput1").val())+"&to="+encodeURI(e.target.value))
                  m.redraw()
                }}))
            ]),
            m(dUpload,{id:"locationImageUpload",label:"Location image"}),
            m(dTextarea,{id:"locationDescTA",placeholder:". . .",label:"Description"}),
            m(dButton,{id: 0, name: m.route.param("urlB") == "new"?"Create location":"Edit location", icon:".bx-current-location", click:()=>{

            if($("#locationInput1").val().trim().length > 0 && $("#locationInput2").val().trim().length > 0){
              if(m.route.param("urlB") == "new"){
                    Model.locations.list.push({
                      from: $("#locationInput1").val(), 
                      to: $("#locationInput2").val(), 
                      desc:"No Descriptions . . ."
                    })
                    m.route.set("/u/location")
                    /*window.location.assign('/#/u/location')*/     
              }else{
                  let temp = []
                  let from = $("#locationInput1").val();
                  let to = $("#locationInput2").val();
                  let old = JSON.parse(localStorage.getItem("location"))

                    Model.locations.list.forEach((e)=>{
                      if(e.from == old.from && e.to == old.to){
                        temp.push({
                          from: from, 
                          to: to, 
                          desc: e.desc
                        })
                      }else{
                        temp.push({
                          from: e.from, 
                          to: e.to, 
                          desc: e.desc
                        })
                      }
                    })
                    Model.locations.list = temp
                    m.route.set("/u/location")
                    // window.location.assign('/#/u/location')
                    // m.redraw()           
              }
             }
            }}
          )                    
        ])
      ) 
    ]
  }
}


//Add Rate entry view
const rateForm = {
  // oncreate:(vnode)=>{
  //   vnode.state.price1 = m.route.param("price1")
  //   vnode.state.price2 = m.route.param("price2")
  // },
  view:(vnode)=>{
    return [
      m("h5",m.route.param("urlB") == "new"?"New Rate Entry":"Edit Rate Entry"),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(dSelect,{id:"selectLocation",placeholder:"Select available seat space",label:"Select a location *", selected: m.route.param("location"),
              onupdate:()=> $("#selectLocation").val(m.route.param("location")),
              onchange:()=>{
                m.route.set("/u/rates/"+m.route.param("urlB")+"?location="+$("#selectLocation").val()+"&price1="+encodeURI($("#priceInput1").val())+"&price2="+encodeURI($("#priceInput2").val()))
                m.redraw()
            }}),
            m(".row",[
              m(".col-sm-6",m(dInput,{id:"priceInput1",placeholder:"Price 1",label:"Price 1*",type:"number", value: m.route.param("price1"),
                oninput:(e)=>{
                  m.route.set("/u/rates/"+m.route.param("urlB")+"?location="+$("#selectLocation").val()+"&price1="+encodeURI(e.target.value)+"&price2="+encodeURI($("#priceInput2").val()))
                  m.redraw()
                }
              })),
              m(".col-sm-6",m(dInput,{id:"priceInput2",placeholder:"(Optional)",label:"Price 2",type:"number", value: m.route.param("price2"),
            oninput:(e)=>{
                  m.route.set("/u/rates/"+m.route.param("urlB")+"?location="+$("#selectLocation").val()+"&price1="+encodeURI($("#priceInput1").val())+"&price2="+encodeURI(e.target.value))
                  m.redraw()
                }})),
            ]),
            m(dButton,{id: 1, name: m.route.param("urlB") == "new"?"Create rate":"Edit rate", icon:".bx-purchase-tag", click:()=>{
                // ($("#priceInput1").val().trim().length > 0 && $("#priceInput2").val().trim().length > 0)? (Model.rates.list.push([$("#selectLocation").val(),"₦"+$("#priceInput1").val()+" - ₦"+$("#priceInput2").val()]),m.route.set("/u/rates"))
                // :($("#priceInput1").val().trim().length > 0)? (Model.rates.list.push([$("#selectLocation").val(),"₦"+$("#priceInput1").val()]),m.route.set("/u/rates"))
                // :false

                if($("#selectLocation").val() !=null && $("#priceInput1").val().trim().length > 0){
                     if(m.route.param("urlB") == "new"){
                           Model.rates.list.push({
                             price1: $("#priceInput1").val(), 
                             price2: $("#priceInput2").val(), 
                             location: $("#selectLocation").val()
                           })
                           m.route.set("/u/rates")    
                     }else{
                         let temp = []
                         let old = JSON.parse(localStorage.getItem("rates"))
     
                           Model.rates.list.forEach((e)=>{
                             if(e.price1 == old.price1 && e.price2 == old.price2){
                               temp.push({
                                 price1: $("#priceInput1").val(), 
                                 price2: $("#priceInput2").val(), 
                                 location: $("#selectLocation").val()
                               })
                             }else{
                               temp.push({
                                 price1: e.price1, 
                                 price2: e.price2, 
                                 location: e.location 
                               })
                             }
                           })
                           Model.rates.list = temp
                           m.route.set("/u/rates")  
                    }
                }
            }})       
            ]
          )
       ) 
    ]
  }
}

//Add Vehicles entry view
const vehicleForm = {
  view:()=>{
    return [
      m("h5",m.route.param("urlB") == "new"?"New Vehicle Entry":"Edit Vehicle Entry"),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(".row",[
              m(".col-sm-6",m(dInput,{id:"vehicleName",placeholder:"E.g Toyota",label:"Name of vehicle *", value: m.route.param("name"),
                oninput:(e)=>{
                  m.route.set("/u/vehicles/"+m.route.param("urlB")+"?name="+encodeURI(e.target.value)+"&park="+$("#parkLocation").val())
                  m.redraw()
                }})),
              m(".col-sm-6",m(dSelect,{id:"parkLocation",placeholder:"Select Location of park",label:"Location of park *",list:["Shell"]}))
            ]),
            m(".row",[
              m(".col-sm-6.col-md-8",m(dInput,{id:"plateNumber",placeholder:"E.g XXX-XXXX-XXX",label:"Plate number *"})),
              m(".col-sm-6.col-md-4",m(dSelect,{id:"seatSpace",placeholder:"Select available seat space",label:"Available seat space *",list:["4 Seats","5 Seats","6 Seats"]}))
            ]),
            m(dUpload,{id:"vehicleImageUpload",label:"Vehicle image"}),
            m(".row",[
              m(".col-sm-6",m(dInput,{id:"arrivalTime",placeholder:"E.g 10:00am",label:"Time of Arrival *"})),
              m(".col-sm-6",m(dInput,{id:"departureTime",placeholder:"E.g 12:00pm",label:"Time of departure *"}))
            ]),
            m(dButton,{id: 2, name: m.route.param("urlB") == "new"?"Create vehicle entry":"Edit vehicle entry", icon:".bx-car", click:()=>{

              // (($("#vehicleName").val().trim().length > 0)? (Model.vehicles.list.push({name: $("#vehicleName").val().trim(), park: $("#parkLocation").val() }),m.route.set("/u/vehicles")):null)

              if($("#parkLocation").val() !=null && $("#vehicleName").val().trim().length > 0){
                     if(m.route.param("urlB") == "new"){
                           Model.vehicles.list.push({
                             name: $("#vehicleName").val(), 
                             park: $("#parkLocation").val()
                           })
                           m.route.set("/u/vehicles")    
                     }else{
                         let temp = []
                         let old = JSON.parse(localStorage.getItem("vehicles"))
     
                           Model.vehicles.list.forEach((e)=>{
                             if(e.name == old.name && e.park == old.park){
                               temp.push({
                                 name: $("#vehicleName").val(), 
                                 park: $("#parkLocation").val()
                               })
                             }else{
                               temp.push({
                                 name: e.name, 
                                 park: e.park
                               })
                             }
                           })
                           Model.vehicles.list = temp
                           m.route.set("/u/vehicles")  
                    }
                }
            }})
           
            
            ]
          )
      )
      
      ]
  }
}