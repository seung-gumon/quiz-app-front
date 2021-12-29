import React from 'react';
import "./figure.css";
import {motion} from "framer-motion";

const draw = {
    hidden: {pathLength: 0, opacity: 0},
    visible: (i: number) => {
        const delay = 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {delay, type: "spring", duration: 1.5, bounce: 0},
                opacity: {delay, duration: 0.01}
            }
        };
    }
};


export const Correct = () => {
    return (
        <motion.svg
            width="auto"
            height="auto"
            viewBox="0 0 200 200"
            initial="hidden"
            animate="visible"
        >
            <motion.circle
                cx="100"
                cy="100"
                r="80"
                stroke="#00cc88"
                variants={draw}
                custom={1}
            />
        </motion.svg>
    )
}


export const Wrong = () => {
    return (
        <motion.svg
            width="auto"
            height="auto"
            viewBox="0 0 500 600"
            initial="hidden"
            animate="visible"
        >
            <motion.line
                x1="220"
                y1="230"
                x2="360"
                y2="370"
                stroke="#ff0055"
                custom={3}
                variants={draw}
            />
            <motion.line
                x1="220"
                y1="370"
                x2="360"
                y2="230"
                stroke="#ff0055"
                custom={3.5}
                variants={draw}
            />
        </motion.svg>
    )
}




