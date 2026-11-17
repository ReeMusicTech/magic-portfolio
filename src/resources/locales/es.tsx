import { Line, Row, Text } from "@once-ui-system/core";
import {
  basePerson,
  calendarLink,
  featuredHref,
  playlistUrls,
  projectImages,
  socialLinks,
  type SiteContent,
} from "./shared";

const person = {
  ...basePerson,
  role: "Ejecutivo musical | Emprendedor | Innovador tecnológico | Creador consciente de los derechos",
  languages: ["Español", "Inglés"],
};

const es: SiteContent = {
  person,

  social: [
    { name: "GitHub", icon: "github", link: socialLinks.github },
    { name: "LinkedIn", icon: "linkedin", link: socialLinks.linkedin },
    { name: "WhatsApp", icon: "whatsapp", link: socialLinks.whatsapp },
    { name: "Correo", icon: "email", link: socialLinks.email },
  ],

  newsletter: {
    display: true,
    title: <>Apoya a {person.firstName}</>,
    description: (
      <>
        Tu contribución nos ayuda a seguir creando música pensada para negocios de todo el mundo.
        Cada donación impulsa la misión de hacer que la música sea accesible, legal y alineada con
        la marca de restaurantes, hoteles, cafeterías y más.
        <br />
        <br />
        ¡Gracias por tu apoyo!
      </>
    ),
  },

  home: {
    path: "/",
    image: "/src/app/favicon.ico",
    label: "Inicio",
    title: `${person.name} | Música | Marketing | Tecnología`,
    description: `Portafolio con mi trabajo como ${person.role}`,
    headline: (
      <>Creo música que ayuda a los negocios a sonar únicos, apasionado de los autos a escala</>
    ),
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong className="ml-4">Bido</strong>{" "}
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            Proyecto destacado
          </Text>
        </Row>
      ),
      href: featuredHref,
    },
    subline: (
      <>
        Hola, soy Ricardo, aunque la mayoría me dice Ree. Vivo en la Ciudad de México. Llevo muchos
        años programando música para tiendas y también soy fundador y CEO de
        <a href="https://bido.app" target="_blank" rel="noopener noreferrer">
          {" "}
          Bido{" "}
        </a>
        , una plataforma que me permite compartir y vender mi música en todo el mundo. Ninguna
        sociedad de gestión colectiva puede cobrar mis regalías. Además, impulso la escena del
        coleccionismo diecast desarrollando{" "}
        <a href="https://troly.club" target="_blank" rel="noopener noreferrer">
          Troly
        </a>
        , un marketplace para gestionar y negociar autos a escala. Mi misión es ayudar a más
        creadores a hacer lo mismo y convertir su pasión en oportunidades globales.
        <br />
      </>
    ),
  },

  about: {
    path: "/about",
    label: "Acerca de",
    title: `Acerca de – ${person.name}`,
    description: `Conoce a ${person.name}, ${person.role} desde ${person.location}`,
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { display: true, link: calendarLink },
    intro: {
      display: true,
      title: "Introducción",
      description: (
        <>
          <h3>Perfil profesional</h3>
          Ejecutivo visionario que integra música, tecnología y conocimiento jurídico para impulsar
          la innovación en el audio comercial. Con un enfoque estratégico en la música apoyada por
          IA, la eficiencia en propiedad intelectual y los paisajes sonoros alineados con la marca,
          Ricardo se mantiene siempre un paso adelante de las tendencias de la industria.
          <br />
          <br />A través de Bido, está construyendo una plataforma musical escalable y respetuosa de
          los derechos, pensada para el retail, la hotelería y los espacios comerciales. Su enfoque
          combina visión de negocio, precisión legal y sensibilidad creativa: no se trata solo de
          entregar música, sino de redefinir cómo esta mejora la experiencia del cliente y la
          identidad de marca.
          <br />
          <br />
          Dentro de la industria musical, Ricardo explora activamente el potencial de la
          comunicación basada en APIs para aportar mayor transparencia y eficiencia a las regalías
          por comunicación pública. Su visión es desarrollar una aplicación que permita a los
          titulares de catálogos saber en todo momento qué música suena en cada establecimiento
          comercial. Para lograrlo, trabaja en alinear a un grupo diverso de actores —titulares de
          contenido, gestores de derechos individuales y colectivos, grandes disqueras, sociedades
          de gestión colectiva, proveedores de música ambiental y los propios negocios—. El objetivo
          es construir un sistema con información estructurada que mejore de forma significativa la
          precisión y la equidad en la distribución de regalías.
        </>
      ),
    },
    work: {
      display: true,
      title: "Experiencia laboral",
      experiences: [
        {
          company: "Bido",
          timeframe: "2017 - Actualidad",
          role: "CEO",
          achievements: [
            <>
              Lidero el desarrollo de una plataforma que hace que la música sea legal, asequible y a
              la medida de la marca de cada negocio.
            </>,
            <>
              Impulso un modelo pionero de licencia general con un catálogo curado para
              restaurantes, hoteles, spas, gimnasios y centros comerciales.
            </>,
            <>
              Dirijo la escalabilidad global con foco en el cumplimiento de derechos de autor y en
              la experiencia del cliente.
            </>,
          ],
          images: [{ src: projectImages.bido, alt: "Proyecto Bido", width: 16, height: 9 }],
        },
        {
          company: "Troly",
          timeframe: "2026 - Actualidad",
          role: "Fundador y desarrollador full-stack",
          achievements: [
            <>
              Creé un marketplace y club donde los coleccionistas de diecast catalogan sus autos a
              escala 1:64, conocen cuánto vale su colección en su propia moneda y publican piezas en
              venta o cambio.
            </>,
            <>
              Hago crecer la comunidad con un modelo por invitación con lista de espera, campañas de
              referidos y secuencias de correo automatizadas.
            </>,
            <>
              Desarrollé todo el stack: PWA en React, backend en Node.js + MongoDB, membresías y
              pagos a vendedores con Stripe, en español, inglés y portugués.
            </>,
          ],
          images: [{ src: projectImages.troly, alt: "Inicio de Troly", width: 16, height: 9 }],
        },
        {
          company: "Catálogo musical propio",
          timeframe: "2023 - Actualidad",
          role: "Autor y compositor",
          achievements: [
            <>
              Construyo un catálogo independiente de uso comercial, creado para negocios con puntos
              de venta físicos.
            </>,
            <>Compongo en géneros como Pop, Deep House, Bossa Nova, Jazz, Reggae y Salsa.</>,
            <>
              El catálogo tiene sus derechos liberados y es independiente de las sociedades de
              gestión colectiva a nivel mundial.
            </>,
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "Formación",
      institutions: [
        {
          name: "Universidad Sergio Arboleda",
          description: <>Desarrollo de software y aplicaciones web.</>,
        },
        { name: "Politécnico Grancolombiano", description: <>Marketing y crecimiento.</> },
        {
          name: "Dirección Nacional de Derecho de Autor",
          description: <>Derecho de autor en la industria musical.</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "Habilidades técnicas",
      skills: [
        {
          title: "Figma",
          description: <>Prototipado en Figma con Once UI a una velocidad poco común.</>,
          tags: [{ name: "Figma", icon: "figma" }],
          images: [
            { src: projectImages.figma1, alt: "Imagen del proyecto", width: 16, height: 9 },
            { src: projectImages.figma2, alt: "Imagen del proyecto", width: 16, height: 9 },
          ],
        },
        {
          title: "Next.js",
          description: <>Construyo apps de nueva generación con Next.js + Once UI + Supabase.</>,
          tags: [
            { name: "JavaScript", icon: "javascript" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Supabase", icon: "supabase" },
          ],
          images: [{ src: projectImages.next, alt: "Imagen del proyecto", width: 16, height: 9 }],
        },
      ],
    },
  },

  blog: {
    path: "/blog",
    label: "Blog",
    title: "Escribo sobre música y tecnología...",
    description: `Lee en qué ha estado trabajando ${person.name} recientemente`,
  },

  playlist: {
    path: "/playlist",
    id: "",
    name: "",
    label: "Playlist",
    title: "Música que he creado para ambientar puntos de venta.",
    description: `Playlists creadas por ${person.name} para negocios y puntos de venta`,
  },

  playlistPage: {
    intro:
      "Cada playlist está cuidadosamente diseñada para mejorar la experiencia del cliente en espacios comerciales. Todas las canciones son originales y 100 % libres de regalías, lo que garantiza un uso fluido y legal en tu punto de venta. Explora los distintos estilos y ambientes disponibles en tu plataforma favorita.",
    supportTitle: `Apoya a ${person.firstName}`,
    supportDescription:
      "Tu contribución nos ayuda a seguir creando música pensada para negocios de todo el mundo. Cada donación impulsa la misión de hacer que la música sea accesible, legal y alineada con la marca de restaurantes, hoteles, cafeterías y más.",
    supportThanks: "¡Gracias por tu apoyo!",
    items: [
      {
        title: "Música para el lobby del hotel",
        description:
          "Crea el ambiente perfecto en el lobby de tu hotel: haz clic y descubre una banda sonora curada para dar la bienvenida, relajar e impresionar.",
        platform: "spotify",
        url: playlistUrls.lobby,
        featured: true,
      },
      {
        title: "Tarde en el restaurante",
        description:
          "Pon el ambiente ideal para la tarde: una banda sonora cálida y tranquila pensada para elevar la experiencia de mediodía en tu restaurante.",
        platform: "youtube",
        url: playlistUrls.restaurant,
        featured: true,
      },
      {
        title: "Un poco de jazz",
        description:
          "Prepara el ambiente perfecto: haz clic y disfruta de jazz suave seleccionado para acompañar el café y la conversación.",
        platform: "apple",
        url: playlistUrls.jazz,
      },
      {
        title: "Catálogo",
        description:
          "Descubre mi catálogo completo de música libre de regalías, creado para lograr la atmósfera perfecta en cualquier negocio.",
        platform: "youtube",
        url: playlistUrls.catalog,
      },
      {
        title: "La mejor música para una tienda de moda",
        description:
          "Haz clic y marca tendencia: la playlist definitiva para espacios de retail a la vanguardia de la moda.",
        platform: "spotify",
        url: playlistUrls.fashion,
      },
      {
        title: "La mejor nueva música navideña",
        description:
          "Celebra la temporada con una banda sonora fresca: música navideña nueva y original, creada para llevar calidez, alegría y un aire festivo moderno a tu espacio.",
        platform: "spotify",
        url: playlistUrls.christmas,
      },
    ],
  },

  work: {
    path: "/work",
    label: "Proyectos",
    title: `Proyectos – ${person.name}`,
    description: `Proyectos de diseño y desarrollo de ${person.name}`,
  },
};

export default es;
