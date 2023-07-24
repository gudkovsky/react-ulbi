import PostPage from "../components/PostPage.js";
import NotFound from "../components/UI/404/NotFound.js";
import About from "../pages/About.js";
import Login from "../pages/Login.js";
import Posts from "../pages/Posts.js";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
  { path: "/about", component: <About /> },
  { path: "/posts", component: <Posts /> },
  { path: "/error", component: <NotFound /> },
  { path: "/posts/:postId", component: <PostPage /> },
  { path: "*", component: <Navigate to="/error" /> },
  { path: "/login", component: <Navigate to="/posts" /> },
];

export const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "*", component: <Navigate to="/login" /> },
];
