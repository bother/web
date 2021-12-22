import { MainLayout } from '../layouts/main'
import { NextPageWithLayout } from '../types/next'

const ServerError: NextPageWithLayout = () => (
  <>
    <h1 className="text-5xl font-bold">Something went wrong</h1>
    <p className="mt-4 text-2xl font-medium">Try again later?</p>
  </>
)

ServerError.getLayout = (page) => (
  <MainLayout className="p-8 bg-white lg:rounded-2xl" title="Error">
    {page}
  </MainLayout>
)

export default ServerError
