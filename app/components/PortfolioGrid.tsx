"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Ticket App Flutter",
    description: "A sleek and professional mobile ticketing app for a seamless booking experience.",
    imageUrl: "/Poster Ticketing Event.png",
    category: "Mobile App",
    githubUrl: "https://github.com/willldann/TicketAppFlutter1",
  },
  {
    id: 2,
    title: "Online Shop Flutter",
    description: "An elegant e-commerce application with a smooth and intuitive shopping experience.",
    imageUrl: "/Poster Online Shop.png",
    category: "Mobile App",
    githubUrl: "https://github.com/willldann/OnlineShopFlutter1",
  },
  {
    id: 3,
    title: "E-Commerce App Flutter",
    description: "A user-friendly e-commerce app designed for effortless online shopping.",
    imageUrl: "/poster ecomerce.png",
    category: "Mobile App",
    githubUrl: "https://github.com/willldann/AppEcommerceShop",
  },
  {
    id: 4,
    title: "Meal Db Shop Web",
    description: "A modern and efficient web application for managing and exploring meal databases effortlessly.",
    imageUrl: "/web.png",
    category: "Web Design",
    githubUrl: "https://github.com/willldann/SKL-MEALDB",
  },
  {
    id: 5,
    title: "Company Profile Web",
    description: "A stunning and professional website designed to enhance company branding and online visibility.",
    imageUrl: "/company.png",
    category: "Web Design",
    githubUrl: "https://github.com/willldann/Company-Profile-Tailwind-css",
  },
  {
    id: 6,
    title: "Todo List Web",
    description: "A clean and intuitive task management web application to boost productivity and organization.",
    imageUrl: "/todo.png",
    category: "Web Design",
    githubUrl: "https://github.com/willldann/Todolist-app",
  },
]

const categories = ["All", "Web Design", "Mobile App"]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")
  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A showcase of my innovative designs and solutions.</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${filter === category ? "bg-primary text-white shadow-lg scale-105" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-background rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image 
                      src={project.imageUrl || "/placeholder.svg"} 
                      alt={project.title} 
                      layout="fill" 
                      objectFit="cover" 
                      className="transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-medium text-primary mb-1"
                  >
                    {project.category}
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xl font-semibold text-foreground mb-2"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-primary hover:underline inline-flex items-center font-medium"
                  >
                    View on GitHub
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
