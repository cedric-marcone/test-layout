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
  const [cover, setCover] = React.useState(false);
  const outerRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<HTMLDivElement>(null);
  // const listRef = React.useRef<HTMLDivElement>(null);

  const outerSize = useSize(outerRef);
  const mapSize = useSize(mapRef);
  // const listSize = useSize(listRef);

  const [width] = outerSize;
  const narrow = width < 600;

  const toggleMap = () => {
    setCover((cover) => !cover);
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
      {/* <div className={css.list} ref={listRef}> */}
      <div className={css.list}>
        <List narrow={narrow} dialog={dialog} toggleMap={toggleMap} />
      </div>
      <div className={mapClasses}>
        <Map
          narrow={narrow}
          dialog={dialog}
          size={mapSize}
          cover={cover}
          ref={mapRef}
        />
      </div>
    </div>
  );
}
