(this["webpackJsonprestaurant-menu"]=this["webpackJsonprestaurant-menu"]||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},20:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),a=t(9),o=t.n(a),c=(t(20),t(4)),u=t(1),l=t(2),p="#f44336";function s(){var e=Object(u.a)(["\n    font-family: 'Righteous', cursive;\n"]);return s=function(){return e},e}var m=l.b.div(s());function g(){var e=Object(u.a)(["\n    font-size: 20px;\n    color: white;\n    text-shadow: 1px 1px 4px #380502;\n"]);return g=function(){return e},e}function d(){var e=Object(u.a)(["\n    background-color: ",";\n    padding: 10px;\n    position: fixed;\n    width: 100%;\n    z-index: 999;\n"]);return d=function(){return e},e}var f=l.b.div(d(),p),b=Object(l.b)(m)(g());function v(){return i.a.createElement(f,null,i.a.createElement(b,null,"Hornbill Gourmet Restaurant - Authentic Malaysian Cuisines ","",' -"The Borneo Connection"'))}function x(){var e=Object(u.a)(['\n   height: 30px;\n   width: 100%;\n   /* background-image: url("/img/hornbill-flying.jpg"); */\n   background-position: center;\n   background-size: cover;\n   filter: contrast(75%);    \n    ']);return x=function(){return e},e}var h=l.b.div(x()),j=t(3);function E(e){return e.toLocaleString("en-us",{style:"currency",currency:"USD"})}var O=[{name:"Nasi Lemak Beef",Details:"Beef, anchovies, boiled egg, peanut",img:"/img/nasi-lemak.jpg",section:"Entrees",price:12.75},{name:"Chicken Noodle Soup",img:"/img/chicken-noodle-soup.jpg",section:"Entrees",price:10.5},{name:"Chicken Satay",img:"/img/chicken-satay.jpg",section:"Sides",price:9.75},{name:"Curry Chicken",img:"/img/curry-chicken.jpg",section:"Entrees",price:8.9},{name:"Curry Lamb",img:"/img/curry-lamb.jpg",section:"Entrees",price:8.9},{name:"Curry Laksa",img:"/img/curry-laksa.jpg",section:"Entrees",price:8.9},{name:"Fish Cooked in Bamboo",img:"/img/fish-cooked-in-bamboo.jpg",section:"Entrees",price:20.35},{name:"Kolo Mee",img:"/img/kolo-mee.jpg",section:"Entrees",price:6.99},{name:"Malaysian Coconut Butter Prawns",img:"/img/malaysian-coconut-butter-prawns.jpg",section:"Entrees",price:15.85},{name:"Spicy Noodle",img:"/img/spicy-noodle.jpg",section:"Entrees",price:8.9},{name:"Spicy-Sour-fish",img:"/img/spicy-sour-fish.jpg",section:"Entrees",price:9.9},{name:"Peanut Pocket",img:"/img/Peanut-Pocket.jpg",section:"Desserts",price:4.75},{name:"Mee Goreng",img:"/img/mee-goreng.jpg",section:"Entrees",price:12.99},{name:"Fried Spicy Noodles",img:"/img/fried-spicy-noodle.jpg",section:"Entrees",price:10.75},{name:"Fried-Rice-Noodles",img:"/img/fried-rice-noodle.jpg",section:"Entrees",price:10.75},{name:"Mee Goreng",img:"/img/mee-goreng.jpg",section:"Entrees",price:10.75},{name:"Hainan Chicken Rice",img:"/img/hainan-chicken-rice.jpg",section:"Entrees",price:11.75},{name:"Chili Crab",img:"/img/chili-crab.jpg",section:"Entrees",price:32.99},{name:"Penang Fried Rice Noodle",img:"/img/penang-fried-rice-noodle.jpg",section:"Entrees",price:12.75},{name:"Soy Bean Drink",img:"/img/soy-bean-drink.jpg",section:"Beverages",price:2.75},{name:"Shaved Ice n Beans",img:"/img/shaved-ice-n-beans.jpg",section:"Desserts",price:3.75}].reduce((function(e,n){return e[n.section]||(e[n.section]=[]),e[n.section].push(n),e}),{});function y(){var e=Object(u.a)(["\n    height: 100px;\n    padding: 10px;\n    font-size: 20px;\n    background-image: ","\n    background-position: center;\n    background-size: cover;\n    filter: contrast(75%);\n    border-radius: 7px;\n    margin-top: 5px;\n    transition-property: box-shadow margin-top filter;\n    transition-duration: .1s;\n    box-shadow: 0px 0 px 2px 0px grey;\n    &:hover {\n        cursor: pointer;\n        filter: contrast(100%);\n        margin-top:0px;\n        margin-bottom: 5px;\n        box-shadow: 0px 0 px 10px 0px grey;\n    }\n"]);return y=function(){return e},e}function k(){var e=Object(u.a)(["\n    position: absolute;\n    background-color: rgba(255, 255, 255, .8);\n    padding: 5px;\n"]);return k=function(){return e},e}function w(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n"]);return w=function(){return e},e}var P=l.b.div(w()),C=Object(l.b)(m)(k()),S=l.b.div(y(),(function(e){var n=e.img;return"url(".concat(n,");")}));function F(){var e=Object(u.a)(["\n    height: 1000px;\n    margin: 0px 400px 50px 20px;\n"]);return F=function(){return e},e}var D=l.b.div(F());function z(e){var n=e.setOpenFood;return i.a.createElement(D,null,Object.entries(O).map((function(e){var t=Object(j.a)(e,2),r=t[0],a=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null," ",r," "),i.a.createElement(P,null,a.map((function(e){return i.a.createElement(S,{img:e.img,onClick:function(){n(e)}},i.a.createElement(C,null,i.a.createElement("div",null,e.name),i.a.createElement("div",null,E(e.price))))}))))})))}var B=t(12);function q(){var e=Object(u.a)(["\n    width: 23px;\n    color: ",";\n    font-size: 20px;\n    text-align:center;\n    cursor: pointer;\n    line-height: 23px;\n    margin: 0px 10px;\n    border: 1px solid #f44336;\n    border: 1px solid ",";\n    ","\n    &:hover {\n        background-color: #ffe3e3;\n    }\n"]);return q=function(){return e},e}function N(){var e=Object(u.a)(["\n    display: flex;\n    height: 24px;\n   "]);return N=function(){return e},e}function R(){var e=Object(u.a)(["\n    font-size: 18px;\n    width: 24px;\n    text-align: center;\n    border: none;\n    outline: none;\n"]);return R=function(){return e},e}var M=l.b.input(R()),L=Object(l.b)(m)(N()),T=l.b.div(q(),p,p,(function(e){return e.disabled&&"opacity: 0.5;\n        pointer-events: none;\n        "}));function G(e){var n=e.quantity;return i.a.createElement(L,null,i.a.createElement("div",null,"Quantity: "),i.a.createElement(T,{onClick:function(){n.setValue(n.value-1)},disabled:1===n.value}," - "),i.a.createElement(M,n),i.a.createElement(T,{onClick:function(){n.setValue(n.value+1)}}," + "))}function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(){var e=Object(u.a)(["\n    top:100px;\n    font-size: 15px;\n    padding: 5px 40px;\n"]);return W=function(){return e},e}function A(){var e=Object(u.a)(["\n    min-height: 200px;\n    margin-bottom: 20px;\n    ","\n    background-position: center;\n    background-size: cover;\n"]);return A=function(){return e},e}function H(){var e=Object(u.a)(["\n    position:fixed;\n    height: 100%;\n    width: 100%;\n    top: 0px;\n    background-color: black;\n    opacity: 0.7;\n    z-index: 4;\n"]);return H=function(){return e},e}function I(){var e=Object(u.a)(["\nmargin: 10px;\ncolor: white;\nheight: 20px;\nborder-radius: 5px;\npadding: 10px;\ntext-align: center;\nwidth: 200px;\ncursor: pointer;\nbackground-color: ",";\n"]);return I=function(){return e},e}function J(){var e=Object(u.a)(["\n    box-shadow: 0px -2px 20px 0px grey;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n"]);return J=function(){return e},e}function Y(){var e=Object(u.a)(["\n    overflow: auto;\n    min-height: 100px;\n    padding: 0px 40px;\n"]);return Y=function(){return e},e}function K(){var e=Object(u.a)(["\n    width: 500px;\n    background-color: white;\n    position: fixed;\n    top: 75px;\n    z-index: 5;\n    max-height: calc(100% - 100px);\n    left: calc(50% - 250px);\n    display: flex;\n    flex-direction: column;\n"]);return K=function(){return e},e}var Q=l.b.div(K()),U=l.b.div(Y()),$=l.b.div(J()),X=Object(l.b)(m)(I(),p),Z=l.b.div(H()),_=l.b.div(A(),(function(e){var n=e.img;return"background-image: url(".concat(n,");")})),ee=Object(l.b)(C)(W());function ne(e){return e.quantity*e.price}function te(e){var n=e.openFood,t=e.setOpenFood,a=e.setOrders,o=e.orders,u=function(e){var n=Object(r.useState)(e||1),t=Object(j.a)(n,2),i=t[0],a=t[1];return{value:i,setValue:a,onChange:function(e){+e.target.value>=1?a(+e.target.value):a(1)}}}(n&&n.quantity);function l(){t()}if(!n)return null;var p=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(t,!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,{quantity:u.value});return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,{onClick:l}),i.a.createElement(Q,null,i.a.createElement(_,{img:n.img},i.a.createElement(ee,null," ",n.name)),i.a.createElement(U,null,i.a.createElement(G,{quantity:u})),i.a.createElement($,null,i.a.createElement(X,{onClick:function(){a([].concat(Object(B.a)(o),[p])),l()}},"Add to order: ",E(ne(p))))))}function re(e){return e.openFood?i.a.createElement(te,e):null}function ie(){var e=Object(u.a)(["\n    body {\n        margin: 0;\n        font-family: 'Open Sans', sans-serif;\n    }\n    h1, h2, h3 {\n        font-family: 'Righteous', cursive;\n    }\n"]);return ie=function(){return e},e}var ae=Object(l.a)(ie());function oe(){var e=Object(u.a)(["\n        padding: 10px 0px;\n        display: grid;\n        grid-template-columns: 20px 150px 20px 60px;\n        justify-content: space-between;\n    "]);return oe=function(){return e},e}function ce(){var e=Object(u.a)(["\n    padding: 10px 0px;\n    border-bottom: 1px solid grey;\n    "]);return ce=function(){return e},e}function ue(){var e=Object(u.a)(["\n    padding: 20px;\n    height: 100%;\n"]);return ue=function(){return e},e}function le(){var e=Object(u.a)(["\n    position: fixed;\n    right: 0px;\n    top: 48px;\n    width: 340px;\n    background-color: white;\n    height: calc(100% - 48px);\n    z-index: 10;\n    box-shadow: 4px 0px 5px 4px grey;\n    display: flex;\n    flex-direction: column;\n"]);return le=function(){return e},e}var pe=l.b.div(le()),se=Object(l.b)(U)(ue()),me=l.b.div(ce()),ge=l.b.div(oe());function de(e){var n=e.orders,t=n.reduce((function(e,n){return e+ne(n)}),0),r=.101*t,a=t+r;return i.a.createElement(pe,null,0===n.length?i.a.createElement(se,null," Your order is empty. "):i.a.createElement("orderContent",null," ",i.a.createElement(me,null," Your Order:")," "," ",n.map((function(e){return i.a.createElement(me,null,i.a.createElement(ge,null,i.a.createElement("div",null,e.quantity),i.a.createElement("div",null,e.name),i.a.createElement("div",null),i.a.createElement("div",null,E(ne(e)))))})),i.a.createElement(me,null,i.a.createElement(ge,null,i.a.createElement("div",null),i.a.createElement("div",null,"Sub-Total"),i.a.createElement("div",null,E(t))),i.a.createElement(ge,null,i.a.createElement("div",null),i.a.createElement("div",null," Tax "),i.a.createElement("div",null,E(r))),i.a.createElement(ge,null,i.a.createElement("div",null),i.a.createElement("div",null,"Total"),i.a.createElement("div",null,E(a))))),i.a.createElement($,null,i.a.createElement(X,null," Checkout ")))}function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var be=function(){var e=function(){var e=Object(r.useState)(),n=Object(j.a)(e,2);return{openFood:n[0],setOpenFood:n[1]}}(),n=function(){var e=Object(r.useState)([]),n=Object(j.a)(e,2);return{orders:n[0],setOrders:n[1]}}();return function(e){var n=e.openFood,t=e.orders;Object(r.useEffect)((function(){document.title=n?n.name:0===t.length?"What's for dinner?":"[".concat(t.length,"] items in your order")}))}(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(t,!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{},n)),i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,null),i.a.createElement(re,Object.assign({},e,n)),i.a.createElement(v,null),i.a.createElement(de,n),i.a.createElement(h,null),i.a.createElement(z,e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.79a7dab2.chunk.js.map