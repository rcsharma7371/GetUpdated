// import './App.css'
// import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";

import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const newsNo = 15;
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<News key="general" pageSize={newsNo} category="general" />}></Route>
        <Route exact path="/business" element={<News key="business" pageSize={newsNo} category="business" />}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={newsNo} category="entertainment" />}></Route>
        <Route exact path="/health" element={<News key="health" pageSize={newsNo} category="health" />}></Route>
        <Route exact path="/science" element={<News key="science" pageSize={newsNo} category="science" />}></Route>
        <Route exact path="/sports" element={<News key="sports" pageSize={newsNo} category="sports" />}></Route>
        <Route exact path="/technology" element={<News key="technology" pageSize={newsNo} category="technology" />}></Route>
      </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
