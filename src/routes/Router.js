import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout"));

/***** Pages ****/
const Login = lazy(() => import("../views/user/Login"))
const FindUser = lazy(() => import("../views/user/FindUser"))
const SignUp = lazy(() => import("../views/user/SignUp"))

const Lectures = lazy(() => import("../views/lectures/Lectures"))
const Lecture = lazy(() => import("../views/lectures/Lecture"))

const Students = lazy(() => import("../views/student/Students"))
const Student = lazy(() => import("../views/student/Student"))

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/login" /> },

      { path: "/lectures", exact: true, element: <Lectures /> },
      { path: "/lecture/:lectureId", exact: true, element: <Lecture isRegistered={false} /> },
      { path: "/lecture", exact: true, element: <Lecture isRegistered={true} /> },

      { path: "/students", exact: true, element: <Students /> },
      { path: "/student/:lectureId", exact: true, element: <Student /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/findUser",
    element: <FindUser />,
  },
];

export default ThemeRoutes;
