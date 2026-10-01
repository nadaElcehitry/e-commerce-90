import { IBrand } from "./brand.interface"
import { ICategory } from "./category.interface"
import { ListResponse } from "./ListingResonse.interface"
import { IProduct } from "./product.interface"

export type categoryResponse = ListResponse<ICategory>
export type productResponse = ListResponse<IProduct>
export type BrandResponse = ListResponse<IBrand>
