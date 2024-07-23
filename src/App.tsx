import React from "react";
import Router from "./routes";

function App(): React.ReactElement {
    return (
        <div className="App" style={{ width: "100%", height: "100vh" }}>
            <Router />
        </div>
    );
}

export default App;
