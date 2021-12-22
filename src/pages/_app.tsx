import '../styles/global.scss'

import { FunctionComponent } from 'react'

import { AppPropsWithLayout } from '../types/next'

const Bother: FunctionComponent<AppPropsWithLayout> = ({
  Component,
  pageProps
}) => {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default Bother
