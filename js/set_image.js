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
            var menuContent = document.querySelectorAll('.menucontent');

          removeButton.addEventListener('click', () => {
            var contentLayout = document.querySelector('#content_layout').getAttribute('visible');

            menuContent.forEach(function (node){
              node.setAttribute('visible', false);
            //document.querySelector('.menucontent').setAttribute('visible', false);
            document.querySelector('#content_layout').setAttribute('visible', false);
            //console.log(menuContent,"contentLayout");
            //console.log(node,"node");
            });
            
            return false;
          });
        },

        update: function(){
          var sceneE1 = document.querySelector('a-scene');
          var menuButton = document.querySelector('#menu_button');
          var helpButton = document.querySelector('#help_button');
          var janastuButton = document.querySelector('#janastu_button');
          var projectsButton = document.querySelector('#projects_button');
          var contactButton = document.querySelector('#contact_button');
          var locnButton = document.querySelector('#locn_button');
          var content = document.querySelectorAll('.menucontent');
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
             document.getElementById('menu_page').setAttribute('visible', false);
             document.getElementById('content_layout').setAttribute('visible', true);
             content.forEach(function(node){
              content[1].setAttribute('visible', true);
             });
          });

          //Projects Button click event
          projectsButton.addEventListener('click', ()=>{
            document.getElementById('menu_page').setAttribute('visible', false);
            console.log("projectsButton");
            //var projects = document.createElement('a-entity');
            //sceneE1.appendChild(projects);
            //Technology text entity
            var techno = document.createElement('a-entity');
            sceneE1.appendChild(techno);
            //projects.appendChild(techno);
            techno.setAttribute('position',{x:-4.361, y:2.138, z:-4.053});
            techno.setAttribute('text',{'value':'Technology','color':'red','align':'center','width':15});
            //Research text entity
            var research = document.createElement('a-entity');
            sceneE1.appendChild(research);
            research.setAttribute('position',{x:3.309, y:2.138, z:-4.053});
            research.setAttribute('text',{'value':'Research','color':'red','align':'center','width':15});
            //Serious game
            var entity1 = document.createElement('a-entity');
            var plane1 = document.createElement('a-plane');
            sceneE1.appendChild(entity1);
            entity1.appendChild(plane1);
            entity1.setAttribute('position',{x:-4.361, y:1.183, z:-4.053});
            entity1.setAttribute('scale',{x:0.5, y:0.5, z:0.5});
            plane1.setAttribute('geometry', {'height':2,
                                               'width':5.5,});
            plane1.setAttribute('text',{'value': 'Serious games','color':'black','align': 'center','width': 15});
            //Visual storytelling
            var entity2 = document.createElement('a-entity');
            var plane2 = document.createElement('a-plane');
            sceneE1.appendChild(entity2);
            entity2.appendChild(plane2);
            entity2.setAttribute('position',{x:-19.005, y:-1.996, z:-17.652});
            entity2.setAttribute('scale',{x:2, y:2, z:2});
            plane2.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane2.setAttribute('text',{'value': 'Visual storytelling','color':'black','align': 'center','width': 15});
            //WiFi Mesh
            var entity2 = document.createElement('a-entity');
            var plane2 = document.createElement('a-plane');
            sceneE1.appendChild(entity2);
            entity2.appendChild(plane2);
            entity2.setAttribute('position',{x:-19.012, y:-9.063, z:-17.652});
            entity2.setAttribute('scale',{x:2, y:2, z:2});
            plane2.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane2.setAttribute('text',{'value': 'WiFi Mesh','color':'black','align': 'center','width': 15});
           //Alipi
            var entity2 = document.createElement('a-entity');
            var plane2 = document.createElement('a-plane');
            sceneE1.appendChild(entity2);
            entity2.appendChild(plane2);
            entity2.setAttribute('position',{x:14.591, y:4.646, z:-17.652});
            entity2.setAttribute('scale',{x:2, y:2, z:2});
            plane2.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane2.setAttribute('text',{'value': 'Alipi','color':'black','align': 'center','width': 15});
             //Augment real space
            var entity2 = document.createElement('a-entity');
            var plane2 = document.createElement('a-plane');
            sceneE1.appendChild(entity2);
            entity2.appendChild(plane2);
            entity2.setAttribute('position',{x:14.591, y:-1.972, z:-17.652});
            entity2.setAttribute('scale',{x:2, y:2, z:2});
            plane2.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane2.setAttribute('text',{'value': 'Augment real space','color':'black','align': 'center','width': 15});
            //Semantic web
            var entity2 = document.createElement('a-entity');
            var plane2 = document.createElement('a-plane');
            sceneE1.appendChild(entity2);
            entity2.appendChild(plane2);
            entity2.setAttribute('position',{x:14.591, y:-9.063, z:-17.652});
            entity2.setAttribute('scale',{x:2, y:2, z:2});
            plane2.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane2.setAttribute('text',{'value': 'Semantic web','color':'black','align': 'center','width': 15});
          });
        
        //Contact Button click event
        contactButton.addEventListener('click',()=>{
           document.getElementById('menu_page').setAttribute('visible', false);
             document.getElementById('content_layout').setAttribute('visible', true);
           content.forEach(function(node){
              content[2].setAttribute('visible', true);
             });
        }) 

          //Help Button
          helpButton.addEventListener('click',()=>{
            document.getElementById('content_layout').setAttribute('visible', true);
             content.forEach(function(node){
              content[3].setAttribute('visible', true);
             });
          })
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