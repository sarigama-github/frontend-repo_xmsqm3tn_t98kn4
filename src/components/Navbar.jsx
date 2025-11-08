import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-black/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-gray-900 tracking-tight text-lg">dev<span className="text-blue-600">.portfolio</span></a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#projects" className="text-gray-700 hover:text-gray-900">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          <div className="h-5 w-px bg-gray-300" />
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-700 hover:text-gray-900"><Github size={18} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-700 hover:text-gray-900"><Linkedin size={18} /></a>
          <a href="#contact" aria-label="Email" className="text-gray-700 hover:text-gray-900"><Mail size={18} /></a>
        </div>
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <a href="#about" className="py-2 text-gray-700">About</a>
            <a href="#projects" className="py-2 text-gray-700">Projects</a>
            <a href="#contact" className="py-2 text-gray-700">Contact</a>
            <div className="flex gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-700"><Github size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-700"><Linkedin size={18} /></a>
              <a href="#contact" className="text-gray-700"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
