import { Link } from 'react-router';
import './HeaderLink.css';

export function HeaderLink({ name, image, linksTo }) {
  return (
    <Link to={linksTo} className="header-link">
      <img src={image} alt={name} />
      <span>{name}</span>
    </Link>

  );
}