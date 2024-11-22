import { Button } from '@/components/ui/button'
import React from 'react'
import Createform from './_components/Createform'

const Dashboard = () => {
  return (
    <div className='p-10'>
        <h2 className='font-bold text-3xl flex justify-between text-white items-center'>
            Dashboard
            <Createform/>
        </h2>
    </div>
  )
}

export default Dashboard