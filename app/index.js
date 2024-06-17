const express = require('express');
const cors = require('cors');

const app = express();

const Data = require('../data');

const corsOptions = {
  origin: 'https://readme-gen.web.app',
  optionsSuccessStatus: 200
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/add', async (req, res) => {
  res.send('hi');
})


app.get('/', async (req, res) => {

  const { githubId, repoName, branchName, fileName } = req.query;

  const resp = await Data.getReadme(githubId, repoName, branchName, fileName);

  res.send(resp);

});


module.exports = app;
