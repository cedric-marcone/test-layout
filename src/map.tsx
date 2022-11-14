import * as React from "react";
import classNames from "classnames";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import css from "./map.module.css";

type Props = {
  narrow: boolean;
  dialog: boolean;
  size: [number, number];
  toggleMap: (cover: boolean) => () => void;
};

const Map = React.forwardRef(
  (
    { narrow, dialog, size: [width, height], toggleMap }: Props,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const appMode = dialog && narrow;
    const bottom = height - 75;
    const top = 0;

    const [{ y }, api] = useSpring(() => {
      return { y: 0, config: { mass: 0.1, friction: 10 } };
    });

    React.useEffect(() => {
      api.set({ y: appMode ? bottom : top });
    }, [api, appMode, bottom]);

    const bind = useDrag((state) => {
      const [, my] = state.movement;
      const [, iy] = state.initial;
      const y = iy + my;
      if (state.tap) {
        return api.start({ y: y <= height / 2 ? bottom : top });
      }
      if (state.active) {
        return api.start({ y: y < 0 ? 0 : y });
      }
      return api.start({ y: y > height / 2 ? bottom : top });
    });

    const outerClasses = classNames(css.outer, {
      [css.dialog]: dialog,
      [css.narrow]: narrow,
    });
    return (
      <animated.div className={outerClasses} style={{ y }} ref={ref}>
        <div className={css.dragBar} {...bind()}>
          <div className={css.drag} />
        </div>
        <div className={css.map}>
          {narrow && !dialog && (
            <div className={css.buttonBar}>
              <button onClick={toggleMap(false)}>Voir la liste</button>
            </div>
          )}
          <iframe
            src="https://umap.openstreetmap.fr/fr/map/carte-sans-nom_831249#15/45.505/6.5"
            title="map"
            width={width}
            height={height}
            frameBorder="0"
          />
        </div>
      </animated.div>
    );
  }
);

export default Map;
