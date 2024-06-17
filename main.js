const express = require('express');
const cors = require('cors');

const app = express();

const Data = require('./data');


app.use(express.json());
app.use(cors());

process.env.PORT  = process.env.PORT  || 8080;


app.get('/fet', async (req, res) => {
  res.send('hi');
})


app.get('/', async (req, res) => {

  const { githubId, repoName, branchName, fileName } = req.query;

  const resp = await Data.getReadme(githubId, repoName, branchName, fileName);

  res.send(resp);

});


app.listen(process.env.PORT, () => {
  console.log(`Server is up and listening at ${process.env.PORT}`)
});
