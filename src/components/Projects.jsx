import { useEffect, useState } from 'react';

const demoProjects = [
  {
    title: 'Interactive Dashboard',
    description: 'A data-rich admin dashboard with charts, filters, and realtime updates.',
    tags: ['React', 'Tailwind', 'Recharts'],
    link: '#',
  },
  {
    title: 'E‑commerce UI Kit',
    description: 'Reusable components and flows for modern storefronts.',
    tags: ['React', 'TypeScript', 'Design System'],
    link: '#',
  },
  {
    title: '3D Landing Page',
    description: 'Playful hero with Spline integration and smooth interactions.',
    tags: ['Spline', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // In a real app this would fetch from an API; for now use local data
    setProjects(demoProjects);
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Selected Projects</h2>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">See all</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article key={idx} className="group rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100" />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 group-hover:text-gray-950">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-black/5">{t}</span>
                  ))}
                </div>
                <a href={p.link} className="mt-4 inline-flex text-sm text-blue-600 hover:text-blue-700">View project →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
