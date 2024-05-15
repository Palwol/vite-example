import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import {router} from './static/router.jsx';
import Layout from '@/components/Layout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          {router.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
