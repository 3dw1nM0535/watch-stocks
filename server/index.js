import express from "express";
import path from "path";

import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config";

import privateEnv from "./config/privateEnv";

const app = express();

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(webpackConfig);

app.use(webpackHotMiddleware(compiler));

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  hot: true,
  historyApiFallback: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client", "index.html"));
});

app.listen(privateEnv.PORT);
