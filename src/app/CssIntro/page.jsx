import React from 'react'
import  Sidebar from '@/components/CssFullContent/cssSidebar'
import Navbar from '@/components/Navbar'
import Intro from '@/components/CssFullContent/CssIntro'
export default function page() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
      <Intro/>
    </div>
  )
}
