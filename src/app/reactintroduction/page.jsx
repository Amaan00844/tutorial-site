import ReactSidebar from '@/components/Reactpage/React_Sidebar';
import Reactintroduction from '@/components/Reactpage/Reactintroduction'
import React from 'react'

function page() {
    return (
        <div className="flex">
          <ReactSidebar />
          <main className="flex-1 bg-white min-h-screen">
            <Reactintroduction />
          </main>
        </div>
      );
    }

export default page