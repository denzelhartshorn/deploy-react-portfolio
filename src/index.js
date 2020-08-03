import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
<<<<<<< HEAD

if (process.env.NODE_EVN === "production") {
  app.use(express.static("deployed portfolio/build"));

  app.getI("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client"));
  });
}
=======
>>>>>>> 7f1775dff60891c140ba0b4454b405420992f186

serviceWorker.unregister();
