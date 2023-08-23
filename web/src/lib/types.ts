export interface Prediction {
  access_token: string
  model_version: string
  custom_id: null
  input: Input
  result: Result
  status: string
  sla_compliant_client: boolean
  sla_compliant_system: boolean
  created: number
  completed: number
}

export interface Input {
  latitude: null
  longitude: null
  similar_images: boolean
  health: string
  images: string[]
  datetime: Date
}

export interface Result {
  is_plant: Is
  is_healthy: Is
  disease: Disease
}

export interface Disease {
  suggestions: Suggestion[]
}

export interface Suggestion {
  id: string
  name: string
  probability: number
  similar_images: SimilarImage[]
  details: Details
}

export interface Details {
  local_name: string
  description: string
  url: string
  treatment: Treatment
  classification: string[]
  common_names: null
  cause: null
  language: string
  entity_id: string
}

export interface Treatment {
  chemical: string[]
  biological: string[]
  prevention: string[]
}

export interface SimilarImage {
  id: string
  url: string
  similarity: number
  url_small: string
  license_name?: string
  license_url?: string
  citation?: string
}

export interface Is {
  probability: number
  binary: boolean
  threshold: number
}
