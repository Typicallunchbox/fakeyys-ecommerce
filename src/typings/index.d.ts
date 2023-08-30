export interface Product {
    id: string,
    title: string,
    price: number,
    description: string,
    cover_image: string,
    color_accents: {
        primary: Array<number>,
        secondary: Array<number>,
  }
}