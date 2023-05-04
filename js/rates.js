/* ================================
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


