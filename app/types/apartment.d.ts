import type { IAgent } from '~/types/user';

export type TApartmentType = 'rent' | 'sale'

export interface IApartment {
  id: number
  type: TApartmentType
  category: string
  title: string
  description: string
  price: number
  address: string
  area: number
  rooms: number
  floor: number
  total_floors: number
  year_built: number
  images: string[]
  amenities: string[]
  agent: IAgent
}

