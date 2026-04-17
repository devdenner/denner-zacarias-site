const links = [
  {
    title: "Spotify",
    description: "Ouça os lançamentos nas plataformas.",
    href: "https://open.spotify.com/intl-pt/artist/7JScSk3c0jIPhSZAhc8O4i?si=K6ADp8jdR3S96vLNvsrKqg",
  },
  {
    title: "YouTube",
    description: "Clipes, vídeos e conteúdo do canal.",
    href: "https://www.youtube.com/@dennerzacarias",
  },
  {
    title: "Instagram",
    description: "Bastidores, novidades e conexão direta.",
    href: "https://www.instagram.com/dennerzacarias/",
  },
];

export default function FeaturedLinks() {
  return (
    <section id="onde-ouvir" className="border-t border-white/10 bg-[#111113] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="card-hover mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C5A46D]">
            Onde ouvir
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Acompanhe a música em todos os canais.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <h3 className="text-2xl font-semibold">
                {link.title}
              </h3>
              <p className="mt-3 text-zinc-300">
                {link.description}
              </p>
              <span className="mt-6 inline-block text-sm font-semibold text-[#1DB954]">
                Acessar →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
