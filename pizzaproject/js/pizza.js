//receipt

function getReceipt() {
  // Initializing string to get passed.
  // function to function, growing line by line into a full receipt
  var test1 = "<h1>You Ordered:</h1>";
  var test2 = "";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("Size");
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      test1 = test1 + selectedSize + "<br>";
    }
  }
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
    test2 = test2 + sizeTotal + "<br>";
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
    test2 = test2 + sizeTotal + "<br>";
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
    test2 = test2 + sizeTotal + "<br>";
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
    test2 = test2 + sizeTotal + "<br>";
  }
  runningTotal = sizeTotal;
  /*
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size test1: "+test1);
	console.log("subtotal: $"+runningTotal+".00");
	*/
  // variables will be passed on to each function
  getMeat(runningTotal, test1, test2);
}

//Meat

function getMeat(runningTotal, test1, test2) {
  var runningTotal = runningTotal;
  var meatTotal = 0;
  var selectedMeat = [];
  var meatArray = document.getElementsByClassName("Meats");
  for (var j = 0; j < meatArray.length; j++) {
    if (meatArray[j].checked) {
      selectedMeat.push(meatArray[j].value);
      console.log("selected meat item: (" + meatArray[j].value + ")");
      test1 = test1 + meatArray[j].value + "<br>";
    }
  }
  var meatCount = selectedMeat.length;
  if (meatCount > 1) {
    meatTotal = meatCount - 1;
  } else {
    meatTotal = 0;
  }
  runningTotal = runningTotal + meatTotal;
  for (var j = 0; j < selectedMeat.length; j++) {
    if (meatCount <= 1) {
      test2 = test2 + 0 + "<br>";
      meatCount = meatCount - 1;
    } else if (meatCount == 2) {
      test2 = test2 + 1 + "<br>";
      meatCount = meatCount - 1;
    } else {
      test2 = test2 + 1 + "<br>";
      meatCount = meatCount - 1;
    }
  }
  /*
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat buy: "+buy);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	*/
  getVeggie(runningTotal, test1, test2);
}

//veggie
function getVeggie(runningTotal, test1, test2) {
  var runningTotal = runningTotal;
  var veggieTotal = 0;
  var selectedVeggie = [];
  var veggieArray = document.getElementsByClassName("Veggies");
  for (var k = 0; k < veggieArray.length; k++) {
    if (veggieArray[k].checked) {
      selectedVeggie.push(veggieArray[k].value);
      console.log("selected veggie item: (" + veggieArray[k].value + ")");
      test1 = test1 + veggieArray[k].value + "<br>";
    }
  }
  var veggieCount = selectedVeggie.length;
  if (veggieCount > 1) {
    veggieTotal = veggieCount - 1;
  } else {
    veggieTotal = 0;
  }

  runningTotal = runningTotal + veggieTotal;
  for (var k = 0; k < selectedVeggie.length; k++) {
    if (veggieCount <= 1) {
      test2 = test2 + 0 + "<br>";
      veggieCount = veggieCount - 1;
    } else if (veggieCount == 2) {
      test2 = test2 + 1 + "<br>";
      veggieCount = veggieCount - 1;
    } else {
      test2 = test2 + 1 + "<br>";
      veggieCount = veggieCount - 1;
    }
  }

  /*
	console.log("total selected veggie items: "+veggieCount);
	console.log(veggieCount+" veggie - 1 free veggie = "+"$"+veggieTotal+".00");
	console.log("veggie test1: "+test1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	
	document.getElementById("showText1").innerHTML=test1;
	document.getElementById("totalPrice1").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	*/
  getSauce(runningTotal, test1, test2);
}

//Sauce
function getSauce(runningTotal, test1, test2) {
  var sauceTotal = 0;
  var sauceArray = document.getElementsByClassName("Sauce");
  for (var i = 0; i < sauceArray.length; i++) {
    if (sauceArray[i].checked) {
      var selectedSauce = sauceArray[i].value;
      test1 = test1 + selectedSauce + "<br>";
    }
  }
  if (selectedSauce === "Marina Sauce") {
    sauceTotal = 0;
  } else if (selectedSauce === "White Sauce") {
    sauceTotal = 0;
  } else if (selectedSauce === "Barbeque Sauce") {
    sauceTotal = 0;
  } else if (selectedSauce === "No Sauce") {
    sauceTotal = 0;
  }
  runningTotal = runningTotal + sauceTotal;

  /*
	console.log(selectedSauce+" = $"+sizeTotal+".00");
	console.log("size test1: "+test1);
	console.log("subtotal: $"+runningTotal+".00");
	*/
  getCheese(runningTotal, test1, test2); // variables will be passed on to each function
}

//Cheese
function getCheese(runningTotal, test1, test2) {
  var cheeseTotal = 0;
  var cheeseArray = document.getElementsByClassName("Cheese");
  for (var i = 0; i < cheeseArray.length; i++) {
    if (cheeseArray[i].checked) {
      var selectedCheese = cheeseArray[i].value;
      test1 = test1 + selectedCheese + "<br>";
    }
  }
  if (selectedCheese === "Regular Cheese") {
    cheeseTotal = 0;
  } else if (selectedCheese === "No Cheese") {
    cheeseTotal = 0;
  } else if (selectedCheese === "Extra Cheese") {
    cheeseTotal = 3;
    test2 = test2 + cheeseTotal + "<br>";
  }
  runningTotal = runningTotal + cheeseTotal;

  /*
	console.log(selectedCheese+" = $"+cheeseTotal+".00");
	console.log("size test1: "+test1);
	console.log("subtotal: $"+runningTotal+".00");
	*/
  getCrust(runningTotal, test1, test2); // variables will be passed on to each function
}

//Crust
function getCrust(runningTotal, test1, test2) {
  var crustTotal = 0;
  var crustArray = document.getElementsByClassName("Crust");
  for (var i = 0; i < crustArray.length; i++) {
    if (crustArray[i].checked) {
      var selectedCrust = crustArray[i].value;
      test1 = test1 + selectedCrust + "<br>";
    }
  }

  if (selectedCrust === "Cheese Stuffed Crust") {
    crustTotal = 3;
    test2 = test2 + crustTotal + "<br>";
  } else {
    crustTotal = 0;
  }
  runningTotal = runningTotal + crustTotal;

  /* You can also write the crust code this way

	if (selectedCrust === "Plain Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Garlic Butter Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "Cheese Stuffed Crust") {
		crustTotal = 3;
		test2 = test2+crustTotal+"<br>";
	} else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
	} else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
	}
	runningTotal = runningTotal+crustTotal;
	*/

  /*
	console.log(selectedCrust+" = $"+crustTotal+".00");
	console.log("size test1: "+test1);
	console.log("subtotal: $"+runningTotal+".00");
	*/
  // variables will be passed on to each function

  document.getElementById("showTest1").innerHTML = test1;
  document.getElementById("showTest2").innerHTML = test2;
  document.getElementById("totalPrice1").innerHTML =
    "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}

/*
document.getElementById("totalPrice1").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
*/
