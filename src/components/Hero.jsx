import { Rocket, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/60 px-3 py-1 text-sm text-blue-700">
              <Zap size={16} />
              Infrastruktur cloud cepat & handal
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Parama Cloud
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Platform hosting modern untuk aplikasi web dan API Anda. Deploy dalam hitungan detik, skala otomatis, dan pantau performa secara real-time.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-medium shadow hover:bg-blue-700">
                Mulai Gratis
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50">
                Lihat Harga
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2"><Shield className="text-green-600" size={18}/> SLA 99.9%</div>
              <div className="inline-flex items-center gap-2"><Rocket className="text-indigo-600" size={18}/> Deploy < 60 detik</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 p-1 shadow-xl">
              <div className="h-full w-full rounded-lg bg-white p-6">
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="h-20 rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200" />
                  ))}
                </div>
                <p className="mt-4 text-center text-slate-500 text-sm">Panel kontrol sederhana untuk mengelola aplikasi Anda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
