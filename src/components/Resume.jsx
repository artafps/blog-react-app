import { Fragment, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { marked } from "marked";
import config from "./../config.json";
import axios from "axios";

const Resume = () => {
  const [resume, setresume] = useState("");
  useEffect(() => {
    axios.get(config.siteurl + "/RESUME.md").then((res) => {
      setresume(res.data);
    });
  }, []);
  return (
    <Fragment>
      <MainLayout>
        <div className="containerResume">
          {resume !== "" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(resume),
              }}
            />
          ) : null}
        </div>
      </MainLayout>
    </Fragment>
  );
};

export default Resume;
