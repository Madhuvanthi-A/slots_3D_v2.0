//Visibility toggle
    AFRAME.registerComponent('splash', {
      init: function () {
        var go = document.querySelector('#go_button');//initializing go button entity
        var menu = document.querySelector('#home_page');//initializing home page entity
        //go button click event
        go.addEventListener('click', () => { 
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

//Site Content
    AFRAME.registerComponent('homescreen', {
        //dependencies: ['material'],
        init: function () {
          var backgroundLayout = document.querySelector('#bg_layout');
          var aboutContent = document.querySelector('#about_content')
          var removeButton = document.querySelector('#remove_button');

        removeButton.addEventListener('click', () => {
          backgroundLayout.setAttribute('visible', false);
          aboutContent.setAttribute('visible', false);
          console.log('removeButton');
        });
        }
    });    