(async () => {
  process.env.PORT  = process.env.PORT  || 8080;
  
  require('./app').listen(process.env.PORT, () => {
    console.log(`Server is up and listening at ${process.env.PORT}`)
  });

})();