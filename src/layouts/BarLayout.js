import { useEffect, useState } from "react";
import { getBlogtxt, getDatatxt } from "./../getData";

const BarLayout = () => {
  const [blogs, setblogs] = useState([]);
  const [listblog, setlistblog] = useState([]);
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
          if (data.length == 1) {
            let newlist = listblog;
            newlist.push(data[0]);
            setlistblog(newlist);
          }
        });
      });
    }
  }, [blogs, listblog]);
  console.log("list blog",listblog);
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
              if (0 <= i < 10)
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
