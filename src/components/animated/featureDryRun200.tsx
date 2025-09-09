"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const diffs = [
    [
        "- remove bucket old-logs",
        "+ create bucket new-logs",
        "+ set policy public-read",
    ],
    [
        "- scale replicas 2",
        "+ scale replicas 5",
    ],
    [
        "- delete user temp-admin",
        "+ add user auditor",
    ],
];

export function FeatureDryRun200() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((prev) => (prev + 1) % diffs.length),
            2500
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[200px] relative overflow-hidden flex items-center justify-center">
            {/* Terminal header */}
            <div className="absolute top-0 left-0 right-0 h-8 flex items-center gap-1 px-5">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>

            {/* Terminal body */}
            <div className="mt-6 w-full px-3 font-mono text-sm text-left space-y-1">
                {diffs[index].map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className={`${line.startsWith("+")
                            ? "text-green-600"
                            : line.startsWith("-")
                                ? "text-red-500"
                                : "text-white"
                            }`}
                    >
                        {line}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
