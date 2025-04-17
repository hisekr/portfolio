import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const ContainerBlock = ({children}) => {
  return (
    <>
      <main className='w-full'>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  )
}

export default ContainerBlock