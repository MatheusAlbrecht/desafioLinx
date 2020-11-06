import '../scss/main.scss';
import '../scss/navlinks.scss';
import '../scss/transition.scss';
import '../scss/contact.scss';
import '../scss/divider.scss';
import '../scss/products.scss';
import '../scss/share.scss';

import {resolveProductsRequest} from "./products.js";
import {requestProducts} from "./requisition.js";

document.querySelector(".transition.top").style.setProperty("border-right",`${screen.width}px solid transparent`);
document.querySelector(".transition.bottom").style.setProperty("border-left",`${screen.width}px solid transparent`);

window.addEventListener('resize', function(){
    document.querySelector(".transition.top").style.setProperty("border-right",`${screen.width}px solid transparent`);
    document.querySelector(".transition.bottom").style.setProperty("border-left",`${screen.width}px solid transparent`);
});

requestProducts(1, resolveProductsRequest);