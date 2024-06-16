(async () => {
  
  require('./app').listen(
      process.env.PORT = 8080,
      console.log(`\n\nServer is up and listening at ${ process.env.PORT } port.\n\n`)
    );

})();