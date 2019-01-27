

   AFRAME.registerComponent('foo', {
  init: function () {
    var play = document.querySelector('#go_button');
    play.addEventListener('click', () => { 
      var menu = document.querySelector('#home_page');
      var logo = document.querySelector('#splash');
      logo.setAttribute('visible', false);
      menu.setAttribute('visible', true);
      })
  }
});
  
  /* AFRAME.registerComponent('a-scene', {

     init: function () {
       /*var logoscale = document.querySelector('#set-logo');

       this.e1.addEventListener('loaded',(e)=>{
        logoscale.emit('first');
       })

       document.querySelector('#logo_scale').addEventListener('animationend', (e)=>{
        logoscale=emit('second');
       })*/
       

       /*var sceneE1 = document.querySelector('a-scene');// initializing a-sence
       AFRAME.registerComponent('do-something-once-loaded',{
        init: function(){
          console.log('i am ready');
        }
       });

       console.log("inside a sceneE1");
       var entityE1 = document.createElement('a-entity');//create an entity
       sceneE1.appendChild(entityE1)//append the entity to our scene

       entityE1.setAttribute('geometry',{
        primitive: 'box'
        height: 3,
        width: 1
       });
       entityE1.setAttribute('position',{x:1, y:2, z:-3});*
     }
   });  */

  /* 
   AFRAME.registerComponent('solarsystem', {
    schema:{
      numberOfPlanets:{
        type: 'int',
        default: 1
      },
      moving:{
        type: 'boolean',
        default: true
      }
    },
    init: function(){
      var sun = document.createElement('a-entity')
      sun.setAttribute('geometry', 'primitive: plane')
      sun.setAttribute('material', 'emissive : yellow')
      this.el.appendChild(sun)
    },
    update: function(){
      console.log('updating solarsystem');
    }
   });*/