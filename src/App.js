import { Route, Routes } from "react-router";

import Main from "./Main";
import Page404 from './components/404';
import Blog from './components/Blog';
import MainBlog from './components/MainBlog';


function App() {
  
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/b/" exact element={<MainBlog />} />
      <Route path="/b/:id" exact element={<Blog />} />
      <Route path="/*" exact element={<Page404 />} />
    </Routes>
  );
}

export default App;
