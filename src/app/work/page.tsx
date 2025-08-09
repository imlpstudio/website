import Navbar from '../components/Navbar'
import ProjectGrid from '../components/ProjectGrid'

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="container-px maxw py-10 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Work</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
          Selected products, tools, and prototypes.
        </p>

        {/* Center the grid */}
        <div className="mt-10 grid place-items-center">
          <ProjectGrid />
        </div>
      </main>
    </>
  )
}
