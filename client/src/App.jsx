// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import routes from "./routes/routes";

const App = () => {
  return (
    <Router>
      <div className="page-wrapper">
        <div style={styles.container}>
          <main style={styles.main}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    width: "100vw",
  },
  main: {
    flex: 1,
  },
};

export default App;
