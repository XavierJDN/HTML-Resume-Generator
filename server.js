const path = require("path");
const express = require("express");
const { HTTP_STATUS } = require("./js/utils/http");
const { FileSystemManager } = require("./js/managers/file_system_manager");
const experienceRoutes = require("./js/routes/experience");
const contactRoutes = require("./js/routes/contact");
const hobbieRoutes = require("./js/routes/hobbie");
const schoolDegreeRoutes = require("./js/routes/schoolDegree");
const skillsRoutes = require("./js/routes/skills");
const selfPresentationRoutes = require("./js/routes/selfPresentation");
const StructureSiteRoutes = require("./js/routes/structureSite");

const app = express();
const PORT = 5000;
const isTraducted = ["cv", "cv_print"];
const SIZE_LIMIT = "10mb";
const PUBLIC_PATH = path.join(__dirname + "/public/");
const fileSystemManager = new FileSystemManager();

/**
 * initialiser les différents middlewares et routes
 */

// afficher chaque nouvelle requête dans la console
app.use((request, response, next) => {
  console.log(`New HTTP request: ${request.method} ${request.url}`);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: SIZE_LIMIT }));
app.use(express.static(PUBLIC_PATH));

app.use("/api/contact", contactRoutes.router);
app.use("/api/hobbie", hobbieRoutes.router);
app.use("/api/degree", schoolDegreeRoutes.router);
app.use("/api/skills", skillsRoutes.router);
app.use("/api/presentation", selfPresentationRoutes.router);
app.use("/api/structure", StructureSiteRoutes.router);
app.use("/api/experience", experienceRoutes.router);

/**
 * Initialisation des différentes routes pour retourner le fichier html correspondant au client
 */

/**
 * Middleware qui est exécuté à chaque requête pour retourner le fichier HTML correspondant
 */
app.get("/*", async (request, response, next) => {
  let currentRoute = request.path.split("/")[1];
  if (currentRoute === "fr" || currentRoute === "en"){
    next();
    return;
  }
  currentRoute = currentRoute === "" ? "index" : currentRoute;
  response.sendFile(PUBLIC_PATH + `${currentRoute}.html`, (error) => {
    if(error) response.status(HTTP_STATUS.NOT_FOUND).sendFile(PUBLIC_PATH + `error.html`);
  });
});

app.get("/fr/*", async (request, response) => {
  let currentRoute = request.path.split("/")[2];
  response.status(HTTP_STATUS.SUCCESS).sendFile(PUBLIC_PATH + `${currentRoute}.html`, (error) => {
    if(error) response.status(HTTP_STATUS.NOT_FOUND).sendFile(PUBLIC_PATH + `error.html`);
  });
});

app.get("/en/*", async (request, response) => {
  let currentRoute = request.path.split("/")[2];
  response.sendFile(PUBLIC_PATH + `${currentRoute}.html`, (error) => {
    if(error) response.status(HTTP_STATUS.NOT_FOUND).sendFile(PUBLIC_PATH + `error.html`);
  });
});

/**
 * Se produit lorsque le serveur commence à écouter sur le port.
 */
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = server;
