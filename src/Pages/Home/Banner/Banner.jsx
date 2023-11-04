

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/XpdfzCt/banner-01.jpg" className="w-full h-4/6" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/f1Xh2z0/banner-02.jpg" className="w-full h-4/6" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/xqjrNh2/banner-03.jpg" className="w-full h-4/6" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/9gGJkkQ/travel-sky-luxury-beach-pool.jpg" className="w-full h-4/6" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;