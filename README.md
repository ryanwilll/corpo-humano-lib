# 🧍‍♂️ Corpo Humano Interativo

![Corpo Humano Interativo](https://github.com/ryanwilll/corpo-humano-lib/raw/main/preview.png)

Componente React para seleção visual e interativa de múltiplas partes do corpo humano (frente e costas), ideal para aplicações em saúde, como fichas de atendimento, marcação de lesões ou curativos.

---

## 🚀 Funcionalidades

- Seleção de múltiplas regiões do corpo (frente e costas)
- Destaque visual das partes selecionadas
- Controle programático da seleção via props e eventos
- Modo somente visualização (sem interação)
- Fácil integração e personalização via CSS

---

## 📦 Instalação

```bash
npm install corpo-humano
```

Ou, para uso local:

```bash
npm install ../caminho/para/lib
```

---

## 🧩 Estrutura dos Componentes

```
components/
└── Corpo/
    ├── CorpoHumano.tsx            # Componente principal
    ├── Partes/
    │   ├── CorpoHumanoFrente.tsx  # SVG frente
    │   ├── CorpoHumanoCostas.tsx  # SVG costas
    │   └── styles.css             # Estilos das partes
```

---

## ✨ Exemplo de Uso

```tsx
import { useState } from 'react';
import CorpoHumano, { TPartesSelecionadasFrente, TPartesSelecionadasCostas } from 'corpo-humano';

const App = () => {
  const [partesSelecionadasFrente, setPartesSelecionadasFrente] = useState<TPartesSelecionadasFrente>();
  const [partesSelecionadasCostas, setPartesSelecionadasCostas] = useState<TPartesSelecionadasCostas>();

  return (
    <CorpoHumano
      parte='ambos' // "frente", "costas" ou "ambos"
      partesSelecionadasFrente={partesSelecionadasFrente}
      setPartesSelecionadasFrente={setPartesSelecionadasFrente}
      partesSelecionadasCostas={partesSelecionadasCostas}
      setPartesSelecionadasCostas={setPartesSelecionadasCostas}
      somenteVisualizar={false} // true ou false, para deixar marcar/desmarcar os itens
    />
  );
};
```

---

## 🏷️ Tipos das Partes

- **TPartesSelecionadasFrente** e **TPartesSelecionadasCostas** são objetos onde cada chave é uma parte do corpo e o valor indica se está selecionada/habilitada:
  ```ts
  {
    cabeca: { selecionado: true, habilitado: true },
    abdomen: { selecionado: false, habilitado: true },
    // ...
  }
  ```

---

## 🎯 Partes Selecionáveis

Cada parte é um `<path id="parte-do-corpo" />` no SVG. IDs disponíveis incluem (exemplo):

**Frente:**  
`cabeca`, `olhos`, `orelhas`, `nariz`, `boca`, `pescoco`, `peito`, `ombroEsquerdo`, `ombroDireito`, `abdomen`, `antebracoDireito`, `antebracoEsquerdo`, `abdomenMedio`, `abdomenBaixo`, `maoDireita`, `maoEsquerda`, `orgaoReprodutor`, `coxaDireita`, `coxaEsquerda`, `joelhoDireito`, `joelhoEsquerdo`, `panturrilhaDireita`, `panturrilhaEsquerda`, `peDireito`, `peEsquerdo`

**Costas:**  
`cabeca`, `ouvidos`, `orelhas`, `pescoco`, `nuca`, `costas`, `ombroEsquerdo`, `ombroDireito`, `cutuveloEsquerdo`, `cutuveloDireito`, `costasInferior`, `antebracoEsquerdo`, `antebracoDireito`, `nadegas`, `anus`, `maoEsquerda`, `maoDireita`, `coxaEsquerda`, `coxaDireita`, `pernaEsquerda`, `pernaDireita`, `peEsquerdo`, `peDireito`

---

## ⚙️ Personalização de Estilo

Crie um arquivo styles.css para alterar cores, hover e seleção:

```css
.corpoHumanoSvgModel {
  width: 100%;
  height: 100%;
}
.itemSvg {
  fill: rgba(0, 0, 0, 0);
  cursor: pointer;
  user-select: none;
  transition: fill 0.2s;
}
.itemSvg:hover {
  fill: rgba(255, 99, 71, 0.4);
}
.itemSvg.selecionado {
  fill: #ff6347;
}
.itemSvgStroke {
  fill: #2c3e50;
  pointer-events: none;
}
```

---

## 📁 Dados Gerados

O estado das partes selecionadas pode ser salvo ou enviado ao backend, por exemplo:

```ts
{
  cabeca: { selecionado: true },
  abdomen: { selecionado: false }
}
```

Ou apenas os IDs selecionados:

```ts
['ombroDireito', 'peito', 'coxaEsquerda'];
```

---

## 🩹 Aplicações

- Fichas de atendimento
- Marcação de curativos/lesões
- Enfermagem, fisioterapia, odontologia

---

## 🔧 Tecnologias

- React + TypeScript
- SVG interativo
- CSS Modules
- Vite + tsup

---

## 📜 Licença

MIT © Ryan Will
