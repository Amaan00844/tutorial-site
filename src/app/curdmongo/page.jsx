import Mongocurd from '@/components/Mongodbpage/Curdmongo'
import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import React from 'react'

const page = () => {
  return (
    <>
    <MongoDBSidebar/>
    <Mongocurd/>
    </>
  )
}

export default page