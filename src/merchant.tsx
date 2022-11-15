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
      <div className={css.content}>
        {index % 5 === 0 ? (
          <>
            <div>{index}</div>
            <div>coucou</div>
            <div>coucou</div>
            <div>coucou</div>
            <div>coucou</div>
          </>
        ) : (
          index
        )}
      </div>
    </div>
  );
}
