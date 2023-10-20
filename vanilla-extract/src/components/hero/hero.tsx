import { colorTomato, hero, themeClass } from './hero.css'

export default function Hero() {
  return (
    <div className={themeClass}>
      <div className={hero}>Products</div>
      <h2 className={colorTomato}>Title</h2>
    </div>
  )
}
