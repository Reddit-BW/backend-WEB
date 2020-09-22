const server = require("./api/server.js");
const port = process.env.PORT || 1111;

//heroku will add a PORT variable to the environment (the server the app runs on)
//we can read it from there using the process.env object
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
