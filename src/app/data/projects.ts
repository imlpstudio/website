
export type Project = {
    slug: string
    title: string
    tagline: string
    thumb: string // /images/whatever.jpg
    roles: string[]
  }
  
  export const projects: Project[] = [
    {
      slug: 'tape-master',
      title: 'TapeMaster',
      tagline: 'Ergonomic magnetic tape holder for pros.',
      thumb: '/images/tape-master.jpg',
      roles: ['Industrial Design', 'Prototyping'],
    },
    {
      slug: 'tibetan-bowl-alarm',
      title: 'Tibetan Bowl Alarm',
      tagline: 'Mechanized striker + spinner for rich morning tones.',
      thumb: '/images/bowl.jpg',
      roles: ['Mechanism Design', 'Electronics'],
    },
  ]
  