import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy,Suspense} from 'react'
import Loader from './components/Loader';
import ErrorPage from './pages/ErrorPage';
import DashboardLayout from './layouts/DashboardLayout';


function App() {
  

const DashboardPage = lazy(() => import("./pages/dashboard/DashboardPage"));
const EmployersPage = lazy(() => import("./pages/dashboard/EmployersPage"));
const ApplicantsPage = lazy(() => import("./pages/dashboard/ApplicantsPage"));
const NotificationsPage = lazy(() => import("./pages/dashboard/NotificationsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />} >
        <DashboardLayout >
          <DashboardPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/employers",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <EmployersPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/applicants",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <ApplicantsPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path: "/notifications",
    errorElement:<ErrorPage />,
    element: (
      <Suspense fallback={<Loader />}>
        <DashboardLayout>
          <NotificationsPage />
        </DashboardLayout>
      </Suspense>
    ),
  },
  {
    path:'/*',
    errorElement:<ErrorPage />,
    element:<ErrorPage />
  }
]);

  return (
    <>
       <RouterProvider router={router} fallbackElement={<Loader />} />
    </>
  )
}

export default App
