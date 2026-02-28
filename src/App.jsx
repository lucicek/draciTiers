import { Routes, Route } from 'react-router';
import { Overall } from './pages/overall/Overall.jsx';
import { Gamemodes } from './pages/Gamemodes.jsx';
import './App.css';

function App() {

  const gamemodeList = [
    'Vanilla',
    'UHC',
    'Pot',
    'NethOP',
    'SMP',
    'Sword',
    'Axe',
    'Mace'
  ]

  return (
    <>
      <Routes>
        <Route index element={<Overall gamemodes={[gamemodeList, 'overall']} />} />
        {gamemodeList.map((gamemode) => {
          return (
            <Route path={gamemode.toLowerCase()} element={<Gamemodes gamemodes={[gamemodeList , gamemode]} />} />
          );
        })}
      </Routes>
    </>
  )
}

export default App
