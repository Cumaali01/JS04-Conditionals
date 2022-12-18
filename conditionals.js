// *********** IF - ELSE **************

console.log("**** CONDITIONALS ****");

const sayi = +prompt("Bir sayi giriniz:"); // Başına + koyarak tipini sayıya dönderdik.
if (sayi > 0) {
  console.log(`${sayi} pozitiftir`);

} else if (sayi == 0) {
  console.log(`${sayi}0'a eşittir`);
} else {
  console.log(`${sayi} negatiftir`);
}
console.log(sayi, typeof sayi);
