'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 6)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={[
        'sticky top-0 z-50 edge-fade-heavy',
        'bg-white/65 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-white/55',
        atTop ? 'border-b border-transparent' : 'border-b border-black/10 shadow-[0_6px_18px_-12px_rgba(0,0,0,0.35)]',
      ].join(' ')}
    >
      <nav className="container-px max-w-7xl mx-auto flex h-14 md:h-16 items-center justify-between">
        {/* Left: brand */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="inline-block h-6 w-6 rounded-lg border border-neutral-900" aria-hidden />
          <span className="font-semibold tracking-tight">IMLP Studio</span>
        </Link>

        {/* Right: links (desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-800">
          <li><Link className="no-underline hover:underline" href="/work">Work</Link></li>
          <li><Link className="no-underline hover:underline" href="/about">About</Link></li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-full border border-black/15 px-3 py-1.5 text-sm"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </nav>

      {/* Mobile drawer (only Work + About) */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-black/10 bg-white/90 backdrop-blur-md"
        >
          <div className="container-px max-w-7xl mx-auto py-4">
            <ul className="grid gap-3 text-base">
              <li><Link href="/work" onClick={() => setOpen(false)} className="no-underline">Work</Link></li>
              <li><Link href="/about" onClick={() => setOpen(false)} className="no-underline">About</Link></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
