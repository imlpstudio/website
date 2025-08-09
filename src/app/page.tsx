import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Center content */}
        <div className="container-px maxw py-20 sm:py-28 lg:py-36 text-center">
        <h1 className="shimmer text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
  IMLP Studio
</h1>


          <p className="text-xs sm:text-sm uppercase tracking-wider text-neutral-500">
    Founded by Stanford engineer <span className="font-semibold">Irving Lamadrid</span>
  </p>
  <p className="mt-5 text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto">
    We design and build studio-grade products and tools — from ergonomic hardware to smart
    devices. Clear, minimal, and engineered to ship.
  </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/work"
              className="rounded-sm bg-black text-white px-5 py-2 font-medium hover:opacity-90 no-underline"
            >
              See projects
            </Link>
            <Link
              href="/now"
              className="rounded-sm border px-5 py-2 font-medium hover:bg-black hover:text-white no-underline"
            >
              Working on Now
            </Link>
          </div>
        </div>

       {/* Floating images (desktop/tablet) */}
<div className="pointer-events-none absolute inset-0 hidden md:block">
  {/* TL */}
  <FloatCard
    className="-left-4 top-12 lg:-left-8 xl:-left-16 2xl:-left-24"
    src="/images/one.png"
  />
  {/* TR */}
  <FloatCard
    className="-right-4 top-16 lg:-right-8 xl:-right-16 2xl:-right-24"
    src="/images/one.png"
    delay={0.15}
  />
  {/* ML */}
  <FloatCard
    className="-left-6 top-[40%] lg:-left-10 xl:-left-20 2xl:-left-28"
    src="/images/one.png"
    delay={0.3}
  />
  {/* MR */}
  <FloatCard
    className="-right-6 top-[50%] lg:-right-10 xl:-right-20 2xl:-right-28"
    src="/images/one.png"
    delay={0.45}
  />
  {/* BL (pulled in slightly so it doesn’t collide with footer area) */}
  <FloatCard
    className="left-[12%] bottom-16 xl:left-[10%] 2xl:left-[12%]"
    src="/images/one.png"
    delay={0.6}
  />
  {/* BR */}
  <FloatCard
    className="right-[12%] bottom-24 xl:right-[10%] 2xl:right-[12%]"
    src="/images/one.png"
    delay={0.75}
  />
</div>

<Footer />

        {/* Mobile fallback grid */}
        <div className="md:hidden container-px maxw grid grid-cols-2 gap-3 pb-10">
          {['one','two','three','four','five','six'].map((n) => (
            <div key={n} className="aspect-[4/3] overflow-hidden rounded-xl border bg-neutral-50">
              <Image
                src={`/images/${n}.png`}
                alt="Studio product"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}


/* --- helper card component with smaller size + gentle float --- */
function FloatCard({
  src,
  className = '',
  delay = 0,
}: {
  src: string
  className?: string
  delay?: number
}) {
  return (
    <div
      className={`absolute ${className} w-[170px] sm:w-[190px] lg:w-[220px] aspect-[5/4] rounded-xl border bg-white shadow-sm overflow-hidden`}
      style={{ animation: `float 7s ease-in-out ${delay}s infinite` }}
    >
      <Image
        src={src}
        alt="Studio product"
        fill
        sizes="220px"
        className="object-cover transition-transform duration-300 hover:scale-[1.04] pointer-events-auto"
      />
    </div>
    
  )
}
