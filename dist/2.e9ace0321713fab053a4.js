(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"21Lb":function(e,t,n){"use strict";n.d(t,"c",function(){return m}),n.d(t,"a",function(){return d}),n.d(t,"b",function(){return g}),n.d(t,"e",function(){return p}),n.d(t,"d",function(){return _}),n.d(t,"f",function(){return f});var i=n("mrSG"),r=n("OzfB"),o=n("S5bw"),a="inline",u=["row","column","row-reverse","column-reverse"];function s(e){var t=(e=e?e.toLowerCase():"").split(" "),n=t[0],i=t[1],r=t[2];return u.find(function(e){return e===n})||(n=u[0]),i===a&&(i=r!==a?r:"",r=a),[n,l(i),!!r]}function c(e){return s(e)[0].indexOf("row")>-1}function l(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}var p=function(e){function t(t,n,i){var r=e.call(this,t,n,i)||this;return r._announcer=new o.a(1),r.layout$=r._announcer.asObservable(),r}return Object(i.c)(t,e),Object.defineProperty(t.prototype,"layout",{set:function(e){this._cacheInput("layout",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutXs",{set:function(e){this._cacheInput("layoutXs",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutSm",{set:function(e){this._cacheInput("layoutSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutMd",{set:function(e){this._cacheInput("layoutMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutLg",{set:function(e){this._cacheInput("layoutLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutXl",{set:function(e){this._cacheInput("layoutXl",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutGtXs",{set:function(e){this._cacheInput("layoutGtXs",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutGtSm",{set:function(e){this._cacheInput("layoutGtSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutGtMd",{set:function(e){this._cacheInput("layoutGtMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutGtLg",{set:function(e){this._cacheInput("layoutGtLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutLtSm",{set:function(e){this._cacheInput("layoutLtSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutLtMd",{set:function(e){this._cacheInput("layoutLtMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutLtLg",{set:function(e){this._cacheInput("layoutLtLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"layoutLtXl",{set:function(e){this._cacheInput("layoutLtXl",e)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(e){(null!=e.layout||this._mqActivation)&&this._updateWithDirection()},t.prototype.ngOnInit=function(){var t=this;e.prototype.ngOnInit.call(this),this._listenForMediaQueryChanges("layout","row",function(e){t._updateWithDirection(e.value)})},t.prototype._updateWithDirection=function(e){e=e||this._queryInput("layout")||"row",this._mqActivation&&(e=this._mqActivation.activatedInput);var t=function(e){var t=s(e);return function(e,n,i){return void 0===n&&(n=null),void 0===i&&(i=!1),{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":t[0],"flex-wrap":n||null}}(0,t[1],t[2])}(e||"");this._applyStyleToElement(t),this._announcer.next({direction:t["flex-direction"],wrap:!!t["flex-wrap"]&&"nowrap"!==t["flex-wrap"]})},t}(r.b),f=function(e){function t(t,n,i,r,o,a){var u=e.call(this,t,n,a)||this;return u._zone=r,u._directionality=o,u._layout="row",i&&(u._layoutWatcher=i.layout$.subscribe(u._onLayoutChange.bind(u))),u._directionWatcher=u._directionality.change.subscribe(u._updateWithValue.bind(u)),u}return Object(i.c)(t,e),Object.defineProperty(t.prototype,"gap",{set:function(e){this._cacheInput("gap",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapXs",{set:function(e){this._cacheInput("gapXs",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapSm",{set:function(e){this._cacheInput("gapSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapMd",{set:function(e){this._cacheInput("gapMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapLg",{set:function(e){this._cacheInput("gapLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapXl",{set:function(e){this._cacheInput("gapXl",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapGtXs",{set:function(e){this._cacheInput("gapGtXs",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapGtSm",{set:function(e){this._cacheInput("gapGtSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapGtMd",{set:function(e){this._cacheInput("gapGtMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapGtLg",{set:function(e){this._cacheInput("gapGtLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapLtSm",{set:function(e){this._cacheInput("gapLtSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapLtMd",{set:function(e){this._cacheInput("gapLtMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapLtLg",{set:function(e){this._cacheInput("gapLtLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"gapLtXl",{set:function(e){this._cacheInput("gapLtXl",e)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(e){(null!=e.gap||this._mqActivation)&&this._updateWithValue()},t.prototype.ngAfterContentInit=function(){var e=this;this._watchContentChanges(),this._listenForMediaQueryChanges("gap","0",function(t){e._updateWithValue(t.value)}),this._updateWithValue()},t.prototype.ngOnDestroy=function(){e.prototype.ngOnDestroy.call(this),this._layoutWatcher&&this._layoutWatcher.unsubscribe(),this._observer&&this._observer.disconnect(),this._directionWatcher&&this._directionWatcher.unsubscribe()},t.prototype._watchContentChanges=function(){var e=this;this._zone.runOutsideAngular(function(){"undefined"!=typeof MutationObserver&&(e._observer=new MutationObserver(function(t){t.some(function(e){return e.addedNodes&&e.addedNodes.length>0||e.removedNodes&&e.removedNodes.length>0})&&e._updateWithValue()}),e._observer.observe(e.nativeElement,{childList:!0}))})},t.prototype._onLayoutChange=function(e){var t=this;this._layout=(e.direction||"").toLowerCase(),u.find(function(e){return e===t._layout})||(this._layout="row"),this._updateWithValue()},t.prototype._updateWithValue=function(e){var t=this,n=e||this._queryInput("gap")||"0";this._mqActivation&&(n=this._mqActivation.activatedInput);var i=this.childrenNodes.filter(function(e){return 1===e.nodeType&&"none"!=t._getDisplayStyle(e)}).sort(function(e,n){var i=+t._styler.lookupStyle(e,"order"),r=+t._styler.lookupStyle(n,"order");return isNaN(i)||isNaN(r)||i===r?0:i>r?1:-1});if(i.length>0)if(n.endsWith(h))n=n.substring(0,n.indexOf(h)),this._applyStyleToElements(this._buildGridPadding(n),i),this._applyStyleToElement(this._buildGridMargin(n));else{var r=i.pop();this._applyStyleToElements(this._buildCSS(n),i),this._applyStyleToElements(this._buildCSS(),[r])}},t.prototype._buildGridPadding=function(e){var t="0px",n="0px";return"rtl"===this._directionality.value?n=e:t=e,{padding:"0px "+t+" "+e+" "+n}},t.prototype._buildGridMargin=function(e){var t="0px",n="0px";return"rtl"===this._directionality.value?n="-"+e:t="-"+e,{margin:"0px "+t+" -"+e+" "+n}},t.prototype._buildCSS=function(e){var t;void 0===e&&(e=null);var n={"margin-left":null,"margin-right":null,"margin-top":null,"margin-bottom":null};switch(this._layout){case"column":t="margin-bottom";break;case"column-reverse":t="margin-top";break;case"row":t="rtl"===this._directionality.value?"margin-left":"margin-right";break;case"row-reverse":t="rtl"===this._directionality.value?"margin-right":"margin-left";break;default:t="rtl"===this._directionality.value?"margin-left":"margin-right"}return n[t]=e,n},t}(r.b),h=" grid";function y(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var i=0,r=t;i<r.length;i++){var o=r[i];if(null!=o)for(var a in o)o.hasOwnProperty(a)&&(e[a]=o[a])}return e}var d=function(e){function t(t,n,i,r,o){var a=e.call(this,t,n,r)||this;return a._container=i,a.styleUtils=r,a.layoutConfig=o,a._cacheInput("flex",""),a._cacheInput("shrink",1),a._cacheInput("grow",1),a}return Object(i.c)(t,e),Object.defineProperty(t.prototype,"shrink",{set:function(e){this._cacheInput("shrink",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"grow",{set:function(e){this._cacheInput("grow",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flex",{set:function(e){this._cacheInput("flex",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexXs",{set:function(e){this._cacheInput("flexXs",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexSm",{set:function(e){this._cacheInput("flexSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexMd",{set:function(e){this._cacheInput("flexMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexLg",{set:function(e){this._cacheInput("flexLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexXl",{set:function(e){this._cacheInput("flexXl",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexGtXs",{set:function(e){this._cacheInput("flexGtXs",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexGtSm",{set:function(e){this._cacheInput("flexGtSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexGtMd",{set:function(e){this._cacheInput("flexGtMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexGtLg",{set:function(e){this._cacheInput("flexGtLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexLtSm",{set:function(e){this._cacheInput("flexLtSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexLtMd",{set:function(e){this._cacheInput("flexLtMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexLtLg",{set:function(e){this._cacheInput("flexLtLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"flexLtXl",{set:function(e){this._cacheInput("flexLtXl",e)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(e){(null!=e.flex||this._mqActivation)&&this._updateStyle()},t.prototype.ngOnInit=function(){var t=this;e.prototype.ngOnInit.call(this),this._listenForMediaQueryChanges("flex","",function(e){t._updateStyle(e.value)}),this._container&&(this._layoutWatcher=this._container.layout$.subscribe(function(e){t._onLayoutChange(e)}))},t.prototype.ngOnDestroy=function(){e.prototype.ngOnDestroy.call(this),this._layoutWatcher&&this._layoutWatcher.unsubscribe()},t.prototype._onLayoutChange=function(e){this._layout=e||this._layout||{direction:"row",wrap:!1},this._updateStyle()},t.prototype._updateStyle=function(e){var t=e||this._queryInput("flex")||"";this._mqActivation&&(t=this._mqActivation.activatedInput);var n=String(t).replace(";",""),i=Object(r.n)(n,this._queryInput("grow"),this._queryInput("shrink"));this._applyStyleToElement(this._validateValue.apply(this,i))},t.prototype._validateValue=function(e,t,n){var i=this._getFlexFlowDirection(this.parentElement,!1!==this.layoutConfig.addFlexToParent).indexOf("column")>-1?"column":"row",r=c(i)?"max-width":"max-height",o=c(i)?"min-width":"min-height",a=String(n).indexOf("calc")>-1,u=a||"auto"==n,s=String(n).indexOf("%")>-1&&!a,l=String(n).indexOf("px")>-1||String(n).indexOf("em")>-1||String(n).indexOf("vw")>-1||String(n).indexOf("vh")>-1,p=String(n).indexOf("px")>-1||u,f=a||l;t="0"==t?0:t;var h=!(e="0"==e?0:e)&&!t,d={},b={"max-width":null,"max-height":null,"min-width":null,"min-height":null};switch(n||""){case"":n="row"===i?"0%":!1!==this.layoutConfig.useColumnBasisZero?"0.000000001px":"auto";break;case"initial":case"nogrow":e=0,n="auto";break;case"grow":n="100%";break;case"noshrink":t=0,n="auto";break;case"auto":break;case"none":e=0,t=0,n="auto";break;default:f||s||isNaN(n)||(n+="%"),"0%"===n&&(f=!0),"0px"===n&&(n="0%"),d=y(b,a?{"flex-grow":e,"flex-shrink":t,"flex-basis":f?n:"100%"}:{flex:e+" "+t+" "+(f?n:"100%")})}return d.flex||d["flex-grow"]||(d=y(b,a?{"flex-grow":e,"flex-shrink":t,"flex-basis":n}:{flex:e+" "+t+" "+n})),"0%"!==n&&"0px"!==n&&"0.000000001px"!==n&&"auto"!==n&&(d[o]=h||p&&e?n:null,d[r]=h||!u&&t?n:null),d[o]||d[r]?this._layout&&this._layout.wrap&&(d[a?"flex-basis":"flex"]=d[r]?a?d[r]:e+" "+t+" "+d[r]:a?d[o]:e+" "+t+" "+d[o]):d=y(b,a?{"flex-grow":e,"flex-shrink":t,"flex-basis":n}:{flex:e+" "+t+" "+n}),y(d,{"box-sizing":"border-box"})},t}(r.b),b={margin:0,width:"100%",height:"100%","min-width":"100%","min-height":"100%"},g=function(e){function t(t,n,i){var r=e.call(this,t,n,i)||this;return r.elRef=n,r._applyStyleToElement(b),r}return Object(i.c)(t,e),t}(r.b),_=function(e){function t(t,n,i,r){var o=e.call(this,t,n,r)||this;return o._layout="row",i&&(o._layoutWatcher=i.layout$.subscribe(o._onLayoutChange.bind(o))),o}return Object(i.c)(t,e),Object.defineProperty(t.prototype,"align",{set:function(e){this._cacheInput("align",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignXs",{set:function(e){this._cacheInput("alignXs",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignSm",{set:function(e){this._cacheInput("alignSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignMd",{set:function(e){this._cacheInput("alignMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignLg",{set:function(e){this._cacheInput("alignLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignXl",{set:function(e){this._cacheInput("alignXl",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignGtXs",{set:function(e){this._cacheInput("alignGtXs",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignGtSm",{set:function(e){this._cacheInput("alignGtSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignGtMd",{set:function(e){this._cacheInput("alignGtMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignGtLg",{set:function(e){this._cacheInput("alignGtLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignLtSm",{set:function(e){this._cacheInput("alignLtSm",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignLtMd",{set:function(e){this._cacheInput("alignLtMd",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignLtLg",{set:function(e){this._cacheInput("alignLtLg",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"alignLtXl",{set:function(e){this._cacheInput("alignLtXl",e)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(e){(null!=e.align||this._mqActivation)&&this._updateWithValue()},t.prototype.ngOnInit=function(){var t=this;e.prototype.ngOnInit.call(this),this._listenForMediaQueryChanges("align","start stretch",function(e){t._updateWithValue(e.value)})},t.prototype.ngOnDestroy=function(){e.prototype.ngOnDestroy.call(this),this._layoutWatcher&&this._layoutWatcher.unsubscribe()},t.prototype._updateWithValue=function(e){e=e||this._queryInput("align")||"start stretch",this._mqActivation&&(e=this._mqActivation.activatedInput),this._applyStyleToElement(this._buildCSS(e)),this._allowStretching(e,this._layout?this._layout:"row")},t.prototype._onLayoutChange=function(e){var t=this;this._layout=(e.direction||"").toLowerCase(),u.find(function(e){return e===t._layout})||(this._layout="row");var n=this._queryInput("align")||"start stretch";this._mqActivation&&(n=this._mqActivation.activatedInput),this._allowStretching(n,this._layout||"row")},t.prototype._buildCSS=function(e){void 0===e&&(e="");var t={},n=e.split(" "),i=n[1];switch(n[0]){case"center":t["justify-content"]="center";break;case"space-around":t["justify-content"]="space-around";break;case"space-between":t["justify-content"]="space-between";break;case"space-evenly":t["justify-content"]="space-evenly";break;case"end":case"flex-end":t["justify-content"]="flex-end";break;case"start":case"flex-start":default:t["justify-content"]="flex-start"}switch(i){case"start":case"flex-start":t["align-items"]=t["align-content"]="flex-start";break;case"baseline":t["align-items"]="baseline";break;case"center":t["align-items"]=t["align-content"]="center";break;case"end":case"flex-end":t["align-items"]=t["align-content"]="flex-end";break;case"stretch":default:t["align-items"]=t["align-content"]="stretch"}return y(t,{display:"flex","flex-direction":this._layout||"row","box-sizing":"border-box"})},t.prototype._allowStretching=function(e,t){void 0===e&&(e=""),void 0===t&&(t=""),"stretch"==e.split(" ")[1]&&this._applyStyleToElement({"box-sizing":"border-box","max-width":c(t)?null:"100%","max-height":c(t)?"100%":null})},t}(r.b),m=function(){return function(){}}()},"3pJQ":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n("mrSG"),n("OzfB"),n("n6gG");var i=function(){return function(){}}()},OzfB:function(e,t,n){"use strict";n.d(t,"m",function(){return c}),n.d(t,"e",function(){return E}),n.d(t,"f",function(){return w}),n.d(t,"k",function(){return Q}),n.d(t,"a",function(){return p}),n.d(t,"b",function(){return B}),n.d(t,"c",function(){return D}),n.d(t,"d",function(){return j}),n.d(t,"g",function(){return P}),n.d(t,"h",function(){return W}),n.d(t,"j",function(){return L}),n.d(t,"i",function(){return M}),n.d(t,"l",function(){return X}),n.d(t,"n",function(){return R});var i=n("CcnG"),r=n("Ip0R"),o=n("26FU"),a=n("VnD/"),u=n("67Y/"),s=n("mrSG");function c(e,t){return function(){if(Object(r.s)(t)){var n=Array.from(e.querySelectorAll("[class*="+l+"]")),i=/\bflex-layout-.+?\b/g;n.forEach(function(e){e.classList.contains(l+"ssr")&&e.parentNode?e.parentNode.removeChild(e):e.className.replace(i,"")})}}}var l="flex-layout-",p=new i.q("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:function(){return null}}),f=[{alias:"xs",mediaQuery:"(min-width: 0px) and (max-width: 599px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"(min-width: 600px)"},{alias:"lt-sm",overlapping:!0,mediaQuery:"(max-width: 599px)"},{alias:"sm",mediaQuery:"(min-width: 600px) and (max-width: 959px)"},{alias:"gt-sm",overlapping:!0,mediaQuery:"(min-width: 960px)"},{alias:"lt-md",overlapping:!0,mediaQuery:"(max-width: 959px)"},{alias:"md",mediaQuery:"(min-width: 960px) and (max-width: 1279px)"},{alias:"gt-md",overlapping:!0,mediaQuery:"(min-width: 1280px)"},{alias:"lt-lg",overlapping:!0,mediaQuery:"(max-width: 1279px)"},{alias:"lg",mediaQuery:"(min-width: 1280px) and (max-width: 1919px)"},{alias:"gt-lg",overlapping:!0,mediaQuery:"(min-width: 1920px)"},{alias:"lt-xl",overlapping:!0,mediaQuery:"(max-width: 1919px)"},{alias:"xl",mediaQuery:"(min-width: 1920px) and (max-width: 5000px)"}],h="(orientation: landscape) and (min-width: 960px) and (max-width: 1279px)",y="(orientation: portrait) and (min-width: 600px) and (max-width: 839px)",d="(orientation: portrait) and (min-width: 840px)",b="(orientation: landscape) and (min-width: 1280px)",g={HANDSET:"(orientation: portrait) and (max-width: 599px), (orientation: landscape) and (max-width: 959px)",TABLET:y+" , "+h,WEB:d+", "+b+" ",HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599px)",TABLET_PORTRAIT:y+" ",WEB_PORTRAIT:""+d,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959px)]",TABLET_LANDSCAPE:""+h,WEB_LANDSCAPE:""+b},_=[{alias:"handset",mediaQuery:g.HANDSET},{alias:"handset.landscape",mediaQuery:g.HANDSET_LANDSCAPE},{alias:"handset.portrait",mediaQuery:g.HANDSET_PORTRAIT},{alias:"tablet",mediaQuery:g.TABLET},{alias:"tablet.landscape",mediaQuery:g.TABLET},{alias:"tablet.portrait",mediaQuery:g.TABLET_PORTRAIT},{alias:"web",mediaQuery:g.WEB,overlapping:!0},{alias:"web.landscape",mediaQuery:g.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",mediaQuery:g.WEB_PORTRAIT,overlapping:!0}];function m(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var i=0,r=t;i<r.length;i++){var o=r[i];if(null!=o)for(var a in o)o.hasOwnProperty(a)&&(e[a]=o[a])}return e}var v=/(\.|-|_)/g;function x(e){var t=e.length>0?e.charAt(0):"",n=e.length>1?e.slice(1):"";return t.toUpperCase()+n}var O={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0},w=new i.q("Flex Layout token, config options for the library",{providedIn:"root",factory:function(){return O}}),I=new i.q("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:function(){var e=Object(i.Z)(p),t=Object(i.Z)(w),n=[].concat.apply([],(e||[]).map(function(e){return Array.isArray(e)?e:[e]}));return function(e,t){void 0===t&&(t=[]);var n,i={};return e.forEach(function(e){i[e.alias]=e}),t.forEach(function(e){i[e.alias]?m(i[e.alias],e):i[e.alias]=e}),(n=Object.keys(i).map(function(e){return i[e]})).forEach(function(e){e.suffix||(e.suffix=e.alias.replace(v,"|").split("|").map(x).join(""),e.overlapping=!!e.overlapping)}),n}((t.disableDefaultBps?[]:f).concat(t.addOrientationBps?_:[]),n)}}),j=function(){function e(e){this._registry=e}return Object.defineProperty(e.prototype,"items",{get:function(){return this._registry.slice()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"sortedItems",{get:function(){var e=this._registry.filter(function(e){return!0===e.overlapping}),t=this._registry.filter(function(e){return!0!==e.overlapping});return e.concat(t)},enumerable:!0,configurable:!0}),e.prototype.findByAlias=function(e){return this._registry.find(function(t){return t.alias==e})||null},e.prototype.findByQuery=function(e){return this._registry.find(function(t){return t.mediaQuery==e})||null},Object.defineProperty(e.prototype,"overlappings",{get:function(){return this._registry.filter(function(e){return 1==e.overlapping})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"aliases",{get:function(){return this._registry.map(function(e){return e.alias})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"suffixes",{get:function(){return this._registry.map(function(e){return e.suffix?e.suffix:""})},enumerable:!0,configurable:!0}),e.ngInjectableDef=Object(i.V)({factory:function(){return new e(Object(i.Z)(I))},token:e,providedIn:"root"}),e}(),S=function(){function e(e,t,n,i){void 0===e&&(e=!1),void 0===t&&(t="all"),void 0===n&&(n=""),void 0===i&&(i=""),this.matches=e,this.mediaQuery=t,this.mqAlias=n,this.suffix=i,this.property=""}return e.prototype.clone=function(){return new e(this.matches,this.mediaQuery,this.mqAlias,this.suffix)},e}(),P=function(){function e(e,t,n){this._zone=e,this._platformId=t,this._document=n,this._registry=new Map,this._source=new o.a(new S(!0)),this._observable$=this._source.asObservable()}return e.prototype.isActive=function(e){var t=this._registry.get(e);return!!t&&t.matches},e.prototype.observe=function(e){return e&&this.registerQuery(e),this._observable$.pipe(Object(a.a)(function(t){return!e||t.mediaQuery===e}))},e.prototype.registerQuery=function(e){var t=this,n=function(e){return void 0===e?[]:"string"==typeof e?[e]:(t={},e.filter(function(e){return!t.hasOwnProperty(e)&&(t[e]=!0)}));var t}(e);n.length>0&&(this._prepareQueryCSS(n,this._document),n.forEach(function(e){var n=t._registry.get(e),i=function(n){t._zone.run(function(){var i=new S(n.matches,e);t._source.next(i)})};n||((n=t._buildMQL(e)).addListener(i),t._registry.set(e,n)),n.matches&&i(n)}))},e.prototype._buildMQL=function(e){return Object(r.s)(this._platformId)&&window.matchMedia("all").addListener?window.matchMedia(e):{matches:"all"===e||""===e,media:e,addListener:function(){},removeListener:function(){}}},e.prototype._prepareQueryCSS=function(e,t){var n=e.filter(function(e){return!A[e]});if(n.length>0){var i=n.join(", ");try{var r=t.createElement("style");r.setAttribute("type","text/css"),r.styleSheet||r.appendChild(t.createTextNode("\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media "+i+" {.fx-query-test{ }}\n")),t.head.appendChild(r),n.forEach(function(e){return A[e]=r})}catch(o){console.error(o)}}},e.ngInjectableDef=Object(i.V)({factory:function(){return new e(Object(i.Z)(i.A),Object(i.Z)(i.C),Object(i.Z)(r.c))},token:e,providedIn:"root"}),e}(),A={};function k(e,t){return m(e,t?{mqAlias:t.alias,suffix:t.suffix}:{})}var L=function(){return function(){}}(),M=function(){function e(e,t){this.breakpoints=e,this.mediaWatcher=t,this.filterOverlaps=!0,this._registerBreakPoints(),this.observable$=this._buildObservable()}return e.prototype.isActive=function(e){var t=this._toMediaQuery(e);return this.mediaWatcher.isActive(t)},e.prototype.subscribe=function(e,t,n){return e&&"object"==typeof e?this.observable$.subscribe(e.next,e.error,e.complete):this.observable$.subscribe(e,t,n)},e.prototype.asObservable=function(){return this.observable$},e.prototype._registerBreakPoints=function(){var e=this.breakpoints.sortedItems.map(function(e){return e.mediaQuery});this.mediaWatcher.registerQuery(e)},e.prototype._buildObservable=function(){var e=this,t=this;return this.mediaWatcher.observe().pipe(Object(a.a)(function(e){return!0===e.matches}),Object(a.a)(function(n){var i=e.breakpoints.findByQuery(n.mediaQuery);return!i||!(t.filterOverlaps&&i.overlapping)}),Object(u.a)(function(t){return k(t,e._findByQuery(t.mediaQuery))}))},e.prototype._findByAlias=function(e){return this.breakpoints.findByAlias(e)},e.prototype._findByQuery=function(e){return this.breakpoints.findByQuery(e)},e.prototype._toMediaQuery=function(e){var t=this._findByAlias(e)||this._findByQuery(e);return t?t.mediaQuery:e},e.ngInjectableDef=Object(i.V)({factory:function(){return new e(Object(i.Z)(j),Object(i.Z)(P))},token:e,providedIn:"root"}),e}(),E=function(){return function(){}}(),C=function(){function e(){this.stylesheet=new Map}return e.prototype.addStyleToElement=function(e,t,n){var i=this.stylesheet.get(e);i?i.set(t,n):this.stylesheet.set(e,new Map([[t,n]]))},e.prototype.clearStyles=function(){this.stylesheet.clear()},e.prototype.getStyleForElement=function(e,t){var n=this.stylesheet.get(e),i="";if(n){var r=n.get(t);"number"!=typeof r&&"string"!=typeof r||(i=r+"")}return i},e.ngInjectableDef=Object(i.V)({factory:function(){return new e},token:e,providedIn:"root"}),e}(),Q=new i.q("FlexLayoutServerLoaded",{providedIn:"root",factory:function(){return!1}}),T=["row","column","row-reverse","column-reverse"];function q(e){if(e)switch(e.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":e="wrap-reverse";break;case"no":case"none":case"nowrap":e="nowrap";break;default:e="wrap"}return e}var V=function(){return function(e,t,n){this.baseKey=e,this.defaultValue=t,this.inputKeys=n}}(),G=function(){function e(e,t,n){this._options=e,this._mediaMonitor=t,this._onMediaChanges=n,this._subscribers=[],this._activatedInputKey="",this._registryMap=this._buildRegistryMap(),this._subscribers=this._configureChangeObservers()}return Object.defineProperty(e.prototype,"registryFromLargest",{get:function(){return this._registryMap.slice().reverse()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"mediaMonitor",{get:function(){return this._mediaMonitor},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activatedInputKey",{get:function(){return this._activatedInputKey||this._options.baseKey},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activatedInput",{get:function(){var e=this.activatedInputKey;return this.hasKeyValue(e)?this._lookupKeyValue(e):this._options.defaultValue},enumerable:!0,configurable:!0}),e.prototype.hasKeyValue=function(e){return void 0!==this._options.inputKeys[e]},e.prototype.destroy=function(){this._subscribers.forEach(function(e){e.unsubscribe()}),this._subscribers=[]},e.prototype._configureChangeObservers=function(){var e=this,t=[];return this._registryMap.forEach(function(n){e._keyInUse(n.key)&&t.push(e.mediaMonitor.observe(n.alias).pipe(Object(u.a)(function(t){return(t=t.clone()).property=e._options.baseKey,t})).subscribe(function(t){e._onMonitorEvents(t)}))}),t},e.prototype._buildRegistryMap=function(){var e=this;return this.mediaMonitor.breakpoints.map(function(t){return m({},t,{baseKey:e._options.baseKey,key:e._options.baseKey+t.suffix})}).filter(function(t){return e._keyInUse(t.key)})},e.prototype._onMonitorEvents=function(e){e.property==this._options.baseKey&&(e.value=this._calculateActivatedValue(e),this._onMediaChanges(e))},e.prototype._keyInUse=function(e){return void 0!==this._lookupKeyValue(e)},e.prototype._calculateActivatedValue=function(e){var t=this._options.baseKey+e.suffix,n=this._activatedInputKey;return this._activatedInputKey=this._validateInputKey(n=e.matches?t:n==t?"":n),this.activatedInput},e.prototype._validateInputKey=function(e){var t=this,n=function(e){return!t._keyInUse(e)};return n(e)&&this.mediaMonitor.activeOverlaps.some(function(i){var r=t._options.baseKey+i.suffix;return!n(r)&&(e=r,!0)}),e},e.prototype._lookupKeyValue=function(e){return this._options.inputKeys[e]},e}(),B=function(){function e(e,t,n){this._mediaMonitor=e,this._elementRef=t,this._styler=n,this._inputMap={},this._hasInitialized=!1}return Object.defineProperty(e.prototype,"hasMediaQueryListener",{get:function(){return!!this._mqActivation},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activatedValue",{get:function(){return this._mqActivation?this._mqActivation.activatedInput:void 0},set:function(e){var t,n,r="baseKey";this._mqActivation&&(n=this._inputMap[r=this._mqActivation.activatedInputKey],this._inputMap[r]=e);var o=new i.K(n,e,!1);this.ngOnChanges(((t={})[r]=o,t))},enumerable:!0,configurable:!0}),e.prototype.hasResponsiveAPI=function(e){return Object.keys(this._inputMap).length-(this._inputMap[e]?1:0)>0},e.prototype.ngOnInit=function(){this._hasInitialized=!0},e.prototype.ngOnChanges=function(e){throw new Error("BaseDirective::ngOnChanges should be overridden in subclass: "+e)},e.prototype.ngOnDestroy=function(){this._mqActivation&&this._mqActivation.destroy(),delete this._mediaMonitor},Object.defineProperty(e.prototype,"parentElement",{get:function(){return this._elementRef.nativeElement.parentNode},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nativeElement",{get:function(){return this._elementRef.nativeElement},enumerable:!0,configurable:!0}),e.prototype._queryInput=function(e){return this._inputMap[e]},e.prototype._getDefaultVal=function(e,t){var n=this._queryInput(e);return null!=n&&""!==n?n:t},e.prototype._getDisplayStyle=function(e){return void 0===e&&(e=this.nativeElement),this._styler.lookupStyle(e,"display")},e.prototype._getAttributeValue=function(e,t){return void 0===t&&(t=this.nativeElement),this._styler.lookupAttributeValue(t,e)},e.prototype._getFlexFlowDirection=function(e,t){var n;void 0===t&&(t=!1);var i="row";if(e&&(i=(n=this._styler.getFlowDirection(e))[0],!n[1]&&t)){var r=function(e){var t,n,i=function(e){var t=(e=e?e.toLowerCase():"").split(" "),n=t[0],i=t[1],r=t[2];return T.find(function(e){return e===n})||(n=T[0]),"inline"===i&&(i="inline"!==r?r:"",r="inline"),[n,q(i),!!r]}(e);return void 0===(t=i[1])&&(t=null),void 0===(n=i[2])&&(n=!1),{display:n?"inline-flex":"flex","box-sizing":"border-box","flex-direction":i[0],"flex-wrap":t||null}}(i);this._styler.applyStyleToElements(r,[e])}return i.trim()||"row"},e.prototype._applyStyleToElement=function(e,t,n){void 0===n&&(n=this.nativeElement),this._styler.applyStyleToElement(n,e,t)},e.prototype._applyStyleToElements=function(e,t){this._styler.applyStyleToElements(e,t)},e.prototype._cacheInput=function(e,t){if("object"==typeof t)for(var n in t)this._inputMap[n]=t[n];else e&&(this._inputMap[e]=t)},e.prototype._listenForMediaQueryChanges=function(e,t,n){if(!this._mqActivation){var i=new V(e,t,this._inputMap);this._mqActivation=new G(i,this._mediaMonitor,function(e){return n(e)})}return this._mqActivation},Object.defineProperty(e.prototype,"childrenNodes",{get:function(){for(var e=this.nativeElement.children,t=[],n=e.length;n--;)t[n]=e[n];return t},enumerable:!0,configurable:!0}),e.prototype.hasKeyValue=function(e){return this._mqActivation.hasKeyValue(e)},Object.defineProperty(e.prototype,"hasInitialized",{get:function(){return this._hasInitialized},enumerable:!0,configurable:!0}),e}(),D=function(e){function t(t,n,i,r){var o=e.call(this,n,i,r)||this;return o._baseKey=t,o._mediaMonitor=n,o._elementRef=i,o._styler=r,o}return Object(s.c)(t,e),Object.defineProperty(t.prototype,"activeKey",{get:function(){var e=this._mqActivation,t=e?e.activatedInputKey:this._baseKey;return"class"===t?"klazz":t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputMap",{get:function(){return this._inputMap},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mqActivation",{get:function(){return this._mqActivation},enumerable:!0,configurable:!0}),t.prototype.hasResponsiveAPI=function(){return e.prototype.hasResponsiveAPI.call(this,this._baseKey)},t.prototype.queryInput=function(e){return e?this._queryInput(e):void 0},t.prototype.cacheInput=function(e,t,n){if(void 0===n&&(n=!1),n)this._cacheInputRaw(e,t);else if(Array.isArray(t))this._cacheInputArray(e,t);else if("object"==typeof t)this._cacheInputObject(e,t);else{if("string"!=typeof t)throw new Error("Invalid class value '"+e+"' provided. Did you want to cache the raw value?");this._cacheInputString(e,t)}},t.prototype.listenForMediaQueryChanges=function(e,t,n){return this._listenForMediaQueryChanges(e,t,n)},t.prototype._cacheInputRaw=function(e,t){e&&(this._inputMap[e]=t)},t.prototype._cacheInputArray=function(e,t){void 0===e&&(e=""),this._inputMap[e]=t?t.join(" "):""},t.prototype._cacheInputObject=function(e,t){void 0===e&&(e="");var n=[];if(t)for(var i in t)t[i]&&n.push(i);this._inputMap[e]=n.join(" ")},t.prototype._cacheInputString=function(e,t){void 0===e&&(e=""),this._inputMap[e]=t},t}(B),W=function(){function e(e,t){this._breakpoints=e,this._matchMedia=t,this._registerBreakpoints()}return Object.defineProperty(e.prototype,"breakpoints",{get:function(){return this._breakpoints.items.slice()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeOverlaps",{get:function(){var e=this;return this._breakpoints.overlappings.reverse().filter(function(t){return e._matchMedia.isActive(t.mediaQuery)})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"active",{get:function(){var e=this,t=null;this.breakpoints.reverse().forEach(function(n){""!==n.alias&&!t&&e._matchMedia.isActive(n.mediaQuery)&&(t=n)});var n=this.breakpoints[0];return t||(this._matchMedia.isActive(n.mediaQuery)?n:null)},enumerable:!0,configurable:!0}),e.prototype.isActive=function(e){var t=this._breakpoints.findByAlias(e)||this._breakpoints.findByQuery(e);return this._matchMedia.isActive(t?t.mediaQuery:e)},e.prototype.observe=function(e){var t=this._breakpoints.findByAlias(e||"")||this._breakpoints.findByQuery(e||"");return this._matchMedia.observe(t?t.mediaQuery:e).pipe(Object(u.a)(function(e){return k(e,t)}),Object(a.a)(function(e){return!t||""!==e.mqAlias}))},e.prototype._registerBreakpoints=function(){var e=this._breakpoints.sortedItems.map(function(e){return e.mediaQuery});this._matchMedia.registerQuery(e)},e.ngInjectableDef=Object(i.V)({factory:function(){return new e(Object(i.Z)(j),Object(i.Z)(P))},token:e,providedIn:"root"}),e}();function K(e){for(var t in e){var n=e[t]||"";switch(t){case"display":e.display="flex"===n?["-webkit-flex","flex"]:"inline-flex"===n?["-webkit-inline-flex","inline-flex"]:n;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":e["-webkit-"+t]=n;break;case"flex-direction":e["-webkit-flex-direction"]=n=n||"row",e["flex-direction"]=n;break;case"order":e.order=e["-webkit-"+t]=isNaN(+n)?"0":n}}return e}var X=function(){function e(e,t,n,i){this._serverStylesheet=e,this._serverModuleLoaded=t,this._platformId=n,this.layoutConfig=i}return e.prototype.applyStyleToElement=function(e,t,n){void 0===n&&(n=null);var i={};"string"==typeof t&&(i[t]=n,t=i),i=this.layoutConfig.disableVendorPrefixes?t:K(t),this._applyMultiValueStyleToElement(i,e)},e.prototype.applyStyleToElements=function(e,t){var n=this;void 0===t&&(t=[]);var i=this.layoutConfig.disableVendorPrefixes?e:K(e);t.forEach(function(e){n._applyMultiValueStyleToElement(i,e)})},e.prototype.getFlowDirection=function(e){var t=this.lookupStyle(e,"flex-direction");return t===N&&(t=""),[t||"row",this.lookupInlineStyle(e,"flex-direction")||Object(r.t)(this._platformId)&&this._serverModuleLoaded?t:""]},e.prototype.lookupAttributeValue=function(e,t){return e.getAttribute(t)||""},e.prototype.lookupInlineStyle=function(e,t){return Object(r.s)(this._platformId)?e.style.getPropertyValue(t):this._getServerStyle(e,t)},e.prototype.lookupStyle=function(e,t,n){void 0===n&&(n=!1);var i="";return e&&((i=this.lookupInlineStyle(e,t))||(Object(r.s)(this._platformId)?n||(i=getComputedStyle(e).getPropertyValue(t)):this._serverModuleLoaded&&(i=this._serverStylesheet.getStyleForElement(e,t)))),i?i.trim():N},e.prototype._applyMultiValueStyleToElement=function(e,t){var n=this;Object.keys(e).sort().forEach(function(i){var o=e[i],a=Array.isArray(o)?o:[o];a.sort();for(var u=0,s=a;u<s.length;u++){var c=s[u];c=c?c+"":"",Object(r.s)(n._platformId)||!n._serverModuleLoaded?Object(r.s)(n._platformId)?t.style.setProperty(i,c):n._setServerStyle(t,i,c):n._serverStylesheet.addStyleToElement(t,i,c)}})},e.prototype._setServerStyle=function(e,t,n){t=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var i=this._readStyleAttribute(e);i[t]=n||"",this._writeStyleAttribute(e,i)},e.prototype._getServerStyle=function(e,t){return this._readStyleAttribute(e)[t]||""},e.prototype._readStyleAttribute=function(e){var t={},n=e.getAttribute("style");if(n)for(var i=n.split(/;+/g),r=0;r<i.length;r++){var o=i[r].trim();if(o.length>0){var a=o.indexOf(":");if(-1===a)throw new Error("Invalid CSS style: "+o);t[o.substr(0,a).trim()]=o.substr(a+1).trim()}}return t},e.prototype._writeStyleAttribute=function(e,t){var n="";for(var i in t)t[i]&&(n+=i+":"+t[i]+";");e.setAttribute("style",n)},e.ngInjectableDef=Object(i.V)({factory:function(){return new e(Object(i.Z)(C,8),Object(i.Z)(Q,8),Object(i.Z)(i.C),Object(i.Z)(w))},token:e,providedIn:"root"}),e}(),N="block";function R(e,t,n){void 0===t&&(t="1"),void 0===n&&(n="1");var i=[t,n,e],r=e.indexOf("calc");if(r>0)i[2]=F(e.substring(r).trim()),2==(o=e.substr(0,r).trim().split(" ")).length&&(i[0]=o[0],i[1]=o[1]);else if(0==r)i[2]=F(e.trim());else{var o;i=3===(o=e.split(" ")).length?o:[t,n,e]}return i}function F(e){return e.replace(/[\s]/g,"").replace(/[\/\*\+\-]/g," $& ")}},"V9q+":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n("CcnG");var i=n("Ip0R"),r=n("OzfB"),o=function(){function e(e,t){Object(i.t)(t)&&!e&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}return e.withConfig=function(t,n){return void 0===n&&(n=[]),{ngModule:e,providers:t.serverLoaded?[{provide:r.f,useValue:t},{provide:r.a,useValue:n,multi:!0},{provide:r.k,useValue:!0}]:[{provide:r.f,useValue:t},{provide:r.a,useValue:n,multi:!0}]}},e}()},hUWP:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n("mrSG"),n("CcnG"),n("Ip0R"),n("OzfB");var i=function(){return function(){}}()}}]);