import './Partes/styles.css';

import { useState } from 'react';
import CorpoHumanoFrente from './Partes/CorpoHumanoFrente';
import CorpoHumanoCostas from './Partes/CorpoHumanoCostas';

type Props = {
  parte: 'frente' | 'costas' | 'ambos';
};

const CorpoHumano = (props: Props) => {
  const { parte } = props;
  const [partesSelecionadas, setPartesSelecionadas] = useState<any>({});
  const [partesSelecionadasCostas, setPartesSelecionadasCostas] = useState<any>({});

  const onClick = ({ target }: any) => {
    const id = target.id || target.parentElement.id;
    const newParts = { ...partesSelecionadas };

    if (newParts[id]?.clickable !== undefined && !newParts[id]?.clickable) return;

    newParts[id] = { selected: !(newParts[id]?.selected ?? false) };

    setPartesSelecionadas(newParts);
  };

  const onClickCostas = ({ target }: any) => {
    const id = target.id || target.parentElement.id;
    const newParts = { ...partesSelecionadasCostas };

    if (newParts[id]?.clickable !== undefined && !newParts[id]?.clickable) return;

    newParts[id] = { selected: !(newParts[id]?.selected ?? false) };

    setPartesSelecionadasCostas(newParts);
  };

  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      {parte === 'frente' && <CorpoHumanoFrente onClick={onClick} partesSelecionadas={partesSelecionadas} />}
      {parte === 'costas' && (
        <CorpoHumanoCostas onClick={onClickCostas} partesSelecionadas={partesSelecionadasCostas} />
      )}
      {parte === 'ambos' && (
        <>
          <CorpoHumanoFrente onClick={onClick} partesSelecionadas={partesSelecionadas} />
          <CorpoHumanoCostas onClick={onClickCostas} partesSelecionadas={partesSelecionadasCostas} />
        </>
      )}
    </div>
  );
};

export default CorpoHumano;
