


import React from 'react'
import Sidebar from './_components/Sidebar'

const dashboardlayout = ({children}) => {
  return (
<>

    <div className='md:w-64 fixed'>
<Sidebar/>    </div>
    <div className='md:ml-64'>{children}
    
    
    </div>
    </>
  )
}

export default dashboardlayout