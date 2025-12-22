'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

type AnimatedSectionProps = {
    children: ReactNode
    className?: string
    duration?: number
}

const variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
}

export default function AnimatedSection({
    children,
    className = '',
    duration = 1,
}: AnimatedSectionProps) {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
                duration,
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
