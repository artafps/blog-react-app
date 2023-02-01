import { useSelector } from "react-redux";

const BarLayout = () => {
  const blog = useSelector((state) => state.blog);
  const gblog = useSelector((state) => state.gblog);
  const project = useSelector((state) => state.project);

  const navigateToBlog = (url) => {
    window.location.replace(url);
  };

  return (
    <div className="barlist">
      {blog.length !== 0 ? <div className="HeaderBarlist">بلاگ ها</div> : null}
      <ul>
        {blog.length !== 0
          ? blog.map((item, i) => {
              if (i < 10)
                return (
                  <li
                    key={item.id}
                    onClick={() => navigateToBlog("/b/" + item.nameurl)}
                  >
                    {item.title}
                  </li>
                );
            })
          : undefined}
      </ul>
      {gblog.length !== 0 ? (
        <div className="HeaderBarlist"> بلاگ های مرتبط </div>
      ) : null}

      <ul>
        {gblog.length !== 0
          ? gblog.map((item, i) => {
              if (i < 10)
                return (
                  <li
                    key={item.id}
                    onClick={() => navigateToBlog("/b/" + item.nameurl)}
                  >
                    {item.title}
                  </li>
                );
            })
          : undefined}
      </ul>
      {project.length !== 0 ? (
        <div className="HeaderBarlist">پروژه ها</div>
      ) : null}
      <ul>
        {project.length !== 0
          ? project.map((item, i) => {
              if (i < 10)
                return (
                  <li
                    key={item.id}
                    onClick={() => navigateToBlog("/b/" + item.nameurl)}
                  >
                    {item.title}
                  </li>
                );
            })
          : undefined}
      </ul>

      <div className="HeaderBarlist">صفحات دیگر</div>
      <ul>
        <li onClick={() => navigateToBlog("resume")}>رزومه</li>
        <li onClick={() => navigateToBlog("/")}>صفحه اصلی</li>
      </ul>
    </div>
  );
};

export default BarLayout;
