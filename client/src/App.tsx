import "~/App.css";
import { PublicRoute } from "~/routers";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import NotFoundPage from "~/components/err/index";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const renderRoutes = () => {
    return PublicRoute;
  };

  return (
    <>
      <Router>
        <Routes>
          {renderRoutes().map((route, index) => {
            const Layout = route.Layout || Fragment;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                    <Outlet />
                  </Layout>
                }
              />
            );
          })}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
