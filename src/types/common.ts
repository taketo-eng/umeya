export type Setting = {
  kv_pc : Image,
  kv_sp: Image,
  catch_phrase:string,
  catch_phrase_en: string,
  about_image: Image,
  about_content: string,
  about_content_en: string,
  history_data: History[],
  history_image: Image,
  bg_image: Image,
  bg_content: string,
  bg_content_en: string,
  address: string,
  address_en: string,
  address_note: string,
  address_note_en: string,
  car_park: string,
  car_park_en: string,
  tenant_data: Tenant[]
}

export type History = {
  fieldId: string,
  title: string,
  title_en: string,
  content: string,
  content_en: string,
}

export type Tenant = {
  fieldId: string
  tenant_name: string
  tenant_name_en?: string
  introduction: string
  introduction_en?: string
  tenant_image: Image
  instagram_url?: string
  facebook_url?: string
  site_url?: string
}

export type Schedule = {
  title?: string
  title_en?: string
  description: string,
  description_en?: string,
  start_time: string
  end_time: string
  category: ('event' | 'open' | '')[]
}

export type InstagramPost = {
  id: string
  caption: string
  comments_count: number
  like_count: number
  media_type: string
  media_url: string
  permalink: string
  timestamp: string
}

export type Image = {
  url: string
  height: number
  width: number
}
