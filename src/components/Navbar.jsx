import { useState } from 'react';
import { Cloud, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Fitur', href: '#features' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Dokumentasi', href: '#docs' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
              <Cloud size={20} />
            </span>
            <span className="font-semibold text-slate-900 text-lg">Parama Cloud</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#get-started" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors">
              Mulai Sekarang
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="rounded-md bg-slate-900 px-3 py-2 text-white text-center">
                Mulai Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
