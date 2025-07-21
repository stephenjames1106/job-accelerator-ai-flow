"use client"

import { Card } from "@/components/ui/card"
import { MessageSquare, CheckCircle } from "lucide-react"
import { motion, useInView, Variants } from "framer-motion"
import { useRef, useState, useEffect } from "react"

const AnimatedCounter = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      if (value === "Auto") {
        setDisplayValue("Auto")
      } else {
        // Animate number counting
        let start = 0
        const end = Number.parseInt(value)
        const duration = 1000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setDisplayValue(value)
            clearInterval(timer)
          } else {
            setDisplayValue(Math.floor(start).toString())
          }
        }, 16)

        return () => clearInterval(timer)
      }
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-2xl font-bold text-emerald-600">
      {displayValue}
      {suffix}
    </div>
  )
}

export function ServiceCard() {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const statusVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="max-w-md mx-auto"
    >
      <Card className="bg-card backdrop-blur-sm rounded-2xl p-8 shadow-xl border-0 relative overflow-hidden">
        {/* Background gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-card to-card/50 rounded-2xl"
          animate={{
            opacity: isHovered ? 1 : 0.5,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Icon Section */}
          <motion.div
            variants={itemVariants}
            className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 relative"
          >
            <motion.div
              animate={{
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <MessageSquare className="w-6 h-6 text-emerald-600" />
            </motion.div>

            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-emerald-500/20 rounded-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h3 variants={itemVariants} className="text-xl font-bold mb-4 text-slate-800">
            AI Receptionist & Text-Back
          </motion.h3>

          {/* Status Indicators */}
          <motion.div variants={itemVariants} className="space-y-3 mb-6">
            {["Missed call detected", "AI responds in 3s", "Lead captured"].map((status, index) => (
              <motion.div
                key={status}
                variants={statusVariants}
                custom={index}
                className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 relative overflow-hidden"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: isInView ? "100%" : "-100%" }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
                <div className="text-sm text-emerald-700 font-medium relative z-10">✅ {status}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              className="text-center p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100/50"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatedCounter value="3" suffix="s" />
              <div className="text-xs text-slate-600 font-medium">RESPONSE TIME</div>
            </motion.div>
            <motion.div
              className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/50"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <AnimatedCounter value="Auto" />
              <div className="text-xs text-slate-600 font-medium">BOOKING</div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-slate-600 text-sm mb-6 leading-relaxed">
            AI receptionist handles all inbound calls, books appointments on autopilot, and knows everything about your
            business to answer any question. Works 24/7, never misses opportunities because your hours are closed.
          </motion.p>

          {/* Features List */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h4 className="font-medium text-slate-800">Key Features:</h4>
            <div className="space-y-1">
              {[
                "Handles all inbound calls",
                "Books appointments automatically",
                "Knows everything about your business",
                "Provides customer support 24/7",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  variants={featureVariants}
                  custom={index}
                  className="flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? [1, 1.2, 1] : 1,
                      rotate: isHovered ? [0, 180, 360] : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </motion.div>
                  <span className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: isHovered
              ? "0 20px 40px rgba(16, 185, 129, 0.15), 0 0 0 1px rgba(16, 185, 129, 0.1)"
              : "0 10px 25px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  )
}
