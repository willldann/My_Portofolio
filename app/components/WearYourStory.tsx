"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about section bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section (Google Maps) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about__img w-full md:w-1/2 h-[400px] bg-muted rounded-xl flex items-center justify-center"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127447.79505507028!2d103.922003327786!3d1.1095073794817551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da42b8b34ad685%3A0xd4b3771e8fda150f!2sBatam%2C%20Riau%20Islands%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="about__data w-full md:w-1/2 text-left"
        >
          <span className="about__subtitle text-muted-foreground text-sm font-medium uppercase">
            About Me
          </span>
          <h2 className="about__title text-4xl font-bold text-foreground mt-2">
            Junior Software Engineer
          </h2>
          <p className="about__description text-lg text-muted-foreground mt-4">
            Hi, I’m Muhammad Wildan As-Salafy, a passionate Software Engineer
            specializing in web and mobile development using Flutter, Next.js,
            and Tailwind CSS. I blend technical expertise with a strong eye for
            design to create efficient, user-friendly applications.
          </p>

          <div className="about__info mt-6 space-y-2 text-sm">
            <p>
              <strong className="text-foreground">Name:</strong> Muhammad Wildan As-Salafy
            </p>
            <p>
              <strong className="text-foreground">Location:</strong> Batam, Indonesia
            </p>
            <p>
              <strong className="text-foreground">Email:</strong> mwildanindsolo@gmail.com
            </p>
            <p>
              <strong className="text-foreground">Availability:</strong> Open for work
            </p>
          </div>

          {/* Experience & Projects */}
          <div className="about__boxes mt-10 flex gap-10">
            <div className="about__box bg-card px-6 py-4 rounded-xl text-center shadow-md">
              <h3 className="about__box-title text-3xl font-bold text-foreground">2+</h3>
              <p className="about__box-subtitle text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="about__box bg-card px-6 py-4 rounded-xl text-center shadow-md">
              <h3 className="about__box-title text-3xl font-bold text-foreground">32+</h3>
              <p className="about__box-subtitle text-sm text-muted-foreground">Projects Done</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
