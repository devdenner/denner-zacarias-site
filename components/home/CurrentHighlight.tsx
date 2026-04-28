export default function CurrentHighlight() {
  return (
    <section
      id="lancamento"
      className="border-t border-white/10 bg-[#111113] text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div className="flex items-center justify-center">
          <img
            src="/capa-a-noite-e-a-madrugada.jpg"
            alt="Capa da música A Noite e a Madrugada"
            className="aspect-square w-full max-w-md rounded-3xl border border-white/10 object-cover shadow-2xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C5A46D]">
            Novo lançamento
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            A Noite e a Madrugada
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Um pop emocional e atmosférico sobre conexão, presença e aquele
            sentimento de estar em um lugar que talvez nunca tenha existido...
            mas que parece memória.
          </p>

          <p className="mt-5 text-base leading-7 text-zinc-400">
            Uma canção pra ouvir à noite, com calma, deixando a música criar o
            ambiente.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://open.spotify.com/track/5Z0xBYgcGzN3jkXTZJHxyx"
              target="_blank"
              rel="noreferrer"
              className="btn rounded-full bg-[#1DB954] px-6 py-3 text-sm font-semibold text-black"
            >
              Ouvir no Spotify
            </a>

            <a
              href="https://bfan.link/a-noite-e-a-madrugada"
              target="_blank"
              rel="noreferrer"
              className="btn rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
            >
              Ouvir em outras plataformas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
