"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
  {
    title: "Teach Design",
    description: "Teaching UI/UX design at SMK 1 Sleman, fostering creativity, and building a strong design foundation.",
    image: "/SMK!.jpg",
  },
  {
    title: "Teach Design",
    description: "Teaching poster design at SMP 3 Yogya, inspiring creativity, and building a strong foundation in visual communication.",
    image: "/SMP.jpg",
  },
  {
    title: "Teach Design",
    description: "Teaching clothing design at SMP Darul Ilmi, inspiring creativity, and building a strong foundation in fashion design.",
    image: "/PONDOK.jpg",
  },
  {
    title: "Teach Design",
    description: "Teaching UI/UX design at SMK 1 Seyegan, fostering creativity, and building a strong design foundation.",
    image: "/syegan.jpg",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">My Experience</h2>
        <motion.div 
          ref={carousel} 
          className="cursor-grab overflow-hidden flex gap-4 snap-x snap-mandatory scroll-smooth" 
          style={{ overflowX: 'auto', scrollbarWidth: 'none' }}
          onWheel={(e) => { carousel.current?.scrollBy({ left: e.deltaY, behavior: 'smooth' }) }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[450px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between snap-center border-2 border-transparent hover:border-primary/10 transition-transform duration-300 ease-in-out"
              >
                <div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
