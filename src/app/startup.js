
// with data animations, legacy not React friendly
// document.write('<style type="text/css">*[data-animate-in="up"], *[data-animate-in="up"], *[data-animate-in="fade"], *[data-animate-in="left"], *[data-animate-in="right"] { opacity: 0; } .tabs__content { display: none; } *[data-javascript-show="immediate"] { opacity: 1.0 }</style>');
document.write('<style type="text/css">.tabs__content { display: none; } *[data-javascript-show="immediate"] { opacity: 1.0 }</style>');

let isLoaded = false;

const startup = () => {
  if (!('ontouchstart' in window)) {
    // document.documentElement.classList.add('no-touch');
  } else {
    // document.documentElement.classList.add('is-touch');
  }
  const safari = typeof window !== 'undefined' ? (window/* as any*/).safari : undefined;
  let isEdge = false;
  let isIE11 = false;
  const isSafari = false;
  //const isSafari = 
  //  /constructor/i.test((window/* as any*/).HTMLElement) || (function (p) {
  //    return p.toString() === "[object SafariRemoteNotification]"; })(!(window/* as any*/)['safari'] || (typeof (safari/* as any*/) !== 'undefined' && safari.pushNotification));
  if ((document/* as any*/).documentMode || /Edge/.test(navigator.userAgent)) {
    if (navigator.userAgent.indexOf('Trident') === -1) {
      isEdge = true;
    } else {
      isIE11 = true;
    }
  }
  if (isEdge) {
    // document.documentElement.classList.add('isEDGE');
  } else if (isIE11) {
    // document.documentElement.classList.add('isIE');
    // document.documentElement.classList.add('isIE11');
  } else if (isSafari) {
    // document.documentElement.classList.add('isSafari');
  }
  
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // document.body.classList.add('localhost');
  }  
};

const handleLoad = () => {
  isLoaded = true;
  startup();
  
  //document.body.classList.remove('page-loading');
  //document.body.classList.add('page-ready');
};

// scary not being in the detection
const items = document.querySelectorAll('*[data-animate-in], *[data-detect-viewport]');
const pageOffset = window.pageYOffset;

function isScrolledIntoView(el/*: HTMLElement*/) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.top + el.offsetHeight;
  const bottomWin = pageOffset + window.innerHeight;

  return (elemTop < bottomWin && elemBottom > 0);
}

const viewportDetection = () => {};

// const viewportDetection = () => {
//   for(var i = 0; i < items.length; i++) {
//     if (isScrolledIntoView(items[i]/* as HTMLElement*/)) {
//       if(!items[i].classList.contains('in-view')) {
//         items[i].classList.add('in-view');
//       }
//     }
//   }
// };

// Window events
window.addEventListener('load', handleLoad);
window.addEventListener('resize', viewportDetection);
window.addEventListener('scroll', viewportDetection);
const handle = setTimeout(() => { viewportDetection(); }, 500);
