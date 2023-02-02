const Header = () => {
  const navigateToBlog = (url) => {
    window.location.replace(url+"#");
  };
  return (
    <div className="Header">
      <h1 className="h1" id="hap"> !Happy hacking </h1>
      <h1 className="h1" onClick={() => navigateToBlog("/")}>
        {" "}
        <a style={{color:"rgb(177, 177 ,177)"}}>a</a>rta dev - Blog{" "}
      </h1>
    </div>
  );
};

export default Header;
