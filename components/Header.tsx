'use client'

import { ModeToggle } from './ModeToggle'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='relative'>
        <div className='absolute top-7 left-10'>
            <Image src="/gmu_logo.png" alt="logo" width="40" height="40"/>
        </div>
        <div className='absolute top-8 right-12'>
            <ModeToggle />
        </div>
    </div>
  )
}

export default Header