const fastify = require("fastify");
const usersSignUp = require("./controllers/users.controller.js");
const usersLogin = require("./controllers/users.login.controller.js");
const search = require("./controllers/search.js");

const app = fastify();

app.register(require("fastify-cors"));

app.post("/register", usersSignUp);
app.post("/login", usersLogin);

app.get("/search", search);

app.listen(3001).then(() => {
  console.log("Server running on port 3001");
});
