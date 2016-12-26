require('dotenv').config();
var App = require('./videotagging.js');

const app = new App(process.env.ID, process.env.SECRET);

app.predictVideo('http://www.w3schools.com/html/mov_bbb.mp4')
  .then((tag) => {
    const classes = tag.classes;

    classes.forEach(allClassesAtTime => {
      const tempClasses = allClassesAtTime
        .reduce((acc, cur) => {
          return acc + cur + " ";
        }, "");

      console.log(tempClasses);
    });
  });