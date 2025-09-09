"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { PackageOpen } from "lucide-react";

const codeSnippets = [
    "git clone https://github.com/kartikey-ai/platform",
    "cd platform",
    "npm install",
    "npm run dev",
    "// contributing is open to everyone!",
];

export function FeatureOpenSource200() {
    const [lines, setLines] = useState<string[]>([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < codeSnippets.length) {
            const timeout = setTimeout(() => {
                setLines((prev) => [...prev, codeSnippets[index]]);
                setIndex(index + 1);
            }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <div className="w-full h-[200px] rounded-lg bg-neutral-800 shadow-sm relative overflow-hidden flex flex-col">
            {/* Terminal header */}
            <div className="h-6 flex items-center gap-1 px-2">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>

            {/* Terminal body */}
            <div className="flex-1 font-mono text-xs text-white px-3 py-2 overflow-hidden flex flex-col justify-end">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        {line}
                    </motion.div>
                ))}
            </div>

            {/* Floating icon */}
            <motion.div
                className="absolute bottom-2 right-2 text-slate-400"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <PackageOpen className="w-5 h-5" />
            </motion.div>
        </div>
    );
}
