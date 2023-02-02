import { useParams } from "react-router";
import { useState, useEffect, Fragment } from "react";
import { marked } from "./../../node_modules/marked/src/marked";

import MainLayout from "./../layouts/MainLayout";
import BarLayout from "./../layouts/BarLayout";
import config from "./../config.json";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Blog() {
  const { url } = useParams();
  const [blogHtml, setblogHtml] = useState("nodata");
  const [image, setimage] = useState("false");
  const [blog, setblog] = useState([]);
  const [Url, seturl] = useState("");
  const data = useSelector((state) => state.data);
  const navigate = useNavigate()
  useEffect(() => {
    if ((blog.length === 0 && data.length > 0) || url !== Url) {
      seturl(url);
      let select = data.filter((item) => url === item.nameurl);
      setblog(select);
      
      if (select.length === 0) {
        navigate("/404");
      }

      if (select.length > 0) {
        if (select[0].backurl === "false") {
          axios
            .get(config.siteurl + select[0].url + "/README.md")
            .then((res) => {
              setblogHtml(res.data);
            });
          axios
            .get(config.siteurl + select[0].url + "/index.jpg")
            .then(() => {
              setimage(true);
            })
            .catch(() => {
              setimage(false);
            });
        } else {
          axios.get(select[0].url + "/README.md").then((res) => {
            setblogHtml(res.data);
          });
          axios
            .get(select[0].url + "/index.jpg")
            .then(() => {
              setimage(true);
            })
            .catch(() => {
              setimage(false);
            });
        }
      }
    }
  }, [data, url]);
  return (
    <MainLayout>
      <BarLayout />
      <div className="containerBlog">
        {blog.length > 0 && blogHtml !== "nodata" ? (
          <Fragment>
            <title>arta dev - {blog[0].title}</title>
            {image ? (
              <img
                src={
                  blog[0].backurl === "false"
                    ? config.siteurl + blog[0].url + "/index.jpg"
                    : blog[0].url + "/index.jpg"
                }
                className="imageBlogTitle"
              />
            ) : null}

            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(
                  blogHtml
                    .replaceAll("/blob", "")
                    .replaceAll(
                      "https://github.com",
                      "https://raw.githubusercontent.com"
                    )
                ),
              }}
            />
          </Fragment>
        ) : undefined}
      </div>
    </MainLayout>
  );
}

export default Blog;
