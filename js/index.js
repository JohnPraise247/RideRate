//Todo 

//fix li hover for nav
//fix route to redirect /u/ to /u/dashbaord
//Desktop View for signin and login has duplicate background
//ADd AOS
//blm th backgnd (background issues on mobile )
//add auto suggest on input
//no results found for location search...
//fix ugly display for desktop mode on mobile
//add scroll to top btn    ---> https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


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
    colorIndex:-1,//controls how colors are picked
    colorClasses:[".icon-blue",".icon-green",".icon-yellow",".icon-red"],
    location:{
        list:[
            ["Oye/Ikole to Lagos","No Description . . ."],
            ["Oye/Ikole to Ogun","No Description . . ."],
            ["Oye/Ikole to Ondo","No Description . . ."],
            ["Oye/Ikole to Abuja","No Description . . ."],
            ["Oye/Ikole to Kogi","No Description . . ."],
            ["Oye/Ikole to Oyo","No Description . . ."],
            ["Oye/Ikole to Kwara","No Description . . ."],
            ["Oye/Ikole to Edo","No Description . . ."]
        ]
        // list:[]// list:[["Oye to Ikole","1.5 Hours Journey"],["Ado Ekiti to Ilorin","Description . . ."]],
    },
    rates:{
        list:[]// list:[["Oye to Ikole","1.5 Hours Journey"],["Ado Ekiti to Ilorin","Description . . ."]],
    },
    vehicles:{
        list:[]// list:[["Oye to Ikole","1.5 Hours Journey"],["Ado Ekiti to Ilorin","Description . . ."]],
    },
    newVehicle: !false,
    addNew:()=>{
           if(m.route.param("name") == "location"){
              Swal.fire({
                  titleText: 'New Location',
                  html:
                    '<input id="swal-input1" class="swal2-input form-control" type="text" placeholder="From">' +
                    '<input id="swal-input2" class="swal2-input form-control" type="text" placeholder="To">',
                  focusConfirm: false,
                  preConfirm: () => {
                    return (($("#swal-input1").val().trim().length > 0 && $("#swal-input1").val().trim().length > 0)? (Model.location.list.push([$("#swal-input1").val()+" to "+$("#swal-input2").val(),"No Descriptions . . ."]),m.redraw()):false)
                  },
                  confirmButtonText:"Add new Location",
                  showCancelButton: true,
                  confirmButtonColor:"#007bff",
                  reverseButtons:true,
                  buttonsStyling:false,
                  // allowEnterKey:true,
                  // focusConfirm:true,
                  customClass: {
                   confirmButton: "btn btn-sm btn-fill btn-primary",
                   cancelButton:"btn btn-sm btn-primary mr-2"
                  }
                  // ,footer:"cool"
               })
        }else if(m.route.param("name") == "rates"){
            Swal.fire({
                  titleText: 'New Rate',
                  html:
                    '<div class="form-group"><select class="form-control" id="SelectLocation"><option disabled>Select a location</option></select></div>' +
                    '<input id="swal-input1" class="swal2-input form-control" type="number" placeholder="Price 1">' +
                    '<input id="swal-input2" class="swal2-input form-control" type="number" placeholder="Price 2(Optional)">',
                  focusConfirm: false,
                  preConfirm: () => {
                    return ($("#swal-input1").val().trim().length > 0 && $("#swal-input2").val().trim().length > 0)? (Model.rates.list.push([$("#SelectLocation").val(),"₦"+$("#swal-input1").val()+" - ₦"+$("#swal-input2").val()]),m.redraw())
                           :($("#swal-input1").val().trim().length > 0)? (Model.rates.list.push([$("#SelectLocation").val(),"₦"+$("#swal-input1").val()]),m.redraw())
                           :false
                  
                    // console.log($("#SelectLocation").val())
                    // Model.location.list.push([document.getElementById('swal-input1').value+" to "+document.getElementById('swal-input2').value,"No Descriptions . . ."])
                    // m.redraw()
                  },
                  confirmButtonText:"Add new Rate",
                  showCancelButton: true,
                  confirmButtonColor:"#007bff",
                  reverseButtons:true,
                  buttonsStyling:false,
                  customClass: {
                   confirmButton: "btn btn-sm btn-fill btn-primary",
                   cancelButton:"btn btn-sm btn-primary mr-2"
                  },
                  didOpen:()=>{
                    for(i in Model.location.list){
                        $("#SelectLocation").append("<option value='"+Model.location.list[i][0]+"'>"+Model.location.list[i][0]+"</option>")
                    }
                  }
               })

        }else if(m.route.param("name") == "vehicles"){
            Model.newVehicle = true
        }
    },
    edit:(value)=>{
    // edit:(value,desc)=>{
        if(m.route.param("name") == "location"){
              Swal.fire({
                  titleText: 'Edit Location',
                  html:
                    '<input id="swal-input1" class="swal2-input form-control" type="text" placeholder="From" value='+value.slice(0,value.indexOf(" ")).trim()+'>' +
                    '<input id="swal-input2" class="swal2-input form-control" type="text" placeholder="To" value='+value.slice(value.lastIndexOf(" ")).trim()+'>',
                  focusConfirm: false,
                  preConfirm: () => {
                    let temp = []
                    let newValue = $("#swal-input1").val() +" to "+ $("#swal-input2").val();

                    Model.location.list.forEach((i)=>{
                        // console.log(i)
                        // console.log(value)
                        // console.log(i[j])
                        i[0] == value?temp.push([newValue,"No Description . . ."]):temp.push([i[0],"No Description . . ."])
                    })
                    Model.location.list = temp
                    m.redraw()
                    // console.log(temp)
                    // return ($("#swal-input1").val().trim().length > 0 && $("#swal-input1").val().trim().length > 0)? Model.location.list.push([$("#swal-input1").val()+" to "+$("#swal-input2").val(),"No Descriptions . . ."]):false
                  },
                  confirmButtonText:"Confirm Location",
                  showCancelButton: true,
                  confirmButtonColor:"#007bff",
                  reverseButtons:true,
                  buttonsStyling:false,
                  // allowEnterKey:true,
                  // focusConfirm:true,
                  customClass: {
                   confirmButton: "btn btn-sm btn-fill btn-primary",
                   cancelButton:"btn btn-sm btn-primary mr-2"
                  }
                  // ,footer:"cool"
               })
        }
    },
    setIconColor:()=>{
        // Model.colorIndex++;
        // if(j > 3) j = 0
        // return Model.colorClasses[j]
        Model.colorIndex++;
        if(Model.colorIndex > 3) Model.colorIndex = 0
        return Model.colorClasses[Model.colorIndex]
    },
    closeSidebar:()=>{
        window.innerWidth < 769?(Model.sidebar.classList.remove("active"),(Model.sidebar.classList.contains("active")?Model.sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right"):Model.sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu"))
                ):null
    }
}


//Force dashboard to show desktop view for mobile devices
// const initViewport = () =>{
//     $("meta[name=viewport]").remove()
//     m.route.param("name")!=undefined?$("head").prepend("<meta content='width=device-width, initial-scale=0.1, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />")//force fullscreen for mobile
//     :$("head").prepend("<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />")
//     m.redraw()
// }

// Navbar scroll
$(document).scroll(function() {
    if( $(this).scrollTop() > 150 ) {
        if(Model.transparent) {
            Model.transparent = false;
            $('nav[role="navigation"]').removeClass('navbar-transparent');
        }
    } else {
        if( !Model.transparent ) {
            Model.transparent = true;
            $('nav[role="navigation"]').addClass('navbar-transparent');
        }
    }
});

function scrollToAnchor( anchorName ){
    let is = (el)=>{return el !== undefined && el !== null};
    let targetEl = is(Model.anchor) ? document.querySelector("div[id='"+anchorName+"']") : document.body;
    // let targetEl = is(anchor) ? document.querySelector(anchorName) : document.body;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let target = is(targetEl) ? targetEl.getBoundingClientRect().top : 0;
    window.scroll({
        top: target + scrollTop - 70,
        left: 0,
        behavior: "smooth"
    });
}


//Close modal onback key
$(document).ready(function($) {
  if (window.history && window.history.pushState) {
    $(window).on('popstate', function() {
        Swal.isVisible()?Swal.close():null
    });
  }
});


$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 30);
    $(".img-src").css("filter", "blur("+oVal+"px)");
    
});

$(window).resize(function(){m.redraw()});

const getViewport = (index) =>{
    if(index == 0){
        return window.innerWidth < 767? ".text-center":".text-left"
    }else if(index == 1){
        return window.innerWidth > 769? ".d-flex.align-items-center":""
    }
}













// Bootstrap navbar function
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

}(jQuery);
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })
// f=function(b){a(b).on("click.bs.dropdown",this.toggle)};
// f.prototype.toggle=function(d){
//     var e=a(this);
//     if(!e.is(".disabled, :disabled")){
//         var f=c(e),g=f.hasClass("open");
//         if(b(),!g){
//             if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;
//             f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}
//         }


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
// })