let customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  let greeting = '';
  // your code here
  let visits;

	if (Object.keys(customerData).includes(firstName)){
    visits = customerData[firstName];
    if (visits.visits == 1) {
      greeting = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
    } else if (visits.visits > 1) {
      greeting = `Welcome back, ${firstName}! So glad to see you again!`;
    } 
  }
  else {
    greeting = 'Welcome! Is this your first time?';
  }
  return greeting;
}

console.log(greetCustomer()); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
