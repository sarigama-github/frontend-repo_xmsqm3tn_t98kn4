import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 900);
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-gray-900 text-white"><Mail size={14} /> Get in touch</span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">Let’s build something great</h2>
          <p className="mt-2 text-gray-700">Have a project in mind or just want to say hi? Drop a message.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2 bg-white border border-black/5 rounded-xl p-6 shadow-sm">
          <div className="sm:col-span-1">
            <label className="block text-sm text-gray-700">Name</label>
            <input required type="text" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-gray-700">Email</label>
            <input required type="email" className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-gray-700">Message</label>
            <textarea required rows={4} className="mt-1 w-full rounded-md border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-gray-600">I typically respond within 1–2 business days.</p>
            <button type="submit" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800 transition">
              <Send size={16} /> Send message
            </button>
          </div>
          {status && <p className="sm:col-span-2 text-sm text-green-600">{status}</p>}
        </form>
      </div>
    </section>
  );
}
