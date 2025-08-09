import Navbar from '@/app/components/Navbar'

export default function NowPage() {
  return (
    <>
      <Navbar />
      <section className="container-px max-w-4xl mx-auto py-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          What I&apos;m Working on Now
        </h1>
        <p className="text-lg text-neutral-700 mb-12">
          A living page where I share what I&apos;m currently building, exploring, and learning.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">🎯 Current Focus</h2>
            <ul className="list-disc list-inside text-neutral-700">
              <li>Prototyping ergonomic tools for painters</li>
              <li>Refining my IMLP Studio portfolio & visual identity</li>
              <li>Developing smart devices with ESP32 microcontrollers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📚 Learning & Improving</h2>
            <ul className="list-disc list-inside text-neutral-700">
              <li>SolidWorks & CAD mastery</li>
              <li>Advanced JavaScript/TypeScript for embedded systems</li>
              <li>Industrial design sketching</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">💡 Experiments & Side Projects</h2>
            <ul className="list-disc list-inside text-neutral-700">
              <li>Bone conductor-based sleep and focus devices</li>
              <li>Tibetan bowl alarm clock mechanism</li>
              <li>Dog-feeding reminder system with playful UX</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
