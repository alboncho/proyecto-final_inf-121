const Feriado = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mb-3">Feriado por el diq del Trabajo</h1>
          <img src="/images/feriado.jpg" className="img-fluid rounded mb-4" alt="Desfile 1 de mayo" />
          <p>
            En Bolivia, el <strong>1 de mayo</strong> es feriado nacional por ley (Ley 1990, 1999). Es un día
            de descanso obligatorio con sueldo para todos los trabajadores públicos y privados.
          </p>
          <p>
            Durante esta fecha se realizan <strong>desfiles y actos sindicales</strong> en las principales ciudades,
            especialmente en La Paz, Oruro y Potosí. La Central Obrera Boliviana (COB) y sus federaciones afiliadas
            organizan marchas, ferias de servicios y homenajes a los mártires laborales.
          </p>
          <p>
            También es común que el gobierno anuncie incrementos salariales o políticas a favor del empleo.
            Es un día para recordar que los derechos laborales nunca son regalados, sino conquistados con lucha.
          </p>
          <div className="alert alert-warning mt-4" role="alert">
            Si el feriado cae en martes o jueves, suele decretarse “puente turístico” para fomentar el descanso y
            la economía local.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feriado