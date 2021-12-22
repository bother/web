import { Comment, Post } from '../types/models'
import { SupabaseComment, SupabaseFeedPost } from '../types/supabase'
import { supabase } from './supabase'
import { transformComment, transformPost } from './transform'

export const fetchPost = async (id: number): Promise<Post> => {
  const { data, error } = await supabase
    .rpc<SupabaseFeedPost>('fetch_post', {
      postId: id
    })
    .single()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('Something went wrong')
  }

  return transformPost(data)
}

export const fetchComments = async (
  postId: number
): Promise<Array<Comment>> => {
  const { data, error } = await supabase
    .from<SupabaseComment>('comments')
    .select()
    .eq('post_id', postId)
    .order('created_at', {
      ascending: false
    })

  if (error) {
    throw new Error(error.message)
  }

  if (!data) {
    throw new Error('Something went wrong')
  }

  return data.map(transformComment)
}
