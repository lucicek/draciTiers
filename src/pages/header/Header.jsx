import { Link } from 'react-router';
import { HeaderLink } from './HeaderLink';
import Logo from '../../assets/header-icons/home-icon.png';
import RankingsImage from '../../assets/header-icons/rankings.svg';
import DiscordImage from '../../assets/header-icons/discord.svg';
import './Header.css';

export function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img className='logo' src={Logo} />
      </Link>

      <div className="header-links">
        <HeaderLink name={'Rankings'} image={RankingsImage} linksTo={'/'} />
        <HeaderLink name={'Discord'} image={DiscordImage} linksTo={'https://discord.gg/fXgcPqfbU8'} />
      </div>
      <input className="searchbar" type="text" />
    </div>
  );
}