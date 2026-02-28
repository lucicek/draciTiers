import { GamemodeLink } from './GamemodeLink';
import OverallImage from '/gamemode-icons/overall.svg';
import './Navbar.css';

export function Navbar({ gamemodes }) {
  return (
    <div className="navbar">
      <GamemodeLink imgSrc={OverallImage} linksTo="" name="Overall" />
      {gamemodes[0].map((gamemode) => {
        return (
          <GamemodeLink key={crypto.randomUUID()} imgSrc={`/gamemode-icons/${gamemode.toLowerCase()}.svg`} name={gamemode} linksTo={gamemode} />
        );
      })}
    </div>
  );
}