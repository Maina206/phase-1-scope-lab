window.customerName = 'bob';

function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase();
  }

function setBestCustomer() {
    window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
    window.bestCustomer = name;
  }

const leastFavoriteCustomer = 'initial value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value';
}