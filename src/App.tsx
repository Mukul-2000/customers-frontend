import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { IsLoading } from './App.context';
import Loader from './components/loader/loader';
import {Toaster} from 'react-hot-toast'
import MainRoutes from './routes';


function App() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <IsLoading.Provider value={{ loading, setLoading }}>
        {loading && <Loader />}
        <MainRoutes />
        <Toaster 
        position="bottom-right"
        reverseOrder={false}
        />
      </IsLoading.Provider>
    </>
  );
}

export default App;
