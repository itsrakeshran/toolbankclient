import './App.css'
import Welcome from './pages/welcome.jsx'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Welcome/>
    </BrowserRouter>
    </>

  )
}

export default App
