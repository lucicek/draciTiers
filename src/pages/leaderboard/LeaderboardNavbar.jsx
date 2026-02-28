import { CopyableTag } from './CopyableTag.jsx'
import InfoIcon from '../../assets/leaderboard-icons/info-icon.png';
import ServerIcon from '../../assets/leaderboard-icons/server-icon.png';
import './LeaderboardNavbar.css';

export function LeaderboardNavbar() {
  return (
    <div className="leaderboard-navbar">
      <button className='info-button'>
        <img src={InfoIcon} />
        Informace
      </button>
      <div className='server-description'>
        <img src={ServerIcon} />
        <div className='server-info'>
          <CopyableTag text="draci.miecraft.pe" />
        </div>
        <div className='server-discord'>

        </div>
      </div>
    </div>
  );
}