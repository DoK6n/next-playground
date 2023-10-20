import * as css from './price-card.css'

export default function PriceCard() {
  return (
    <div className={css.block}>
      <button className={css.button} type='button'>
        <div className={css.right}>
          <div className={css.title}>title</div>
          <div className={css.subtitle}>EU · 1 day ago</div>
          <div className={css.price}>£10.00</div>
        </div>
      </button>
    </div>
  )
}
