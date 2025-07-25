import React from "react";
import Folder from "./components/Folder";
import folderData from "./data/folderData";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📁 File Explorer</h2>
      <Folder explorer={folderData} />
    </div>
  );
}

export default App;
