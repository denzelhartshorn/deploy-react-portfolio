import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// if (process.env.NODE_EVN === "production") {
//   app.use(express.static("deployed-portfolio/build"));

//   app.getI("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 3000;
serviceWorker.unregister();
