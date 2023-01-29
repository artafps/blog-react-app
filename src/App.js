import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

//? component
import Main from "./Main";
import Page404 from "./components/404";
import Blog from "./components/Blog";
import MainBlog from "./components/MainBlog";

//? url
import config from "./config.json";

//? redux
import { save_data, save_blog, save_gblog, save_project } from "./redux/actions/counter";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    if (data.length == 0) {
      axios.get(config.data).then((res) => {
        dispatch(save_data(res.data));
      });
    } else {
      axios.get(config.blog).then((res) => {
        let blog_response = [];
        res.data.map((i) => {
          let newj = data.filter((j) => i.id === j.id);
          blog_response.push(newj[0]);
        });
        dispatch(save_blog(blog_response));
      });
      axios.get(config.gblog).then((res) => {
        let gblog_response = [];
        res.data.map((i) => {
          let newj = data.filter((j) => i.id === j.id);
          gblog_response.push(newj[0]);
        });
        dispatch(save_gblog(gblog_response));
      });
      axios.get(config.project).then((res) => {
        let project_response = [];
        res.data.map((i) => {
          let newj = data.filter((j) => i.id === j.id);
          project_response.push(newj[0]);
        });
        dispatch(save_project(project_response));
      });
    }
  }, [data]);
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/b/" exact element={<MainBlog />} />
      <Route path="/b/:url" exact element={<Blog />} />
      <Route path="/*" exact element={<Page404 />} />
    </Routes>
  );
}

export default App;
