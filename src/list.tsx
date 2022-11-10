import * as React from "react";
import css from "./list.module.css";

type Props = {
  dialog: boolean;
  narrow: boolean;
  toggleMap: (cover: boolean) => () => void;
};

export default function List({ dialog, toggleMap, narrow }: Props) {
  const [merchants, setMerchants] = React.useState<number[]>([]);

  React.useEffect(() => {
    setMerchants(fetchMerchants());
  }, []);

  return (
    <div className={css.outer}>
      {narrow && !dialog && (
        <div className={css.buttonBar}>
          <button onClick={toggleMap(true)}>Voir la carte</button>
        </div>
      )}
      <div className={css.list}>
        {merchants.map((merchant) => (
          <div className={css.card} key={merchant}>
            {merchant}
          </div>
        ))}
      </div>
    </div>
  );
}

function fetchMerchants() {
  const merchants: number[] = [];
  for (let i = 0; i < 37; i++) {
    merchants.push(i);
  }
  return merchants;
}
