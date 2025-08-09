import Navbar from '@/app/components/Navbar' // use your path
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* HERO / ABOUT */}
      <section className="relative overflow-hidden">
        {/* Center content */}
        <div className="container-px maxw py-20 sm:py-28 lg:py-36 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            About
          </h1>

          <p className="mt-3 text-xs sm:text-sm uppercase tracking-wider text-neutral-500">
            <span className="font-semibold">Irving Mauricio Lamadrid Perez</span> — Stanford Product Design engineer
          </p>

          <p className="mt-5 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto">
            I design and build studio-grade products: ergonomic tools, mechanisms, and smart devices.
            My process blends industrial design, prototyping, and embedded systems—taking ideas from sketch to
            manufacturable reality.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link href="/resume.pdf" className="rounded-sm bg-black text-white px-5 py-2 font-medium no-underline hover:opacity-90">
              Download resume
            </Link>
            <a href="mailto:irving@imlpstudio.com" className="rounded-sm border px-5 py-2 font-medium no-underline hover:bg-black hover:text-white">
              Email me
            </a>
          </div>
        </div>

        {/* Floating images (desktop/tablet) — lifestyle / working shots */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <FloatCard className="-left-4 top-12 lg:-left-8 xl:-left-16 2xl:-left-24" src="/images/one.png" />
          <FloatCard className="-right-4 top-16 lg:-right-8 xl:-right-16 2xl:-right-24" src="/images/one.png" delay={0.15} />
          <FloatCard className="-left-6 top-[40%] lg:-left-10 xl:-left-20 2xl:-left-28" src="/images/one.png" delay={0.3} />
          <FloatCard className="-right-6 top-[50%] lg:-right-10 xl:-right-20 2xl:-right-28" src="/images/one.png" delay={0.45} />
          <FloatCard className="left-[12%] bottom-16 xl:left-[10%] 2xl:left-[12%]" src="/images/one.png" delay={0.6} />
          <FloatCard className="right-[12%] bottom-24 xl:right-[10%] 2xl:right-[12%]" src="/images/one.png" delay={0.75} />
        </div>

        {/* Mobile fallback grid */}
        <div className="md:hidden container-px maxw grid grid-cols-2 gap-3 pb-10">
          {['me1','me2','me3','me4','me5','me6'].map((n) => (
            <div key={n} className="aspect-[4/3] overflow-hidden rounded-xl border bg-neutral-50">
              <Image
                src={`/images/about/${n}.jpg`}
                alt="Irving working"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

<Footer />

    </>
  )
}

/* Reuse the same float card style as home */
function FloatCard({
  src,
  className = '',
  delay = 0,
}: { src: string; className?: string; delay?: number }) {
  return (
    <div
      className={`absolute ${className} w-[170px] sm:w-[190px] lg:w-[220px] aspect-[5/4] rounded-xl border bg-white shadow-sm overflow-hidden`}
      style={{ animation: `float 7s ease-in-out ${delay}s infinite` }}
    >
      <Image
        src={src}
        alt="Irving Lamadrid"
        fill
        sizes="220px"
        className="object-cover transition-transform duration-300 hover:scale-[1.04] pointer-events-auto"
      />
    </div>
  )
}
