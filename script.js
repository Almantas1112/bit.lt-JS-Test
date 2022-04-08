            // 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

// function numbers(a, b){
//     if (a > b){
//         return console.log("Pirmas skaičius didesnis");
//     }
//     else if (a < b){
//         return console.log("Antras skaičius didesnis");
//     }
//     else if (a == b){
//         return console.log("Skaičiai lygus!");
//     }
// }

// numbers(2, 1); // Pirmas skaičius didesnis
// numbers(1, 2); // Antras skaičius didesnis
// numbers(5, 5); // Skaičiai lygus

            // 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

// for (let i = 1; i < 11; i++){
//     console.log(i);
// }

            // 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

// for (i = 0; i < 11; i += 2){
//     console.log(i);
// }

            // 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

// for (i = 0; i < 5; i++){
//     z = Math.floor(Math.random()*(10-1+1)+1);
//     console.log(z);
// }

            // 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

// do{
//     i = Math.floor(Math.random()*(10-1+1)+1);
//     console.log(i);
// }while(i !== 5)

            // 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

    // ilgis = Math.floor(Math.random()*(30-20)+20);
    // arr = [];
    // arr.length = ilgis;

    // for (i = 0; i < ilgis; i++){
    //     skaiciai = Math.floor(Math.random()*(30-10+10)+10);
    //     arr.push(skaiciai);
    // }
    // console.log(arr);

            // 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// arr = [];

// const count = {};

// for (i = 0; i < 100; i++){
//     skaiciai = Math.floor(Math.random()*(4-1+1)+1);
//     if (skaiciai == 1)
//     {
//         arr.push("A");
//     }
//     else if(skaiciai == 2){
//         arr.push("B");
//     }
//     else if(skaiciai == 3){
//         arr.push("C");
//     }
//     else if(skaiciai == 4){
//         arr.push("D");
//     }
// }

// console.log(arr);

// arr.forEach(element => {
//     count[element] = (count[element] || 0) + 1;
//   });

// console.log(count);

            // 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
            // Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

// var x = (x * y);
// var y = (x + y);

// function lygineSuma(x, y){
//     z = x + y;
//     if(z >= 0){
//         return console.log("Skaičius lyginis, gautas sakičius: " + z);
//     }
//     else if(z < 0){
//         return console.log("Skaičius nelyginis!, gautas skaičius: " + z);
//     }
// }

// lygineSuma(5, 5); // skaičius lyginis
// lygineSuma(-50, 5) // skaičius nelyginis

            // 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
            // skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

// function pirminisSkaicius(m){
//     m = (m - 7);
//     if(typeof m == 'number' && Number.isInteger(m / m) && Number.isInteger(m / 1) && m > 1)
//     {
//         return console.log("Skaičius " + m + " yra pirminis");
//     }
//     else
//     {
//         return console.log("Skaičius " + m + " nėra pirminis...");
//     }
// }

// pirminisSkaicius(7); // ne pirminis
// pirminisSkaicius(9); // pirminis

            // 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
            // "(XXX) XXX-XXXX". (10 taškų)