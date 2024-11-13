import { createRequestHandler } from "@remix-run/express";
import express from "express";
import Api from "./app/api";
import process from "node:process";
import { Logger, db, intitModel } from "./app/api/config.js";
import formidable from "express-formidable";
import { ErrorHandler } from "~/api/exception";
import { Handler } from "~/api/healpers";

const PORT = process.env.PORT || 8080
const viteDevServer =
    process.env.NODE_ENV === "production"
        ? null
        : await import("vite").then(vite =>
              vite.createServer({
                  server: { middlewareMode: true }
              })
          );

const app = express();

app.use(
    viteDevServer ? viteDevServer.middlewares : express.static("build/client")
);

const build = viteDevServer
    ? () => viteDevServer.ssrLoadModule("virtual:remix/server-build")
    : await import("./build/server/index.js");

app.use(formidable());

//@ts-expect-error
app.post("/api/login", Handler(Api.login));
//@ts-expect-error
app.post("/api/register", Handler(Api.register));
//@ts-expect-error
app.get("/api/participant/:id", Handler(Api.findOneParticipant));
//@ts-expect-error
app.get("/api/participant", Handler(Api.getAllParticipant));
//@ts-expect-error
app.get("/download/participant", Handler(Api.downloadParticipantFile));

app.use("/api", (req, res) => {
    res.json({ ok: true, message: "welcome to backend" });
});

//@ts-expect-error
app.all("*", createRequestHandler({ build }));

app.use(ErrorHandler);

db.connect()
    .then(() => {
        Logger.info("Database connected");
        // intitModel()
    })
    .catch(err => Logger.fatal(err, "Error connecting to database"));

app.listen(PORT, () => {
    Logger.info("App listening on http://localhost:3000");
});

export default app;
