const express = require("express");
const path = require("path");
const PORT = 5000;
const app = express();
const morgan = require("morgan");
const fs = require("fs");
app.set("view-engine", "ejs");

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log("Ошибка") : console.log("Start Server");
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("styles"));

app.get("/", (req, res) => {
  const title = "Main";
  res.render(createPath("index"), { title });
});

app.get("/contacts", (req, res) => {
  const title = "Contacts";
  const contacts = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/?app=desktop&hl=ru",
    },
    {
      name: "X",
      link: "https://x.com/?lang=ru&mx=2",
    },
    {
      name: "Github",
      link: "https://github.com/",
    },
  ];

  res.render(createPath("contacts"), { contacts, title });
});

app.get("/add-post", (req, res) => {
  const title = "Add-post";
  res.render(createPath("add-post"), { title });
});

app.post("/add-post", (req, res) => {
  const { title, author, text } = req.body;
  const newPost = {
    id: new Date().toString(),
    date: new Date().toLocaleDateString(),
    title,
    author,
    text,
  };

  let rawData = fs.readFileSync("./add-post.json");
  let posts = JSON.parse(rawData);

  posts.push(newPost);

  fs.writeFileSync("./add-post.json", JSON.stringify(posts, null, 2));
  res.render(createPath("post"), { post: newPost, title });
});

app.get("/posts/:id", (req, res) => {
  console.log('Клик сработал')
const postId = req.params.id

const rawData = fs.readFileSync('./add-post.json')
const posts = JSON.parse(rawData)

let post = posts.find(post => post.id == postId)

if (post) {
  res.render(createPath('post'), {post, title: post.title})
} else {
  res.render('/error')
}
});

app.get("/posts", (req, res) => {
  const title = "Posts";

  let rawData = fs.readFileSync("./add-post.json");
  let posts = JSON.parse(rawData);
  res.render(createPath("posts"), { title, posts });
});

app.get("/error", (req, res) => {
  const title = "Error";
  res.render(createPath("error"), { title });
});

app.get("/about", (req, res) => {
  const title = "Error";
  res.redirect("/contacts"), { title };
});

app.use((req, res) => {
  const title = "Page not found";
  res.render(createPath("error"), { title });
});
