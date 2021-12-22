export type Post = {
  id: number
  userId: string
  body: string
  votes: number
  comments: number
  createdAt: Date
}

export type Comment = {
  id: number
  userId: string
  postId: number
  body: string
  createdAt: Date
}
