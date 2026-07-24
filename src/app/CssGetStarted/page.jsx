import React from 'react'
import  Sidebar from '@/components/CssFullContent/cssSidebar'
import Navbar from '@/components/Navbar'
import CssHomePage from '@/components/CssFullContent/CssHome'
//import Home from '@/components/CssFullContent/'
export default function page() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
      <CssHomePage/>
    </div>
  )
}
