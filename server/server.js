const fastify = require("fastify");

const { signup, login, searchUser } = require("./controllers/users");
const search = require("./controllers/search.js");

const app = fastify();

app.register(require("fastify-cors"));

app.post("/register", signup);
app.post("/login", login);

app.get("/user", searchUser);

app.get("/search", search);

app.listen(3001).then(() => {
  console.log("Server running on port 3001");
});
