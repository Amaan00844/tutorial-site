import IndexCreating from '@/components/Mongodbpage/IndexCreating'
import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import React from 'react'

const page = () => {
  return (
    <>
    <MongoDBSidebar/>
    <IndexCreating/>
    </>
  )
}

export default page