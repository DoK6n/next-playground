'use client'

import { useRouter } from 'next/navigation'
import Home from '~/components/home/home'

export default function SignupPage() {
  const router = useRouter()
  router.replace('/signup')
  return <Home />
}
