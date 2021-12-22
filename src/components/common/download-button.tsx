import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon } from './icon'

type Props = {
  className?: string
  link: string
  type: 'app-store' | 'google-play'
}

export const DownloadButton: FunctionComponent<Props> = ({
  className,
  link,
  type
}) => (
  <Link href={link}>
    <a
      className={twMerge(
        'flex items-center justify-center px-8 py-4 text-2xl font-medium text-white rounded-full hover:text-white',
        type === 'app-store'
          ? 'bg-sky-600 hover:bg-sky-500'
          : 'bg-emerald-600 hover:bg-emerald-500',
        className
      )}>
      <Icon className="w-8 h-8" name="app-store" />
      <span className="ml-4">
        {type === 'app-store' ? 'App Store' : 'Google Play'}
      </span>
    </a>
  </Link>
)
