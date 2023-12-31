import Image from 'next/image'
import Calculator from '@/components/ui/Calculator'
import ProfileForm from '@/components/ui/ProfileForm'
import ComboboxDemoForm from '@/components/ui/ComboboxDemoForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-20 gap-2 pb-10">
      <Calculator />
    </main>
  )
}
