import React from "react";
import GlobalState from "./Global/GlobalState";
import Router from "./routes/Router";
import { ToastContainer, toast } from 'react-toastify'


 const App = () =>  {
  return (
    <GlobalState >
     <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
     <Router />
    </GlobalState>
  );
}

export default App;
