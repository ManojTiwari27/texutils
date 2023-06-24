import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
  }
  setTimeout(() => {
    setAlert(null)

  }, 1500)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Has Been Ebabled", "success")
      document.title = "TextUtils-Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Has Been Ebabled", "success")


    }
  }


  return (
    <>
      <Router>
        <Navbar title='TextUtils' about='About Us ' toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my3">
        <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>

      </Router>

    </>
  );
}

export default App;
