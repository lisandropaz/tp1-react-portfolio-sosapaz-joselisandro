export default function Projects() {
  const listaProyectos = [
    { id: 1, nombre: "E-commerce", descripcion: "Tienda online creada con componentes de React." },
    { id: 2, nombre: "App de Clima", descripcion: "Consulta de clima consumiendo una API externa." }
  ];

  return (
    <section id="projects" className="projects">
      <h3>Proyectos</h3>
      <div className="project-grid">
        {listaProyectos.map((proyecto) => (
          <div className="project-card" key={proyecto.id}>
            <h4>{proyecto.nombre}</h4>
            <p>{proyecto.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}