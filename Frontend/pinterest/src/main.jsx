import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import HomePage from "./routes/homePage/HomePage.jsx";
import PostPage from "./routes/postPage/PostPage.jsx";
import AuthPage from "./routes/authPage/AuthPage.jsx";
import CreatePage from "./routes/createPage/CreatePage.jsx";
import SearchPage from "./routes/searchPage/SearchPage.jsx";
import UserProfile from "./routes/profilePage/UserProfile.jsx";
import MainLayout from "./routes/layout/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/post" element={<PostPage />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
