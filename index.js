// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
// for city search
var $cityInput = document.querySelector("#city");
var $searchCityBtn = document.querySelector("#searchcity");
// for state search
var $stateInput = document.querySelector("#state");
var $searchStateBtn = document.querySelector("#searchstate");
// for country search
var $countryInput = document.querySelector("#country");
var $searchCountryBtn = document.querySelector("#searchcountry");
// for shape search
var $shapeInput = document.querySelector("#shape");
var $searchShapeBtn = document.querySelector("#searchshape");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
// for city search
$searchCityBtn.addEventListener("click", handleSearchCityButtonClick);
// for state search
$searchStateBtn.addEventListener("click", handleSearchStateButtonClick);
// for country search
$searchCountryBtn.addEventListener("click", handleSearchCountryButtonClick);
// for shape search
$searchShapeBtn.addEventListener("click", handleSearchShapeButtonClick);

// Set filteredUFOs to dataFull
var filteredUFOs = dataFull;
//console.log(filteredUFOs)

// renderTable renders the filteredUFOs to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredUFOs.length; i++) {
    // Get get the current UFO object and its fields
    var ufo = filteredUFOs[i];
    var fields = Object.keys(ufo);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the UFO object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[field];
    }
  }
}
//Search by date
function handleSearchButtonClick() {
  // Format the user's search date by removing leading and trailing whitespace
  var filterDate = $dateInput.value.trim();

  // Set filteredUFOs to an array of all ufos whose "datetime" matches the filter
  filteredUFOs = dataFull.filter(function(ufo) {
    var ufoDate = ufo.datetime;

    // If true, add the ufo record to the filteredUFOs, otherwise don't add it to filteredAddresses
    return ufoDate === filterDate;
  });
  renderTable();
}

//Search by City
function handleSearchCityButtonClick() {
  // Format the user's search city by removing leading and trailing whitespace & convert to lower case
  var filterCity = $cityInput.value.trim().toLowerCase();
  console.log(filterCity)
  // Set filteredUFOs to an array of all ufos whose "city" matches the filter
  filteredUFOs = dataFull.filter(function(ufo) {
    var ufoCity = ufo.city;
    // If true, add the ufo record to the filteredUFOs, otherwise don't add it to filteredAddresses
    return ufoCity === filterCity;
  });
  renderTable();
}

//Search by State
function handleSearchStateButtonClick() {
  // Format the user's search date by removing leading and trailing whitespace
  var filterState = $stateInput.value.trim().toLowerCase();
  console.log(filterState)
  // Set filteredUFOs to an array of all ufos whose "datetime" matches the filter
  filteredUFOs = dataFull.filter(function(ufo) {
    var ufoState = ufo.state;
    // If true, add the ufo record to the filteredUFOs, otherwise don't add it to filteredAddresses
    return ufoState === filterState;
  });
  renderTable();
}

//Search by Country
function handleSearchCountryButtonClick() {
  // Format the user's search country by removing leading and trailing whitespace & convert to lower case
  var filterCountry = $countryInput.value.trim().toLowerCase();
  console.log(filterCountry)
  // Set filteredUFOs to an array of all ufos whose "country" matches the filter
  filteredUFOs = dataFull.filter(function(ufo) {
    var ufoCountry = ufo.country;
    // If true, add the ufo record to the filteredUFOs, otherwise don't add it to filteredAddresses
    return ufoCountry === filterCountry;
  });
  renderTable();
}

//Search by Shape
function handleSearchShapeButtonClick() {
  // Format the user's search shape by removing leading and trailing whitespace & convert to lower case
  var filterShape = $shapeInput.value.trim().toLowerCase();
  console.log(filterShape)
  // Set filteredUFOs to an array of all ufos whose "shape" matches the filter
  filteredUFOs = dataFull.filter(function(ufo) {
    var ufoShape = ufo.shape;
    // If true, add the ufo record to the filteredUFOs, otherwise don't add it to filteredAddresses
    return ufoShape === filterShape;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
