!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("h6c0i");function a(e,o){var n=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){n?t({position:e,delay:o}):r({position:e,delay:o})}),o)}))}var u={form:document.querySelector(".form"),delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};u.form.addEventListener("submit",(function(e){e.preventDefault();var o=1,n=Number(u.delay.value);for(i=0;i<Number(u.amount.value);i+=1)a(o,n).then((function(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),n+=Number(u.step.value),o+=1})),console.log("ok")}();
//# sourceMappingURL=03-promises.09b6778d.js.map
