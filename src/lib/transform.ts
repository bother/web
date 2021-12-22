import { parseISO } from 'date-fns'

import { Comment, Post } from '../types/models'
import { SupabaseComment, SupabaseFeedPost } from '../types/supabase'

export const transformPost = ({
  body,
  comments,
  created_at,
  id,
  user_id,
  votes
}: SupabaseFeedPost): Post => ({
  body,
  comments,
  createdAt: parseISO(created_at),
  id,
  userId: user_id,
  votes
})

export const transformComment = ({
  body,
  created_at,
  id,
  post_id,
  user_id
}: SupabaseComment): Comment => ({
  body,
  createdAt: parseISO(created_at),
  id,
  postId: post_id,
  userId: user_id
})
