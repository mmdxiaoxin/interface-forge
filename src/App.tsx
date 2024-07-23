import React from "react";
import Router from "./routes";

function App(): React.ReactElement {
    return (
        <div className="App" style={{ height: "100vh", width: "100%" }}>
            <Router />
        </div>
    );
}

export default App;
