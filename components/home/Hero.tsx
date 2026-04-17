export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050506] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,164,109,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(29,185,84,0.12),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-20 pt-28 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pb-24 md:pt-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#1DB954]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#C5A46D]">
              Site oficial
            </span>
          </div>

          <p className="mb-5 text-xs uppercase tracking-[0.42em] text-[#C5A46D] md:text-sm">
            Denner Zacarias
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.03em] md:text-7xl lg:text-[5.4rem]">
            Canções para quem sente demais e não consegue fingir o contrário.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 md:text-xl">
            Pop emocional com letras que nascem de experiências reais — entre
            memória, espera, amor, recomeço e tudo aquilo que fica guardado
            dentro da gente.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#lancamento"
              className="btn rounded-full bg-[#1DB954] px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Ouvir 'Primeira Vez'
            </a>

            <a
              href="#sobre"
              className="btn rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/[0.08]"
            >
              Conhecer mais
            </a>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A46D]">
                Linguagem
              </p>
              <p className="mt-2 text-sm text-zinc-200">Pop emocional / autoral</p>
            </div>

            <div className="card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A46D]">
                Essência
              </p>
              <p className="mt-2 text-sm text-zinc-200">Memória, sentimento e presença</p>
            </div>

            <div className="card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C5A46D]">
                Universo
              </p>
              <p className="mt-2 text-sm text-zinc-200">Canções que contam histórias</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-[520px]">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[#C5A46D]/20 blur-3xl" />
            <div className="absolute -bottom-8 right-0 h-36 w-36 rounded-full bg-[#1DB954]/15 blur-3xl" />

            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-70" />

            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur">
              <img
                src="/denner-hero.png"
                alt="Denner Zacarias"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex max-w-sm flex-col rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[#C5A46D]">
                    Último lançamento
                  </span>
                  <strong className="mt-2 font-serif text-2xl text-white">
                    Primeira Vez
                  </strong>
                  <p className="mt-2 text-sm leading-6 text-zinc-200">
                    Um encontro entre memória, melodia e emoção em forma de
                    pop/rock romântico.
                  </p>
                  <a
                    href="https://ditto.fm/primeira-vez-denner-zacarias"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:scale-[1.02]"
                  >
                    Ouvir lançamento
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 top-10 hidden rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-zinc-200 backdrop-blur md:block">
              <span className="block uppercase tracking-[0.22em] text-[#C5A46D]">
                Artista
              </span>
              <span className="mt-1 block">Pop / Rock emocional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
