export interface GooglePay {
  apiVersionMinor: number
  apiVersion: number
  paymentMethodData: PaymentMethodData
}

export interface PaymentMethodData {
  description: string
  tokenizationData: TokenizationData
  type: string
  info: Info
}

export interface TokenizationData {
  type: string
  token: string
}

export interface Info {
  cardNetwork: string
  cardDetails: string
  billingAddress: BillingAddress
}

export interface BillingAddress {
  phoneNumber: string
  address3: string
  sortingCode: string
  address2: string
  countryCode: string
  address1: string
  postalCode: string
  name: string
  locality: string
  administrativeArea: string
}

export interface Token {
  signature: string
  intermediateSigningKey: IntermediateSigningKey
  protocolVersion: string
  signedMessage: string
}

export interface IntermediateSigningKey {
  signedKey: string
  signatures: string[]
}
