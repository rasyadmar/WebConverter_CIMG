import { Routes, Route } from "react-router-dom";

//views
import PictureView from "./views/PictureView";
import NavBar from "./component/NavBar";
import NotFound from "./views/NotFound";

// import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* document */}
        {/* <Route exact path="/" element={<PictureView />} /> */}
        <Route exact path="/:imgType" element={<PictureView />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
