import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
  return (
    <Link 
      href="/" 
      className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-xl transition-all duration-300 hover:scale-[1.02] p-1"
    >
      {/* Logo with gradient background */}
      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl shadow-lg shadow-teal-500/30 group-hover:shadow-xl group-hover:shadow-teal-500/40 transition-all duration-300 group-hover:-translate-y-0.5">
        <Image
          src="/logo.svg"
          alt="Vaccine Talk"
          fill
          className="object-contain p-2.5"
          priority
          sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
        />
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20 group-hover:ring-white/30 transition-all duration-300" />
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className="text-xl lg:text-2xl font-bold tracking-tight group-hover:text-teal-700 transition-colors duration-300" style={{ color: '#40606D' }}>
          Vaccine Talk
        </span>
        <span className="text-xs lg:text-sm font-medium mt-1 group-hover:text-teal-600 transition-colors duration-300" style={{ color: '#40606D' }}>
          Egyptian Edition
        </span>
      </div>
    </Link>
  );
}
