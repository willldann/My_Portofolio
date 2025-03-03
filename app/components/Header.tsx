"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">My Portfolio</span>
            {/* <img
              className="h-8 w-auto"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png"
              alt="Portofolio logo"
            /> */}
          </Link>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 overflow-hidden w-1/2">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
          >
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center mx-4">
                <span
                  className="text-lg sm:text-xl md:text-2xl font-bold text-transparent px-4"
                  style={{ WebkitTextStroke: "1px rgb(156 163 175)" }}
                >
                  WELCOME TO MY PORTFOLIO
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
