"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Global{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Connecting communities across continents. Our global network spans from North America to Africa,
          fostering collaboration and innovation worldwide.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 34.7465,
              lng: -92.2896,
            }, // Little Rock, AR
            end: {
              lat: 49.2827,
              lng: -123.1207,
            }, // Vancouver, BC
          },
          {
            start: {
              lat: 40.7128,
              lng: -74.0060,
            }, // New York
            end: {
              lat: 48.8566,
              lng: 2.3522,
            }, // Paris
          },
          {
            start: {
              lat: 49.2827,
              lng: -123.1207,
            }, // Vancouver
            end: {
              lat: 12.3714,
              lng: -1.5197,
            }, // Ouagadougou
          },
          {
            start: {
              lat: 12.3714,
              lng: -1.5197,
            }, // Ouagadougou
            end: {
              lat: 5.3600,
              lng: -4.0083,
            }, // Abidjan
          },
          {
            start: {
              lat: 12.3714,
              lng: -1.5197,
            }, // Ouagadougou
            end: {
              lat: 13.5117,
              lng: 2.1251,
            }, // Niamey
          },
          {
            start: {
              lat: 12.3714,
              lng: -1.5197,
            }, // Ouagadougou
            end: {
              lat: 6.5244,
              lng: 3.3792,
            }, // Lagos
          },
          {
            start: {
              lat: 5.6037,
              lng: -0.1870,
            }, // Accra
            end: {
              lat: 55.7558,
              lng: 37.6173,
            }, // Moscow
          },
          {
            start: {
              lat: 49.4478,
              lng: 11.0683,
            }, // Nuremberg
            end: {
              lat: -30.5595,
              lng: 22.9375,
            }, // South Africa (center)
          },
        ]}
      />
    </div>
  );
} 