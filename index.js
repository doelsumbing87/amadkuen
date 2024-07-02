function cekPrima(angka) {
  if (angka <= 1) return false;
  if (angka <= 3) return true;
  if (angka % 2 === 0 || angka % 3 === 0) return false;

  let i = 5;
  while (i * i <= angka) {
    if (angka % i === 0 || angka % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

const angka = 17;
if (cekPrima(angka)) {
  console.log(`${angka} adalah bilangan prima.`);
} else {
  console.log(`${angka} bukan bilangan prima.`);
}
