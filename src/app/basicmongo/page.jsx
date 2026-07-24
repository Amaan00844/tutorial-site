import Basicmongo from '@/components/Mongodbpage/Basicmongo'
import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import React from 'react'

const page = () => {
  return (
    <>
    <MongoDBSidebar/>
    <Basicmongo/>
    </>
  )
}

export default page