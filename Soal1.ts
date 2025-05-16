let counter = 1;
let isOdd = true;

for (let i = 1; i <= 10; i++) {
    console.log(`Perulangan 10 ke-${i}:`);
    let sum = 0;
    let printed = 0;

    while (printed < 5) {
        if (isOdd && counter % 2 === 1) {
            console.log(counter);
            sum += counter;
            printed++;
        } else if (!isOdd && counter % 2 === 0) {
            console.log(counter);
            sum += counter;
            printed++;
        }
        counter++;
    }

    console.log('--------------------------');
    console.log(`Jumlah: ${sum}\n`);
    isOdd = !isOdd; // toggle antara ganjil/genap
}