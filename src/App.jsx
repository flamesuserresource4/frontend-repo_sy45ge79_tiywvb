import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer id="docs" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Parama Cloud — parama.cloud</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-600 hover:text-slate-900">Ketentuan</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Privasi</a>
              <a href="#" className="text-slate-600 hover:text-slate-900">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
