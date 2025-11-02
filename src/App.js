import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl text-center font-bold p-6">Weather Analytics Dashboard</h1>
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
