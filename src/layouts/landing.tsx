import { getYear } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'

import { Logo } from '../components/common/logo'

export const LandingLayout: FunctionComponent = ({ children }) => {
  const footerLinks = [
    {
      href: '/download',
      label: 'Download'
    },
    {
      href: '/privacy',
      label: 'Privacy'
    },
    {
      href: 'https://github.com/bother',
      label: 'GitHub'
    }
  ]

  return (
    <div className="container flex flex-col items-center min-h-screen p-8 mx-auto lg:p-16">
      <Head>
        <title>Bother: what bothers you?</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <header>
        <Link href="/">
          <a className="flex flex-col items-center">
            <Logo className="w-32 h-32" />

            <div className="mt-8 text-center">
              <h1 className="text-5xl font-bold text-black">Bother</h1>
              <h2 className="mt-4 text-2xl font-medium text-gray-600">
                What bothers you?
              </h2>
            </div>
          </a>
        </Link>
      </header>

      <main className="flex flex-col flex-1 my-8 lg:my-16">{children}</main>

      <footer className="flex-col items-center text-sm text-gray-600">
        <div>&#169; {getYear(new Date())} Bother. All rights reserved.</div>

        <nav className="flex flex-col justify-center mt-4 space-y-1 lg:flex-row lg:space-y-0 lg:space-x-2">
          {footerLinks.map(({ href, label }) => (
            <Link href={href} key={href}>
              <a className="text-gray-800 first:mt-0">{label}</a>
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  )
}
