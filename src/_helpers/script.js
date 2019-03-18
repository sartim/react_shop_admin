import * as M from "../../assets/js/materialize.min";
import React, { Component } from "react";
import io from "socket.io-client";

export default class Script {

    static custom() {
        const custom_script = document.createElement("script");
        custom_script.src = "/assets/js/custom.js";
        document.body.appendChild(custom_script);
    }

    static autocomplete() {
        let elems = document.querySelectorAll('.autocomplete');
        let options = {
            data: {
               "Apple": null,
                "Microsoft": null,
                "Google": 'https://placehold.it/250x250'
            }
        };
        let instances = M.Autocomplete.init(elems, options);
    }

    static fab () {
        let elems = document.querySelectorAll('.fixed-action-btn');
        let options = {};
        let instances = M.FloatingActionButton.init(elems, options);
    }

    static collapse() {
        let elems = document.querySelectorAll('.collapsible');
        let options = {};
        let instances = M.Collapsible.init(elems, options);
    }

    static toggle() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        let options = {};
        let instances = M.Dropdown.init(elems, options);
    }

    static modal() {
        let elems = document.querySelectorAll('.modal');
        let options = {};
        let instances = M.Modal.init(elems, options);
    }

    static select() {
        let elems = document.querySelectorAll('select');
        let options = {};
        let instances = M.FormSelect.init(elems, options);
    }

    static toggleLeftSideNav () {
        let elems = document.querySelectorAll('.side-nav');
        let options = {};
        let instances = M.Sidenav.init(elems, options);
    }

    static toggRightSideNav () {
        console.log("toggRightSideNav")
        let elems = document.querySelectorAll('.sidenav');

        let options = {
            edge: 'right'
        };
        let instances = M.Sidenav.init(elems, options);
    }

    static maximizeSideNav(e) {
        // e.preventDefault();
        // document.getElementById('left-sidebar-nav').classList.toggle('nav-expanded');
    }

    static minimizeSideNav(e) {
        e.preventDefault();
        document.getElementById('left-sidebar-nav').classList.toggle('nav-collapsed');
        document.getElementById('main').classList.toggle('main-full');
    }

    static tabs() {
        let elems = document.querySelectorAll('.tabs');
        let options = {};
        let instance = M.Tabs.init(elems, options);
    }

    static tab() {
        // TOGGLE SECTIONS
        // querySelector, jQuery style
        let $ = function (selector) {
            return document.querySelectorAll(selector);
        };


        // Define tabs, write down them classes
        let tabs = [
            '.tabbed-section__selector-tab-1',
            '.tabbed-section__selector-tab-2',
            // '.tabbed-section__selector-tab-3'
        ];

        // Create the toggle function
        let toggleTab = function(element) {
          let parent = element.parentNode;

          // Do things on click
          $(element)[0].addEventListener('click', function(){
              // Remove the active class on all tabs.
              // climbing up the DOM tree with `parentNode` and target
              // the children ( the tabs ) with childNodes
              this.parentNode.childNodes[0].classList.remove('active');
              this.parentNode.childNodes[1].classList.remove('active');
              this.parentNode.childNodes[2].classList.remove('active');

              // Then, give `this` (the clicked tab), the active class
              this.classList.add('active');

              // Check if the clicked tab contains the class of the 1 or 2
              if(this.classList.contains('tabbed-section__selector-tab-1')) {
                  // and change the classes, show the first content panel
                  $('.tabbed-section-1')[0].classList.remove('hidden');
                  $('.tabbed-section-1')[0].classList.add('visible');

                  // Hide the second
                  $('.tabbed-section-2')[0].classList.remove('visible');
                  $('.tabbed-section-2')[0].classList.add('hidden');
                  // $('.tabbed-section-3')[0].classList.remove('visible');
                  // $('.tabbed-section-3')[0].classList.add('hidden');
              }

              if(this.classList.contains('tabbed-section__selector-tab-2')) {
                  // and change the classes, show the second content panel
                  $('.tabbed-section-2')[0].classList.remove('hidden');
                  $('.tabbed-section-2')[0].classList.add('visible');
                  // Hide the first
                  $('.tabbed-section-1')[0].classList.remove('visible');
                  $('.tabbed-section-1')[0].classList.add('hidden');
                  // $('.tabbed-section-3')[0].classList.remove('visible');
                  // $('.tabbed-section-3')[0].classList.add('hidden');
              }

              if(this.classList.contains('tabbed-section__selector-tab-3')) {
                  // and change the classes, show the second content panel
                  // $('.tabbed-section-3')[0].classList.remove('hidden');
                  // $('.tabbed-section-3')[0].classList.add('visible');
                  // Hide the first
                  $('.tabbed-section-1')[0].classList.remove('visible');
                  $('.tabbed-section-1')[0].classList.add('hidden');
                  $('.tabbed-section-2')[0].classList.remove('visible');
                  $('.tabbed-section-2')[0].classList.add('hidden');
              }
          });
        };

        // Then finally, iterates through all tabs, to activate the
        // tabs system.
        for (let i = tabs.length - 1; i >= 0; i--) {
            toggleTab(tabs[i])
        }
    }
}
