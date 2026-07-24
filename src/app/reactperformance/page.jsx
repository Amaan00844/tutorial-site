import ReactSidebar from '@/components/Reactpage/React_Sidebar';
import Reactintroduction from '@/components/Reactpage/Reactintroduction'
import Reactperformance from '@/components/Reactpage/Reactperformance';
import React from 'react'

function page() {
    return (
        <div className="flex">
          <ReactSidebar />
          <main className="flex-1 bg-white min-h-screen">
            <Reactperformance />
          </main>
        </div>
      );
    }

export default page