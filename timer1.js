const input = process.argv.slice(2);
const alarm = (array) => {
  for (const time of array) {
    let x = parseInt(time)
    if(!Number.isInteger(x) || x <= 0) {
      //nothing
    } else {
      setTimeout(() => {console.log('\x07')}, (time * 1000));
    }
  };
};

alarm(input);