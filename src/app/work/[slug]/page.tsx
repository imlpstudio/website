import { projects } from '@/app/data/projects'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <>
      <Navbar />
      <main className="py-10 sm:py-16">
        <h1 className="text-3xl sm:text-5xl font-extrabold">{project.title}</h1>
        <p className="mt-2 text-neutral-600">{project.tagline}</p>

        <div className="mt-8 overflow-hidden rounded border bg-neutral-50">
          <Image src={project.thumb} alt={project.title} width={1600} height={1200} className="w-full h-auto" />
        </div>

        <article className="prose prose-neutral mt-8">
          <h2>Overview</h2>
          <p>Write 4–6 sentences: problem → constraints → approach → outcome.</p>
          <h2>Process</h2>
          <ul>
            <li>Sketches / CAD / FEA highlights</li>
            <li>Prototyping iterations</li>
            <li>Materials & manufacturing</li>
          </ul>
          <h2>Result</h2>
          <p>What changed? Ergonomics, time saved, durability, user feedback, etc.</p>
        </article>
      </main>
    </>
  )
}
