import { Link } from 'react-router-dom';
import "./NotFound.scss"

const NotFound = () => {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <h2>Oups ! Cette page n'existe pas dans ce multivers.</h2>
      <Link to="/" className="button">Retourner à l'accueil</Link>
    </div>
  );
};

export default NotFound;