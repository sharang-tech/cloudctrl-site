"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function FeatureSecureByDefault200() {
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => setPulse((p) => !p), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[200px] relative overflow-hidden flex items-center justify-center">
            {/* Center Lock */}
            <motion.div
                className="relative flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 border-2 border-neutral-200 shadow-inner"
                animate={{ scale: pulse ? 1.1 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
            </motion.div>

            {/* Secrets trying to escape but bouncing back */}
            {["top", "bottom", "left", "right"].map((dir, i) => (
                <motion.div
                    key={dir}
                    className="absolute w-3 h-3 rounded-full bg-emerald-400"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        x:
                            dir === "left"
                                ? [-60, -40, -60]
                                : dir === "right"
                                    ? [60, 40, 60]
                                    : 0,
                        y:
                            dir === "top"
                                ? [-60, -40, -60]
                                : dir === "bottom"
                                    ? [60, 40, 60]
                                    : 0,
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
