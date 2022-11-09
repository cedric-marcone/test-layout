import css from "./list.module.css";

const merchants: number[] = [];
for (let i = 0; i < 37; i++) {
  merchants.push(i);
}

export default function List() {
  return (
    <div className={css.outer}>
      {merchants.map((merchant) => (
        <div className={css.card} key={merchant}>
          {merchant}
        </div>
      ))}
    </div>
  );
}
