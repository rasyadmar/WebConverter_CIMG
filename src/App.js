import { Routes, Route } from "react-router-dom";

//views
import PictureView from "./views/PictureView";
import NavBar from "./component/NavBar";
import NotFound from "./views/NotFound";
import LandingPage from "./views/LandingPage";
import DocumentView from "./views/DocumentView";
import Footer from "./component/Footer";

// import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* document */}
        <Route exact path="/" element={<PictureView />} />
        <Route exact path="/img/:imgType" element={<PictureView />} />
        {/* <Route exact path="/doc" element={<DocumentView />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
