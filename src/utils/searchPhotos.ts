import type { Exif, Photo } from "./getPhotos"

export async function searchPhotos(query: string) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}`,
    {
      headers: {
        Authorization:
          // @ts-ignore
          "Authorization: Client-ID " + import.meta.env.VITE_API_KEY,
      },
    },
  )

  if (!res.ok) return []

  const { results } = (await res.json()) as SearchResponse

  return results
}

export interface SearchResponse {
  total: number
  total_pages: number
  results: Photo[]
}

export interface Result {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: any
  width: number
  height: number
  color: string
  blur_hash: string
  description?: string
  alt_description: string
  breadcrumbs: any[]
  urls: Urls
  links: Links
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  user: User
  tags: Tag[]
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions {
  "architecture-interior"?: ArchitectureInterior
  "color-of-water"?: ColorOfWater
}

export interface ArchitectureInterior {
  status: string
}

export interface ColorOfWater {
  status: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name?: string
  twitter_username?: string
  portfolio_url?: string
  bio?: string
  location?: string
  links: Links2
  profile_image: ProfileImage
  instagram_username?: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

export interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}

export interface Social {
  instagram_username?: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email: any
}

export interface Tag {
  type: string
  title: string
  source?: Source
}

export interface Source {
  ancestry: Ancestry
  title: string
  subtitle: string
  description: string
  meta_title: string
  meta_description: string
  cover_photo: CoverPhoto
}

export interface Ancestry {
  type: Type
  category: Category
  subcategory?: Subcategory
}

export interface Type {
  slug: string
  pretty_slug: string
}

export interface Category {
  slug: string
  pretty_slug: string
}

export interface Subcategory {
  slug: string
  pretty_slug: string
}

export interface CoverPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at?: string
  width: number
  height: number
  color: string
  blur_hash: string
  description?: string
  alt_description: string
  breadcrumbs: any[]
  urls: Urls2
  links: Links3
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions2
  premium: boolean
  plus: boolean
  user: User2
}

export interface Urls2 {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links3 {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions2 {
  "arts-culture"?: ArtsCulture
  "nature"?: Nature
  "wallpapers"?: Wallpapers
}

export interface ArtsCulture {
  status: string
  approved_on: string
}

export interface Nature {
  status: string
  approved_on: string
}

export interface Wallpapers {
  status: string
  approved_on: string
}

export interface User2 {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username?: string
  portfolio_url?: string
  bio?: string
  location: string
  links: Links4
  profile_image: ProfileImage2
  instagram_username: string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social2
}

export interface Links4 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage2 {
  small: string
  medium: string
  large: string
}

export interface Social2 {
  instagram_username: string
  portfolio_url?: string
  twitter_username?: string
  paypal_email: any
}
