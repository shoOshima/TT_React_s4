import React from "react";
import { renderToString } from 'react-dom/server';
import Iam from "./Iam";

const test = ():string => (`
<html>
  <head>
    <title>CountUp</title>
    <meta charset="utf-8"/>
  </head>
  <body>
    <div id="app">
      ${renderToString(<Iam />)}
    </div>
    <script src="./client.js"></script>
  </body>
</html>
`);

export default test;