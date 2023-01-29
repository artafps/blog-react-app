import { useSelector } from "react-redux";

const BarLayout = () => {
  const blog = useSelector((state) => state.blog);
  const gblog = useSelector((state) => state.gblog);
  const project = useSelector((state) => state.project);

  const navigateToBlog = (url) => {
    console.log(url);
    window.location.replace("/b/" + url);
  };

  return (
    <div className="barlist">
      <div className="HeaderBarlist">بلاگ ها</div>
      <ul>
        {blog.length !== 0
          ? blog.map((item, i) => {
              if (i < 10)
                return (
                  <li key={item.id} onClick={() => navigateToBlog(item.nameurl)}>
                    {item.title}
                  </li>
                );
            })
          : undefined}
      </ul>
      <div className="HeaderBarlist"> لاگ های مرتبط  </div>
      <ul>
        {project.length !== 0
          ? project.map((item, i) => {
              if (i < 10)
                return (
                  <li key={item.id} onClick={() => navigateToBlog(item.nameurl)}>
                    {item.title}
                  </li>
                );
            })
          : undefined}
      </ul>      
      <div className="HeaderBarlist">پروژه ها</div>
      <ul>
        {project.length !== 0
          ? project.map((item, i) => {
              if (i < 10)
                return (
                  <li key={item.id} onClick={() => navigateToBlog(item.nameurl)}>
                    {item.title}
                  </li>
                );
            })
          : undefined}
      </ul>

      <div className="HeaderBarlist">صفحات دیگر</div>
    </div>
  );
};

export default BarLayout;
