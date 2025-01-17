"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1f1f1f] text-[#ffffff] shadow-lg' : 'bg-transparent text-[#1f1f1f]'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="relative w-24 h-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%209.22.55%E2%80%AFPM-77jdNVwIH1I54fruu6kDjzM36dzhmD.png"
            alt="VAVQO"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#home" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="#projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

