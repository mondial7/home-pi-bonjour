const schedule = require('node-schedule');
const fs = require('fs');

let j = schedule.scheduleJob('45 * * * * *', () => {
  console.log('The answer to life, the universe, and everything!');

  fs.writeFile('./test', 'Hey hey' + new Date(), (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Written');
  });

});
