import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Login = lazy(() => import("../views/user/Login"))

const Lectures = lazy(() => import("../views/lectures/Lectures.js"))
const Lecture = lazy(() => import("../views/lectures/Lecture.js"))

const Students = lazy(() => import("../views/student/Students.js"))
const Student = lazy(() => import("../views/student/Student"))

const Cards = lazy(() => import("../views/ui/Cards"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/lectures" /> },

      { path: "/lectures", exact: true, element: <Lectures /> },
      { path: "/lecture/:lectureId", exact: true, element: <Lecture isRegistered={false} /> },
      { path: "/lecture", exact: true, element: <Lecture isRegistered={true} /> },

      { path: "/students", exact: true, element: <Students /> },
      { path: "/student/:lectureId", exact: true, element: <Student /> },

      { path: "/cards", exact: true, element: <Cards /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default ThemeRoutes;
