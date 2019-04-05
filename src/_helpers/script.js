import * as M from "../../bower_components/admin-assets/js/materialize.min";
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
}
