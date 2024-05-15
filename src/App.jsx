import {RouterProvider} from 'react-router-dom';
import {router} from './static/router.jsx';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
