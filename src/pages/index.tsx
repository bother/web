import Image from 'next/image'

import { LandingLayout } from '../layouts/landing'
import { NextPageWithLayout } from '../types/next'

const HomePage: NextPageWithLayout = () => {
  const width = 1470 / 2
  const height = 2977 / 2

  return (
    <section className="flex flex-col items-center space-y-8 lg:space-y-0 lg:flex-row lg:space-x-8">
      <figure className="flex flex-col">
        <Image
          alt="Feed"
          height={height * 0.8}
          src="/screenshots/2-post.png"
          width={width * 0.8}
        />
        <figcaption className="mt-2 text-lg font-medium text-center lg:mt-4 lg:text-2xl">
          Browse posts
        </figcaption>
      </figure>
      <figure className="flex flex-col">
        <Image
          alt="Post"
          height={height}
          src="/screenshots/1-feed.png"
          width={width}
        />
        <figcaption className="mt-2 text-lg font-medium text-center lg:mt-4 lg:text-2xl">
          Share your thoughts
        </figcaption>
      </figure>
      <figure className="flex flex-col">
        <Image
          alt="Chat"
          height={height * 0.7}
          src="/screenshots/3-chat.png"
          width={width * 0.7}
        />
        <figcaption className="mt-2 text-lg font-medium text-center lg:mt-4 lg:text-2xl">
          Make new friends
        </figcaption>
      </figure>
    </section>
  )
}

HomePage.getLayout = (page) => <LandingLayout>{page}</LandingLayout>

export default HomePage
