export interface Video {
  title: string
  thumbnail: string
  description: string
  url: string
  category: string
  publishedAt: string
  downloads: Download[]
}

export interface Download {
  filename: string
  extension: string
}
