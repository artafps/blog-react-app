import { useEffect, useState } from "react";
import { getBlogtxt, getDatatxt, getGBlogtxt, getProjecttxt } from "./../getData";

const BarLayout = () => {
  const [blogs, setblogs] = useState([]);
  const [listblog, setlistblog] = useState([]);
  const [listGblog, setlistGblog] = useState([]);
  const [listProject, setlistProject] = useState([]);
  useEffect(() => {
    if (blogs.length === 0) {
      getDatatxt().then((res) => {
        setblogs(res.data.reverse());
      });
    }
    if (listblog.length === 0) {
      getBlogtxt().then((res) => {
        res.data.map((itemB) => {
          let data = blogs.filter((itemAB) => itemAB.id === itemB.id);
          if (data.length === 1) {
            let newlist = listblog;
            newlist.push(data[0]);
            setlistblog(newlist);
          }
        });
      });
    }
    if (listGblog.length === 0) {
      getGBlogtxt().then((res) => {
        res.data.map((itemB) => {
          let data = blogs.filter((itemAB) => itemAB.id === itemB.id);
          if (data.length === 1) {
            let newlist = listGblog;
            newlist.push(data[0]);
            setlistGblog(newlist);
          }
        });
      });
    }
    if (listProject.length === 0) {
      getProjecttxt().then((res) => {
        res.data.map((itemB) => {
          let data = blogs.filter((itemAB) => itemAB.id === itemB.id);
          if (data.length === 1) {
            let newlist = listProject;
            newlist.push(data[0]);
            setlistProject(newlist);
          }
        });
      });
    }
  }, [blogs]);
  const navigateToBlog = (url) => {
    console.log(url);
    window.location.replace("/b/" + url);
  };

  return (
    <div className="barlist">
      <div className="HeaderBarlist">بلاگ های من</div>
      <ul>
        {listblog.length !== 0
          ? listblog.map((item, i) => {
              if ( i < 10)
                return (
                  <li id={item.id} onClick={() => navigateToBlog(item.nameurl)}>
                    {item.title}
                  </li>
                );
            })
          : undefined}
      </ul>

      <div className="HeaderBarlist">پروژه های من</div>
      <div className="HeaderBarlist">صفحات دیگر</div>
    </div>
  );
};

export default BarLayout;
