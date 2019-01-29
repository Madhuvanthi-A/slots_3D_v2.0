//Visibility toggle
    AFRAME.registerComponent('splash', {
      init: function () {
        var go = document.querySelector('#go_button');//initializing go button entity
        var menu = document.querySelector('#home_page');//initializing home page entity
    
        //go button click event
        go.addEventListener('click', () => { 

        //go.setAttribute('visible', false);//toggle visibility
        menu.setAttribute('visible', true);//toggle visibility
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