require('dotenv').config();
const express = require('express');
const app = express();
const VideoTagging = require('./videotagging.js');

const tagging = new VideoTagging(process.env.ID, process.env.SECRET);

app.get('/analyze', (req, res) => {
  const url = req.param('url');
  
  tagging.predictVideo(url)
    .then((tag) => {
      res.json(tag.classes);
    });

});

app.listen(3000, () => {
  console.log('Server is listening on port 3000!')
});