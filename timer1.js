const input = process.argv.slice(2);
const alarm = (array) => {
  for (const time of array) {
    setTimeout(() => {console.log('\x07')}, (time * 1000))
  };
};

alarm(input);