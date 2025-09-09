"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const commands = [
    "deploy vercel",
    "deploy aws",
    "deploy runpod",
    "deploy supabase",
];

export function FeatureOneCli200() {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");

    // typing animation
    useEffect(() => {
        let i = 0;
        const cmd = commands[index];
        const typer = setInterval(() => {
            setText(cmd.slice(0, i + 1));
            i++;
            if (i === cmd.length) {
                clearInterval(typer);
                setTimeout(() => setIndex((index + 1) % commands.length), 1000);
            }
        }, 80);
        return () => clearInterval(typer);
    }, [index]);

    return (
        <div className="w-full h-[200px] flex items-center justify-center relative overflow-hidden">
            {/* Terminal header */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center gap-1 px-5">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>

            {/* Terminal body */}
            <div className="w-full px-5 font-mono text-sm text-left">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className="text-green-600">$ </span>
                    {text}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                    >
                        |
                    </motion.span>
                </motion.div>
            </div>
        </div>
    );
}
