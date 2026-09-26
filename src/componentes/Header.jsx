export default function Header({ nombre, cargo }) {
  return (
    <header className="header">
      <h1>{nombre}</h1>
      <p>{cargo}</p>
      <nav>
        <a href="#about">Sobre mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Proyectos</a>
      </nav>
    </header>
  );
}