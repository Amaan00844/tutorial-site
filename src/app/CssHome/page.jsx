import React from 'react'
import  Sidebar from '@/components/CssFullContent/cssSidebar'
import Navbar from '@/components/Navbar'
import Home from '@/components/CssFullContent/CssHome'
export default function page() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
      <Home/>
    </div>
  )
}
