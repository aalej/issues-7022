// Root page.js
"use client";
import React from "react";
import { CompareSurfboardsProvider } from "../contexts/CompareSurfboardsContext";

function App() {
  return (
    <CompareSurfboardsProvider>
      {/* other components */}
    </CompareSurfboardsProvider>
  );
}

export default App;
