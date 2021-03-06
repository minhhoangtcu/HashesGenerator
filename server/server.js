const express = require('express');
const cors = require('cors');
const app = express();
const VideoTagging = require('clarifai-video-tagging');

const tagging = new VideoTagging(process.env.ID, process.env.SECRET);

app.use(cors());
app.options('*', cors());

app.get('/analyze', (req, res) => {

  const url = req.query.url;

  tagging.predictVideo(url)
    .then((tag) => {
      res.json(tag);
    }).catch(err => {
      console.error(err.stack)
      res.status(500).send('Invalid URL!')
    });

});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening on port: ', process.env.PORT || 5000)
});