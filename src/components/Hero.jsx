import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-black/5 text-gray-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
            Available for freelance work
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">Front‑End Developer crafting playful, modern experiences</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">I build responsive, accessible web apps with React, TypeScript, and Tailwind — blending clean code with delightful interactions.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-gray-900 text-white font-medium shadow hover:bg-gray-800 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-white/80 backdrop-blur border border-black/10 text-gray-900 font-medium hover:bg-white transition">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
