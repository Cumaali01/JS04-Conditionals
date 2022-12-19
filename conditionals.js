// *********** IF - ELSE **************

console.log("**** CONDITIONALS ****");

const sayi = +prompt("Bir sayi giriniz:"); // Başına + koyarak tipini sayıya dönderdik. Bunu Number parantezine alarak da yapabiliriz.
if (sayi > 0) {
  console.log(`${sayi} pozitiftir`);
} else if (sayi == 0) {
  console.log(`${sayi}0'a eşittir`);
} else {
  console.log(`${sayi} negatiftir`);
}
console.log(sayi, typeof sayi);

const n1 = +prompt("Sayi1");
const n2 = +prompt("Sayi2");
const n3 = +prompt("Sayi3");

//* 1. Yöntem
// if(n1>=n2 && n1>n3){
//     console.log(`${n1} en büyük sayidir`);
// }
// else if(n2>=n1 && n2>=n3){
//     console.log(`${n2} en büyük sayidir`)
// }
// else if(n3>=n1 && n3>=n2){
//     console.log(`${n3} en büyük sayidir`)
// } 

//* 2.Yöntem
let enBuyuk = n1;

if ( n2>=enBuyuk){
    enBuyuk = n2;
}
if ( n3>=enBuyuk){
    enBuyuk = n3;
}
console.log(`${enBuyuk} en buyuktur`);