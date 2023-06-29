export type GalleryThumbnailResponse = {
  url: string
  width: number
  height: number
}

export type GalleryImageResponse = {
  url: string
  width: number
  height: number
}

export type GalleryResponse = {
  id: string
  title: string
  thumbnail: GalleryThumbnailResponse
  description?: string
  images?: GalleryImageResponse[]
}

export type GalleriesResponse = {
  contents: GalleryResponse[]
  limit: number
  offset: number
  totalCount: number
}