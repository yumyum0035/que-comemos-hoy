export interface recipe {
  id?:string,
  name?:string,
  type?:string,
  description?:string,
  image_alt_tag?:string,
  image?:string,
  total_time?:number,
  dificulty?:number,
  favorited?:boolean,
  portion?:number,
  ingredients_amount?: number,
  ingredients?: [ingredient],
  steps?:[step]
}

export interface step {
  name?: string,
  priority?: number
}

export interface ingredient{
  measure?: string,
  value?: string,
  ingredient_type?: string,
  image?: string,
  name?: string,
  shopping_list_category_es?:string
}

