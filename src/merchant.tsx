import css from "./merchant.module.css";

type Props = {
  index: number;
};

export default function Merchant({ index }: Props) {
  const log = () => {
    console.log(index);
  };
  return (
    <div className={css.outer} onClick={log}>
      <div className={css.image}>
        <img src="http://placekitten.com/300/200" loading="lazy" alt="" />
      </div>
      <div className={css.content}>{index}</div>
    </div>
  );
}
