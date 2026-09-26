export default function Footer({ email, github }) {
  return (
    <footer className="footer">
      <p>Contacto: {email} | GitHub: {github}</p>
      <p>&copy; 2026 - UTN Facultad Regional Tucumán</p>
    </footer>
  );
}