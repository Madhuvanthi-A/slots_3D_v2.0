//Visibility toggle
    AFRAME.registerComponent('splash', {
      init: function () {
        var go = document.querySelector('#go_button');//initializing go button entity
        var menu = document.querySelector('#home_page');//initializing home page entity
        var pano = document.querySelector('#pano360');
        var officeView = document.querySelector('#office_view');
        //go button click event
        go.addEventListener('click', () => { 
        menu.setAttribute('visible', true);//toggle visibility
        pano.setAttribute('visible', true);
        officeView.setAttribute('visible', true);
        });

        
      }
    });

//360 Navigation
AFRAME.registerComponent('pano_nav', {
  init: function () {
    var officeNav = document.querySelector('#office_nav');//initializing gateway_nav button entity
    var doorwayNav = document.querySelector('#doorway_nav');
    var gatewayNav = document.querySelector('#gateway_nav');
    var officeView = document.querySelector('#office_view');
    //360 pano
    var officepanoView = document.querySelector('#officepanoview');
    var frontoffpanoView = document.querySelector('#frontoffpanoview');
    var doorpanoView = document.querySelector('#doorpanoview');
    var gatewaypanoView = document.querySelector('#gatewaypanoview');

    /*
    document.querySelector('#office_nav').addEventListener('mouseenter',function(){
      document.querySelector('#ff_text').setAttribute('visible',true);
      console.log("ff_text");
    });*/
    //gateway Nav button click event
    officeNav.addEventListener('click', () => { 
    officeView.setAttribute('visible', false);
    officepanoView.setAttribute('visible', false);
    frontoffpanoView.setAttribute('visible', true);
    //skyView.setAttribute('rotation',{x:0.658, y:-120.986, z:0.262});
    officeNav.setAttribute('visible', false);
    console.log("officeNav");
    officeView.setAttribute('visible', false);
    doorwayNav.setAttribute('visible', true);
    });
    //doorway Nav button click event
    doorwayNav.addEventListener('click', ()=>{
      //skyView.setAttribute('src', '#doorway');
      //skyView.setAttribute('rotation',{x:-1.259, y:-81.600, z:7.516});
      doorwayNav.setAttribute('visible', false);
      frontoffpanoView.setAttribute('visible', false);
      doorpanoView.setAttribute('visible', true);
      console.log("doorwayNav");
      gatewayNav.setAttribute('visible', true);
    });
    //front office Nav button click event
    gatewayNav.addEventListener('click',()=>{
      //skyView.setAttribute('src', '#gateway');
      console.log("frontoffNav");
      gatewayNav.setAttribute('visible', false);
      doorpanoView.setAttribute('visible', false);
      gatewaypanoView.setAttribute('visible', true);
      officeView.setAttribute('visible', false);
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
          var homeContent = document.querySelector('#homecontent')
          var menuButton = document.querySelector('#menu_button');
          var helpButton = document.querySelector('#help_button');
          var janastuButton = document.querySelector('#janastu_button');
          var projectsButton = document.querySelector('#projects_button');
          var contactButton = document.querySelector('#contact_button');
          var locnButton = document.querySelector('#locn_button');
          var content = document.querySelectorAll('.menucontent');
          var craftButton = document.querySelector('#craft_button');
          var dataRemove = document.querySelector('#data_remove');
          var patacitraButton = document.querySelector('#patacitra_button');
          var dataInfo = document.querySelectorAll('.data_info');
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
        }) ;

          //Help Button
          helpButton.addEventListener('click',()=>{
            document.getElementById('content_layout').setAttribute('visible', true);
             content.forEach(function(node){
              content[3].setAttribute('visible', true);
             });
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
          //craft button click
          craftButton.addEventListener('click',()=>{
             document.getElementById('data_layout').setAttribute('visible', true);
             document.getElementById('craft_data').setAttribute('visible', true);
             document.getElementById('home_page').setAttribute('visible', false);
            console.log("craftlayout");
          });

          patacitraButton.addEventListener('click',()=>{
            document.getElementById('data_layout').setAttribute('visible', true);
             document.getElementById('patrachitra_data').setAttribute('visible', true);
             document.getElementById('home_page').setAttribute('visible', false);
          })

          dataRemove.addEventListener('click',()=>{
            document.getElementById('data_layout').setAttribute('visible', false);
            //document.getElementById('craft_data').setAttribute('visible', false);
            dataInfo.forEach(function (node){
              node.setAttribute('visible', false);
            //document.querySelector('.menucontent').setAttribute('visible', false);
            document.querySelector('#content_layout').setAttribute('visible', false);
            //console.log(menuContent,"contentLayout");
            //console.log(node,"node");
            });
            
            return false;
            document.getElementById('home_page').setAttribute('visible', true);
          });
          //document.getElementById('someplane').style.width="13"
        }
    });    

/*Craft canvas*/
    AFRAME.registerComponent('officeCanvas', {
        schema: {
          across: {type: 'int', default: 3},
          down: {type: 'int', default: 3},
        },
        init: function () {
          const data = this.data;
          const across = data.across;
          const down = data.down;
          const needed = across * down;
          let id = 0;
          for (let i = 0; i < needed; ++i) {
            const canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 256;
            canvas.id = `c${id++}`;
            document.body.appendChild(canvas);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = `hsl(${i / needed * 360 | 0}deg,100%,50%)`;
            ctx.fillRect(0, 0, 256, 256);
            ctx.fillStyle = `hsl(${Math.random() * 360 | 0}deg,100%,80%)`;
            ctx.fillStyle = 'black';
            ctx.font = '200px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(i, 128, 128);
            const elem = document.createElement('a-entity');
            elem.setAttribute('geometry', {
              primitive: 'plane',
              height: 1,
              width: 1,
            });
            elem.setAttribute('material', {
              shader: 'flat',
              src: `#${canvas.id}`,
            });
            this.el.appendChild(elem);
            const x = i % across;
            const y = i / across | 0;
            const u = x / (across - 1);
            const v = y / (down - 1);
            const px = across * (u - .5);
            const py = down * (v - .5);
            const pz = 0;
            elem.setAttribute('position', {x: px, y: py, z: pz});
          }
        }
    });