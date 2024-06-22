import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Advotcase from "./main/Advotcase";
import Dashboardfirst from "./Dashboard/dashboard1/Dashboardfirst";
import Dashboardsecond from "./Dashboard/dasboard2/Dashboardsecond";
import Dashboardthird from "./Dashboard/dashboard3/Dashboardthird";
import Advotcase from "./main/Advotcase";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Advotcase />,
  },
  {
    path: "/das1",
    element: <Dashboardfirst />,
  },
  {
    path: "/das2",
    element: <Dashboardsecond />,
  },
  {
    path: "/das3",
    element: <Dashboardthird />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
