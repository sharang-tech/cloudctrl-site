"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const alerts = [
    { service: "Slack", text: "Job completed successfully" },
    { service: "Discord", text: "Deployment finished" },
    { service: "Email", text: "New backup available" },
    { service: "Teams", text: "Security scan passed" },
];

export function FeatureRealTimeAlerts200() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((prev) => (prev + 1) % alerts.length),
            2500
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[200px] relative overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 py-2 rounded-md shadow-md shadow-neutral-400/10 border bg-white flex items-center gap-2"
                >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="text-sm font-medium">
                        {alerts[index].service}
                    </div>
                    <div className="text-xs opacity-70">
                        {alerts[index].text}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
