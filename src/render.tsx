import * as fs from "fs";
import prettier from "prettier";
import React from "react";
import ReactDOMServer from "react-dom/server";
import A from "./components/A";

render();

function render() {
  let html = ReactDOMServer.renderToStaticMarkup(<HelloWorldPage />);
  let htmlWDoc = "<!DOCTYPE html>" + html;
  let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
  const publicDirectory = "public";
  if (!fs.existsSync(publicDirectory)){
    fs.mkdirSync(publicDirectory);
  }
  let outputFile = `./${publicDirectory}/index.html`;
  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

function HelloWorldPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Hello worldddd</title>
      </head>
      <body>
        <h1>Hellozzz</h1>
        <A/>
      </body>
    </html>
  );
}