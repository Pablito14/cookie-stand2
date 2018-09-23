'use strict';

var hours = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ','8pm '];
var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var tfoot = document.getElementsByTagName('tfoot')[0];
var addForm = document.getElementById('add-location');
var salesForm = document.getElementById('sales-data');

// Store Constructor Function
function Store(location, min, max, avg) {
  this.locationName = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avg;
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  this.getSales();

  Store.allLocations.push(this);
}
Store.allLocations = [];

Store.prototype.getSales = function() {
  for (var i = 0; i < hours.length; i++) {
    var numCustomers = rando(
      this.minCustomersPerHour,
      this.maxCustomersPerHour,
    );
    var hourlyCount = Math.floor(numCustomers * this.avgCookiesPerSale);
    this.cookiesPerHour.push(hourlyCount);
    this.totalCookies += hourlyCount;
  }
};

Store.prototype.render = function(locationIndex) {
  var tr = addElement('tr', '', tbody);
  addElement('td', this.locationName, tr);
  for (var i = 0; i < this.cookiesPerHour.length; i++) {
    var td = addElement('td', '', tr);
    var input = addElement('input', '', td);
    input.value = this.cookiesPerHour[i];
    input.dataset['hour'] = i;
    input.dataset['location'] = locationIndex;
  }
  addElement('td', this.totalCookies, tr);
};

// func: rando(min,max)
function rando(min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// DOM Magical time saver
function addElement(element, content, parent) {
  var newElement = document.createElement(element);
  var newContent = document.createTextNode(content);
  newElement.appendChild(newContent);
  parent.appendChild(newElement);
  return newElement;
}

function renderHeader() {
  thead.innerHTML = '';
  var tr = addElement('tr', '', thead);
  addElement('th', '', tr);
  for (var i = 0; i < hours.length; i++) {
    addElement('th', hours[i], tr);
  }
  addElement('th', 'Total', tr);
}

function renderFooter() {
  tfoot.innerHTML = '';
  var tr = addElement('tr', '', tfoot);
  addElement('th', 'Hourly Total', tr);

  var grandTotal = 0;

  for (var i = 0; i < hours.length; i++) {
    var hourTotal = 0;
    for (var x = 0; x < Store.allLocations.length; x++) {
      hourTotal += Store.allLocations[x].cookiesPerHour[i];
      grandTotal += Store.allLocations[x].cookiesPerHour[i];
    }
    addElement('th', hourTotal, tr);
  }

  addElement('th', grandTotal, tr);
}

function renderStores() {
  tbody.innerHTML = '';
  for (var i = 0; i < Store.allLocations.length; i++) {
    Store.allLocations[i].render(i);
  }
}

// Add a new store
function handleSubmit(event) {
  event.preventDefault();
  var locationName = event.target.locName.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);

  var addedStore = new Store(locationName, min, max, avg);

  addedStore.render();

  renderFooter();
}

function handleChange(event) {
  console.log(event.target);
  var location = event.target.dataset['location'];
  var hour = event.target.dataset['hour'];
  var newValue = parseInt(event.target.value);
  Store.allLocations[location].cookiesPerHour[hour] = newValue;
  renderFooter();
}

addForm.addEventListener('submit', handleSubmit);
salesForm.addEventListener('change', handleChange);

new Store('Pike Place', 22, 65, 6.3);
new Store('Seatac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

renderHeader();
renderStores();
renderFooter();

console.log(Store.allLocations);
