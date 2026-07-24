import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import UpdateOperator from '@/components/Mongodbpage/UpdateOperator'
import React from 'react'

const page = () => {
  return (
   <>
   <MongoDBSidebar/>
   <UpdateOperator/>
   </>
  )
}

export default page