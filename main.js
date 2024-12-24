// 1. 1-dən 200-ə qədər ədədləri console-a çıxarın
for (let i = 1; i <= 200; i++) {
    console.log(i);
}

// 2. 200-dən 1-ə qədər ədədləri console-a çıxarın
for (let i = 200; i >= 1; i--) {
    console.log(i);
}

// 3. Bütün iki rəqəmli ədədləri ekrana çıxarın
for (let i = 10; i < 100; i++) {
    console.log(i);
}

// 4. 100-dən 500-ə qədər cüt ədədləri ekrana çıxarın
for (let i = 100; i <= 500; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 5. Bütün iki rəqəmli ədədlərin cəmini tapın
let sum = 0;
for (let i = 10; i < 100; i++) {
    sum += i;
}
console.log("İki rəqəmli ədədlərin cəmi:", sum);

// 6. 1-dən 10-a qədər ədədlərin hasilini tapın
let product = 1;
for (let i = 1; i <= 10; i++) {
    product *= i;
}
console.log("1-dən 10-a qədər ədədlərin hasilı:", product);

// 7. İki rəqəmli ədədlərin ədədi ortasını tapın
let sum2Digit = 0;
let count2Digit = 0;
for (let i = 10; i < 100; i++) {
    sum2Digit += i;
    count2Digit++;
}
let average = sum2Digit / count2Digit;
console.log("İki rəqəmli ədədlərin ədədi ortası:", average);

// 8. Üç rəqəmli ədədlər içərisində 13-ə bölünən ilk ədədi ekrana çıxarın
for (let i = 100; i < 1000; i++) {
    if (i % 13 === 0) {
        console.log("Üç rəqəmli ədədin 13-ə bölünən ilk ədədi:", i);
        break;
    }
}

// 9. Üç rəqəmli ədədlər içərisində 19-a bölünən son ədədi ekrana çıxarın
for (let i = 999; i >= 100; i--) {
    if (i % 19 === 0) {
        console.log("Üç rəqəmli ədədin 19-a bölünən son ədədi:", i);
        break;
    }
}

// 10. Daxil olunan ədədlərin tam bölənlərini ekrana çıxarın
let number = parseInt(prompt("Bir ədəd daxil edin:"));
console.log("Tam bölənlər:");
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

// 11. Daxil olunan ədədin tam bölənlərinin sayını ekrana çıxarın
let numberForDivisors = parseInt(prompt("Bir ədəd daxil edin:"));
let divisorCount = 0;
for (let i = 1; i <= numberForDivisors; i++) {
    if (numberForDivisors % i === 0) {
        divisorCount++;
    }
}
console.log("Tam bölənlərin sayı:", divisorCount);