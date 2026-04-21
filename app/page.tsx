"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ArcadeSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="text-center py-24 px-6 relative">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#14b8a6_0%,_transparent_70%)]"></div>

        <motion.img
          src="/logo.png"
          alt="Retro Revival Arcades"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto w-64 md:w-80 drop-shadow-[0_0_25px_rgba(20,184,166,0.6)]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mt-10"
        >
          Custom Arcade Cabinets Built to Last
        </motion.h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto">
          Premium multi-game arcade systems handcrafted with attention to detail, durability, and authentic retro feel.
        </p>

        <Button className="mt-10 text-lg px-8 py-5 rounded-2xl bg-teal-500 hover:bg-teal-600 shadow-[0_0_20px_rgba(20,184,166,0.5)]">
          Start Your Build
        </Button>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Retro Revival</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Premium Materials & Craftsmanship",
            "Fully Custom Designs",
            "Plug & Play Simplicity",
          ].map((text, i) => (
            <Card key={i} className="bg-zinc-900/60 border border-teal-500/20 rounded-2xl">
              <CardContent className="p-6 text-center text-gray-300">
                {text}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-20 bg-black/40">
        <h2 className="text-3xl font-bold text-center mb-12">Recent Builds</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card
              key={item}
              className="group bg-zinc-900/60 border border-teal-500/20 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="h-56 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-gray-500">
                  Replace with Image {item}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* BUILD FORM */}
      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Build Your Arcade</h2>

        <form className="max-w-2xl mx-auto space-y-5">
          <Input placeholder="Your Name" className="bg-black/60 border-teal-500/30" />
          <Input placeholder="Email" className="bg-black/60 border-teal-500/30" />

          <select className="w-full p-3 rounded-xl bg-black/60 border border-teal-500/30 text-gray-300">
            <option>Cabinet Type</option>
            <option>Full Size Upright</option>
            <option>Bar Top</option>
            <option>Cocktail Table</option>
            <option>Custom Design</option>
          </select>

          <select className="w-full p-3 rounded-xl bg-black/60 border border-teal-500/30 text-gray-300">
            <option>Budget Range</option>
            <option>$1000 - $2000</option>
            <option>$2000 - $4000</option>
            <option>$4000+</option>
          </select>

          <Textarea
            placeholder="Describe your dream arcade..."
            className="bg-black/60 border-teal-500/30"
          />

          <Button className="w-full bg-teal-600 hover:bg-teal-700 shadow-[0_0_20px_rgba(20,184,166,0.4)]">
            Request Quote
          </Button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Retro Revival Arcades
      </footer>
    </div>
  );
}
