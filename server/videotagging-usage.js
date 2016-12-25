var App = require('./videotagging.js');

const app = new App('oqH8FGaAu3eVUSsqAsnXUamKOP5UroBsXqk4zoB9', 'PG-E3wPRtsYoPFLzZU26OwDMAsahdZnWtKKtoL18');

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