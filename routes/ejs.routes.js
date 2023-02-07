const express = require("express");
const router = express.Router();
const auth_middleware = require("../middlewares/auth-middlewares.js");

router.get("/", auth_middleware, (req, res) => {
  // if (res.locals.user.length===0) {
  //     console.log('inside if', res.locals.user)
  //     return res.render('login.ejs', {user: res.locals.user})
  // }
  console.log("res.locals.user", res.locals.user);
  console.log("res.locals.pcOrder", res.locals.pcOrder);
  return res.render("login.ejs", {
    user: res.locals.user,
    pcOrder: res.locals.pcOrder,
  });
});

router.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

router.get("/users/findById", (req, res) => {
  res.render("findById.ejs");
});

router.get("/users/findByPs", (req, res) => {
  res.render("findByPs.ejs");
});

router.get("/users/resetByPs", (req, res) => {
  res.render("resetByPs.ejs");
});

router.get("/admin", auth_middleware, (req, res) => {
  if (res.locals.user.role === "admin") {
    return res.render("admin.ejs");
  }
  return res.render("login.ejs", {
    user: res.locals.user,
    pcOrder: res.locals.pcOrder,
  });
});
router.get("/admin/users", auth_middleware, (req, res) => {
  if (res.locals.user.role === "admin") {
    return res.render("userAdmin.ejs");
  }
  return res.render("login.ejs", {
    user: res.locals.user,
    pcOrder: res.locals.pcOrder,
  });
});

router.get("/foodOrder", auth_middleware, (req, res) => {
  if (res.locals.user.role === "customer") {
    return res.render("foodOrder.ejs", {
      user: res.locals.user,
      pcOrder: res.locals.pcOrder,
    });
  }
  return res.render("login.ejs", {
    user: res.locals.user,
    pcOrder: res.locals.pcOrder,
  });
});

router.get("/updateMyInfo", auth_middleware, (req, res) => {
  if (res.locals.user.role === "customer") {
    return res.render("updateMyInfo.ejs", {
      user: res.locals.user,
      pcOrder: res.locals.pcOrder,
    });
  }
  return res.render("login.ejs", {
    user: res.locals.user,
    pcOrder: res.locals.pcOrder,
  });
});

module.exports = router;
