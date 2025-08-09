import Link from 'next/link'

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
      <path fill="currentColor" d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.25h4.52v14.5H.24V8.25zM8.37 8.25h4.33v1.98h.06c.6-1.14 2.07-2.35 4.26-2.35 4.56 0 5.4 3 5.4 6.9v7.97h-4.52v-7.07c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.72 1.84-2.72 3.75v7.19H8.37V8.25z"/>
    </svg>
  )
}
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
      <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
  )
}
function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
      <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c2.2.6 9.4.6 9.4.6s7.2 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-6 mt-12">
      <div className="container-px maxw flex flex-col items-center gap-3">
        <div className="flex gap-5 text-neutral-700">
          <a href="https://linkedin.com/in/irvingmlp" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-black">
            <IconLinkedIn />
          </a>
          <a href="https://instagram.com/imlpbuilds" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-black">
            <IconInstagram />
          </a>
          <a href="https://youtube.com/@YOURCHANNEL" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-black">
            <IconYouTube />
          </a>
        </div>
        <p className="text-xs text-neutral-500">
          Or email <a className="underline" href="mailto:info@imlpstudio.com">info@imlpstudio.com</a>
        </p>
      </div>
    </footer>
  )
}
