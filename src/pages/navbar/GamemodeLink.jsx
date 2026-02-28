import { NavLink } from "react-router";
import './GamemodeLink.css'

export function GamemodeLink({ imgSrc, linksTo , name }) {
  return (
    <NavLink to={`/${linksTo.toLowerCase()}`} className='gamemode-link'>
      <img className="gamemode-icon" src={imgSrc} />
      <span>
        {name}
      </span>
    </NavLink>
  );
}