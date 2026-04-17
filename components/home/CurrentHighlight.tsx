export default function CurrentHighlight() {
  return (
    <section
      id="lancamento"
      className="border-t border-white/10 bg-[#111113] text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
        <div className="flex items-center justify-center">
          <img
            src="/capa-primeira-vez.jpeg"
            alt="Primeira Vez"
            className="aspect-square w-full max-w-md rounded-3xl border border-white/10 object-cover shadow-2xl"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C5A46D]">
            Em destaque
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Primeira Vez
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-300">
            Um pop/rock romântico com memória, sentimento e aquele
            instante que marca para sempre. “Primeira Vez”
            transforma lembranças em uma canção íntima, melódica e
            emocional.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://ditto.fm/primeira-vez-denner-zacarias"
              target="_blank"
              rel="noreferrer"
              className="btn rounded-full bg-[#1DB954] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Ouvir lançamento
            </a>

            <a
              href="https://www.youtube.com/@dennerzacarias"
              target="_blank"
              rel="noreferrer"
              className="btn rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ver no YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
