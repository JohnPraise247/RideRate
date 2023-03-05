const NavBar = {
	view:()=>{
	  return m("nav.navbar.navbar-expand-lg.fixed-top.navbar-transparent.[color-on-scroll='300']", 
     m("div.container",
       [
         m("div.navbar-translate",
           [
             m("a.navbar-brand[href='#']", " RideRate "),
             m("button.navbar-toggler.navbar-toggler[type='button'][data-toggle='collapse'][data-target='#navigation'][aria-controls='navigation-index'][aria-expanded='false'][aria-label='Toggle navigation']",
               [
                 m("span.navbar-toggler-bar.bar1"),
                 m("span.navbar-toggler-bar.bar2"),
                 m("span.navbar-toggler-bar.bar3")
               ]
             )
           ]
         ),
         m(".collapse.navbar-collapse.justify-content-end[id='navigation']", 
           m("ul.navbar-nav",
             [
               m("li.nav-item", 
                 m("a.nav-link[href='/home']",
                   [
                     m("i.fa.fa-home"),
                     m("p", "Home")
                   ]
                 )
               ),m("li.nav-item", 
                 m("a.nav-link[href='/contact-us']",
                   [
                     m("i.fa.fa-envelope"),
                     m("p", "Contact")
                   ]
                 )
               ),m("li.nav-item", 
                 m("a.nav-link[href='/about']",
                   [
                     m("i.fa.fa-info-circle"),
                     m("p", "About")
                   ]
                 )
               ),
               m("li.nav-item", m("a.btn.btn-info.btn-round[href='#']", "SignUp"))
             ])
          )
       ])
      )
	}
}


const PageHeader = {
	view:()=>{
	  return m("div.page-header.section-dark", {"style":{"background-image":"url('./img/test.png')"}},[
         m("div.filter"),
         m("div.content-center", m("div.container",
           [
             m("div.title-brand",
               [
                 m("h1.presentation-title", "Get the Best Deal"),
                 m("div.fog-low", 
                   m("img[src='./assets/img/fog-low.png'][alt='']")
                 ),
                 m("div.fog-low.right", 
                   m("img[src='./assets/img/fog-low.png'][alt='']")
                 )
               ]
             ),
             m("h2.presentation-subtitle.text-center", 
               "Make your mark with a Free Bootstrap 4 UI Kit! "
             )
           ]
         )
        ),
       m("div.moving-clouds", {"style":{"background-image":"url('./assets/img/clouds.png')"}}),
       m("h6.category.category-absolute",
         [
           "Designed and coded by ",
           m("a[href='#']", 
             m("img.creative-tim-logo[src='./assets/img/creative-tim-white-slim2.png']")
           )
         ]
       )
     ])
	}
}