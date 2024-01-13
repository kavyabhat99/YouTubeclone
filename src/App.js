import './App.css';
import {Provider} from 'react-redux'
import Body from './components/Body';
import Head from './components/Head';
import MainContainer from './components/MainContainer'
import store from './components/Utils/store';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children: [{
    path:"/",
    element: <MainContainer/>
  },
  {
    path:"/watch",
    element: <WatchPage/>
  }]
}])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
