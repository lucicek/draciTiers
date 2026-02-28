import { Header } from './header/Header';
import { Navbar } from './navbar/Navbar'
import './Gamemodes.css';

export function Gamemodes({ gamemodes }) {
  return (
    <div className="container">
      <Header />
      <Navbar gamemodes={gamemodes} />
    </div>
  );
}