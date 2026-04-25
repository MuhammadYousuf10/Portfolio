import { motion } from 'framer-motion'

export default function MotionWrapper({ children, variants }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
