import { useEffect, useState } from "react";
import { getDataJson } from "./../getData";

const BarLayout = () => {
  const [blog, setblog] = useState("");
  useEffect(() => {
    if (blog === "") {
      getDataJson().then((res) => {
        setblog(res.data.reverse());
      });
    }
  }, [blog]);
  const navigateToBlog = (url) => {
    console.log(url)
    window.location.replace("/b/"+url);
  };

  return (
    <div className="barlist">
      <div className="HeaderBarlist">
        بلاگ های من
      </div>
      <ul>
        {blog !== ""
          ? blog.map((item, i) => {
              if (0 <= i < 10)
                return (
                  <li onClick={() => navigateToBlog(item.nameurl)}>
                    {item.title}
                  </li>
                );
            })
          : undefined}
      </ul>
      
      <div className="HeaderBarlist">
        پروژه های من
      </div>

      <div className="HeaderBarlist">
        صفحات دیگر
      </div>
    </div>
  );
};

export default BarLayout;
