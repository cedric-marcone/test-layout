import type * as Type from "./types";
import css from "./merchant.module.css";

type Props = {
  merchant: Type.Merchant;
};

export default function Merchant({ merchant }: Props) {
  const stars = Array.from(
    //@ts-ignore
    { length: merchant.taxonomy?.stars ?? 0 },
    () => "★"
  ).join("");

  return (
    <div className={css.outer}>
      {merchant.taxonomy?.category2 && (
        <div className={css.label}>{merchant.taxonomy?.category2}</div>
      )}
      <div className={css.image}>
        {merchant.image && <img src={merchant.image} loading="lazy" alt="" />}
      </div>
      <div className={css.content}>
        <div className={css.title}>{merchant.taxonomy?.category4}</div>
        <div className={css.name}>
          {merchant.name} <span className={css.stars}>{stars}</span>
        </div>
      </div>
    </div>
  );
}
