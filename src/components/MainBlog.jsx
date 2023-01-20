import { useParams } from "react-router";
import { useState, useEffect } from "react";
import  ReactMarkdown from 'react-markdown';
import { marked } from './../../node_modules/marked/src/marked';

import MainLayout from "./../layouts/MainLayout";
import BarLayout from "./../layouts/BarLayout";

import { getDataJson, getHtmlPage } from "./../getData";
import { Fragment } from "react";

function MainBlog() {
  const { id } = useParams();
  const [blogHtml, setblogHtml] = useState("");
  const [blog, setBlog] = useState("");
  console.log(marked.parse(blogHtml));
  useEffect(() => {

    if (blog === "") {
      getDataJson().then((res) => {
        setBlog(res.data.filter((item) => item.nameurl === id));
      });
    }
   

    if (blog.length > 0) {
      getHtmlPage("https://artafp.ir/" + blog[0].url + "/index.md").then(
        (res) => setblogHtml(res.data)
      );
    }
  }, [blog]);

  return (
    <MainLayout>
      <BarLayout />
      <div className="containerBlog">
        {blog.length > 0 ? (
          <Fragment>
            <img
              src={
                "https://raw.githubusercontent.com/artafp/artafp/main/" +
                blog[0].url +
                "/index.jpg"
              }
              className="imageBlogTitle"
            />
            <div dangerouslySetInnerHTML={{ __html: marked.parse(blogHtml)  }} />
            
          </Fragment>
        ) : undefined}
      </div>
    </MainLayout>
  );
}

export default MainBlog;
