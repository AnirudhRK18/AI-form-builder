import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 border-b shadow-sm'>
<div className='flex items-center justify-between'>
    <Image src={'./logo.svg'} width={50} height={30} alt='image'/>
    <Link href={'/Dashboard'}>
    <Button>Dashboard</Button>
    </Link>
</div>
    </div>
  )
}

export default Header