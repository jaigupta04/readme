(async () => {
  
  require('./app').listen(process.env.PORT, () => {
    console.log(`Server is up and listening at ${process.env.PORT}`)
  });

})();