const personajes = [
  {
    nombre: "Juan Lechín Oquendo",
    rol: "Líder minero y dirigente de la COB",
    descripcion: "Figura clave en las luchas sindicales del siglo XX, impulsó la tesis de la ‘cogobierna’ y defendió los intereses de los mineros.",
    img: "/images/personaje-lechin.jpg"
  },
  {
    nombre: "Domitila Barrios de Chungara",
    rol: "Activista minera y feminista",
    descripcion: "Lideró las protestas de las ‘amas de casa’ mineras contra la dictadura. Símbolo de resistencia obrera y popular.",
    img: "/images/personaje-domitila.jpg"
  },
  {
    nombre: "Marcial Quiroga",
    rol: "Pionero del sindicalismo fabril",
    descripcion: "Fundador de importantes federaciones fabriles en La Paz. Luchó por el código de trabajo y la jornada de 8 horas.",
    img: "/images/personaje-marcial.jpg"
  }
]

const Personajes = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Personajes históricos</h1>
      <div className="row">
        {personajes.map((p, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card h-100 text-center shadow-sm">
              <img src={p.img} className="card-img-top" alt={p.nombre} style={{ objectFit: "cover", height: "250px" }} />
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <h6 className="text-muted">{p.rol}</h6>
                <p className="card-text mt-3">{p.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Personajes