"use client";

import { useState } from "react";

export default function Page() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    // Al activar "dark" en este div, todas las clases con dark: se aplican
    <div className={darkMode ? "dark flex min-h-screen" : "flex min-h-screen"}>
      {/* Sidebar izquierda */}
      <aside className="hidden md:flex w-60 flex-col justify-between p-5 bg-white dark:bg-gray-800 dark:text-white text-gray-900 transition-colors duration-300">
        <div>
          <h1 className="text-2xl font-bold mb-8 select-none">Netflix.</h1>
          <nav className="space-y-4 select-none">
            {[
              "Browse",
              "Watchlist",
              "Coming Soon",
              "Friends",
              "Parties",
              "Settings",
            ].map((item, index) => (
              <p
                key={index}
                className="text-base font-medium cursor-default"
              >
                {item}
              </p>
            ))}
          </nav>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-6 md:p-8 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {/* Banner principal */}
        <section className="relative w-full h-56 md:h-64 rounded-xl overflow-hidden mb-10">
          <img
            src="/the-witcher.jpg"
            alt="The Witcher"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6">
            <h2 className="text-2xl md:text-3xl font-bold">The Witcher</h2>
            <button className="mt-3 px-4 md:px-5 py-2 bg-red-600 rounded-lg">
              Ver ahora
            </button>
          </div>
        </section>

        {/* Sección de Parties */}
        <section className="mb-10">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Parties</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {["Cadaver", "Monster Inc", "Friends", "Blade Runner 2049"].map(
              (movie, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 transition-colors duration-300"
                >
                  <p className="font-semibold">{movie}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Grupo activo
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        {/* Sección Continue Watching */}
        <section>
          <h3 className="text-lg md:text-xl font-semibold mb-4">
            Continue watching
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {[
              "/stranger.jpg",
              "/shatman.jpg",
              "/damsel.jpg",
              "/alguien.jpg",
              "/how.jpg",
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt="movie"
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Barra lateral derecha */}
      <aside className="hidden md:flex w-20 p-5 flex-col items-center space-y-4 bg-white dark:bg-gray-800 transition-colors duration-300">
        {[1, 2, 3, 4, 5].map((i) => (
          <img
            key={i} // ✅ clave única por cada avatar
            src={`https://i.pravatar.cc/100?img=${i}`}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
        ))}
      </aside>
    </div>
  );
}
