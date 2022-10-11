import { createBrowserRouter } from "react-router-dom";
import Home from "./../components/Home";
import ErrorPage from "./../components/ErrorPage";
import Root from "./../components/Root";
import Topics from "./../components/Topics";
import Blog from "./../components/Blog";
import Statistics from "./../components/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      { path: "/topics", element: <Topics /> },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);

export default router;
