import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "../components/app/App.js";
import MainPage from "../pages/mainPage/MainPage.tsx";
import Page404 from "../pages/page404/Page404.tsx";
import FavoriteClubsPage from "../pages/favoriteClubsPage/FavoriteClubsPage.tsx";

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App/>} errorElement={<Page404/>}>
      <Route path='' element={<MainPage/>}/>
      <Route path='/clubs' element={<FavoriteClubsPage/>}/>
    </Route>
  )
)

export default router;
