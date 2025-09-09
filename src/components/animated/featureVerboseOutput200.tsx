"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const logLines = [
    "[INFO] Connecting to AWS provider...",
    "[DEBUG] Resolving credentials...",
    "[INFO] Creating resource bucket-logs...",
    "[WARN] API rate limit nearing threshold.",
    "[INFO] Resource created successfully.",
    "[DEBUG] Comparing current state to plan...",
    "[ERROR] Failed to fetch metric endpoint, retrying...",
    "[INFO] Job completed in 4.2s.",
];

export function FeatureVerboseOutput200() {
    const [visible, setVisible] = useState<{ id: number; line: string }[]>([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((prev) => {
                const newLog = { id: counter, line: logLines[counter % logLines.length] };
                setCounter((c) => c + 1);
                return [...prev, newLog].slice(-6); // keep last 6
            });
        }, 1000); // update every 1s
        return () => clearInterval(interval);
    }, [counter]);

    return (
        <div className="w-full h-[200px] relative overflow-hidden flex flex-col">
            {/* Terminal header */}
            <div className="h-8 flex items-center gap-1 px-5">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>

            {/* Terminal body */}
            <div className="flex-1 font-mono text-xs text-white px-5 py-2 overflow-hidden flex flex-col justify-end">
                {visible.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`${item.line.includes("[ERROR]")
                            ? "text-red-500"
                            : item.line.includes("[WARN]")
                                ? "text-yellow-600"
                                : item.line.includes("[DEBUG]")
                                    ? "text-indigo-500"
                                    : "text-green-600"
                            }`}
                    >
                        {item.line}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
