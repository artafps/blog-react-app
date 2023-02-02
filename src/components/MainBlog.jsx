import MainLayout from "./../layouts/MainLayout";
import BarLayout from "./../layouts/BarLayout";
import { useSelector } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { marked } from "marked";
import config from "./../config.json";

import axios from "axios";
import { useNavigate } from 'react-router-dom';
function MainBlog() {
  const blog = useSelector((state) => state.blog);
  const Gblog = useSelector((state) => state.gblog);
  const project = useSelector((state) => state.project);
  const imglist = useSelector((state) => state.imagelist);
  const [blog1, setblog1] = useState("");
  const [blog2, setblog2] = useState("");
  const [blogMore, setblogMore] = useState(2);
  const [gblogMore, setgblogMore] = useState(2);
  const [projectMore, setprojectMore] = useState(2);
  useEffect(() => {
    if (blog.length > 0) {
      if (2 > blog.length > 0) {
        axios.get(config.siteurl + blog[0].url + "/README.md").then((res) => {
          setblog1(res.data);
        });
      }
      if (blog.length >= 2) {
        axios.get(config.siteurl + blog[0].url + "/README.md").then((res) => {
          setblog1(res.data);
        });

        axios.get(config.siteurl + blog[1].url + "/README.md").then((res) => {
          setblog2(res.data);
        });
      }
    }
  }, [blog, imglist]);
  const getimg = (url) => {
    if (imglist.length > 0) {
      let data = imglist.filter((i) => i.url === url);
      if (data.length > 0) {
        return data[0].img;
      } else {
        return "../../img/fp2.png";
      }
    } else {
      return "../../img/fp2.png";
    }
  };
  const nvigate = useNavigate();
  const navigateToBlog = (url) => {
    nvigate(url +"#");
  };

  return (
    <MainLayout>
      
      <title>arta dev - HOME</title>
      <BarLayout />
      <div className="containerBlog">
        {blog1 !== "" ? (
          <Fragment>
            {imglist.length > 0 ? (
              <img src={getimg(blog[0].url)} className="imageBlogTitle" />
            ) : null}
            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(
                  blog1
                    .replaceAll("/blob", "")
                    .replaceAll(
                      "https://github.com",
                      "https://raw.githubusercontent.com"
                    )
                ),
              }}
            />
          </Fragment>
        ) : null}
        <hr />
        {blog2 !== "" ? (
          <Fragment>
            {imglist.length > 0 ? (
              <img src={getimg(blog[1].url)} className="imageBlogTitle" />
            ) : null}

            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(
                  blog2
                    .replaceAll("/blob", "")
                    .replaceAll(
                      "https://github.com",
                      "https://raw.githubusercontent.com"
                    )
                ),
              }}
            />
          </Fragment>
        ) : null}
        <hr />
        {blog.length > 0 ? (
          <Fragment>
            <h3 className="alert alert-primary"> بلاگ ها</h3>
          </Fragment>
        ) : null}

        <div className="blogs">
          {blog.length > 0
            ? blog.map((item, i) => {
                if (i < blogMore) {
                  return (
                    <div className="card">
                      {imglist.length > 0 ? (
                        <img
                          className="card-img-top"
                          src={getimg(item.url)}
                          alt="Card image cap"
                        />
                      ) : null}
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.blog}</p>
                        <button
                          onClick={() => navigateToBlog("/b/" + item.nameurl)}
                          className="btn btn-primary cw"
                        >
                          برو به بلاگ
                        </button>
                      </div>
                    </div>
                  );
                }
              })
            : null}
        </div>
        {blog.length > 0 && blog.length > blogMore ? (
          <Fragment>
            <br />
            <center>
              <button
                className="btn btn-primary cw"
                onClick={() => {
                  setblogMore(blogMore + 2);
                }}
              >
                بیشتر
              </button>
            </center>
          </Fragment>
        ) : null}
        {Gblog.length > 0 ? (
          <Fragment>
            <hr />
            <h3 className="alert alert-primary"> بلاگ های گروهی</h3>
          </Fragment>
        ) : null}
        <div className="blogs">
          {Gblog.length > 0
            ? Gblog.map((item, i) => {
                if (i < gblogMore) {
                  return (
                    <div className="card">
                      {imglist.length > 0 ? (
                        <img
                          className="card-img-top"
                          src={getimg(item.url)}
                          alt="Card image cap"
                        />
                      ) : null}
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.blog}</p>
                        <button
                          onClick={() => navigateToBlog("/b/" + item.nameurl)}
                          className="btn btn-primary cw"
                        >
                          برو به بلاگ
                        </button>
                      </div>
                    </div>
                  );
                }
              })
            : null}
        </div>
        {Gblog.length > 0 && Gblog.length > gblogMore ? (
          <Fragment>
            <br />
            <center>
              <button
                className="btn btn-primary cw"
                onClick={() => {
                  setgblogMore(gblogMore + 2);
                }}
              >
                بیشتر
              </button>
            </center>
          </Fragment>
        ) : null}
        {project.length > 0 ? (
          <Fragment>
            <hr />
            <h3 className="alert alert-primary"> پروژه ها</h3>
          </Fragment>
        ) : null}
        <div className="blogs">
          {project.length > 0
            ? project.map((item, i) => {
                if (i < projectMore) {
                  return (
                    <div className="card">
                      {imglist.length > 0 ? (
                        <img
                          className="card-img-top"
                          src={getimg(item.url)}
                          alt="Card image cap"
                        />
                      ) : null}
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.blog}</p>
                        <button
                          onClick={() => navigateToBlog("/b/" + item.nameurl)}
                          className="btn btn-primary cw"
                        >
                          برو به بلاگ
                        </button>
                      </div>
                    </div>
                  );
                }
              })
            : null}
        </div>
        {project.length > 0 && project.length > projectMore ? (
          <Fragment>
            <br />
            <center>
              <button
                className="btn btn-primary cw"
                onClick={() => {
                  setprojectMore(projectMore + 2);
                }}
              >
                بیشتر
              </button>
            </center>
          </Fragment>
        ) : null}
      </div>
    </MainLayout>
  );
}

export default MainBlog;
