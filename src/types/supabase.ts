export type SupabaseFeedPost = {
  id: number
  user_id: string
  body: string
  comments: number
  votes: number
  latitude: number
  longitude: number
  created_at: string
}

export type SupabaseComment = {
  id: number
  user_id: string
  post_id: number
  body: string
  created_at: string
}
