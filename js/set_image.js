
document.onload = (function(){


//Global Elements
// Initial Launch screen and button
var go = document.querySelector('#go_button');
// All menu and action buttons
var menu = document.querySelector('#menu_tray');
//The first sphere and pano of the tour
var firstPano = document.querySelector('#launch-first-sky');
// Rest of the pano sphere's and their respective action buttons
//[TODO: rename all id's and variable appropriately]
var gatewayNav = document.querySelector('#gateway_nav');//initializing gateway_nav button entity
var gatewayEntrance = document.querySelector('#gateway_entrance');
var doorwayNav = document.querySelector('#doorway_nav');
var frontoffNav = document.querySelector('#front_office_nav');
var officeView = document.querySelector('#office_view');

var removeButton = document.querySelector('#remove_button');
var menuContent = document.querySelectorAll('.menucontent');


var sceneE1 = document.querySelector('a-scene');
var homeContent = document.querySelector('#homecontent')
var menuButton = document.querySelector('#menu_button');
var helpButton = document.querySelector('#help_button');
var janastuButton = document.querySelector('#janastu_button');
var projectsButton = document.querySelector('#projects_button');
var contactButton = document.querySelector('#contact_button');
var locnButton = document.querySelector('#locn_button');
var content = document.querySelectorAll('.menucontent');


var menuPage = document.getElementById('menu_page').getAttribute('visible');

// LIST OF VIRTUAL LOCATIONS
var locations = ["LAUNCH", "GATEWAY", "ENTRANCE", "CYCLE", "OFFICE"];
// ACTIONS THAT TRIGGER CHANGE IN SCENE
var actions = ["LOAD", "GO_TO_GATEWAY", "GO_TO_ENTRANCE", 
                "GO_TO_CYCLE", "GO_TO_OFFICE"]

//Splash screen component
    AFRAME.registerComponent('splash', {
      init: function () {
        console.log("init", go);
       
        //go button click event
        go.addEventListener('click', () => { 
        menu.setAttribute('visible', true);//toggle visibility
        firstPano.setAttribute('visible', true);
        });

        
      }
    });

//360 Navigation
AFRAME.registerComponent('pano_nav', {
  init: function () {
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

//blue 3D boxes dropping on the table
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
        /*  var removeButton = document.querySelector('#remove_button');
            var menuContent = document.querySelectorAll('.menucontent');*/

          removeButton.addEventListener('click', () => {
            //[TODO]: do same thing as i've done for the menuPage variable
            var contentLayout = document.querySelector('#content_layout').getAttribute('visible');

            menuContent.forEach(function (node){
              node.setAttribute('visible', false);
            //document.querySelector('.menucontent').setAttribute('visible', false);
            document.querySelector('#content_layout').setAttribute('visible', false);
            //console.log(menuContent,"contentLayout");
            console.log(node,"node");
            });
            
            return false;
          });
        },

        update: function(){
         /* var sceneE1 = document.querySelector('a-scene');
          var homeContent = document.querySelector('#homecontent')
          var menuButton = document.querySelector('#menu_button');
          var helpButton = document.querySelector('#help_button');
          var janastuButton = document.querySelector('#janastu_button');
          var projectsButton = document.querySelector('#projects_button');
          var contactButton = document.querySelector('#contact_button');
          var locnButton = document.querySelector('#locn_button');
          var content = document.querySelectorAll('.menucontent');
          //var contentBg = document.getElementById('contentbg');*/
          
          //Menu Button click event
          // [TODO]: when u have a reference variable menuPage,
          // you need not query the document api in the if else block
          menuButton.addEventListener('click', ()=>{
            //[MOVING THIS TO GLOBAL]var menuPage = document.getElementById('menu_page').getAttribute('visible');
            //console.log(menuPage);
            //menuPage.setAttribute('visible', true);
            if (menuPage == true) {
                menuPage.setAttribute('visible', false);
             // document.getElementById('menu_page').setAttribute('visible', false);
            } else{
              menuPage.setAttribute('visible', true);
              // document.getElementById('menu_page').setAttribute('visible', true);
            }
          });

          //Janastu Button click event
          janastuButton.addEventListener('click', ()=>{
            menuPage.setAttribute('visible', false);
             //document.getElementById('menu_page').setAttribute('visible', false);
             document.getElementById('content_layout').setAttribute('visible', true);
             content.forEach(function(node){
              content[1].setAttribute('visible', true);
             });
          });

          //Projects Button click event
          projectsButton.addEventListener('click', ()=>{
            menuPage.setAttribute('visible', false);
            console.log("projectsButton");
            //var projects = document.createElement('a-entity');
            //sceneE1.appendChild(projects);
            //Technology text entity
            var techno = document.createElement('a-entity');
            sceneE1.appendChild(techno);
            homeContent.appendChild(techno);
            //projects.appendChild(techno);
            techno.setAttribute('position',{x:-4.361, y:2.138, z:-4.053});
            techno.setAttribute('text',{'value':'Technology','color':'red','align':'center','width':15});
            //Research text entity
            var research = document.createElement('a-entity');
            sceneE1.appendChild(research);
            homeContent.appendChild(research);
            research.setAttribute('position',{x:3.309, y:2.138, z:-4.053});
            research.setAttribute('text',{'value':'Research','color':'red','align':'center','width':15});
            //Serious game
            var entity1 = document.createElement('a-entity');
            var plane1 = document.createElement('a-plane');
            sceneE1.appendChild(entity1);
            homeContent.appendChild(entity1);
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
            homeContent.appendChild(entity2);
            entity2.appendChild(plane2);
            entity2.setAttribute('position',{x:-19.005, y:-1.996, z:-17.652});
            entity2.setAttribute('scale',{x:2, y:2, z:2});
            plane2.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane2.setAttribute('text',{'value': 'Visual storytelling','color':'black','align': 'center','width': 15});
            //WiFi Mesh
            var entity3 = document.createElement('a-entity');
            var plane3 = document.createElement('a-plane');
            sceneE1.appendChild(entity3);
            homeContent.appendChild(entity3);
            entity3.appendChild(plane3);
            entity3.setAttribute('position',{x:-19.012, y:-9.063, z:-17.652});
            entity3.setAttribute('scale',{x:2, y:2, z:2});
            plane3.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane3.setAttribute('text',{'value': 'WiFi Mesh','color':'black','align': 'center','width': 15});
           //Alipi
            var entity4 = document.createElement('a-entity');
            var plane4 = document.createElement('a-plane');
            sceneE1.appendChild(entity4);
            homeContent.appendChild(entity4);
            entity4.appendChild(plane4);
            entity4.setAttribute('position',{x:14.591, y:4.646, z:-17.652});
            entity4.setAttribute('scale',{x:2, y:2, z:2});
            plane4.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane4.setAttribute('text',{'value': 'Alipi','color':'black','align': 'center','width': 15});
             //Augment real space
            var entity5 = document.createElement('a-entity');
            var plane5 = document.createElement('a-plane');
            sceneE1.appendChild(entity5);
            homeContent.appendChild(entity5);
            entity5.appendChild(plane5);
            entity5.setAttribute('position',{x:14.591, y:-1.972, z:-17.652});
            entity5.setAttribute('scale',{x:2, y:2, z:2});
            plane5.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane5.setAttribute('text',{'value': 'Augment real space','color':'black','align': 'center','width': 15});
            //Semantic web
            var entity6 = document.createElement('a-entity');
            var plane6 = document.createElement('a-plane');
            sceneE1.appendChild(entity6);
            homeContent.appendChild(entity6);
            entity6.appendChild(plane6);
            entity6.setAttribute('position',{x:14.591, y:-9.063, z:-17.652});
            entity6.setAttribute('scale',{x:2, y:2, z:2});
            plane6.setAttribute('geometry', {'height':2,
                                               'width':6,});
            plane6.setAttribute('text',{'value': 'Semantic web','color':'black','align': 'center','width': 15});
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

})();