const router = require("express").Router();

const celebrityController = require("./celebrities.routes");
const movieController = require("./movies.routes");

const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");

/* GET home page */

router.get("/", (req, res, next) => res.render("index.hbs"));

router.get("/celebrities", celebrityController.home);
router.get("/movies", movieController.home);

router.get("/celebrities/create", celebrityController.createCelebrity);
router.post("/celebrities/create", celebrityController.doCreateCelebrity);

router.get("/celebrities/:id/edit", celebrityController.editCelebrity);
router.post("/celebrities/:id/edit", celebrityController.doEditCelebrity);

router.post("/celebrities/:id/delete", celebrityController.deleteCelebrity);

router.get("/celebrities/:id", celebrityController.idCelebrity);

router.get("/movies/create", movieController.createMovie);
router.post("/movies/create", movieController.doCreateMovie);

router.get("/movies/:id/edit", movieController.editMovie);
router.post("/movies/:id/edit", movieController.doEditMovie);

router.post("/movies/:id/delete", movieController.deleteMovie);

router.get("/movies/:id", movieController.idMovie);

router.get("/new", authMiddleware.isNotAuthenticated, userController.new);
router.post("/new", authMiddleware.isNotAuthenticated, userController.create);

router.get("/login", authMiddleware.isNotAuthenticated, userController.login);
router.post(
  "/login",
  authMiddleware.isNotAuthenticated,
  userController.doLogin
);

router.get("/profile", authMiddleware.isAuthenticated, userController.profile);

router.get(
  "/profile/edit",
  authMiddleware.isAuthenticated,
  userController.edit
);
router.post(
  "/profile/edit",
  authMiddleware.isAuthenticated,
  userController.update
);

router.post("/logout", authMiddleware.isAuthenticated, userController.logout);

module.exports = router;
