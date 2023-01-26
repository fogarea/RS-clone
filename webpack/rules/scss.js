import MiniCssExtractPlugin from "mini-css-extract-plugin"

export const scss = {
  test: /\.s[ac]ss$/i,
  use: [MiniCssExtractPlugin.loader, {
    loader: "css-loader",
    options: {
      modules: false
    }
  }, "sass-loader"]
}
