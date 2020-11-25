const fastify = require("fastify");
const users = require("./controllers/users.controller.js");

const app = fastify();

app.register(require("fastify-cors"));

app.post("/register", users);

app.listen(3001).then(() => {
  console.log("Server running on port 3001");
});
