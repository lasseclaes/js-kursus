'use strict';
//alert ("hello");
/*
 * fla12100f.js
 * define a function to display the current time
 */

var x = 0;
//alert("dav");
let displayTime = function () {
    let now = new Date();
    //alert (now);
    /*let where = $('#clock');
    where.textContent = now.toLocaleTimeString('da-DK');*/

    let where = $('#clock');
    where.text(now.toLocaleTimeString('da-DK'));

    window.setTimeout(displayTime, 1000);

    x++;
    console.log(x);
}

/*
 * activate clock when document has finished loading
 */
window.addEventListener('load', displayTime);
