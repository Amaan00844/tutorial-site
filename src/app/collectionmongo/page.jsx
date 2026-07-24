import Collection from '@/components/Mongodbpage/Collection'
import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import React from 'react'

const page = () => {
  return (
  <>
  <MongoDBSidebar/>
  <Collection/>
  </>
  )
}

export default page