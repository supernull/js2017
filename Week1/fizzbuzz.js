// Homework: Fizzbuzz to 1000
// Multiples of 3 = Fizz
// Multiples of 5 = buzz
// If both = fizzbuzz

for(i=0;i<1001;i++) {
  if (i%3===0 && i%5===0) {
    console.log("Fizzbuzz!");
    } else if(i%3===0) {
      console.log("Fizz");
    } else if(i%5===0) {
      console.log('Buzz');}
  else{
    console.log(i); }
}
