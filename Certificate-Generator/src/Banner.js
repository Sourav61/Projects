const Banner = ({ Config }) => {
  const BannerStyle = {
    backgroundImage: `url("${Config.Banner}")`
  };
  return (
    <div className="LeftBanner col-12 col-sm-6" style={BannerStyle}>
      <img
        src={Config.Banner}
        alt={Config.Name}
        className="d-block d-sm-none"
      />
    </div>
  );
};

export default Banner;
