(() => {
    let x = (y = 10);
  })();
  
  console.log(typeof x);
  console.log(typeof y);

//   "undefined", "number"

// When we set y equal to 10, we actually add a property y to the global object (window in browser, global in Node). In a browser, window.y is now equal to 10.

