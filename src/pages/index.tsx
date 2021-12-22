import Image from 'next/image'

import { DownloadButton } from '../components/common/download-button'
import { LandingLayout } from '../layouts/landing'
import { NextPageWithLayout } from '../types/next'

const HomePage: NextPageWithLayout = () => {
  const width = 1470 / 2
  const height = 2977 / 2

  return (
    <>
      <section>
        <p className="max-w-lg mx-auto text-2xl text-center">
          Bother is an anonymous social app where you share things that bother
          you and find other people who feel the same.
        </p>
      </section>

      <section className="flex flex-col mt-8 lg:flex-row lg:mt-16 lg:justify-center">
        <DownloadButton link="/download" type="app-store" />
        <DownloadButton
          className="mt-4 lg:mt-0 lg:ml-8"
          link="/download"
          type="google-play"
        />
      </section>

      <section className="grid gap-8 mt-8 lg:mt-16 lg:grid-cols-3">
        <figure className="flex flex-col justify-center lg:order-2">
          <Image
            alt="Feed"
            height={height}
            src="/screenshots/1-feed.png"
            width={width}
          />
          <figcaption className="mt-4 text-lg font-medium text-center lg:text-xl">
            Browse posts
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-center lg:order-1 lg:ml-16">
          <Image
            alt="Post"
            height={height}
            src="/screenshots/2-post.png"
            width={width}
          />
          <figcaption className="mt-4 text-lg font-medium text-center lg:text-xl">
            Share your thoughts
          </figcaption>
        </figure>

        <figure className="flex flex-col justify-center order-3 lg:mr-16">
          <Image
            alt="Chat"
            height={height}
            src="/screenshots/3-chat.png"
            width={width}
          />
          <figcaption className="mt-4 text-lg font-medium text-center lg:text-xl">
            Make new friends
          </figcaption>
        </figure>
      </section>
    </>
  )
}

HomePage.getLayout = (page) => <LandingLayout>{page}</LandingLayout>

export default HomePage
