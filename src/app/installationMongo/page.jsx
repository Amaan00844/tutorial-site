import InstallationMongo from '@/components/Mongodbpage/installationmongo'
import MongoDBSidebar from '@/components/Mongodbpage/MongoDBSidebar'
import React from 'react'

const page = () => {
  return (
    <>
     <MongoDBSidebar/>
     <InstallationMongo/>
    </>
  )
}

export default page