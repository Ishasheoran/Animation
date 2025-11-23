export default function CarouselBlock({ title, images, angle, distance = 380 }) {
  return (
    <div className="carousel-wrapper">
      <h2>{title}</h2>

      <div
        className="carousel"
        style={{ transform: `translateZ(-300px) rotateY(${angle}deg)` }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="carousel-item"
            style={{
              transform: `rotateY(${i * (360 / images.length)}deg) translateZ(${distance}px)`
            }}
          >
            <img src={img} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
