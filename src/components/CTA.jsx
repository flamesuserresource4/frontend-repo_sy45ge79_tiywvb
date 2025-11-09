export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-600/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-8 sm:p-12 overflow-hidden">
          <div className="absolute right-0 top-0 h-56 w-56 -translate-y-1/3 translate-x-1/3 rounded-full bg-blue-600/30 blur-3xl pointer-events-none" />
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl font-bold">Siap meluncurkan ke parama.cloud?</h3>
              <p className="mt-2 text-slate-300">Bangun, deploy, dan skala aplikasi Anda dengan mudah di platform kami.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="#" className="inline-flex justify-center rounded-md bg-white px-5 py-3 text-slate-900 font-medium hover:bg-slate-100">Buat Akun</a>
              <a href="#docs" className="inline-flex justify-center rounded-md border border-white/20 px-5 py-3 text-white hover:bg-white/10">Baca Dokumentasi</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
