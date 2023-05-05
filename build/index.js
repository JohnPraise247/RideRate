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
                                  :m.route.param("urlA") == "parks"?"Park Entry"
                                  :m.route.param("urlA") == "rates"?"Rates Entry"
                                  :m.route.param("urlA") == "vehicles"?"Vehicles Entry"
                                  :"Page not found")
              )
            ]),
          // m("div.search-box",[
          //     m("input[type='text'][placeholder='Search...']"),
          //     m("i.bx.bx-search")
          //   ]),
          m(".profile-details",m("img[src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+VBMVEXX19XY2NXY2NbY2NfZ2dXZ2dbZ2dfa2tba2tfa2tja2tnb29jb29nc3Nrc3Nvd3drd3dvd3dze3tve3tze3t3f39zf393g4N/h4d/h4eDi4uDi4uHk5OHk5OLk5OPl5eLl5eTm5uPm5uTm5uXn5+Xn5+bo6Obo6Ofp6ebp6efp6ejq6ufq6unq6urr6+rs7Ovu7uvu7u3v7+7w8O/x8fDx8fHy8vHz8/Lz8/P09PP09PT09PX19fT19fX29vb39/b39/j5+fj5+fn6+vn6+vr7+/r7+/v7+/z8/Pv8/Pz8/P39/fz9/f39/f7+/v3+/v7+/v////3///9ndqfOAAACUklEQVRYw+3W4XfSMBAA8Czas3GNxN7AIcrQiuA2YcAUUZy6DdxcJ/T+/z/GD8UNSrJdy3t+8j718Zofl0uanKANQ/wH7gbiNIoCsfWRDcQzorPBQRQdDM4KZvBxFwCUAoBnH9xJOIGrmgwMIiJiqOSLS0ryAAlNQlgMR0Q0EE7zZTAvK1wJVZ7nApoSMyGbfCCmbw9MFjBwkiODho9r4e9xgZimyqwDRk3ZQF+gJaBvW0rrFOrKBqg6twbzUNsAHXKBc2sCiHBu2dDCUoKxtANyzAQGD23DQ4QBE+iCFdiRXRZAdGgH0DtkAvu+vQb+PhNouoAmE2i7gDZ3Co4aAHcK7x2r4HWYy3jkWsbev9pII9dWHjFr8B0cH9MPJnCxbWzjjfrFBMhseB7Qc/uJVGWfiS1rFaHFBk6k7VSWJ/x7YW9dCCX7XqCEflc9k/3/6izX9f42WAW2W7lu5zi7lNq4WgxXf/Aze71PcmYw9FYBb+hoUezAjBrZDBrELmKcEJ1mPwcDp0T3Xq63XWVt7VhUtew7GeDm54tR5+WTYL1DCUyt83l683ayCqSjJ+NeVFZbnrJ/jQqkqkS98WS5e/2bwdVxe1f70lP6Kd4RWj3yJOhq+/hyQSyAzuMtCDQyYgcRdQAy6CxnUBcGeRGGYfpQEq9ugT57/HJVRZ/iFLguaSwQupRmENORwEIhuhSTIKKKLgboChEJd0t0f8gxJSKmN35RwI+IRNESpmW8JkHDwjNAlJ9I0GtVHFARiZk2xQFdmomvG8wAUX4RLdgEgHd/ACERYcCSvguWAAAAAElFTkSuQmCC']"))
        ])
  }
}

const dInput = {
  oninit:(vnode)=>{
    vnode.state.value = vnode.attrs.value || ""
  },
  view:(vnode)=>{
    return m("div.mb-4",[
               m("label.form-label[for='"+vnode.attrs.id+"']", vnode.attrs.label),
               m("input.form-control[type='"+(vnode.attrs.type || "text")+"'][placeholder='"+vnode.attrs.placeholder+"'][id='"+vnode.attrs.id+"']", {
                  value: vnode.state.value,
                  oninput:(e)=> {vnode.state.value = e.target.value; vnode.attrs.oninput(e)}
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
      m(".section-container",{onclick:()=>{ Model.closeSidebar() }},[
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
                          m("div",m("i.bx-icon.bx.bx-one.bx-lg.bx-border-circle"+Model.icon.location))
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
                             m(".text-muted-2","Parks")
                            ]),
                          m("div",m("i.bx-icon.bx-four.bx.bx-lg.bx-border-circle"+Model.icon.park))
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
                            m("h3",Model.rates.list.length),
                             m(".text-muted-2","Rates")
                            ]),
                          m("div",m("i.bx-icon.bx-two.bx.bx-lg.bx-border-circle"+Model.icon.rates))
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
                            m("h3",Model.vehicles.list.length),
                             m(".text-muted-2","Vehicles")
                            ]),
                          m("div",m("i.bx-icon.bx-three.bx.bx-lg.bx-border-circle"+Model.icon.vehicles))
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

const SectionParks = {
  view:()=>{
    return m("section.section-container",{onclick:()=>{ Model.closeSidebar()}},
      m.route.param("urlB") == "new" || m.route.param("urlB") == "edit"?m(parkForm)
      :(
            Model.parks.list.length == 0?m(EmptyState):([ m(Parks), m(dFab) ])
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
              m("i.bx.bx-icon.bx-lg.bx-border-circle"+Model.icon.searchAlt),
              m("h5.strong.text-muted-2","This requested URL was not found on this server."),
              m(Button,{name: "Goto Dashboard", icon: Model.icon.leftArrowAlt, onclick:()=> {m.route.set("/u/dashboard")}})
            ])
          )
  }
}

const EmptyState = {
  view:()=>{
    return m(".empty",[
              m("i.bx.bx-icon."+(m.route.param("urlA") == "location"? Model.icon.location
                :m.route.param("urlA") == "rates"? Model.icon.rates
                :m.route.param("urlA") == "vehicles"? Model.icon.vehicles
                :null)+".bx-lg.bx-border-circle"),

              m.route.param("urlA") == "location"?m("h5.strong.text-muted-2","No location added yet")
              :m.route.param("urlA") == "rates"?(
                Model.locations.list.length == 0?m("h5.strong.text-muted-2",["Add a ",m("i.bx.bx-sm.mr-2"+Model.icon.location),"location first to proceed"]):m("h5.strong.text-muted-2","No Rates added yet")
              ):m.route.param("urlA") == "vehicles"?(
                Model.locations.list.length == 0?m("h5.strong.text-muted-2",["Add a ",m("i.bx.bx-sm.mr-2"+Model.icon.location),"location first to proceed"]):m("h5.strong.text-muted-2","No Vehicles added yet")
              )
              :null,
              m.route.param("urlA") == "rates" || m.route.param("urlA") == "vehicles"?(
                Model.locations.list.length != 0?m("button.btn.btn-primary.btn-fill",{onclick:()=>{Model.addNew()}},[m("i.bx.bx-md[style='position: relative;top: 4px;']"+Model.icon.plus),"Add"])
                :null
              )
              :m("button.btn.btn-primary.btn-fill",{onclick:()=>{Model.addNew()}},[m("i.bx.bx-md[style='position: relative;top: 4px;']"+Model.icon.plus),"Add"]),
        ])
          
  }
}















//Handles location, parks, rates and vehicles list respectively
const Locations = {
  view:(vnode)=>{
    return [
      m(dSearchInput,{id: "locationInput", placeholder: "Search Locations"}),
      m("#list-group.list-group.mt-5",[
        Model.locations.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{onclick:()=>{ Model.edit(i.from, i.to, i.desc) }},[
                    // m(".name-icon"+Model.setIconColor(),i.from.charAt(0).toUpperCase() + i.to.charAt(0).toUpperCase() ),
                    m(".name-icon.icon-blue", m("i.bx"+Model.icon.location)),
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


const Parks = {
  view:(vnode)=>{
    return [
      m(dSearchInput,{id: "parkInput", placeholder: "Search Parks"}),
      m("#list-group.list-group.mt-5",[
        Model.parks.list.map((i)=>{
          return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{onclick:()=>{ Model.edit(i.parkname, i.location, i.desc ) }},[
                   m(".name-icon.icon-purple", m("i.bx"+Model.icon.park)),
                    m(".w-100.d-flex[style='flex-direction:column']",[
                       m("h5.list-group-item-heading", i.parkname),
                       m("small.text-muted", i.location)
                    ])  
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
                   m(".name-icon.icon-green", m("i.bx"+Model.icon.rates)),
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
                    m(".name-icon.icon-yellow", m("i.bx"+Model.icon.vehicles)),
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
  // oncreate:(vnode)=>{
    // m.redraw()//when back is pressed
  // },
  view:(vnode)=>{
    return [
      m("h5",m.route.param("urlB") == "new"?"New Location Entry":"Edit Location Entry"),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(".row",[
              m(".col-sm-6",m(dInput,{ id:"locationInput1",placeholder:"From",label:"Location *", value: m.route.param("from"), 
                oninput:(e)=>{
                  // window.history.pushState(null,null,"/#/u/location/"+m.route.param("urlB")+"?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val()))
                  m.route.set("/u/location/"+m.route.param("urlB"),{from: e.target.value, to: $("#locationInput2").val()}, {replace : true})
                  // m.route.set("/u/location/"+m.route.param("urlB")+"?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val()))
                  // m.redraw()
                  // m.route.param("urlB") == "edit"?m.route.set("/u/location/edit?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val())) 
                  // :m.route.param("urlB") == "new"?m.route.set("/u/location/new?from="+encodeURI(e.target.value)+"&to="+encodeURI($("#locationInput2").val())) 
                  // :""
                }})),
              m(".col-sm-6",m(dInput,{ id:"locationInput2",placeholder:"To",label:"Destination *", value: m.route.param("to"), 
                oninput:(e)=>{
                  m.route.set("/u/location/"+m.route.param("urlB"),{from: $("#locationInput1").val(), to: e.target.value}, {replace : true})
                  // m.route.set("/u/location/"+m.route.param("urlB")+"?from="+encodeURI($("#locationInput1").val())+"&to="+encodeURI(e.target.value))
                  // m.redraw()
                }}))
            ]),
            // m(dUpload,{id:"locationImageUpload",label:"Location image"}),
            m(dTextarea,{id:"locationDescTA",placeholder:". . .",label:"Description"}),
            m(dButton,{id: 0, name: m.route.param("urlB") == "new"?"Create location":"Edit location", icon: Model.icon.location, click:()=>{

            if($("#locationInput1").val().trim().length > 0 && $("#locationInput2").val().trim().length > 0){
              if(m.route.param("urlB") == "new"){
                    Model.locations.list.push({
                      from: $("#locationInput1").val(), 
                      to: $("#locationInput2").val(), 
                      desc:"No Descriptions . . ."
                    })
                    m.route.set("/u/location", null)
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


//Add Park entry view
const parkForm = {
  view:(vnode)=>{
    return [
      m("h5",m.route.param("urlB") == "new"?"New Park Entry":"Edit Park Entry"),
      m(".panel.panel-default.panel-w-100", 
          m(".panel-body",[
            m(".row",[
              m(".col-sm-6",m(dInput,{ id:"parkInput1",placeholder:"Park name",label:"Name of park *", value: m.route.param("parkname"), 
                oninput:(e)=>{
                  m.route.set("/u/parks/"+m.route.param("urlB"),{parkname: e.target.value, to: $("#parkInput2").val()}, {replace : true})
                }})),
              m(".col-sm-6",m(dInput,{ id:"parkInput2",placeholder:"",label:"Location *", value: m.route.param("location"), 
                oninput:(e)=>{
                  m.route.set("/u/parks/"+m.route.param("urlB"),{from: $("#parkInput1").val(), to: e.target.value}, {replace : true})
                }}))
            ]),
            m(dUpload,{id:"parkImageUpload",label:"Park image"}),
            m(dTextarea,{id:"parkDescTA",placeholder:". . .",label:"Description"}),
            m(dButton,{id: 0, name: m.route.param("urlB") == "new"?"Create park":"Edit park", icon: Model.icon.park, click:()=>{

            if($("#parkInput1").val().trim().length > 0 && $("#parkInput2").val().trim().length > 0){
              if(m.route.param("urlB") == "new"){
                    Model.parks.list.push({
                      parkname: $("#parkInput1").val(), 
                      location: $("#parkInput2").val(), 
                      desc:"No Descriptions . . ."
                    })
                    m.route.set("/u/parks", null)    
              }else{
                  let temp = []
                  let parkname = $("#parkInput1").val();
                  let location = $("#parkInput2").val();
                  let old = JSON.parse(localStorage.getItem("park"))

                    Model.parks.list.forEach((e)=>{
                      if(e.parkname == old.parkname && e.location == old.location){
                        temp.push({
                          parkname: parkname, 
                          location: location, 
                          desc: e.desc
                        })
                      }else{
                        temp.push({
                          parkname: e.parkname, 
                          location: e.location, 
                          desc: e.desc
                        })
                      }
                    })
                    Model.parks.list = temp
                    m.route.set("/u/parks")     
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
                m.route.set("/u/rates/"+m.route.param("urlB"),{location: $("#selectLocation").val(), price1: $("#priceInput1").val(), price2: $("#priceInput2").val()}, {replace : true})
                // m.route.set("/u/rates/"+m.route.param("urlB")+"?location="+$("#selectLocation").val()+"&price1="+encodeURI($("#priceInput1").val())+"&price2="+encodeURI($("#priceInput2").val()))
                // m.redraw()
            }}),
            m(".row",[
              m(".col-sm-6",m(dInput,{id:"priceInput1",placeholder:"Price 1",label:"Price 1*",type:"number", value: m.route.param("price1"),
                oninput:(e)=>{
                  m.route.set("/u/rates/"+m.route.param("urlB"),{location: $("#selectLocation").val(), price1: e.target.value, price2: $("#priceInput2").val()}, {replace : true})
                }
              })),
              m(".col-sm-6",m(dInput,{id:"priceInput2",placeholder:"(Optional)",label:"Price 2",type:"number", value: m.route.param("price2"),
               oninput:(e)=>{
                  m.route.set("/u/rates/"+m.route.param("urlB"),{location: $("#selectLocation").val(), price1: $("#priceInput1").val(), price2: e.target.value }, {replace : true})
                }})),
            ]),
            m(dButton,{id: 1, name: m.route.param("urlB") == "new"?"Create rate":"Edit rate", icon: Model.icon.rates, click:()=>{
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
                  m.route.set("/u/vehicles/"+m.route.param("urlB"),{name: e.target.value, park: $("#parkLocation").val()}, {replace : true})
                  // m.route.set("/u/vehicles/"+m.route.param("urlB")+"?name="+encodeURI(e.target.value)+"&park="+$("#parkLocation").val())
                  // m.redraw()
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
            m(dButton,{id: 2, name: m.route.param("urlB") == "new"?"Create vehicle entry":"Edit vehicle entry", icon: Model.icon.vehicles, click:()=>{

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
}/* ================================
 * HOMEPAGE COMPONENTS & VIEWS
 * ================================ */



//COMPONENTS
const ContainerAbsolute = {
  view:(vnode)=>{
    return [
      m(".container.container-absolute",[ 
        m("h2.title","RideRate"),
         m(".panel.p-4.bg-transparent",[
             m("p.text-white.py-3.text-center[style='opacity: .7']",vnode.attrs.title),
             vnode.children          
          ])
      ]),
      m(".bg-overlay")
    ]
  }
}

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


















//VIEWS
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
                      m("li"+(m.route.get() == "/about"?".active":""), m("a[href='#/about']", "About")),
                      m("li"+(m.route.get() == "/contact-us"?".active":""), m("a[href='#/contact-us']", "Contact us"))
                    ]),
                  m("ul.nav.navbar-nav.navbar-right",[
                    // m(m.route.Link, {href: "/page1"}, "Page 1"),
                      m("li", m("a[href='#/login']", "Log in")),
                      m("li", m("a.btn.btn-primary.btn-fill.text-white[href='#/signup']", /*m("i.bx.bx-log-in.bx-sm.mr-2[style='position: relative;top: 3px;']"),*/"Sign up"))
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
                  m("a.btn.btn-primary.btn-fill.m-3[data-aos='zoom-in'][data-aos-delay='500']",{ onclick:()=>{ window.scrollToAnchor("about")}},"Learn more"/*"Get Started"*/),
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
                  m("a.btn.btn-primary[data-aos='zoom-in'][data-aos-delay='300'][href='#']",m("i.bx.bx-bulb.bx-sm.mr-2[style='position: relative;top: 3px;']"), "Learn more")
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
      m("section.section-spacing.blue-gradient", 
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
          m("nav", 
           m("ul.d-flex",[
             // m("li.mr-3", m("a[href='#']", " About us ")),
             m("li.mr-3", m("a[href='#/privacy-policy']", " Privacy Policy ")),
             m("span.mr-3"," | "),
             m("li.mr-3", m("a[href='#/tac']", " Terms & Conditions "))
             // m("li.mr-3", m("a[href='#']", " Contact us "))
          ])
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
      
      ])
    )
  }
}/* ================================
 * CHECKRATES COMPONENTS & VIEWS
 * ================================ */


const crSearchInput = {
  view:(vnode)=>{
    return m(".input-group.mt-3",[
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



const CheckRatesMain = {
    view:()=>{
      return m(".main.check-rates",
        m("section", 
          m(".container.pt-5", [
            m("span.label.label-warning", "This page under development"),
            m(crSearchInput,{id: "crlocationInput", placeholder: "Search Locations"}),
            m("#list-group.list-group.mt-5",[
              Model.locations.list.map((i)=>{
               return m("a.list-group-item.d-flex.justify-content-center.align-items-center",{onclick:()=>{ /*Model.edit(i.from, i.to, i.desc)*/ }},[
                        m(".name-icon.icon-blue", m("i.bx.bx-current-location")),
                        m(".w-100.d-flex[style='flex-direction:column']",[
                           m("h5.list-group-item-heading",i.from +" to "+ i.to),
                           m("small.text-muted", i.desc)
                        ])
                      ])
              })
            ])
          ])
        )
     )
  }
}


// m("div.alert.alert-success", 
//   m("div.container",
//     [
//       m("b", 
//         "Lorem ipsum"
//       ),
//       " dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "
//     ]
//   )
// )


/* ================================
 * VARIABLES & FUNCTIONS
 * ================================ */


 //Todo 

//fix li hover for nav
//fix route to redirect /u/ to /u/dashbaord
//add auto suggest on input
//no results found for location search...
//add scroll to top btn    ---> https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//style upload btn


var Auth = {
    username: "JohnDoe",
    phonenumber: "",
    password: "12341234",
    setUsername: function(value) {
        Auth.username = value
    },
    setPhonenumber: function(value) {
        Auth.phonenumber = value
    },
    setPassword: function(value) {
        Auth.password = value
    },
    canSubmit: function() {
        return Auth.username.trim() !== "" && Auth.password.trim() !== ""
    },
    login: function() {
        //make request
        setTimeout("m.route.set('/u/dashboard')")
      //   fetch('https://jsonplaceholder.typicode.com/todos/1')
      // .then(response => response.json())
      // .then(json => console.log(json))

        // m.request({
        //     method: "GET",
        //     url: "http://localhost:3000/api/users",
        //     // url: "/api/v1/auth",
        //     params: {username: Auth.username, password: Auth.password}
        //     // body: {name: "test"}
        // }).then(function(data) {
        //     // xc=data
        //     console.log(data)
        //     // localStorage.setItem("auth-token", data.token)
        //     // m.route.set("/secret")
        // }).catch(function(e) {
        //         console.log(e.message)
        //     })
    },signup: function() {
        m.request({
            method: "POST",
            url: "http://localhost:3000/users",
            params: {username: Auth.username, phonenumber: Auth.phonenumber, password: Auth.password}
        }).then(function(data) {
            console.log(data)
            // localStorage.setItem("auth-token", data.token)
            // m.route.set("/secret")
        }).catch(function(e) {
                console.log(e.message)
            })
    }
}

var Model ={
    anchor:"",//scrollToAnchor
    transparent:true,
    sidebar:"",
    sidebarBtn:"",
    // colorIndex:-1,//controls how colors are picked
    // colorClasses:[".icon-blue",".icon-green",".icon-yellow",".icon-red"],
    icon: {
        dashboard: ".bx-grid-alt",
        location: ".bx-trip",//current-location
        park: ".bxs-car-garage",
        rates: ".bx-dollar-circle",
        vehicles: ".bx-car",
        user: ".bx-user",
        searchAlt: ".bx-search-alt",
        leftArrowAlt: ".bx-left-arrow-alt",
        plus: ".bx-plus",
        logOut: ".bx-log-out",
    },
    locations:{
        list:[
          { from: "Oye/Ikole", to: "Lagos", desc: "No Description" },
          { from: "Oye/Ikole", to: "Ogun", desc: "No Description" },
          { from: "Oye/Ikole", to: "Ondo", desc: "No Description" },
          { from: "Oye/Ikole", to: "Abuja", desc: "No Description" },
          { from: "Oye/Ikole", to: "Kogi", desc: "No Description" },
          { from: "Oye/Ikole", to: "Oyo", desc: "No Description" },
          { from: "Oye/Ikole", to: "Edo", desc: "No Description" }
        ]
        // list:[]// list:[["Oye to Ikole","1.5 Hours Journey"],["Ado Ekiti to Ilorin","Description . . ."]],
    },
    parks:{
        list:[
          { parkname: "Shell", location: "Ikole", desc: "No Description" }
        ]
    },
    rates:{
        list:[]
    },
    vehicles:{
        list:[]
    },
    addNew:()=>{
        if(m.route.param("urlA") == "location"){
           m.route.set("/u/location/new")
        }else if(m.route.param("urlA") == "parks"){
           m.route.set("/u/parks/new")
        }else if(m.route.param("urlA") == "rates"){
           m.route.set("/u/rates/new")
        }else if(m.route.param("urlA") == "vehicles"){
         m.route.set("/u/vehicles/new")
        }
    },
    edit:(a,b,desc)=>{
        if(m.route.param("urlA") == "location"){
            Model.locations.list.map((e)=>{
                if(e.from == a && e.to == b){
                    localStorage.setItem("location",JSON.stringify({
                        from: e.from, 
                        to: e.to, 
                        desc: e.desc
                    }))
                    m.route.set("/u/location/edit",{from:e.from, to: e.to})
                }
            })
        }else if(m.route.param("urlA") == "rates"){
            Model.rates.list.map((e)=>{
                if(e.price1 == a && e.price2 == b){
                    localStorage.setItem("rates",JSON.stringify({
                        price1: e.price1, 
                        price2: e.price2, 
                        location: e.location
                    }))
                    m.route.set("/u/rates/edit",{location: e.location, price1: e.price1, price2: e.price2})
                }
            })
        }else if(m.route.param("urlA") == "vehicles"){
            Model.vehicles.list.map((e)=>{
                if(e.name == a && e.park == b){
                    localStorage.setItem("vehicles",JSON.stringify({
                        name: e.name, 
                        park: e.park
                    }))
                    m.route.set("/u/vehicles/edit",{name:e.name, park: e.park})
                }
            })
        }
    },
    /*setIconColor:()=>{
        // Model.colorIndex++;
        // if(j > 3) j = 0
        // return Model.colorClasses[j]
        Model.colorIndex++;
        if(Model.colorIndex > 3) Model.colorIndex = 0
        return Model.colorClasses[Model.colorIndex]
    },*/
    closeSidebar:()=>{
        window.innerWidth < 769?(Model.sidebar.classList.remove("active"),(Model.sidebar.classList.contains("active")?Model.sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right"):Model.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu"))
                ):null
    }
}






// Navbar scroll
$(document).scroll(function() {
    let path = m.route.get();
    let pathArray1 =  path == "/about" || path == "/contact-us" || path == "/privacy-policy" || path == "/tac";
    let pathArray2 =  pathArray1 || path == "/check-rates";
    let value = 0;

    (pathArray2)?oVal = ($(window).scrollTop() / 30) : oVal = ($(window).scrollTop() / 270)
    $(".blur").css("opacity", oVal);   

    (path == "/check-rates")? value = 60 : (pathArray1)? value = 50 : value = 630

    if( $(this).scrollTop() > value ) {
        if(Model.transparent) { Model.transparent = false; $('nav[role="navigation"]').removeClass('navbar-transparent') }
    }else{
        if(!Model.transparent) { Model.transparent = true; $('nav[role="navigation"]').addClass('navbar-transparent') }
    }
});

function scrollToAnchor( anchorName ){
    let is = (el)=>{return el !== undefined && el !== null};
    let targetEl = is(Model.anchor) ? document.querySelector("div[id='"+anchorName+"']") : document.body;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let target = is(targetEl) ? targetEl.getBoundingClientRect().top : 0;
    window.scroll({
        top: target + scrollTop - 70,
        left: 0,
        behavior: "smooth"
    });
}

window.addEventListener('hashchange', function () {
    window.scrollTo(0,0);
});


// onback key
// $(document).ready(function($) {
//   if (window.history && window.history.pushState) {
//     $(window).on('popstate', function() {

//     });
//   }
// });













// Model.hideComment(comment).then(m.redraw)
// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

// Toast.fire({
//   icon: 'success',
//   title: 'Signed in successfully'
// })

//                 Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool',
//   cancelButton: '...'
// })// Bootstrap navbar function
+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(jQuery);
+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(jQuery);/* ================================
 * ALL VIEWS
 * ================================ */


const Home = {
	oncreate:() =>{ 
		$("body").removeClass("bg");
		AOS.init({ once: true })
     // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   
     // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
     // offset: 120, // offset (in px) from the original trigger point
     // delay: 0, // values from 0 to 3000, with step 50ms
     // duration: 400, // values from 0 to 3000, with step 50ms
     // easing: 'ease', // default easing for AOS animations
      // whether animation should happen only once - while scrolling down
     // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	},
	view:() =>{
		return [
			m(NavBar),
			m(Main),
			m(Footer)
		]
	}
}

const CheckRates = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "Check rates", sub: "Get latest Price Updates for Your Favorite Transportation with RideRate"}),
            m(CheckRatesMain),
            m(Footer)
        ]
    }
}

const ContactUs = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "Contact Us"}),
            /*m("section.container[id='contact']",
  [
    m("h2", 
      "Contact"
    ),
    m("p",
      [
        "Calligraphr.com is provided by:",
        m("br"),
        m("br"),
        m("a[href='https://www.maklabu.com']", 
          "Maklabu GmbH"
        ),
        m("br"),
        " Ausserdorf 5",
        m("br"),
        " 7425 Massein",
        m("br"),
        " Switzerland",
        m("br"),
        m("br"),
        m("a[href='mailto:info@calligraphr.com']", 
          "info@calligraphr.com"
        ),
        m("br")
      ]
    )
  ]
)*/
            m(UnderDev),
            m(Footer)
        ]
    }
}

const About = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "About"}),
            m(UnderDev),
            m(Footer)
        ]
    }
}

const PrivacyPolicy = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "Privacy Policy"}),
            m(UnderDev),
            m(Footer)
        ]
    }
}

const Tac = {
    oncreate:() =>{ $("body").removeClass("bg") },
    view:() =>{
        return [
            m(NavBar,{nav:"nav-small", title: "Terms & Conditions"}),
            m(UnderDev),
            m(Footer)
        ]
    }
}

const Login = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return m(ContainerAbsolute, {title: "Log in to RideRate"},[
			  	   m("div.form-group", 
      		       //m("div.input-group",[m("input.form-control[type='text'][value='Group Addon']"),m("span.input-group-addon",  m("i.fa.fa-user"))]),
                    m(Input,{type:"text",placeholder:"Username or Phone Number",value: Auth.username,oninput:(e)=>{ 
                    	 Auth.setUsername(e.target.value)
                    	 }}),
                    m(Input,{type:"password",placeholder:"Password",value: Auth.password,oninput:(e)=>{ 
                    	 Auth.setPassword(e.target.value)
                    	 }})
             ),
  	    	   //m("label.checkbox",[ m("input[type='checkbox'][value='remember-me']")," Remember me "]),
			  	   m("button.btn.btn-primary.btn-fill.w-100.strong",{
                           	 disabled: !Auth.canSubmit(),
                              onclick: Auth.login
              },"Log in"),
              m(".text-center.py-2",m("small.text-center.mt-3",m("a[href='#/forgot-pwd']","Forgot Password?"))),
              m(".split", m("span.or", "or")),
              m("button.btn.btn-success.btn-fill.w-100.strong",{onclick:()=> m.route.set("/signup") },"Create new Account")
			  ])			
	}
}

const Signup = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return m(ContainerAbsolute, {title: "Create a new RideRate account"},[
			  	   m(".form-group", 
	    	          m(Input,{type:"text",placeholder:"Username or Phone Number",value: Auth.username,oninput:(e)=>{ 
                      	 Auth.setUsername(e.target.value)
                     }}),
                  m(Input,{type:"tel",placeholder:"Phone Number",value: Auth.phonenumber,oninput:(e)=>{ 
                      	 Auth.setPhonenumber(e.target.value)
                     }}),
                  m(Input,{type:"password",placeholder:"Password",value: Auth.password,oninput:(e)=>{ 
                      	 Auth.setPassword(e.target.value)
                     }}),
	    	          // m("input.form-control.mb-3[type='text'][value=''][placeholder='Username']"),
	    	          // m("input.form-control.mb-3[type='text'][value=''][placeholder='Phone Number']"),
                  //     m("input.form-control.mb-3[type='password'][value=''][placeholder='Password']")
                   ),
                   m("button.btn.btn-primary.btn-fill.w-100.strong",{
                   	onclick:  Auth.signup
                   },"Sign Up"),
                   m(".text-center.py-3",m("small.text-center.mt-3",m("a[href='#/login']","Already have an account?")))
			  ])	
	}
}


const ForgotPwd = {
	oncreate:()=>{ $("body").addClass("bg") },
	view:()=>{
		return m(ContainerAbsolute, {title: "Please enter your mobile number to search for your account"},[
			  	   m("div.form-group", 
	    	          m("input.form-control.mb-3[type='text'][value=''][placeholder='Phone Number']")
              ),
              m("button.btn.btn-primary.btn-fill.w-100.strong.mb-3","Search"),
              m("button.btn.btn-transparent-50.w-100.strong",{onclick:()=>{
                  m.route.set("/login")
              }},"Back")
			  ])	
	}
}

const PageNotFound = {
	oncreate:()=>{ $("body").removeClass("bg") },
	view:()=>{
		return [
				m(".container[style='transform: translate(0,29.5%);z-index:9;position:relative']",[
				   m("h1.title","Error 404"),
				   m("h3.title","Page not fond")
				]),
				// m(".bg-overlay")
		]
	}
}

const UnderDev = {
    view:()=>{
      return m(".main",
        m("section", 
          m(".container.py-5", [
          	m(".space-50"),
          	m(".space-50"),
          	m(".space-50"),
          	m("div.wrap-icon[style='color:#898989;font-size:55px']", m("i.bx.bx-wrench")),
          	m("h3.text-center.text-muted", "This page is under development"),
          	m(".space-50"),
          	m(".space-50"),
          	m(".space-50"),
          	m(".space-50")
          ])
        )
     )
  }
}


const Dashboard = {
	oncreate:()=>{
		$("body").removeClass("bg");
		Model.sidebar = document.querySelector(".sidebar");
    Model.sidebarBtn = document.querySelector(".sidebarBtn");

    
    if(m.route.param("urlB") != "edit" || m.route.param("urlB") != "new"){
    	localStorage.clear("location")
    	localStorage.clear("rates")
    	localStorage.clear("vehicles")
    }   
	},
	view:(vnode)=>{
		return [
     m(".sidebar",[
       m(".logo-details",[
          m("i.bx.bx-car"),
          m("span.logo_name", "RideRate")
        ]),
      m("ul.nav-links",[
          m("li.showMenu", 
            m("a"+(m.route.param("urlA") == "dashboard"?".active":"")+"[href='#/u/dashboard']",[
                m("i.bx"+Model.icon.dashboard),
                m("span.links_name", "Dashboard")
              ]
            ),
            m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/dashboard']", "Dashboard")))
          ),
          m("li", m("a"+(m.route.param("urlA") == "location"?".active":"")+"[href='#/u/location']",[
                m("i.bx"+Model.icon.location),
                m("span.links_name", "Locations")
              ]
            ),
            m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/location']", "Location Entry")))
          ),
          m("li", m("a"+(m.route.param("urlA") == "parks"?".active":"")+"[href='#/u/parks']",[
                m("i.bx"+Model.icon.park),
                m("span.links_name", "Parks")
              ]
            ),
            m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/parks']", "Parks")))
          ),
          m("li", m("a"+(m.route.param("urlA") == "rates"?".active":"")+"[href='#/u/rates']",[
                m("i.bx"+Model.icon.rates),
                m("span.links_name", "Rates")
              ]
            ),
           m("ul.sub-menu.blank", m("li",m("a.link_name[href='#/u/rates']", "Rates Entry")))
          ),
          m("li", m("a"+(m.route.param("urlA") == "vehicles"?".active":"")+"[href='#/u/vehicles']",[
                m("i.bx"+Model.icon.vehicles),
                m("span.links_name", "Vehicles")
              ]
            ),
          m("ul.sub-menu.blank", m("li", m("a.link_name[href='#/u/vehicles]", "Vehicles entry")))
          ),
          // m("li", m("a[href='#']",[
          //       m("i.bx.bx-cog"),
          //       m("span.links_name", "Setting")
          //     ]
          //   )
          // ),
          m("li.log_out", m("a[href='#']",[
                m("i.bx"+Model.icon.logOut),
                m("span.links_name", "Log out")
              ]
            )
          )
        ]),
      m(".bg-overlay")
    ]), 
     m("section.main-section",[
     	  m(Nav),
     	  // m("div.close-sidebar-overlay",{onclick:()=>{ Model.closeSidebar()}}),
      	m.route.param("urlA") == "dashboard"?m(SectionDashboard)
       :m.route.param("urlA") == "location"?m(SectionLocation)
       :m.route.param("urlA") == "parks"?m(SectionParks)
       :m.route.param("urlA") == "rates"?m(SectionRates)
       :m.route.param("urlA") == "vehicles"?m(SectionVehicles)
       :m(SectionNotFound)
     ])  
    ]
	}
}

// index.js
// function load(file) {
//     return m.request({
//         method: "GET",
//         url: file,
//         extract: function(xhr) {
//         	// console.log(xhr.responseText)
//         	// var module = {};
//         	// return eval('var module = {};' + xhr.responseText + ';return module.exports;');
//             return Function("var module = {};" + xhr.responseText + ";return module.exports;")
//         }
//     })
// }

// Routes
m.route.prefix = '#'
m.route(document.body, "/", {
    "/": Home,
    "/check-rates": CheckRates,
    "/contact-us": ContactUs,
    "/about": About,
    "/privacy-policy": PrivacyPolicy,
    "/tac": Tac,
    "/login": Login,
    "/signup": Signup,
    "/forgot-pwd": ForgotPwd,
    // "/load": {
    //     onmatch: function() {
    //         return load("js/load.js")
    // $.getScript
    //     },
    // },
    "/u/:urlA": {onmatch: function() {
          return Auth.username != "" ? Dashboard : Login
        }},
    "/u/:urlA/:urlB": {onmatch: function() {
          return Auth.username != "" ? Dashboard : Login
        }},
    "/u:404...": {onmatch: function() {
          return Auth.username != "" ? Dashboard : Login
        }},
    "/:404...": PageNotFound
    // onmatch: function() {
    //         if (!localStorage.getItem("auth-token")) m.route.set("/login")
    //         else return Home
    //     }
})