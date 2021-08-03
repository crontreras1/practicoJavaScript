//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrecio = document.getElementById("inputPrecio");
    const priceValue = inputPrecio.value;
    
    const inputDescuento = document.getElementById("inputDescuento");
    const discountValue = inputDescuento.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio de tus chanclas es de " + precioConDescuento; 
}

//const porcentajePrecioConDescuento = 100 - descuento; 
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

/* console.log({
     precioOriginal,
     descuento,
     porcentajePrecioConDescuento,
     precioConDescuento,
 })*/

 const coupons = [
     "SoyBatman",
     "TengoHambre",
     "EsUnSecreto",
 ];

 const inputCoupon = document.getElementById("inputCoupon");
 const couponValue = inputCoupon.value;

 function onClickButtonPriceDiscount() {
     const inputPrecio = document.getElementById("inputPrecio");
     const priceValue = inputPrecio.value;

     const inputCoupon = document.getElementById("inputCoupon");
     const couponValue = inputCoupon.value;

     let descuento;

     switch(couponValue) {
         case "SoyBatman":
             descuento =15;
         break;
         case "TengoHambre":
             descuento = 30;
         break;
         case "EsUnSecreto":
             descuento = 25;
         break;
     }

     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

     const resultP = document.getElementById("resultP");
     resultP.innerText = "El precio de tus chanclas con descuento es de " + precioConDescuento;
 }