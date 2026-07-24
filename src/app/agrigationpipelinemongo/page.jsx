import Aggregationpipeline from '@/components/Mongodbpage/Aggregationpipeline'
import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import React from 'react'

const page = () => {
  return (
  <>
  <MongoDBSidebar/>
  <Aggregationpipeline/>
  </>
  )
}

export default page