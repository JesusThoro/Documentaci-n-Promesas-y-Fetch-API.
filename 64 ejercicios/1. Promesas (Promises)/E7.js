const sum = (a, b) => new Promise((resolve) => resolve(a + b));

sum(3, 5).then(console.log);
