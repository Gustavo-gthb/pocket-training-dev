export interface Customers {
  phones: Phones
  name: string
  email: string
  type: string
}

export interface Phones {
  mobile_phone: MobilePhone
}

export interface MobilePhone {
  country_code: string
  area_code: string
  number: string
}

export interface Reponse {
  id: string
  name: string
  email: string
  type: string
  delinquent: boolean
  created_at: string
  updated_at: string
  phones: Phones
}
