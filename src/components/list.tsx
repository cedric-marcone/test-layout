import * as React from "react";
import Merchant from "./merchant";
import type * as Type from "./types";
import css from "./list.module.css";

type Props = {
  dialog: boolean;
  narrow: boolean;
  toggleMap: (cover: boolean) => () => void;
  data: Type.Data;
};

export default function List({ dialog, toggleMap, narrow, data }: Props) {
  return (
    <div className={css.outer}>
      {narrow && !dialog && (
        <div className={css.buttonBar}>
          <button onClick={toggleMap(true)}>Voir la carte</button>
        </div>
      )}
      <div className={css.list}>
        {data.merchants.map((merchant) => (
          <Merchant
            key={merchant.code}
            merchant={merchant}
            dictionary={data.dictionary}
          />
        ))}
      </div>
    </div>
  );
}
