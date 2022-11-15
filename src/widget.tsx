import * as React from "react";
import classNames from "classnames";
import Layout from "./layout";
import css from "./widget.module.css";

export default function Widget() {
  const [dialog, setDialog] = React.useState(true);
  const [merchants, setMerchants] = React.useState<number[]>([]);

  React.useEffect(() => {
    setMerchants(loadMerchants());
  }, []);

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

function loadMerchants() {
  const merchants: number[] = [];
  for (let i = 0; i < 37; i++) {
    merchants.push(i);
  }
  return merchants;
}
