import { useState } from 'react';
import './App.css';
import { CorpoHumanoSelect } from './components';

const exampleParams = {
  head: { head: true },
  trunk: {
    left_shoulder: true,
    right_shoulder: true,
    left_arm: true,
    right_arm: true,
    chest: true,
    stomach: true,
  },
  legs: {
    left_leg_upper: true,
    left_leg_lower: true,
    right_leg_upper: true,
    right_leg_lower: true,
  },
  hands: { right_hand: true, left_hand: true },
  foots: { left_foot: true, right_foot: true },
};
function App() {
  const [onchange, setOnchange] = useState<any>(exampleParams);
  console.log('🐞 ~ App ~ onchange:', onchange);
  return (
    <>
      <CorpoHumanoSelect onChange={setOnchange} mode='pain' />
    </>
  );
}

export default App;
