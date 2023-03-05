const NavBar = {
	view:()=>{
	  return m("nav.navbar.navbar-transparent.navbar-fixed-top[role='navigation']", 
  m("div.container",
    [
      m("div.navbar-header", 
        m("button.navbar-toggle[type='button'][data-toggle='collapse'][data-target='#bs-example-navbar-collapse-1']",
          [
            m("span.sr-only", 
              "Toggle navigation"
            ),
            m("span.icon-bar"),
            m("span.icon-bar"),
            m("span.icon-bar")
          ]
        )
      ),
      m(".collapse.navbar-collapse[id='bs-example-navbar-collapse-1']",
        [
          m("ul.nav.navbar-nav", 
            m("li.dropdown",
              [
                m("a.dropdown-toggle[href='#'][data-toggle='dropdown']",
                  [
                    m("img[src='images/flags/US.png']"),
                    " English(US) ",
                    m("b.caret")
                  ]
                ),
                m("ul.dropdown-menu",
                  [
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/DE.png']"),
                          " Deutsch"
                        ]
                      )
                    ),
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/GB.png']"),
                          " English(UK)"
                        ]
                      )
                    ),
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/FR.png']"),
                          " Français"
                        ]
                      )
                    ),
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/RO.png']"),
                          " Română"
                        ]
                      )
                    ),
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/IT.png']"),
                          " Italiano"
                        ]
                      )
                    ),
                    m("li.divider"),
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/ES.png']"),
                          " Español ",
                          m("span.label.label-default", 
                            "soon"
                          )
                        ]
                      )
                    ),
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/BR.png']"),
                          " Português ",
                          m("span.label.label-default", 
                            "soon"
                          )
                        ]
                      )
                    ),
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/JP.png']"),
                          " 日本語 ",
                          m("span.label.label-default", 
                            "soon"
                          )
                        ]
                      )
                    ),
                    m("li", 
                      m("a[href='#']",
                        [
                          m("img[src='images/flags/TR.png']"),
                          " Türkçe ",
                          m("span.label.label-default", 
                            "soon"
                          )
                        ]
                      )
                    )
                  ]
                )
              ]
            )
          ),
          m("ul.nav.navbar-nav.navbar-right",
            [
              m("li", 
                m("a[href='#'].active",
                  [
                    m("i.fa.fa-home"),
                    " Home "
                  ]
                )
              ),
              m("li", 
                m("a[href='#']",
                  [
                    m("i.fa.fa-info-circle"),
                    " About "
                  ]
                )
              ),
              m("li", 
                m("a[href='#']",
                  [
                    m("i.fa.fa-envelope"),
                    " Contact "
                  ]
                )
              ), m("li.nav-item", m("a.btn.btn-info.xbtn-fill.navbar-btnx[href='/signup']", "SignUp"))
            ]
          )
        ]
      )
    ]
  )
)
	}
}


const PageHeader = {
	view:()=>{
	  return m("div.main", {"style":{"background-image":"url('images/bg.jpeg')"}},
  [
    m(".cover.blue[data-color='blue']"),
    m("div.container",
      [
        m("h1.logo.cursive", 
          " RideRate "
        ),
        m("div.content",
          [
            m("h4.motto", 
              "Get the Best Deal on Your Next Ride with RideRate"
            ),
            m("div.subscribe",
              [
                m("h5.info-text", 
                  " Join the waiting list for the beta. We keep you posted. "
                ),
                m("div.row", 
                  m("div.col-md-4.col-md-offset-4.col-sm6-6.col-sm-offset-3.", 
                    m("form.form-inline[role='form']",
                      [
                        m("div.form-group",
                          [
                            m("label.sr-only[for='exampleInputEmail2']", 
                              "Email address"
                            ),
                            m("input.form-control.transparent[type='email'][placeholder='Your email here...']")
                          ]
                        ),
                        m("button.btn.btn-danger.btn-fill[type='submit']", 
                          "Notify Me"
                        )
                      ]
                    )
                  )
                )
              ]
            )
          ]
        )
      ]
    ),
    m("div.footer", 
      m("div.container",
        [
          // " Made with ",
          // m("i.fa.fa-heart.heart"),
          // " by ",
          // m("a[href='http://www.creative-tim.com']", 
          //   "Creative Tim"
          // ),
          // ". Free download ",
          // m("a[href='http://www.creative-tim.com/product/coming-sssoon-page']", 
          //   "here."
          // )
        ]
      )
    )
  ]
)
	}
}