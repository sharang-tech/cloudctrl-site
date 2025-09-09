"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export function FeatureStandaloneInstallers200() {
    const [progress, setProgress] = useState(0);

    // Animate progress bar loop
    useEffect(() => {
        let id: NodeJS.Timeout;
        let value = 0;
        id = setInterval(() => {
            value += 5;
            if (value > 100) value = 0;
            setProgress(value);
        }, 120);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="w-full h-[200px] rounded-lg bg-neutral-800 shadow-sm relative overflow-hidden flex flex-col items-center justify-center gap-4">
            {/* Labels */}
            <div className="flex gap-4 text-xs font-medium white">
                <span className="px-2 py-0.5 border border-neutral-700 rounded">Windows</span>
                <span className="px-2 py-0.5 border border-neutral-700 rounded">Linux</span>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-3 rounded-full bg-neutral-700 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg,#0ea5e9,#3b82f6)" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            {/* Floating icon */}
            <motion.div
                className="absolute bottom-2 right-2 text-neutral-400"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <Play className="w-5 h-5" />
            </motion.div>
        </div>
    );
}
