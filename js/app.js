'use strict';

var hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  dailyTotal: 0,
  cookieSales: [],

  generateHourlyCustomers: function(min, max) {
    min = Math.ceil(this.minCust);
    max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  calculateSales: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookieSale = Math.floor(this.generateHourlyCustomers(this.minCust, this.maxCust) * this.avgSale);
      this.cookieSales.push(cookieSale); // note the difference between cookieSale vs cookieSales whhich is plural (the array)
    }
  },
};

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  dailyTotal: 0,
  cookieSales: [],

  generateHourlyCustomers: function(min, max) {
    min = Math.ceil(this.minCust);
    max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  calculateSales: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookieSale = Math.floor(this.generateHourlyCustomers(this.minCust, this.maxCust) * this.avgSale);
      this.cookieSales.push(cookieSale);
    }
  },
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  dailyTotal: 0,
  cookieSales: [],

  generateHourlyCustomers: function(min, max) {
    min = Math.ceil(this.minCust);
    max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  calculateSales: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookieSale = Math.floor(this.generateHourlyCustomers(this.minCust, this.maxCust) * this.avgSale);
      this.cookieSales.push(cookieSale);
    }
  },
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  dailyTotal: 0,
  cookieSales: [],

  generateHourlyCustomers: function(min, max) {
    min = Math.ceil(this.minCust);
    max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  calculateSales: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookieSale = Math.floor(this.generateHourlyCustomers(this.minCust, this.maxCust) * this.avgSale);
      this.cookieSales.push(cookieSale);
    }
  },
};

var Alki = {
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  dailyTotal: 0,
  cookieSales: [],

  generateHourlyCustomers: function(min, max) {
    min = Math.ceil(this.minCust);
    max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  calculateSales: function() {
    for (var i = 0; i < hours.length; i++) {
      var cookieSale = Math.floor(this.generateHourlyCustomers(this.minCust, this.maxCust) * this.avgSale);
      this.cookieSales.push(cookieSale);
    }
  },
};

//pickles