//Visibility toggle
    AFRAME.registerComponent('splash', {
      init: function () {
        var go = document.querySelector('#go_button');//initializing go button entity
        var menu = document.querySelector('#home_page');//initializing home page entity
        var pano = document.querySelector('#pano360');
        //go button click event
        go.addEventListener('click', () => { 
        menu.setAttribute('visible', true);//toggle visibility
        pano.setAttribute('visible', true);
        });

        
      }
    });

//360 Navigation
AFRAME.registerComponent('pano_nav', {
  init: function () {
    var gatewayNav = document.querySelector('#gateway_nav');//initializing gateway_nav button entity
    var gatewayEntrance = document.querySelector('#gateway_entrance');
    var doorwayNav = document.querySelector('#doorway_nav');
    var frontoffNav = document.querySelector('#front_office_nav');
    var officeView = document.querySelector('#office_view');
    //gateway Nav button click event
    gatewayNav.addEventListener('click', () => { 
    gatewayEntrance.setAttribute('src', '#doorway');
    gatewayEntrance.setAttribute('rotation',{x:-1.259, y:-81.600, z:7.516});
    gatewayNav.setAttribute('visible', false);
    doorwayNav.setAttribute('visible', true);
    });
    //doorway Nav button click event
    doorwayNav.addEventListener('click', ()=>{
      gatewayEntrance.setAttribute('src', '#frontoffice');
      gatewayEntrance.setAttribute('rotation',{x:0.658, y:-120.986, z:0.262});
      doorwayNav.setAttribute('visible', false);
      frontoffNav.setAttribute('visible', true);
    });
    //front office Nav button click event
    frontoffNav.addEventListener('click',()=>{
      gatewayEntrance.setAttribute('src', '#office');
      frontoffNav.setAttribute('visible', false);
      officeView.setAttribute('visible', true);
    });
    
  }
});

//3D box
    AFRAME.registerComponent('wireframe', {
        dependencies: ['material'],
        init: function () {
        this.el.components.material.material.wireframe = true;
        }
    });

//Site Content
    AFRAME.registerComponent('homescreen', {
        //dependencies: ['material'],
        init: function () {
          var removeButton = document.querySelector('#remove_button');

          removeButton.addEventListener('click', () => {
            var contentLayout = document.querySelector('#content_layout').getAttribute('visible');
            var menuContent = document.querySelectorAll('.menucontent');

            menuContent.forEach(function (node){
            document.querySelector('.menucontent').setAttribute('visible', false);
            document.querySelector('#content_layout').setAttribute('visible', false);
            console.log(menuContent,"contentLayout");
            console.log(node,"node");
            });
            
            return false;
          });
        },

        update: function(){
          var sceneE1 = document.querySelector('a-scene');
          var menuButton = document.querySelector('#menu_button');
          var janastuButton = document.querySelector('#janastu_button');
          var projectsButton = document.querySelector('#projects_button');
          var locnButton = document.querySelector('#locn_button');
          //var contentBg = document.getElementById('contentbg');
          
          //Menu Button click event
          menuButton.addEventListener('click', ()=>{
            var menuPage = document.getElementById('menu_page').getAttribute('visible');
            //console.log(menuPage);
            //menuPage.setAttribute('visible', true);
            if (menuPage == true) {
              document.getElementById('menu_page').setAttribute('visible', false);
            } else{
              document.getElementById('menu_page').setAttribute('visible', true);
            }
          });

          //Janastu Button click event
          janastuButton.addEventListener('click', ()=>{
             //console.log(contentBg,"contentBg");
             var janastuContent = document.querySelectorAll('.menucontent');
             //console.log(janastuContent);
             document.getElementById('menu_page').setAttribute('visible', false);
             document.getElementById('content_layout').setAttribute('visible', true);
             //document.querySelector('.menucontent').setAttribute('visible', true);
             //janastuContent.setAttribute('visible', true);
             //document.getElementById('janastu_content').setAttribute('visible', true);
             janastuContent.forEach(function(node){
              var janastu = document.getElementById('janastu_content').getAttribute('visible');
              document.querySelector('#janastu_content').setAttribute('visible', true);
               console.log(janastu);
             })
          });

          //Projects Button click event
          projectsButton.addEventListener('click', ()=>{
            document.getElementById('menu_page').setAttribute('visible', false);
            console.log("projectsButton");

            var entityel = document.createElement('a-entity');
            var plane = document.createElement('a-plane');
            sceneE1.appendChild(entityel);
            entityel.appendChild(plane);
            entityel.setAttribute('position',{x:-4.665, y:1.708, z:-4.053});
            entityel.setAttribute('scale',{x:0.189, y:0.177, z:1.000});
            plane.setAttribute('geometry', {'height':2.720,
                                               'width':9.950,});
            plane.setAttribute('text',{'value': 'Serious games','color':'black','align': 'center','width': 8});
          });

          //Map function
          /*locnButton.addEventListener('click', ()=>{
            function initMap(){
            document.getElementById('map').setAttribute('visible', true);
            // The location of Uluru
            var uluru = {lat: -25.344, lng: 131.036};
            //The map center at uluru
            var map = new google.maps.Map(
              document.getElementById('map'),{zoom: 4, center: uluru});
            //The marker, positioned at uluru
            var marker = new google.maps.Marker({position: uluru, map: map});
            console.log("map location")
          };*/
        }
    });    