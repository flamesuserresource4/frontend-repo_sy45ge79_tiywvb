export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Harga Transparan</h2>
          <p className="mt-3 text-slate-600">Mulai gratis. Bayar hanya untuk resource yang Anda gunakan.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Starter</h3>
            <p className="mt-1 text-sm text-slate-600">Cocok untuk proyek kecil dan percobaan.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">Gratis</span>
              <span className="text-slate-500">/selamanya</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>1 proyek</li>
              <li>Deploy otomatis dari Git</li>
              <li>SSL gratis</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-md bg-slate-900 px-4 py-2 text-white">Pilih Paket</a>
          </div>

          <div className="relative rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-lg">
            <span className="absolute -top-3 right-4 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">Paling Populer</span>
            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="mt-1 text-sm text-slate-600">Untuk aplikasi produksi dengan trafik menengah.</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">$15</span>
              <span className="text-slate-500">/bulan</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>Proyek tak terbatas</li>
              <li>Autoscaling</li>
              <li>Monitoring & logs</li>
            </ul>
            <a href="#get-started" className="mt-6 inline-flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-white">Pilih Paket</a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Enterprise</h3>
            <p className="mt-1 text-sm text-slate-600">Kebutuhan skala besar dan dukungan khusus.</p>
            <div className="mt-6">
              <span className="text-4xl font-extrabold">Kustom</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>SLA 99.99%</li>
              <li>VPC & private networking</li>
              <li>Support 24/7</li>
            </ul>
            <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-50">Hubungi Kami</a>
          </div>
        </div>
      </div>
    </section>
  );
}
