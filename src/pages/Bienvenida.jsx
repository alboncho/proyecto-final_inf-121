import Card from '../components/Card'

const Bienvenida = () => {
  const cards = [
    {
      title: "Origen del 1 de Mayo",
      text: "Homenaje a los Mártires de Chicago que lucharon por la jornada laboral de 8 horas.",
      imageSrc: "/images/card-1.jpg",
    },
    {
      title: "Luchas Obreras en Bolivia",
      text: "Mineros, fabriles y maestros protagonizaron hitos que forjaron derechos laborales.",
      imageSrc: "/images/card-2.jpg",
    },
    {
      title: "Feriado Nacional",
      text: "El 1 de mayo es un día de reflexión y celebración de los logros del movimiento obrero boliviano.",
      imageSrc: "/images/card-3.jpg",
    }
  ]

  return (
    <div className="container">
      <div id="laborCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#laborCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#laborCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#laborCarousel" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/carrusel-1.jpg" className="d-block w-100" alt="Trabajadores bolivianos" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Unidad Sindical</h5>
              <p>La organización de los trabajadores transformó la historia del país.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/carrusel-2.jpg" className="d-block w-100" alt="Marcha obrera" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Memoria y Lucha</h5>
              <p>Cada 1 de mayo se conmemora la conquista de derechos.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/carrusel-3.jpg" className="d-block w-100" alt="Feriado y celebraciones" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h5>Feriado Nacional</h5>
              <p>Descanso, desfiles y reflexión sobre el trabajo digno.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#laborCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#laborCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <h2 className="text-center mb-4">Aspectos destacados</h2>
      <div className="row">
        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} text={card.text} imageSrc={card.imageSrc} />
        ))}
      </div>
    </div>
  )
}

export default Bienvenida