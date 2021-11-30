import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import AboutPage from "pages/AboutPage";
import ServicePage from "pages/ServicePage";
import PostsPage from "pages/PostsPage";
import PostPage from "pages/PostPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/notice" element={<PostsPage />} />
          <Route path="/notice/1" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
