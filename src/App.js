import './App.css';
import {  useSelector } from 'react-redux';
import Header from './components/Header';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  
  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Body />,
      children : [
        {
          path : '/',
          element : <MainContainer />
        },
        {
          path : 'watch',
          element :<WatchPage />
        }
      ]
    }
  ])
 
 const darkTheme = useSelector((state)=>state.theme.darkTheme)
  return (
   
      <div className={darkTheme ? 'darktheme' : 'lighttheme'}>
      {/* <ThemeIcon /> */}
      <Header />
      <RouterProvider router={appRouter} />
      </div>
  );
}

export default App;
