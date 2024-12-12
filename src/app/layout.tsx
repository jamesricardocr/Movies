'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { MoviesProvider } from "./context/MoviesContex";
import Aside from "./templates/aside/Aside";
import Header from "./templates/header/Header";
import style from './global.module.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [shouldShowHeaderAndAside, setShouldShowHeaderAndAside] = useState(true);

  useEffect(() => {
    const hideLayoutRoutes = ['', ''];

    setShouldShowHeaderAndAside(
      !hideLayoutRoutes.includes(pathname) && !pathname.includes('/movies/')
    );
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>Quickbet - Tu plataforma de películas</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Descubre y busca tus películas favoritas con Quickbet." />
      </head>
      <body className={style.main}>
        <MoviesProvider>
            <header>
              <Header hidden={shouldShowHeaderAndAside}  />
            </header>
          <main>
            {shouldShowHeaderAndAside && <Aside />}
            <section>
              {children}
            </section>
          </main>
        </MoviesProvider>
      </body>
    </html>
  );
}
