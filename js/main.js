// importing default function, no object deconstruction required - can name as whatever!
// import DEF from './modules/revealing'; // importing default function, no object deconstruction required - can name as whatever!
// import { init as GHI, bar, brenden as bMoney } from './modules/alpha'; // importing named function(s), object deconstruction required - can alias function names

import AOS from 'aos';

import Announcements from './modules/announcements';
import Cart from './modules/cart';
import Credits from './modules/credits';
import Gliders from './modules/gliders';
import Product from './modules/product';
import RandomImage from './modules/randomImage';
import Scrolling from './modules/scrolling';
import Tools from './modules/tools';

Cart.init();
Credits.init();
Announcements.init();
Product.init();
RandomImage.init();
Scrolling.init();

AOS.init({
  offset: 150,                // offset (in px) from the original trigger point
  delay: 0,                   // values from 0 to 3000, with step 50ms
  duration: 500,              // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out',      // default easing for AOS animations
});

window.addEventListener('load', function () {
  Tools.setHeaderHeightTotalCSSVariable();
  Gliders.init();
  AOS.refresh();
});
