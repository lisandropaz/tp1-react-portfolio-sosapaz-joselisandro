export default function Skills() {
  const habilidades = ["JavaScript", "React", "Git", "HTML", "CSS", "Vite"];

  return (
    <section id="skills" className="skills">
      <h3>Habilidades y Tecnologías</h3>
      <ul>
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
}