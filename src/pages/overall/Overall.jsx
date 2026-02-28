import { Leaderboard } from "../leaderboard/Leaderboard";
import { Header } from "../header/Header";
import { Navbar } from "../navbar/Navbar";
import './Overall.css'

export function Overall({ gamemodes }) {
  return (
    <div className="container">
      <Header />
      <Navbar gamemodes={gamemodes} />
      <Leaderboard />
    </div>
  );
}