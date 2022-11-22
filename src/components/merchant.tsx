import type * as Type from "./types";
import css from "./merchant.module.css";

type Props = {
  merchant: Type.Merchant;
  dictionary: Type.Dictionaries;
};

export default function Merchant({ merchant, dictionary }: Props) {
  const stars = Array.from(
    //@ts-ignore
    { length: merchant.taxonomy?.stars ?? 0 },
    () => "★"
  ).join("");

  console.log(merchant.name);
  return (
    <div className={css.outer}>
      {merchant.taxonomy?.category2 && (
        <div className={css.label}>{merchant.taxonomy?.category2}</div>
      )}
      <div className={css.image}>
        {Array.isArray(merchant.images) && merchant.images.length > 0 && (
          <img src={merchant.images[0]} loading="lazy" alt="" />
        )}
      </div>
      <div className={css.content}>
        {merchant.taxonomy?.category4 && (
          <div className={css.title}>{merchant.taxonomy?.category4}</div>
        )}
        <div className={css.name}>
          {merchant.name} <span className={css.stars}>{stars}</span>
        </div>
      </div>
    </div>
  );
}
