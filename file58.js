const ar=[1, 2, 3].map(num => {
    if (typeof num === 'number') return;
    return num * 2;
  });

  console.log(ar);

//   output: [undefined,undefined,undefined]
