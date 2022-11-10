import * as React from "react";
import classNames from "classnames";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";
import css from "./map.module.css";

type Props = {
  dialog?: boolean;
  size: [number, number];
  widgetSize: [number, number];
};

const BAR_TOP = 75;
const BAR_BOTTOM = 100;

const Map = React.forwardRef(
  (
    { dialog = false, size: [, height], widgetSize: [width] }: Props,
    ref: any
  ) => {
    const [{ y }, api] = useSpring(() => ({ y: 0 }));

    React.useEffect(() => {
      const appMode = dialog && width < 600;
      api.set({ y: appMode ? height - BAR_TOP : 0 });
    }, [api, dialog, width, height]);

    const bind = useDrag((state) => {
      const [, my] = state.movement;
      const [, iy] = state.initial;
      const [, dy] = state.offset;

      const y = iy + my;
      const start = height - BAR_TOP;
      const distance = Math.abs(dy);
      const upward = dy > 0;

      if (state.down) {
        return api.start({ y });
      }
      if (state.tap) {
        return y < BAR_BOTTOM ? api.start({ y: start }) : api.start({ y: 0 });
      }
      return distance > height / 8 && upward
        ? api.start({ y: start })
        : api.start({ y: 0 });
    });

    const outerClasses = classNames(css.outer, { [css.dialog]: dialog });
    return (
      <animated.div className={outerClasses} style={{ y }} ref={ref}>
        <div className={css.dragBar} {...bind()}>
          <div className={css.drag} />
        </div>
        <div className={css.map}>Map</div>
      </animated.div>
    );
  }
);

export default Map;
