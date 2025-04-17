import React from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import ContainerBlock from '@/components/ContainerBlock'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const Index = () => {
  return (
    <ContainerBlock>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants}>
          <Hero />
        </motion.div>

        <motion.div variants={itemVariants}>
          <AboutMe />
        </motion.div>
      </motion.div>
    </ContainerBlock>
  )
}

export default Index
