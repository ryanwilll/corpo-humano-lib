import './Partes/styles.css';

import CorpoHumanoFrente, { partesCorpoFrente } from './Partes/CorpoHumanoFrente';
import CorpoHumanoCostas, { partesCorpoCostas } from './Partes/CorpoHumanoCostas';

export type TPartesSelecionadasProps = { selecionado?: boolean; habilitado?: boolean };

export type TPartesFrente = keyof typeof partesCorpoFrente;
export type TPartesCostas = keyof typeof partesCorpoCostas;

export type TPartesSelecionadasFrente = Partial<{
  [k in TPartesFrente]: Partial<TPartesSelecionadasProps>;
}>;

export type TPartesSelecionadasCostas = Partial<{
  [k in TPartesCostas]: Partial<TPartesSelecionadasProps>;
}>;

type PropsFrente = {
  parte: 'frente';
  partesSelecionadasFrente: Partial<TPartesSelecionadasFrente>;
  setPartesSelecionadasFrente: React.Dispatch<React.SetStateAction<Partial<TPartesSelecionadasFrente>>>;
  somenteVisualizar?: boolean;
};

type PropsCostas = {
  parte: 'costas';
  partesSelecionadasCostas: Partial<TPartesSelecionadasCostas>;
  setPartesSelecionadasCostas: React.Dispatch<React.SetStateAction<Partial<TPartesSelecionadasCostas>>>;
  somenteVisualizar?: boolean;
};

type PropsAmbos = {
  parte: 'ambos';
  partesSelecionadasFrente: Partial<TPartesSelecionadasFrente>;
  setPartesSelecionadasFrente: React.Dispatch<React.SetStateAction<Partial<TPartesSelecionadasFrente>>>;
  partesSelecionadasCostas: Partial<TPartesSelecionadasCostas>;
  setPartesSelecionadasCostas: React.Dispatch<React.SetStateAction<Partial<TPartesSelecionadasCostas>>>;
  somenteVisualizar?: boolean;
};

type Props = PropsFrente | PropsCostas | PropsAmbos;
const CorpoHumano = (props: Props) => {
  if (props.parte === 'frente') {
    const { partesSelecionadasFrente, setPartesSelecionadasFrente, somenteVisualizar } = props;

    const onClick = ({ target }: any) => {
      if (somenteVisualizar) return;

      const id = target.id || target.parentElement?.id;
      const newParts = { ...partesSelecionadasFrente };
      if (newParts[id]?.habilitado === false) return;
      newParts[id] = { selecionado: !newParts[id]?.selecionado };
      setPartesSelecionadasFrente(newParts);
    };

    return (
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <CorpoHumanoFrente
          onClick={onClick}
          partesSelecionadas={partesSelecionadasFrente}
          somenteVisualizar={somenteVisualizar}
        />
      </div>
    );
  }

  if (props.parte === 'costas') {
    const { partesSelecionadasCostas, setPartesSelecionadasCostas, somenteVisualizar } = props;

    const onClickCostas = ({ target }: any) => {
      if (somenteVisualizar) return;

      const id = target.id || target.parentElement?.id;
      const newParts = { ...partesSelecionadasCostas };
      if (newParts[id]?.habilitado === false) return;
      newParts[id] = { selecionado: !newParts[id]?.selecionado };
      setPartesSelecionadasCostas(newParts);
    };

    return (
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <CorpoHumanoCostas
          onClick={onClickCostas}
          partesSelecionadas={partesSelecionadasCostas}
          somenteVisualizar={somenteVisualizar}
        />
      </div>
    );
  }

  const {
    partesSelecionadasFrente,
    partesSelecionadasCostas,
    setPartesSelecionadasFrente,
    setPartesSelecionadasCostas,
    somenteVisualizar,
  } = props;

  const onClick = ({ target }: any) => {
    if (somenteVisualizar) return;

    const id = target.id || target.parentElement?.id;
    const newParts = { ...partesSelecionadasFrente };
    if (newParts[id]?.habilitado === false) return;
    newParts[id] = { selecionado: !newParts[id]?.selecionado };
    setPartesSelecionadasFrente(newParts);
  };

  const onClickCostas = ({ target }: any) => {
    if (somenteVisualizar) return;

    const id = target.id || target.parentElement?.id;
    const newParts = { ...partesSelecionadasCostas };
    if (newParts[id]?.habilitado === false) return;
    newParts[id] = { selecionado: !newParts[id]?.selecionado };
    setPartesSelecionadasCostas(newParts);
  };

  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <CorpoHumanoFrente
        onClick={onClick}
        partesSelecionadas={partesSelecionadasFrente}
        somenteVisualizar={somenteVisualizar}
      />
      <CorpoHumanoCostas
        onClick={onClickCostas}
        partesSelecionadas={partesSelecionadasCostas}
        somenteVisualizar={somenteVisualizar}
      />
    </div>
  );
};

export default CorpoHumano;
