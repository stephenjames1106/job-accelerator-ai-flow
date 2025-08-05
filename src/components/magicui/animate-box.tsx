"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AnimateBoxProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    style?: React.CSSProperties;
}

const AnimateBox = ({ children, className, delay=0, duration=1, style, ...props }: AnimateBoxProps) => {
    const ref = useRef(null);
    const inView = useInView(ref);
    return (
        <motion.div
            ref={ref}
            initial={{ y: 100, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration, delay, ease: "easeIn" }}
            className={className}
            style={style}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default AnimateBox;
