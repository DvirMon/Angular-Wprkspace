export interface Info {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    saleInfo: SaleInfo
    accessInfo : AccessInfo
}
  
export interface VolumeInfo {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: IndustryIdentifier[]
    pageCount: number
    dimensions: Dimensions
    printType: string
    mainCategory: string
    categories: string[]
    averageRating: number
    ratingsCount: number
    contentVersion: string
    imageLinks: ImageLinks
    language: string
    infoLink: string
    canonicalVolumeLink: string
}
  
export interface IndustryIdentifier {
    type: string
    identifier: string
  }
  
  export interface Dimensions {
    height: string
    width: string
    thickness: string
  }
  
  export interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
    small: string
    medium: string
    large: string
    extraLarge: string
  }

  export interface SaleInfo {
    country: string
    saleability: string
    isEbook: boolean
    listPrice: ListPrice
    retailPrice: RetailPrice
    buyLink: string
  }
  
  export interface ListPrice {
    amount: number
    currencyCode: string
  }
  
  export interface RetailPrice {
    amount: number
    currencyCode: string
  }

  export interface AccessInfo {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: Epub
    pdf: Pdf
    accessViewStatus: string
  }
  
  export interface Epub {
    isAvailable: boolean
    acsTokenLink: string
  }
  
  export interface Pdf {
    isAvailable: boolean
  }
  