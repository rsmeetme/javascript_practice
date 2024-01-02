async function getData() {
    return await Promise.resolve('I made it!');
  }
  
  const data = getData();
  console.log(data);

//   output: Promise {<pending>}

// An async function always returns a promise. The await still has to wait for the promise to resolve: a pending promise gets returned when we call getData() in order to set data equal to it.

// If we wanted to get access to the resolved value "I made it", we could have used the .then() method on data:

// data.then(res => console.log(res))

// This would've logged "I made it!"