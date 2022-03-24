
// capturo las funciones
const compu=2500000;

let desc=0;
// capturo el boton
function todo(){
  let cantidad=document.getElementById('cantidad').value;
  // condicional para convertir un numero negativo a positivo
  if(cantidad < 0){
    cantidad *= -1;
  }
  console.log(cantidad);
  let multi = cantidad * compu;
  console.log(multi)
//  calcular el descuento
     if(multi <= 2500000){ //2,500.000 * 1 
        compra.value=multi;
        desc=multi * 0.10;
        descuento.value = desc;
        total.value= multi - desc;
        total.setAttribute("value", "tiene un descuento del 10%");
       
        
      }else if(multi<= 25000000){ //25,000.000 * 10 = 22,500.000
        compra.value=multi;
        desc=multi * 0.15;
        descuento.value = desc;
        total.value= multi - desc;
          resultado.setAttribute("value", `tiene un descuento del 15`);
         
  
      }else if(multi <= 37500000){ //37,500.000 * 15 = 30,000.000
        compra.value=multi;
        desc=multi * 0.20;
        descuento.value = desc;
        total.value= multi - desc;
        descuento.setAttribute("value", `tiene un descuento del 20`);
       
  
      }else if(multi <= 75000000){ //75,000.000 * 30 = 56,250.000
        compra.value=multi;
        desc=multi * 0.25;
        descuento.value = desc;
        total.value= multi - desc;
       descuento.setAttribute("value", `tiene un descuento del 25`);
        
      } if(multi > 75000000){
        compra.value=multi;
        desc=multi * 0.30;
        descuento.value = desc;
        total.value= multi - desc;
        descuento.setAttribute("value", `tiene un descuento del 30`);
      }
}







































































