import { lazy } from "react";
import { Navigate } from "react-router-dom";
import PublicRoute from "./PublicRoute";

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

const Teacher = lazy(() => import("../views/teacher/Teacher"))

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

      { path: "/teacher", exact: true, element: <Teacher /> },
      { path: "/teacher/modify", exact: true, element: <Teacher isModify={true}/> },
    ],
  },
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>,
  },
  {
    path: "/signUp",
    element: <PublicRoute><SignUp /></PublicRoute>,
  },
  {
    path: "/findUser",
    element: <PublicRoute><FindUser /></PublicRoute>,
  },
];

export default ThemeRoutes;
