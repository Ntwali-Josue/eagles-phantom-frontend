const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ip = require("ip");
const hostname = ip.address() || "localhost";

module.exports = {
  entry: "./src/index.js",
  output: { path: path.join(__dirname, "/dist"), filename: "bundle.js" },
  devServer: {
    contentBase: path.resolve(__dirname, "./build"),
    publicPath: "/",
    host: `${hostname}`,
    port: 3020,
    hot: true,
    inline: true,
    contentBase: "./",
    watchOptions: {
      poll: true,
    },
    compress: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {				
      test: /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
      include: path.resolve(__dirname, 'src/assets/images'),
      use: [
        {
          loader: 'file-loader',
          loader: 'url-loader'
        }
      ]
    }
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
