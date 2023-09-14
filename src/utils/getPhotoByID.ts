export async function getPhotoByID(id: string) {
  const res = await fetch(`https://api.unsplash.com/photos/` + id, {
    headers: {
      Authorization:
        // @ts-ignore
        "Authorization: Client-ID " + import.meta.env.VITE_API_KEY,
    },
  })

  if (!res.ok) return

  const results = (await res.json()) as Photo

  return results
}

export interface Photo {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
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
  exif: Exif
  location: Location
  views: number
  downloads: number
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
  "street-photography"?: StreetPhotography
  "architecture-interior"?: ArchitectureInterior
  "monochromatic"?: Monochromatic
  "on-the-lake"?: OnTheLake
}

export interface StreetPhotography {
  status: string
}

export interface ArchitectureInterior {
  status: string
  approved_on: string
}

export interface Monochromatic {
  status: string
  approved_on: string
}

export interface OnTheLake {
  status: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
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
  twitter_username: any
  paypal_email: any
}

export interface Exif {
  make: string
  model: string
  name: string
  exposure_time: string
  aperture?: string
  focal_length: string
  iso: number
}

export interface Location {
  name?: string
  city?: string
  country?: string
  position: Position
}

export interface Position {
  latitude: number
  longitude: number
}
