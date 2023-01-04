import { Router } from "express";

const router = Router();

const index = {
  title: "Hola Mundillo",
};

const about = {
  title: "Hola Mundillo",
};

const contact = {
  title: "Hola Mundillo",
};

router.get("/", (req, res) => {
  res.render("index", index);
});

router.get("/about", (req, res) => {
  res.render("about", about);
});

router.get("/contact", (req, res) => {
  res.render("contact", contact);
});

export default router;
