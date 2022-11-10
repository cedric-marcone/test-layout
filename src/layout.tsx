import * as React from "react";
import useSize from "@react-hook/size";
import classNames from "classnames";
import List from "./list";
import Map from "./map";
import css from "./layout.module.css";

type Props = {
  dialog?: boolean;
};

export default function Layout({ dialog = false }: Props) {
  const outerRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<HTMLDivElement>(null);

  const outerSize = useSize(outerRef);
  const listSize = useSize(listRef);
  const mapSize = useSize(mapRef);

  const outerClasses = classNames(css.outer, { [css.dialog]: dialog });
  const mapClasses = classNames(css.map, { [css.dialog]: dialog });
  return (
    <div className={outerClasses} ref={outerRef}>
      <div className={css.list} ref={listRef}>
        <List />
      </div>
      <div className={mapClasses}>
        <Map
          dialog={dialog}
          size={mapSize}
          widgetSize={outerSize}
          ref={mapRef}
        />
      </div>
    </div>
  );
}
