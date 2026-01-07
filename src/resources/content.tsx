import { About, Blog, Gallery, Home, Playlist, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ricardo",
  lastName: "Aya",
  name: `Ricardo Aya`,
  role: "Music Executive | Entreprenour | Tech Innovator | Rights-Conscious Creator",
  avatar: "/images/avatar.jpg",
  email: "ricardo.aya@bido.app",
  location: "America/Mexico_City", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Support {person.firstName}</>,
  description: <>Your contribution helps us keep creating music tailored for businesses around the world.
    Every donation fuels the mission to make music accessible, legal, and brand-focused for restaurants, hotels, cafés, and more.
    <br /><br />
    Thank you for your support!
    </>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ReeMusicTech",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ricardo-aya-47715520/",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/573002155611",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/src/app/favicon.ico",
  label: "Home",
  title: `${person.name} | Music | Marketing | Tech`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>I create music that helps businesses sound unique, model car enthusiast</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Bido</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-bido-a-blanket-music-licensing-platform",
  },
  subline: (
    <>
      Hi, I’m Ricardo-most people call me Ree. Based in México City. I've been programming music 
      for stores for many years, I’m also the founder and CEO of   
      <a href="https://bido.app" target="_blank" rel="noopener noreferrer"> Bido </a>
      , a platform that lets me share and sell my music worldwide. No Performing Rights Organization can claim royalties. My mission is to empower
      more creators to do the same and turn their passion into global opportunities.
      <br /> 
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://meetings.hubspot.com/ricardo-aya1",
  },
  intro: {
  display: true,
  title: "Introduction",
  description: (
    <>
      <h3>Professional Summary</h3>
      Forward-thinking executive who seamlessly integrates music, technology, and
      legal expertise to drive innovation in the commercial audio space. With a
      strategic focus on AI-supported music, intellectual property efficiency, and
      brand-aligned soundscapes, Ricardo consistently stays ahead of industry trends.
      <br /><br />
      Through Bido, he is building a scalable, rights-conscious music platform
      tailored for retail, hospitality, and commercial environments. His approach
      combines business acumen, legal precision, and creative insight—not merely
      delivering music, but redefining how it enhances customer experience and
      brand identity.
      <br /><br />
      Within the music industry, Ricardo is actively exploring the
      potential of leveraging APIs-based communication to bring greater
      transparency and efficiency to public performance royalties. He
      envisions developing an application that enables catalog owners to
      track which music is being played at each commercial establishment
      all the time. To achieve this, he is working to align a diverse
      set of stakeholders — including content owners, individual and
      collective rights managers, major labels, performance rights
      organizations (PROs), background music service providers, and
      businesses themselves. The goal is to build a system offering
      structured insights that could significantly improve the accuracy
      and fairness of royalty distribution.
    </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Bido",
        timeframe: "2017 - Present",
        role: "CEO",
        achievements: [
          <>
            Leading the development of a platform that makes music legal, affordable, and
            brand-tailored for businesses.
          </>,
          <>
            Pioneering a blanket licensing model with a curated catalog designed for restaurants,
            hotels, spas, gyms, and shopping centers.
          </>,
          <>
            Driving global scalability with a focus on copyright compliance and customer
            experience.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Personal Music Catalog",
        timeframe: "2023 - Present",
        role: "Author & Composer",
        achievements: [
          <>
            Building an independent commercial-use catalog created for businesses with physical
            points of sale.
          </>,
          <>
            Composing across genres including Pop, Deep House, Bossa Nova, Jazz, Reggae, and Salsa.
          </>,
          <>
            Catalog is rights-cleared and independent of global Performing Rights Organizations (PROs).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
     {
        name: "Sergio Arboleda University",
        description: <>Software & Web Application Development.</>,
      },
      {
        name: "Politécnico Grancolombiano",
        description: <>Marketing & Growth.</>,
      },
      {
        name: "National Copyright Directorate",
        description: <>Copyright in the Music Industry.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about music and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const playlist: Playlist = {
  path: "/playlist",
  label: "Playlist",
  title: "Music that I have created in order to set the mood for a point of sale.",
  description: `Read what ${person.name} has been up to recently`,
  id: "",
  name: ""
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, playlist, about, blog, work, gallery };
