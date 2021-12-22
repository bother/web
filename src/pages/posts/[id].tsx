import { GetServerSideProps } from 'next'

import { CommentCard } from '../../components/comments/card'
import { PostCard } from '../../components/posts/card'
import { MainLayout } from '../../layouts/main'
import { fetchComments, fetchPost } from '../../lib/db'
import { Comment, Post } from '../../types/models'
import { NextPageWithLayout } from '../../types/next'

type Params = {
  id: string
}

type Props = {
  post: Post
  comments: Array<Comment>
}

const PostPage: NextPageWithLayout<Props> = ({ comments, post }) => (
  <>
    <div className="bg-white rounded-xl">
      <PostCard className="border-b border-gray-200" post={post} />

      {comments.map((comment) => (
        <CommentCard
          className="border-t border-gray-100"
          comment={comment}
          key={comment.id}
        />
      ))}
    </div>
  </>
)

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  query
}) => {
  const id = Number(query.id)

  const post = await fetchPost(id)
  const comments = await fetchComments(id)

  return {
    props: {
      comments,
      post
    }
  }
}

PostPage.getLayout = (page) => (
  <MainLayout title={page.props.post.body}>{page}</MainLayout>
)

export default PostPage
