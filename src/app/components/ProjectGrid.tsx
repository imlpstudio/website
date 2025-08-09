import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/app/data/projects'

export default function ProjectGrid() {
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <Link key={p.slug} href={`/work/${p.slug}`} className="group no-underline">
          <div className="aspect-[4/3] w-full overflow-hidden rounded border bg-neutral-50">
            <Image
              src={p.thumb}
              alt={p.title}
              width={1200}
              height={900}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <h3 className="mt-3 text-xl font-semibold">{p.title}</h3>
          <p className="text-neutral-600">{p.tagline}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
            {p.roles.join(' • ')}
          </p>
        </Link>
      ))}
    </section>
  )
}
