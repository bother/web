import { MainLayout } from '../layouts/main'
import { NextPageWithLayout } from '../types/next'

const NotFound: NextPageWithLayout = () => (
  <>
    <h1 className="text-5xl font-bold">Not found</h1>
    <p className="mt-4 text-2xl font-medium">
      Are you sure you have the right link?
    </p>
  </>
)

NotFound.getLayout = (page) => (
  <MainLayout className="p-8 bg-white lg:rounded-2xl" title="Not found">
    {page}
  </MainLayout>
)

export default NotFound
