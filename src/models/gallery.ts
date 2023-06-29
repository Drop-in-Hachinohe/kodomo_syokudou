import type { GalleryImageResponse, GalleryResponse, GalleryThumbnailResponse } from '@/types'

interface GalleryImageArgs {
  url: string
  width: number
  height: number
}

interface GalleryThumbnailArgs extends GalleryImageArgs {}

interface GalleryArgs {
  id: string
  title: string
  thumbnail: GalleryThumbnail
  description?: string
  images?: GalleryImage[]
}

export class GalleryImage {
  constructor(args: GalleryImageArgs) {
    this.url = args.url
    this.width = args.width
    this.height = args.height
  }

  url: string
  width: number
  height: number

  static dummy(): GalleryImage {
    return new GalleryImage({
      url: '',
      width: 0,
      height: 0,
    })
  }

  static fromResponse(response?: GalleryImageResponse): GalleryImage {
    return new GalleryImage({
      url: response?.url ?? '',
      width: response?.width ?? 0,
      height: response?.height ?? 0,
    })
  }
}

export class GalleryThumbnail {
  constructor(args: GalleryThumbnailArgs) {
    this.url = args.url
    this.width = args.width
    this.height = args.height
  }

  url: string
  width: number
  height: number

  static dummy(): GalleryThumbnail {
    return new GalleryThumbnail({
      url: '',
      width: 0,
      height: 0,
    })
  }

  static fromResponse(response?: GalleryThumbnailResponse): GalleryThumbnail {
    return new GalleryThumbnail({
      url: response?.url ?? '',
      width: response?.width ?? 0,
      height: response?.height ?? 0,
    })
  }
}

export default class Gallery {
  constructor(args: GalleryArgs) {
    this.id = args.id
    this.title = args.title
    this.thumbnail = args.thumbnail
    this.description = args.description
    this.images = args.images
  }

  id: string
  title: string
  thumbnail: GalleryThumbnail
  description?: string
  images?: GalleryImage[]

  static dummy(): Gallery {
    return new Gallery({
      id: '',
      title: '',
      thumbnail: GalleryThumbnail.dummy(),
      description: undefined,
      images: undefined,
    })
  }

  static fromResponse(response?: GalleryResponse): Gallery {
    return new Gallery({
      id: response?.id ?? '',
      title: response?.title ?? '',
      thumbnail: response?.thumbnail ? GalleryThumbnail.fromResponse(response.thumbnail) : GalleryThumbnail.dummy(),
      description: response?.description ?? '',
      images: response?.images ?? undefined,
    })
  }
}