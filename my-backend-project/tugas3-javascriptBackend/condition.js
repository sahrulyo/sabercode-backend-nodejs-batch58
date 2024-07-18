//jawaban soal 2 ------------->

let input = 9;
if (input % 2 == 0) {
    console.log("genap");
} else {
    console.log("ganjil");
}

let day = 6;
let dayName;

switch (day) {
    case 1: 
    dayName = "Senin";
    break;
    case 2: 
    dayName = "Selasa";
    break;
    case 3: 
    dayName = "Rabu";
    break;
    case 4: 
    dayName = "Kamis";
    break;
    case 5: 
    dayName = "Jum'at";
    break;
    case 6: 
    dayName = "Sabtu";
    break;
    case 7: 
    dayName = "Minggu";
    break;
    default:
        dayName = "invalid day";

}

console.log (dayName);
