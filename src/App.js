import "./App.css";
import React from "react";
import MainMenuContainer from "./Pages/MainMenuContainer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainMenuContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
