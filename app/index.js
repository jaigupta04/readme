const express = require('express');
const cors = require('cors');

const app = express();

const Data = require('../data');


app.use(express.json());
app.use(cors());

app.get('/test', async (req, res) => {
  res.send('hi');
})


app.get('/', async (req, res) => {

  const { githubId, repoName, branchName, fileName } = req.query;

  const resp = await Data.getReadme(githubId, repoName, branchName, fileName);

  res.send(resp);

});


module.exports = app;
