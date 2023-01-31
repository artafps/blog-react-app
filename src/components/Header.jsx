const Header = () => {
  const navigateToBlog = (url) => {
    window.location.replace(url);
  };
  return (
    <div className="Header">
      <h1 className="h1"> !Happy hacking </h1>
      <h1 className="h1" onClick={() => navigateToBlog("/")}>
        {" "}
        ARTA Fp - Blog{" "}
      </h1>
    </div>
  );
};

export default Header;
