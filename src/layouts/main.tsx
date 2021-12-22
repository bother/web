import { getYear } from 'date-fns'
import Head from 'next/head'
import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '../components/common/logo'

type Props = {
  className?: string
  title: string
}

export const MainLayout: FunctionComponent<Props> = ({
  children,
  className,
  title
}) => (
  <div className="max-w-3xl p-8 mx-auto">
    <Head>
      <title>{title}: Bother</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <header>
      <Link href="/">
        <a className="flex items-center">
          <Logo className="w-12 h-12" />
          <h1 className="ml-4 text-2xl font-bold text-black">Bother</h1>
        </a>
      </Link>
    </header>

    <main className={twMerge('flex flex-col my-8 -mx-8 lg:mx-0', className)}>
      {children}
    </main>

    <footer className="text-sm text-gray-600">
      &#169; {getYear(new Date())} Bother. All rights reserved.
    </footer>
  </div>
)
