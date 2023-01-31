import { Route, Routes } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

//? component
import Page404 from "./components/404";
import Blog from "./components/Blog";
import MainBlog from "./components/MainBlog";
import Resume from "./components/Resume";

//? url
import config from "./config.json";

//? redux
import {
  save_data,
  save_blog,
  save_gblog,
  save_project,
  add_image,
} from "./redux/actions/counter";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const imglist = useSelector((state) => state.imagelist);
  useEffect(() => {
    if (data.length == 0) {
      axios.get(config.data).then((res) => {
        dispatch(save_data(res.data.reverse()));
        console.log(res.data);
        res.data.map((item, i) => {
          if (item.backurl === "true") {
            axios
              .get(item.url + "/index.jpg")
              .then((res) => {
                if (res.status === 200) {
                  dispatch(
                    add_image({ url: item.url, img: item.url + "/index.jpg" })
                  );
                }
              })
              .catch((err) => {
                if (err.response.status === 404) {
                  dispatch(
                    add_image({
                      url: item.url,
                      img: "./../../img/fp1.png",
                    })
                  );
                }
              });
          } else {
            axios
              .get(config.siteurl + item.url + "/index.jpg")
              .then((res) => {
                if (res.status === 200) {
                  dispatch(
                    add_image({
                      url: item.url,
                      img: config.siteurl + item.url + "/index.jpg",
                    })
                  );
                }
              })
              .catch((err) => {
                if (err.response.status === 404) {
                  dispatch(
                    add_image({
                      url: item.url,
                      img: "./../../img/fp1.png",
                    })
                  );
                }
              });
          }
        });
      });
    } else {
      axios.get(config.blog).then((res) => {
        let blog_response = [];
        res.data.map((i) => {
          let newj = data.filter((j) => i.id === j.id);
          blog_response.push(newj[0]);
        });
        dispatch(save_blog(blog_response.reverse()));
      });
      axios.get(config.gblog).then((res) => {
        let gblog_response = [];
        res.data.map((i) => {
          let newj = data.filter((j) => i.id === j.id);
          gblog_response.push(newj[0]);
        });
        dispatch(save_gblog(gblog_response.reverse()));
      });
      axios.get(config.project).then((res) => {
        let project_response = [];
        res.data.map((i) => {
          let newj = data.filter((j) => i.id === j.id);
          project_response.push(newj[0]);
        });
        dispatch(save_project(project_response.reverse()));
      });
    }
  }, [data]);
  return (
    <Routes>
      <Route path="/" exact element={<MainBlog />} />
      <Route path="/resume" exact element={<Resume />} />
      <Route path="/b/:url" exact element={<Blog />} />
      <Route path="/*" exact element={<Page404 />} />
    </Routes>
  );
}

export default App;
