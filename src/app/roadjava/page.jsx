import React from 'react'
import Sidebar from '@/components/JavaPage/Sidebarjava'
export default function page() {
  return (
    <div>
         <>
   <Sidebar/>
   <div className="p-6 ml-80">
       <img src="/roadmaps/java.jpg" alt="Java Roadmap" className="w-full max-w-8xl rounded-lg mb-6 mx-auto" />
       </div>
      </>
    </div>
  )
}
