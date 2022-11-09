import * as React from "react";
import classNames from "classnames";
import List from "./list";
import Map from "./map";
import css from "./layout.module.css";

type Props = {
  dialog?: boolean;
};

export default function Layout({ dialog = false }: Props) {
  const outerClasses = classNames(css.outer, { [css.dialog]: dialog });
  const mapClasses = classNames(css.map, { [css.dialog]: dialog });
  return (
    <div className={outerClasses}>
      <div className={css.list}>
        <List />
      </div>
      <div className={mapClasses}>
        <Map />
      </div>
    </div>
  );
}
