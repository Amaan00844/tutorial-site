import IndexTypemongo from '@/components/Mongodbpage/IndexTypemongo'
import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import React from 'react'

const page = () => {
  return (
    <>
    <MongoDBSidebar/>
    <IndexTypemongo/>
    </>
  )
}

export default page