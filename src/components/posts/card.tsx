import { formatDistanceToNowStrict } from 'date-fns'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Post } from '../../types/models'
import { Avatar } from '../common/avatar'
import { Icon } from '../common/icon'

type Props = {
  className?: string
  post: Post
}

export const PostCard: FunctionComponent<Props> = ({ className, post }) => (
  <div className={twMerge('flex items-center p-4', className)}>
    <Avatar name={`${post.userId}_${post.id}_post`} size={48} />

    <div className="flex-1 ml-4">
      <div className="text-xl">{post.body}</div>

      <div className="flex flex-row items-center mt-4 font-medium text-gray-600">
        <Icon name="clock" />
        <div className="ml-2">{formatDistanceToNowStrict(post.createdAt)}</div>

        <Icon className="ml-4" name="thumb-up" />
        <div className="ml-2">{post.votes}</div>

        <Icon className="ml-4" name="comments" />
        <div className="ml-2">{post.comments}</div>
      </div>
    </div>
  </div>
)
