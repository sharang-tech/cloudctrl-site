"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const tags = ["db", "api", "cdn", "auth"];

export function FeatureTagFilter200() {
    const [filter, setFilter] = useState("db");

    useEffect(() => {
        const interval = setInterval(() => {
            setFilter((prev) => {
                const idx = tags.indexOf(prev);
                return tags[(idx + 1) % tags.length];
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[200px] relative overflow-hidden flex items-center justify-center p-5">
            {/* Background blocks */}
            <div className="grid grid-cols-4 gap-3">
                {tags.map((t) => (
                    <motion.div
                        key={t}
                        animate={{
                            opacity: filter === t ? 1 : 0.25,
                            y: filter === t ? -4 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="p-5 rounded-2xl border border-neutral-300 bg-neutral-300 flex items-center justify-center relative"
                    >
                        <span className="text-xs font-medium">{t}</span>
                        {filter === t && (
                            <motion.div
                                layoutId="highlight"
                                className="absolute inset-0 border-2 border-neutral-300 rounded-2xl pointer-events-none"
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
