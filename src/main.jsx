import React from "react";
import { createRoot } from "react-dom/client";
import "./components/actions";
import "./components/actionTypes";
import "./components/reducers";

import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
