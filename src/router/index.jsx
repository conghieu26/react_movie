import * as React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import { UserTemplate } from "../automic/templates/user/user.template";
// import Anime from "../automic/pages/anime/anime";
// import Movie from "../automic/pages/movie/movie";

//Lazy load: tác dụng là khi vào một trang nào đó thì chỉ tải trang đó thôi còn mấy trang con lại khoang tải
const Movie = lazy(() => import("../automic/pages/anime/anime"));
const Anime = lazy(() => import("../automic/pages/anime/anime"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <UserTemplate>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
          <Link to="movie">Movie</Link>
        </UserTemplate>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "movie",
    element: (
      // Dợi page của chúng ta tải xong rồi mới sử dụng để render.
      // fallback: render tạm thời khi page chưa tải xong.
      <Suspense fallback={<>Loading....</>}>
        <Movie />
      </Suspense>
    ),
  },
  {
    path: "tvSerise",
    element: <>tv-series</>,
  },
  {
    path: "anime",
    element: (
      <Suspense fallback={<>Loading....</>}>
        <Anime />
      </Suspense>
    ),
  },
  {
    path: "*",
    //Custom Page Not Found
    // element: <>Not Found </>,

    // Mong Muốn chuyển về trang home
    // replace là xoá thằng có đường dẫn bậy bạ ra khỏi lịch sử (true: xoá) (false: quay lại trang có đường dẫn là "/")
    element: <Navigate to={"/"} replace={false} />,
  },
]);
