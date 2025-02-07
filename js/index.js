import Yard from './yard.js';
import Linehaul from './linehaul.js';
import EarthViewer from './earth.js';

global.earth = new EarthViewer();
global.yardGroup = new Yard();
// global.linehaulGroup = new Linehaul();

window.onload = function () {
    document.querySelector('.cesium-viewer-toolbar').style.zIndex = 100;
    document.querySelector('#password input').focus();
    document.querySelector('#password input').onkeydown = e => {
        if(e.keyCode==13) {
            login();
        }
    };
    document.querySelector('#loginButton').onclick = () => {
        login();
    };
};

function login() {
    if (document.querySelector('#username input').value == 'admin' && document.querySelector('#password input').value == 'admin') {
        fadeOut('#loginPanel');
        global.yardGroup.load();
        // global.linehaulGroup.load(data);
    } else {
        document.querySelector('#username').style.border = '1px solid red';
        document.querySelector('#password').style.border = '1px solid red';
    }
}