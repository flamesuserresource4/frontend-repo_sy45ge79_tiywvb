import { Globe, ShieldCheck, Cpu, ServerCog } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Global Edge Network',
    desc: 'Konten diantarkan cepat dari edge terdekat ke pengguna Anda di seluruh dunia.',
  },
  {
    icon: Cpu,
    title: 'Autoscaling Cerdas',
    desc: 'Skala otomatis berdasarkan trafik tanpa downtime dan tanpa repot konfigurasi.',
  },
  {
    icon: ShieldCheck,
    title: 'Keamanan Kelas Enterprise',
    desc: 'TLS modern, isolasi kontainer, dan backup otomatis untuk ketenangan Anda.',
  },
  {
    icon: ServerCog,
    title: 'Obsrvabilitas Real-time',
    desc: 'Log, metrik, dan tracing terintegrasi agar Anda selalu memegang kendali.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Semua yang Anda Butuhkan</h2>
          <p className="mt-3 text-slate-600">Dibangun untuk developer modern, dengan performa dan keamanan sebagai prioritas.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm hover:shadow transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-700">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
