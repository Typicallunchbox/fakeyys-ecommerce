export interface Product {
    id: string,
    tag:string,
    title: string,
    price: number,
    description: string,
    cover_image: string,
    color_accents: {
        primary: Array<number>,
        secondary: Array<number>,
  }
}

export interface iCartItem {
  id: string,
  title: string,
  price: number,
  count: number,
  tag:string,
  description: string,
  cover_image: string,
  color_accents: {
      primary: Array<number>,
      secondary: Array<number>,
}
}
