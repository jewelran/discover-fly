function firstIncreaseHandler() {
  const firstInput = document.getElementById("firstInput");
  const firstInputNumber = parseFloat(firstInput.value);
  const inputNumber = firstInputNumber + 1;
  firstInput.value = inputNumber;
  const firstTotal = document.getElementById("firstTotal");
  const totalAmount = inputNumber * 150;
  firstTotal.innerText = "$" + totalAmount;
  subTotal();
  hiddenInfo()
}

function firstDecreaseBtnHandler(increase) {
  const firstInput = document.getElementById("firstInput");
  const firstInputNumber = parseFloat(firstInput.value);
  // const inputNumber = firstInputNumber - 1;
  let inputNumber = firstInputNumber;
  if (increase == true) {
    inputNumber = firstInputNumber + 1;
  }
  if (increase == false && firstInputNumber > 0) {
    inputNumber = firstInputNumber - 1;
  }
  firstInput.value = inputNumber;
  const firstTotal = document.getElementById("firstTotal");
  const totalAmount = inputNumber * 150;
  firstTotal.innerText = "$" + totalAmount;
  console.log(totalAmount);
  subTotal();
  hiddenInfo()
}

function economicIncreaseHandler() {
  const economiInput = document.getElementById("economyInptu");
  const economiInputNumber = parseInt(economiInput.value);
  const increaseNumber = economiInputNumber + 1;
  economiInput.value = increaseNumber;
  const economyTotal = document.getElementById("economyTotal");
  const totalAmount = increaseNumber * 100;
  economyTotal.innerText = "$" + totalAmount;
  subTotal();
  hiddenInfo()
}

function economiDecreaseHandler(decrease) {
  const economiInput = document.getElementById("economyInptu");
  const economiInputNumber = parseInt(economiInput.value);
  // const increaseNumber = economiInputNumber - 1;
  let increaseNumber = economiInputNumber;
  if (decrease == true) {
    increaseNumber = economiInputNumber + 1;
  }
  if (decrease == false && economiInputNumber > 0) {
    increaseNumber = economiInputNumber - 1;
  }
  economiInput.value = increaseNumber;
  const economyTotal = document.getElementById("economyTotal");
  const totalAmount = increaseNumber * 100;
  economyTotal.innerText = "$" + totalAmount;
  subTotal();
  hiddenInfo()
}

function subTotal() {
  const firstIntput = document.getElementById("firstInput");
  const firstInputNumber = parseFloat(firstIntput.value);

  const economyInput = document.getElementById("economyInptu");
  const economyInputNumber = parseFloat(economyInput.value);

  const grandTotal = firstInputNumber * 150 + economyInputNumber * 100;
  const subTotal = document.getElementById("subTotal");
  subTotal.innerHTML = "$" + grandTotal;

  const vat = Math.round(grandTotal / 10);
  const totalVat = document.getElementById("vat");
  totalVat.innerText = "$" + vat;

  const intotal = document.getElementById("inTotal");
  const intotalAmount = grandTotal + vat;
  intotal.innerText = "$" + intotalAmount;
}

function submitHandler() {
  const economyTotal = document.getElementById("economyTotal");
  economyTotal.innerText = "$" + 0;
  const firstTotal = document.getElementById("firstTotal");
  firstTotal.innerText = "$" + 0;
  const firstIntput = document.getElementById("firstInput");
  firstIntput.value = 0;
  const economyInput = document.getElementById("economyInptu");
  economyInput.value = 0;
  const intotal = document.getElementById("inTotal");
  intotal.innerText = "$" + 0;
  const subTotal = document.getElementById("subTotal");
  subTotal.innerText = "$" + 0;
  const totalVat = document.getElementById("vat");
  totalVat.innerText = "$" + 0;
  const  hidden = document.getElementById('messageInfo');
  hidden.style.display = "block"
  const message = document.getElementById("messageInfo");
  message.innerText = `
  Your order is seccessfully complate!
  thank you for choosing.
  `;
}
function hiddenInfo(){
  const  hidden = document.getElementById('messageInfo');
  hidden.style.display = "none"
}
