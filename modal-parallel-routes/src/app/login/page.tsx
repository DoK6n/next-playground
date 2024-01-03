'use client'

import { useRouter } from 'next/navigation'
import Home from '~/components/home/home'

export default function LoginPage() {
  const router = useRouter()
  router.replace('/login')
  return <Home />
}
