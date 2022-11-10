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
  const [, setCover] = React.useState(false);
  const outerRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<HTMLDivElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const outerSize = useSize(outerRef);
  const mapSize = useSize(mapRef);

  const [width] = outerSize;
  const narrow = width < 600;

  const toggleMap = (cover: boolean) => () => {
    setCover(() => {
      const target = cover ? mapRef : listRef;
      target.current?.scrollIntoView();
      return cover;
    });
  };

  const outerClasses = classNames(css.outer, {
    [css.dialog]: dialog,
    [css.narrow]: narrow,
  });
  const mapClasses = classNames(css.map, {
    [css.dialog]: dialog,
  });

  return (
    <div className={outerClasses} ref={outerRef}>
      <div className={css.list} ref={listRef}>
        <List narrow={narrow} dialog={dialog} toggleMap={toggleMap} />
      </div>
      <div className={mapClasses}>
        <Map
          narrow={narrow}
          dialog={dialog}
          size={mapSize}
          ref={mapRef}
          toggleMap={toggleMap}
        />
      </div>
    </div>
  );
}
