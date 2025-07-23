import { useState } from 'react';
import CorpoHumano from './components/Corpo/CorpoHumano';
import { TPartesSelecionadasCostas, TPartesSelecionadasFrente } from './components/Corpo';

const App = () => {
  const [partesSelecionadasFrente, setPartesSelecionadasFrente] = useState<TPartesSelecionadasFrente>();
  const [partesSelecionadasCostas, setPartesSelecionadasCostas] = useState<TPartesSelecionadasCostas>();

  return (
    <CorpoHumano
      parte='ambos'
      partesSelecionadasCostas={partesSelecionadasCostas}
      partesSelecionadasFrente={partesSelecionadasFrente}
      setPartesSelecionadasCostas={setPartesSelecionadasCostas}
      setPartesSelecionadasFrente={setPartesSelecionadasFrente}
      somenteVisualizar={false}
    />
  );
};

export default App;
