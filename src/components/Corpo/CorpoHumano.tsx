import './Partes/styles.css';

import CorpoHumanoFrente from './Partes/CorpoHumanoFrente';
import CorpoHumanoCostas from './Partes/CorpoHumanoCostas';

export type TPartesSelecionadas = Record<string, { selected?: boolean; clickable?: boolean }>;

type PropsFrente = {
  parte: 'frente';
  partesSelecionadas: TPartesSelecionadas;
  setPartesSelecionadas: React.Dispatch<React.SetStateAction<TPartesSelecionadas>>;
};

type PropsCostas = {
  parte: 'costas';
  partesSelecionadasCostas: TPartesSelecionadas;
  setPartesSelecionadasCostas: React.Dispatch<React.SetStateAction<TPartesSelecionadas>>;
};

type PropsAmbos = {
  parte: 'ambos';
  partesSelecionadasFrente: TPartesSelecionadas;
  setPartesSelecionadasFrente: React.Dispatch<React.SetStateAction<TPartesSelecionadas>>;
  partesSelecionadasCostas: TPartesSelecionadas;
  setPartesSelecionadasCostas: React.Dispatch<React.SetStateAction<TPartesSelecionadas>>;
};

type Props = PropsFrente | PropsCostas | PropsAmbos;
const CorpoHumano = (props: Props) => {
  if (props.parte === 'frente') {
    const { partesSelecionadas, setPartesSelecionadas } = props;

    const onClick = ({ target }: any) => {
      const id = target.id || target.parentElement?.id;
      const newParts = { ...partesSelecionadas };
      if (newParts[id]?.clickable === false) return;
      newParts[id] = { selected: !newParts[id]?.selected };
      setPartesSelecionadas(newParts);
    };

    return (
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <CorpoHumanoFrente onClick={onClick} partesSelecionadas={partesSelecionadas} />
      </div>
    );
  }

  if (props.parte === 'costas') {
    const { partesSelecionadasCostas, setPartesSelecionadasCostas } = props;

    const onClickCostas = ({ target }: any) => {
      const id = target.id || target.parentElement?.id;
      const newParts = { ...partesSelecionadasCostas };
      if (newParts[id]?.clickable === false) return;
      newParts[id] = { selected: !newParts[id]?.selected };
      setPartesSelecionadasCostas(newParts);
    };

    return (
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <CorpoHumanoCostas onClick={onClickCostas} partesSelecionadas={partesSelecionadasCostas} />
      </div>
    );
  }

  const {
    partesSelecionadasFrente,
    partesSelecionadasCostas,
    setPartesSelecionadasFrente,
    setPartesSelecionadasCostas,
  } = props;

  const onClick = ({ target }: any) => {
    const id = target.id || target.parentElement?.id;
    const newParts = { ...partesSelecionadasFrente };
    if (newParts[id]?.clickable === false) return;
    newParts[id] = { selected: !newParts[id]?.selected };
    setPartesSelecionadasFrente(newParts);
  };

  const onClickCostas = ({ target }: any) => {
    const id = target.id || target.parentElement?.id;
    const newParts = { ...partesSelecionadasCostas };
    if (newParts[id]?.clickable === false) return;
    newParts[id] = { selected: !newParts[id]?.selected };
    setPartesSelecionadasCostas(newParts);
  };

  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <CorpoHumanoFrente onClick={onClick} partesSelecionadas={partesSelecionadasFrente} />
      <CorpoHumanoCostas onClick={onClickCostas} partesSelecionadas={partesSelecionadasCostas} />
    </div>
  );
};

export default CorpoHumano;
