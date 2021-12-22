import { formatDistanceToNowStrict } from 'date-fns'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Comment } from '../../types/models'
import { Avatar } from '../common/avatar'
import { Icon } from '../common/icon'

type Props = {
  className?: string
  comment: Comment
}

export const CommentCard: FunctionComponent<Props> = ({
  className,
  comment
}) => (
  <div className={twMerge('flex items-center p-4', className)}>
    <Avatar name={`${comment.userId}_${comment.id}_comment`} size={48} />

    <div className="flex-1 ml-4">
      <div className="text-lg">{comment.body}</div>

      <div className="flex flex-row items-center mt-4 text-sm font-medium text-gray-600">
        <Icon name="clock" />
        <div className="ml-2">
          {formatDistanceToNowStrict(comment.createdAt)}
        </div>
      </div>
    </div>
  </div>
)
