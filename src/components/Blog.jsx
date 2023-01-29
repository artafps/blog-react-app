import { useParams } from "react-router";
import { useState, useEffect, Fragment } from "react";
import { marked } from "./../../node_modules/marked/src/marked";

import MainLayout from "./../layouts/MainLayout";
import BarLayout from "./../layouts/BarLayout";

import { useSelector } from "react-redux";
import axios from "axios";

function Blog() {
  const { url } = useParams();
  const [blogHtml, setblogHtml] = useState("nodata");
  const [blog, setblog] = useState([]);
  const data = useSelector((state) => state.data);
  useEffect(() => {
    if (blog.length === 0 && data.length > 0) {
      let select = data.filter((item) => url === item.nameurl);
      setblog(select);

      if (select.length === 0) {
        window.location.replace("http://localhost:3000/404");
      }

      if (select.length > 0) {
        axios
          .get("https://artafp.ir/" + select[0].url + "/README.md")
          .then((res) => {
            setblogHtml(res.data);
          });
      }
    }
  }, [data]);
  return (
    <MainLayout>
      <BarLayout />
      <div className="containerBlog">
        {blog.length > 0 && blogHtml !== "nodata" ? (
          <Fragment>
            <img
              src={"https://artafp.ir/" + blog[0].url + "/index.jpg"}
              className="imageBlogTitle"
            />
            <div dangerouslySetInnerHTML={{ __html: marked.parse(blogHtml) }} />
          </Fragment>
        ) : undefined}
      </div>
    </MainLayout>
  );
}

export default Blog;
