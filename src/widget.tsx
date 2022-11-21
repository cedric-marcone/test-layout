import * as React from "react";
import classNames from "classnames";
import Merchants from "./components/merchants";
import css from "./widget.module.css";

export default function Widget() {
  const [dialog, setDialog] = React.useState(false);

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
          <Merchants dialog={dialog} />
        </div>
      </div>
    </div>
  );
}
