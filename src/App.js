import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";
import ServicePage from "pages/ServicePage";
import PostMainPage from "pages/PostMainPage";
import PostDetailPage from "pages/PostDetailPage";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/notice" element={<PostMainPage />} />
            <Route path="/notice/1" element={<PostDetailPage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}
export default App;
