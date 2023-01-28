import { Path } from "./../service/path.js"
import { isProd } from "./../service/env.js"
import HtmlWebpackPlugin from "html-webpack-plugin"

export const index = new HtmlWebpackPlugin({
  template: Path("src/index.html"),
  filename: "index.html",
  minify: {
    collapseWhitespace: isProd
  },
  chunks: ['index']
})

export const page404 = new HtmlWebpackPlugin({
  template: Path("src/404.html"),
  filename: "404.html",
  minify: {
    collapseWhitespace: isProd
  },
  chunks: ['404']
})

