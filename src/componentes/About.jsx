import { useState } from 'react';

export default function About() {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section id="about" className="about">
      <h3>Sobre mí</h3>
      <p>Soy un estudiante entusiasta de la programación, enfocado en aprender desarrollo web moderno.</p>
      
      {mostrarMas && (
        <p className="extra-info">
          Actualmente curso en la UTN Facultad Regional Tucumán, perfeccionando mis habilidades en React y JavaScript.
        </p>
      )}

      <button onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos" : "Ver más"}
      </button>
    </section>
  );
}