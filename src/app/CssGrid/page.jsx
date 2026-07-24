import React from 'react'
import  Sidebar from '@/components/CssFullContent/cssSidebar'
import Navbar from '@/components/Navbar'
import Grid from '@/components/CssFullContent/CssGrid'
export default function page() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
      <Grid/>
    </div>
  )
}
