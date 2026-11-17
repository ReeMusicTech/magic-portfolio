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
  role: "Executivo musical | Empreendedor | Inovador em tecnologia | Criador consciente dos direitos",
  languages: ["Espanhol", "Inglês"],
};

const pt: SiteContent = {
  person,

  social: [
    { name: "GitHub", icon: "github", link: socialLinks.github },
    { name: "LinkedIn", icon: "linkedin", link: socialLinks.linkedin },
    { name: "WhatsApp", icon: "whatsapp", link: socialLinks.whatsapp },
    { name: "E-mail", icon: "email", link: socialLinks.email },
  ],

  newsletter: {
    display: true,
    title: <>Apoie {person.firstName}</>,
    description: (
      <>
        Sua contribuição nos ajuda a continuar criando música feita para negócios do mundo todo.
        Cada doação impulsiona a missão de tornar a música acessível, legal e alinhada à marca de
        restaurantes, hotéis, cafés e muito mais.
        <br />
        <br />
        Obrigado pelo seu apoio!
      </>
    ),
  },

  home: {
    path: "/",
    image: "/src/app/favicon.ico",
    label: "Início",
    title: `${person.name} | Música | Marketing | Tecnologia`,
    description: `Portfólio com meu trabalho como ${person.role}`,
    headline: (
      <>Crio música que ajuda os negócios a soarem únicos, apaixonado por carros em miniatura</>
    ),
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong className="ml-4">Bido</strong>{" "}
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            Projeto em destaque
          </Text>
        </Row>
      ),
      href: featuredHref,
    },
    subline: (
      <>
        Olá, sou o Ricardo, mas a maioria me chama de Ree. Moro na Cidade do México. Há muitos anos
        programo música para lojas e também sou fundador e CEO da
        <a href="https://bido.app" target="_blank" rel="noopener noreferrer">
          {" "}
          Bido{" "}
        </a>
        , uma plataforma que me permite compartilhar e vender minha música no mundo todo. Nenhuma
        sociedade de gestão coletiva pode reivindicar royalties. Além disso, impulsiono a cena do
        colecionismo diecast desenvolvendo a{" "}
        <a href="https://troly.club" target="_blank" rel="noopener noreferrer">
          Troly
        </a>
        , um marketplace para gerenciar e negociar carros em miniatura. Minha missão é ajudar mais
        criadores a fazer o mesmo e transformar sua paixão em oportunidades globais.
        <br />
      </>
    ),
  },

  about: {
    path: "/about",
    label: "Sobre",
    title: `Sobre – ${person.name}`,
    description: `Conheça ${person.name}, ${person.role} em ${person.location}`,
    tableOfContent: { display: true, subItems: false },
    avatar: { display: true },
    calendar: { display: true, link: calendarLink },
    intro: {
      display: true,
      title: "Introdução",
      description: (
        <>
          <h3>Resumo profissional</h3>
          Executivo visionário que integra música, tecnologia e conhecimento jurídico para
          impulsionar a inovação no áudio comercial. Com foco estratégico em música apoiada por IA,
          eficiência em propriedade intelectual e paisagens sonoras alinhadas à marca, Ricardo está
          sempre à frente das tendências do setor.
          <br />
          <br />
          Por meio da Bido, ele está construindo uma plataforma musical escalável e respeitosa dos
          direitos, pensada para o varejo, a hotelaria e os ambientes comerciais. Sua abordagem
          combina visão de negócios, precisão jurídica e sensibilidade criativa: não se trata apenas
          de entregar música, mas de redefinir como ela melhora a experiência do cliente e a
          identidade da marca.
          <br />
          <br />
          Na indústria musical, Ricardo explora ativamente o potencial da comunicação baseada em
          APIs para trazer mais transparência e eficiência aos royalties de execução pública. Sua
          visão é desenvolver um aplicativo que permita aos titulares de catálogos saber, a todo
          momento, qual música está tocando em cada estabelecimento comercial. Para isso, trabalha
          para alinhar um grupo diverso de atores — titulares de conteúdo, gestores de direitos
          individuais e coletivos, grandes gravadoras, sociedades de gestão coletiva, provedores de
          música ambiente e os próprios negócios. O objetivo é construir um sistema com informações
          estruturadas que melhore de forma significativa a precisão e a justiça na distribuição de
          royalties.
        </>
      ),
    },
    work: {
      display: true,
      title: "Experiência profissional",
      experiences: [
        {
          company: "Bido",
          timeframe: "2017 - Atual",
          role: "CEO",
          achievements: [
            <>
              Lidero o desenvolvimento de uma plataforma que torna a música legal, acessível e sob
              medida para a marca de cada negócio.
            </>,
            <>
              Impulsiono um modelo pioneiro de licença geral com um catálogo curado para
              restaurantes, hotéis, spas, academias e shopping centers.
            </>,
            <>
              Conduzo a escalabilidade global com foco em conformidade de direitos autorais e
              experiência do cliente.
            </>,
          ],
          images: [{ src: projectImages.bido, alt: "Projeto Bido", width: 16, height: 9 }],
        },
        {
          company: "Troly",
          timeframe: "2026 - Atual",
          role: "Fundador e desenvolvedor full-stack",
          achievements: [
            <>
              Criei um marketplace e clube onde colecionadores de diecast catalogam seus carros em
              escala 1:64, descobrem quanto vale sua coleção na própria moeda e anunciam peças para
              venda ou troca.
            </>,
            <>
              Faço a comunidade crescer com um modelo por convite, com lista de espera, campanhas de
              indicação e sequências de e-mail automatizadas.
            </>,
            <>
              Desenvolvi toda a stack: PWA em React, backend em Node.js + MongoDB, assinaturas e
              pagamentos a vendedores com Stripe, em espanhol, inglês e português.
            </>,
          ],
          images: [{ src: projectImages.troly, alt: "Início da Troly", width: 16, height: 9 }],
        },
        {
          company: "Catálogo musical próprio",
          timeframe: "2023 - Atual",
          role: "Autor e compositor",
          achievements: [
            <>
              Construo um catálogo independente de uso comercial, criado para negócios com pontos de
              venda físicos.
            </>,
            <>Componho em gêneros como Pop, Deep House, Bossa Nova, Jazz, Reggae e Salsa.</>,
            <>
              O catálogo tem os direitos liberados e é independente das sociedades de gestão
              coletiva no mundo todo.
            </>,
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "Formação",
      institutions: [
        {
          name: "Universidade Sergio Arboleda",
          description: <>Desenvolvimento de software e aplicações web.</>,
        },
        { name: "Politécnico Grancolombiano", description: <>Marketing e crescimento.</> },
        {
          name: "Direção Nacional de Direito Autoral",
          description: <>Direito autoral na indústria musical.</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "Habilidades técnicas",
      skills: [
        {
          title: "Figma",
          description: <>Prototipagem no Figma com Once UI em velocidade incomum.</>,
          tags: [{ name: "Figma", icon: "figma" }],
          images: [
            { src: projectImages.figma1, alt: "Imagem do projeto", width: 16, height: 9 },
            { src: projectImages.figma2, alt: "Imagem do projeto", width: 16, height: 9 },
          ],
        },
        {
          title: "Next.js",
          description: <>Construo apps de nova geração com Next.js + Once UI + Supabase.</>,
          tags: [
            { name: "JavaScript", icon: "javascript" },
            { name: "Next.js", icon: "nextjs" },
            { name: "Supabase", icon: "supabase" },
          ],
          images: [{ src: projectImages.next, alt: "Imagem do projeto", width: 16, height: 9 }],
        },
      ],
    },
  },

  blog: {
    path: "/blog",
    label: "Blog",
    title: "Escrevo sobre música e tecnologia...",
    description: `Leia no que ${person.name} tem trabalhado recentemente`,
  },

  playlist: {
    path: "/playlist",
    id: "",
    name: "",
    label: "Playlist",
    title: "Música que criei para ambientar pontos de venda.",
    description: `Playlists criadas por ${person.name} para negócios e pontos de venda`,
  },

  playlistPage: {
    intro:
      "Cada playlist é cuidadosamente criada para melhorar a experiência do cliente em ambientes comerciais. Todas as faixas são originais e 100% livres de royalties, garantindo um uso tranquilo e legal no seu ponto de venda. Explore os diferentes estilos e climas disponíveis na sua plataforma favorita.",
    supportTitle: `Apoie ${person.firstName}`,
    supportDescription:
      "Sua contribuição nos ajuda a continuar criando música feita para negócios do mundo todo. Cada doação impulsiona a missão de tornar a música acessível, legal e alinhada à marca de restaurantes, hotéis, cafés e muito mais.",
    supportThanks: "Obrigado pelo seu apoio!",
    items: [
      {
        title: "Música para o lobby do hotel",
        description:
          "Crie o clima perfeito no lobby do seu hotel: clique e descubra uma trilha sonora curada para receber, relaxar e impressionar.",
        platform: "spotify",
        url: playlistUrls.lobby,
        featured: true,
      },
      {
        title: "Tarde no restaurante",
        description:
          "Coloque o clima ideal para a tarde: uma trilha sonora calorosa e tranquila pensada para elevar a experiência do almoço no seu restaurante.",
        platform: "youtube",
        url: playlistUrls.restaurant,
        featured: true,
      },
      {
        title: "Um pouco de jazz",
        description:
          "Prepare o clima perfeito: clique e aproveite um jazz suave selecionado para acompanhar o café e a conversa.",
        platform: "apple",
        url: playlistUrls.jazz,
      },
      {
        title: "Catálogo",
        description:
          "Descubra meu catálogo completo de música livre de royalties, criado para dar a atmosfera perfeita a qualquer negócio.",
        platform: "youtube",
        url: playlistUrls.catalog,
      },
      {
        title: "A melhor música para uma loja de moda",
        description:
          "Clique e lance tendência: a playlist definitiva para espaços de varejo antenados com a moda.",
        platform: "spotify",
        url: playlistUrls.fashion,
      },
      {
        title: "A melhor nova música de Natal",
        description:
          "Celebre a temporada com uma trilha sonora nova: música natalina original, criada para levar calor, alegria e um clima festivo moderno ao seu espaço.",
        platform: "spotify",
        url: playlistUrls.christmas,
      },
    ],
  },

  work: {
    path: "/work",
    label: "Projetos",
    title: `Projetos – ${person.name}`,
    description: `Projetos de design e desenvolvimento de ${person.name}`,
  },
};

export default pt;
