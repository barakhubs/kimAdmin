import Logo from "pages/assets/logos/logo-dark.png";
const PageLoader = () => {
  return (
    <>
      <div className="preloader">
        <img
          src={Logo}
          alt="loader"
          className="lds-ripple img-fluid"
          loading="lazy"
        />
      </div>
      <div className="preloader">
        <img
          src={Logo}
          alt="loader"
          className="lds-ripple img-fluid"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default PageLoader;
