let num = 123456;
let primo = true;

if (num <= 1) {
    primo = false;
} else {
    for (let c = 2; c <= Math.sqrt(num); c++){
        if (num % c === 0){
            primo = false;
            break;
        }
    }
}

if (primo) {
    console.log(num + ' é um numero primo');
} else {
    console.log(num + ' não é  numero primo');
}