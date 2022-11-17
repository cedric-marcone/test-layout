import * as React from "react";
import classNames from "classnames";
import Layout from "./layout";
import type * as Type from "./types";
import css from "./widget.module.css";

// TODO : split Widget & Merchants

export default function Widget() {
  const [dialog, setDialog] = React.useState(false);
  const [merchants, setMerchants] = React.useState<Type.Merchants>();

  React.useEffect(() => {
    const runEffect = async () => {
      const merchants = await fetchMerchants();
      setMerchants(merchants);
    };
    runEffect();
  }, []);

  if (!merchants) {
    return null;
  }

  const toggleDialog = () => setDialog((dialog) => !dialog);

  const backdropClasses = classNames({ [css.backdrop]: dialog });
  const widgetClasses = classNames(css.widget, { [css.dialog]: dialog });

  return (
    <div className={backdropClasses}>
      <div className={widgetClasses}>
        <div className={css.bar}>
          <button onClick={toggleDialog}>
            {dialog ? "Dialog" : "Grounded"}
          </button>
        </div>
        <div className={css.viewport}>
          <Layout dialog={dialog} merchants={merchants} />
        </div>
      </div>
    </div>
  );
}

async function fetchMerchants() {
  const response = await fetch("/mock/lodging.json");
  return response.json() as Promise<Type.Merchants>;
}
