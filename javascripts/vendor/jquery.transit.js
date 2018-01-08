!function(t){function e(t){if(t in p.style)return t;var e=["Moz","Webkit","O","ms"],n=t.charAt(0).toUpperCase()+t.substr(1);if(t in p.style)return t;for(var i=0;i<e.length;++i){var r=e[i]+n;if(r in p.style)return r}}function n(){return p.style[d.transform]="",p.style[d.transform]="rotateY(90deg)",""!==p.style[d.transform]}function i(t){return"string"==typeof t&&this.parse(t),this}function r(t,e,n){e===!0?t.queue(n):e?t.queue(e,n):n()}function s(e){var n=[];return t.each(e,function(e){e=t.camelCase(e),e=t.transit.propertyMap[e]||t.cssProps[e]||e,e=u(e),-1===t.inArray(e,n)&&n.push(e)}),n}function a(e,n,i,r){var a=s(e);t.cssEase[i]&&(i=t.cssEase[i]);var o=""+f(n)+" "+i;parseInt(r,10)>0&&(o+=" "+f(r));var u=[];return t.each(a,function(t,e){u.push(e+" "+o)}),u.join(", ")}function o(e,n){n||(t.cssNumber[e]=!0),t.transit.propertyMap[e]=d.transform,t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i),t(n).css({"transit:transform":r})}}}function u(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function c(t,e){return"string"!=typeof t||t.match(/^[\-0-9\.]+$/)?""+t+e:t}function f(e){var n=e;return t.fx.speeds[n]&&(n=t.fx.speeds[n]),c(n,"ms")}t.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var p=document.createElement("div"),d={},l=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;d.transition=e("transition"),d.transitionDelay=e("transitionDelay"),d.transform=e("transform"),d.transformOrigin=e("transformOrigin"),d.transform3d=n();var h={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},b=d.transitionEnd=h[d.transition]||null;for(var g in d)d.hasOwnProperty(g)&&"undefined"==typeof t.support[g]&&(t.support[g]=d[g]);p=null,t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new i},set:function(e,n){var r=n;r instanceof i||(r=new i(r)),e.style[d.transform]="WebkitTransform"!==d.transform||l?r.toString():r.toString(!0),t(e).data("transform",r)}},t.cssHooks.transform={set:t.cssHooks["transit:transform"].set},t.fn.jquery<"1.8"&&(t.cssHooks.transformOrigin={get:function(t){return t.style[d.transformOrigin]},set:function(t,e){t.style[d.transformOrigin]=e}},t.cssHooks.transition={get:function(t){return t.style[d.transition]},set:function(t,e){t.style[d.transition]=e}}),o("scale"),o("translate"),o("rotate"),o("rotateX"),o("rotateY"),o("rotate3d"),o("perspective"),o("skewX"),o("skewY"),o("x",!0),o("y",!0),i.prototype={setFromString:function(t,e){var n="string"==typeof e?e.split(","):e.constructor===Array?e:[e];n.unshift(t),i.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);this.setter[t]?this.setter[t].apply(this,e):this[t]=e.join(",")},get:function(t){return this.getter[t]?this.getter[t].apply(this):this[t]||0},setter:{rotate:function(t){this.rotate=c(t,"deg")},rotateX:function(t){this.rotateX=c(t,"deg")},rotateY:function(t){this.rotateY=c(t,"deg")},scale:function(t,e){void 0===e&&(e=t),this.scale=t+","+e},skewX:function(t){this.skewX=c(t,"deg")},skewY:function(t){this.skewY=c(t,"deg")},perspective:function(t){this.perspective=c(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==t&&void 0!==t&&(this._translateX=c(t,"px")),null!==e&&void 0!==e&&(this._translateY=c(e,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");return t[0]&&(t[0]=parseFloat(t[0])),t[1]&&(t[1]=parseFloat(t[1])),t[0]===t[1]?t[0]:t},rotate3d:function(){for(var t=(this.rotate3d||"0,0,0,0deg").split(","),e=0;3>=e;++e)t[e]&&(t[e]=parseFloat(t[e]));return t[3]&&(t[3]=c(t[3],"deg")),t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var n in this)if(this.hasOwnProperty(n)){if(!d.transform3d&&("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n))continue;"_"!==n[0]&&e.push(t&&"scale"===n?n+"3d("+this[n]+",1)":t&&"translate"===n?n+"3d("+this[n]+",0)":n+"("+this[n]+")")}return e.join(" ")}},t.fn.transition=t.fn.transit=function(e,n,i,s){var o=this,u=0,c=!0;"function"==typeof n&&(s=n,n=void 0),"function"==typeof i&&(s=i,i=void 0),"undefined"!=typeof e.easing&&(i=e.easing,delete e.easing),"undefined"!=typeof e.duration&&(n=e.duration,delete e.duration),"undefined"!=typeof e.complete&&(s=e.complete,delete e.complete),"undefined"!=typeof e.queue&&(c=e.queue,delete e.queue),"undefined"!=typeof e.delay&&(u=e.delay,delete e.delay),"undefined"==typeof n&&(n=t.fx.speeds._default),"undefined"==typeof i&&(i=t.cssEase._default),n=f(n);var p=a(e,n,i,u),l=t.transit.enabled&&d.transition,h=l?parseInt(n,10)+parseInt(u,10):0;if(0===h){var g=function(t){o.css(e),s&&s.apply(o),t&&t()};return r(o,c,g),o}var y={},m=function(n){var i=!1,r=function(){i&&o.unbind(b,r),h>0&&o.each(function(){this.style[d.transition]=y[this]||null}),"function"==typeof s&&s.apply(o),"function"==typeof n&&n()};h>0&&b&&t.transit.useTransitionEnd?(i=!0,o.bind(b,r)):window.setTimeout(r,h),o.each(function(){h>0&&(this.style[d.transition]=p),t(this).css(e)})},v=function(t){this.offsetWidth,m(t)};return r(o,c,v),this},t.transit.getTransitionValue=a}(jQuery);