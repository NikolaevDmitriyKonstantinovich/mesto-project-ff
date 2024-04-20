(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,o){var r;return r=function(t,n){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n),(n="symbol"==e(r)?r:r+"")in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}var n=t(t({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",errorActive:"form__input-error_active",formError:"form__input_type_error",errors:".form_name__input-error"},"submitButtonSelector",".popup__button"),"btnInactiveState","btn__submit_inactive");function o(e,t,n,o){t.classList.add(o.formError);var r=t.nextElementSibling;r.textContent=n,r.classList.add(o.errorActive)}function r(e,t){var n,o=null==e?void 0:e.nextElementSibling;null==e||null===(n=e.classList)||void 0===n||n.remove(t.formError),o.textContent="",o.classList.remove(t.errorActive)}function c(e,t){e.disabled=!0,e.classList.add(t.btnInactiveState)}function u(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",u),document.addEventListener("click",a)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),document.removeEventListener("click",a)}function a(e){e.target.classList.contains("popup")&&l(e.target)}var s={baseUrl:"https://nomoreparties.co/v1/wff-cohort-10",headers:{authorization:"f9abb9cd-6bca-4f92-b508-e5a8964bae2f","Content-Type":"application/json"}},p=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},d=function(e){return fetch("".concat(s.baseUrl)+"/cards/".concat(e),{method:"DELETE",headers:s.headers}).then(p)};function _(e,t,n,o,r){var c,u,i=document.querySelector("#card-template").content.querySelector(".card").cloneNode("true"),l=i.querySelector(".card__description"),a=i.querySelector(".card__image"),d=i.querySelector(".card__like-button"),_=i.querySelector(".card__like-button-likes"),f=i.querySelector(".card__delete-button");return a.src=null==r?void 0:r.link,a.alt="Пейзаж ".concat(null==r?void 0:r.name),l.querySelector(".card__title").textContent=null==r?void 0:r.name,_&&(_.textContent="".concat(null==r||null===(u=r.likes)||void 0===u?void 0:u.length)),(null==r||null===(c=r.owner)||void 0===c?void 0:c._id)===o?f.addEventListener("click",(function(){e(r._id).then((function(e){i.remove()})).catch((function(e){console.log(e)}))})):f.remove(),a.addEventListener("click",(function(){n(null==r?void 0:r.name,null==r?void 0:r.link)})),console.log(null==r?void 0:r.likes),console.log(o),function(e,t){var n;return null==e||null===(n=e.likes)||void 0===n?void 0:n.some((function(e){return(null==e?void 0:e._id)===t}))}(r,o)&&d.classList.add("card__like-button_is-active"),d.addEventListener("click",(function(e){var t;e.target.classList.contains("card__like-button_is-active")?(t=r._id,fetch("".concat(s.baseUrl)+"/cards/likes/".concat(t),{method:"DELETE",headers:s.headers}).then(p)).then((function(t){e.target.classList.toggle("card__like-button_is-active"),_.textContent=t.likes.length})).catch(console.error):function(e){return fetch("".concat(s.baseUrl)+"/cards/likes/".concat(e),{method:"PUT",headers:s.headers}).then(p)}(r._id).then((function(t){e.target.classList.toggle("card__like-button_is-active"),_.textContent=t.likes.length})).catch(console.error)})),i}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var v,m=document.querySelector(".places__list"),y=document.querySelector(".profile__add-button"),b=document.querySelector(".profile__edit-button"),h=document.querySelector(".popup_type_new-card"),S=h.querySelector(".popup__close"),g=document.querySelector(".popup_type_edit"),q=g.querySelector(".popup__close"),E=document.querySelector(".popup_type_image"),L=E.querySelector(".popup__close"),k=document.querySelector(".profile__info"),C=k.querySelector(".profile__title"),x=k.querySelector(".profile__description"),w=document.querySelector(".popup_type_edit .popup__form"),A=w.querySelector(".popup__input_type_name"),j=w.querySelector(".popup__input_type_description"),T=h.querySelector(".popup__content").querySelector(".popup__form"),U=document.querySelector(".popup__input_type_card-name"),O=document.querySelector(".popup__input_type_url"),P=document.querySelector(".popup_type_new-avatar"),I=document.querySelector(".profile__image"),D=P.querySelector(".popup__close"),B=document.querySelector(".popup_type_new-avatar .popup__form"),M=B.querySelector(".popup__input_type_url"),N=document.querySelector(".popup_type_new-card .popup__form .popup__button"),J=document.querySelector(".popup_type_edit .popup__form .popup__button"),G=document.querySelector(".popup_type_new-avatar .popup__form .popup__button"),H=E.querySelector(".popup__image"),z=E.querySelector(".popup__caption");function $(e,t){H.src=t,H.alt=e,z.textContent=e,i(E)}function F(e){i(e),e.querySelector(".popup__form"),function(e,t,n){var o=n.querySelector(t.submitButtonSelector);null!==o&&c(o,t),n.querySelectorAll(t.inputSelector).forEach((function(e){r(e,t)}))}(0,n,e)}T.addEventListener("submit",(function(e){var t,n;N.textContent="Сохранение...",e.preventDefault(),(t=U.value,n=O.value,fetch("".concat(s.baseUrl)+"/cards",{method:"POST",headers:s.headers,body:JSON.stringify({name:t,link:n})}).then(p)).then((function(e){var t,n=_(d,0,$,null==e||null===(t=e.owner)||void 0===t?void 0:t._id,e);m.prepend(n),l(h)})).catch((function(e){console.log(e)})).finally((function(){N.textContent="Сохранить"}))})),y.addEventListener("click",(function(){U.value="",O.value="",F(h)})),S.addEventListener("click",(function(){l(h)})),b.addEventListener("click",(function(){A.value=C.textContent,j.value=x.textContent,F(g)})),q.addEventListener("click",(function(){l(g)})),L.addEventListener("click",(function(){l(E)})),I.addEventListener("click",(function(){M.value="",F(P)})),D.addEventListener("click",(function(){l(P)})),w.addEventListener("submit",(function(e){var t,n;e.submitter.textContent="Сохранение...",e.preventDefault(),(t=A.value,n=j.value,fetch("".concat(s.baseUrl)+"/users/me",{method:"PATCH",headers:s.headers,body:JSON.stringify({name:t,about:n})}).then(p)).then((function(e){C.textContent=A.value,x.textContent=j.value,l(g)})).catch((function(e){console.log(e)})).finally((function(){J.textContent="Сохранить"}))})),B.addEventListener("submit",(function(e){var t;G.textContent="Сохранение...",e.preventDefault(),(t=M.value,fetch("".concat(s.baseUrl)+"/users/me/avatar",{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:t})}).then(p)).then((function(e){I.style.backgroundImage="url(".concat(M.value,")"),l(P)})).catch((function(e){console.log(e)})).finally((function(){G.textContent="Сохранить"}))})),g.classList.add("popup_is-animated"),h.classList.add("popup_is-animated"),E.classList.add("popup_is-animated"),P.classList.add("popup_is-animated"),Promise.all([fetch("".concat(s.baseUrl)+"/cards",{method:"GET",headers:s.headers}).then(p),fetch("".concat(s.baseUrl)+"/users/me",{method:"GET",headers:s.headers}).then(p)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,c,u,i=[],l=!0,a=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=c.call(n)).done)&&(i.push(o.value),i.length!==t);l=!0);}catch(e){a=!0,r=e}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(a)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],c=o[1];r.forEach((function(e){m.append(_(d,0,$,c._id,e)),console.log(e.likes.length)})),console.log(r),C.textContent=c.name,x.textContent=c.about,I.style.backgroundImage="url(".concat(c.avatar,")"),console.log(c),c._id})).catch((function(e){console.log(e)})),v=n,Array.from(document.querySelectorAll(v.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),u=e.querySelector(t.submitButtonSelector);n.forEach((function(e){e.addEventListener("input",(function(){!function(e,t,n){var c,u,i,l=null===(c=t.dataset)||void 0===c?void 0:c.errorMessage;null!=t&&null!==(u=t.validity)&&void 0!==u&&u.valid?r(t,n):null!=t&&null!==(i=t.validity)&&void 0!==i&&i.patternMismatch?o(0,t,l,n):o(0,t,t.validationMessage,n)}(0,e,t),function(e,t,n){!function(e){return null==e?void 0:e.some((function(e){return!e.validity.valid}))}(e)?function(e,t){e.disabled=!1,e.classList.remove(t.btnInactiveState)}(t,n):c(t,n)}(n,u,t)}))}))}(e,v)}))})();