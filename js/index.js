//Todo 

//fix li hover for nav
//fix route to redirect /u/ to /u/dashbaord
//Desktop View for signin and login has duplicate background
//ADd AOS
//blm th backgnd (background issues on mobile )
//add auto suggest on input
//no results found for location search...
//fix ugly display for desktop mode on mobile


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