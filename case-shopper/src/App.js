import React from "react";
import GlobalState from "./Global/GlobalState";
import Router from "./routes/Router";


 const App = () =>  {
  return (
    <GlobalState >
     <Router />
    </GlobalState>
  );
}

export default App;
