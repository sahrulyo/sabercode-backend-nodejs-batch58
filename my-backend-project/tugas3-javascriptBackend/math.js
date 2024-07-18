// Fungsi yang menghitung luas lingkaran berdasarkan jari-jari 
function calculateCircleArea(radius) {
    const pi = 3.14159;
    return pi * radius * radius;
  }
  
  console.log('Luas lingkaran dengan jari-jari 5:', calculateCircleArea(5));
  
  // Fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan
  function squareNumbers(numbers) {
    return numbers.map(number => number * number);
  }
  
  const nums = [1, 2, 3, 4, 5];
  console.log('Array angka yang dikuadratkan:', squareNumbers(nums));
  