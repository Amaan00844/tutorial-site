import Apimongodb from '@/components/Mongodbpage/Apimongodb'
import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import React from 'react'

const page = () => {
  return (
    <>
    <MongoDBSidebar/>
   <Apimongodb/>
    </>
  )
}

export default page