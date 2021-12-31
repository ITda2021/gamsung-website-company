import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import AboutPage from "pages/CompanyPage";
import ServicePage from "pages/ServicePage";
import PostMainPage from "pages/PostMainPage";
import PostEditPage from "pages/PostEditPage";
import PostDetailPage from "pages/PostDetailPage";
import NotFoundPage from "pages/NotFoundPage";
import ScrollToTop from "components/ScrollToTop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/notice" element={<PostMainPage />} />
            <Route path="/notice/:id" element={<PostDetailPage />} />
            <Route path="/notice/edit" element={<PostEditPage />} />
            <Route path="/notice/edit/:id" element={<PostEditPage />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}
export default App;
