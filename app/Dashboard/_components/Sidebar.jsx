"use client"



import { Button } from '@/components/ui/button'
import { LibraryBig, LineChart, MessagesSquare, Shield } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { Progress } from "@/components/ui/progress"


const Sidebar = () => {


    const menulist=[
        {
            id:1,
            name:'My Forms',
            icon:LibraryBig,
            path:'/Dashboard'
        },
        {
            id:2,
            name:'Responses',
            icon:MessagesSquare,
            path:'/Dashboard/responses'
        },
        {
            id:1,
            name:'Analytics',
            icon:LineChart,
            path:'/Dashboard/analytics'
        },
        {
            id:1,
            name:'Upgrade',
            icon:Shield,
            path:'/Dashboard/upgrade'
        }
    ]


    const path=usePathname();

    useEffect(()=>{
console.log(path);

    },[path])
  return (
    <div className='h-screen shadow-white border-r-2'>
        <div className='p-11   '>

        
        {
            
            menulist.map((menu,index)=>(
                <h2 key={index} className={`'flex items-center gap-8 p-3 mb-4 hover:bg-primary hover:text-white rounded-xl cursor-pointer' ${path==menu.path && 'bg-primary text-white' }`}>
                        <menu.icon/>
                        {menu.name}
                </h2>
            ))
        }
        </div>

        <div className='fixed bottom-5 p-11 text-white w-64 '>
            <Button className='w-full rounded-lg'>
                + create form
            </Button>
<div className='my-5'>
<Progress value={33} />
<h2 className='text-gray-100'><strong>2 </strong>out of <strong>3 </strong>files created</h2>

</div>
        </div>
    </div>
  )
}

export default Sidebar