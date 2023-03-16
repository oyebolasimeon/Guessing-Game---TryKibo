let state = true;
alert("I'm thinking of a number between 1 and 99");

let computer_number = Math.floor(Math.random() * 99) + 1;

while (state) {
  let user_number = parseInt(prompt("Enter a number: "));
  if (user_number > computer_number) {
    alert("Your guess is too high");
  } else if (user_number < computer_number) {
    alert("Your guess is too low");
  } else {
    alert(`Congrats! The number was ${computer_number}`);
    state = false;
  }
}
