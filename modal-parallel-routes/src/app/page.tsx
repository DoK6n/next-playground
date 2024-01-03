import style from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import zLogo from '../../public/zlogo.png'

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <Image src={zLogo} alt='logo' />
      </div>
      <div className={style.right}>
        <h2>지금 가입하세요.</h2>
        <Link href='/signup' className={style.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href='/login' className={style.login}>
          로그인
        </Link>
      </div>
    </div>
  )
}
