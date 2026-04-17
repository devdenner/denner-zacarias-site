export default function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-50">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
				<a
					href="/"
					className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90"
				>
					Denner Zacarias
				</a>

				<nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
					<a href="#lancamento" className="transition hover:text-white">
						Música
					</a>
					<a href="#sobre" className="transition hover:text-white">
						Sobre
					</a>
					<a href="#onde-ouvir" className="transition hover:text-white">
						Ouvir
					</a>
					<a href="https://www.instagram.com/dennerzacarias/" target="_blank" className="transition hover:text-white">
						Instagram
					</a>
				</nav>
			</div>
		</header>
	);
}
