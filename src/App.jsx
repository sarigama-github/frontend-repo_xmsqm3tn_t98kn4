import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Hi, I’m Alex — Front‑End Developer</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">I specialize in building fast, accessible interfaces with React and Tailwind. I love turning complex ideas into simple, delightful products. When I’m not coding, I explore generative art and motion design.</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <li className="rounded-lg border border-black/5 bg-white px-3 py-2">React</li>
                <li className="rounded-lg border border-black/5 bg-white px-3 py-2">TypeScript</li>
                <li className="rounded-lg border border-black/5 bg-white px-3 py-2">Tailwind</li>
                <li className="rounded-lg border border-black/5 bg-white px-3 py-2">Framer Motion</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-black/5 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 aspect-square" />
          </div>
        </section>
        <Projects />
        <Contact />
        <footer className="py-10 border-t border-black/5 text-center text-sm text-gray-600">© {new Date().getFullYear()} Alex — All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
