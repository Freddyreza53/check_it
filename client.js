$(document).ready(button);
let garage = [];
let spacesLeft = 3;

/*
Do not change newCar for base mode!
HINT: You will need to gather the input values and then call this function, passing in those input values.
*/
function newCar(yearInput, makeInput, modelInput, priceInput, imageInput){
  console.log('in newCar:', yearInput, makeInput, modelInput, priceInput, imageInput);
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput,
    price: priceInput,
    image: imageInput
  }
  garage.push(newCarObject);
  return true;
} // end newCar

function addCar() {
  let yearInput = $('#carYear').val();
  let makeInput = $('#carMake').val();
  let modelInput = $('#carModel').val();
  let priceInput = $('#carPrice').val();
  let imageInput = $('#carImage').val();

  if (spacesLeft === 0) {
    $('.userInputs').empty();

    $('#garageFull').append('Garage Is Full!');
  }
  else if (yearInput == '' || makeInput == '' || modelInput == '' || priceInput == '' || imageInput == '') {
    $('#carYear').val('');
    $('#carMake').val('');
    $('#carModel').val('');
    $('#carPrice').val('');
    $('#carImage').val('');
  }
  else if (spacesLeft >= 0) {
    newCar(yearInput, makeInput, modelInput, priceInput, imageInput)
    spacesLeft--;
    $('#carYear').val('');
    $('#carMake').val('');
    $('#carModel').val('');
    $('#carPrice').val('');
    $('#carImage').val('');

    $(`#spot${garage.length}`).append(`Spot ${garage.length}`);
    listCars();
  }

  totalPrice();
  spaces();
}

function listCars(){
  for (i = garage.length - 1; i < garage.length; i++) {
    $('#displayCars').append(`<li>` + garage[i].year + ` ` + garage[i].make + ` ` + garage[i].model + ` - $` + garage[i].price + `<img src=${garage[i].image} id="movingCar${garage.length - 1}" height="50px" width="50px">` + `</li>`);
  }
}

function totalPrice() {
  let totalCarPrice = 0;

  for (car of garage) {
    totalCarPrice += Number(car.price);
  }

  $('#totalCarPrice').empty();
  $('#totalCarPrice').append(totalCarPrice);
}

function spaces() {
  $('#availableSpaces').empty();
  $('#availableSpaces').append(spacesLeft);
}

function button() {
  $('#addCarButton').on('click', addCar);
}
