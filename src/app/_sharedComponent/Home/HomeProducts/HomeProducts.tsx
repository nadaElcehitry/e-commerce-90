import { getProducts } from "@/services/product.services";
import SectionTitle from "@/app/_sharedComponent/SectionTitle/SectionTitle";
import { productResponse } from "@/interface/response.type";
import { IProduct } from "@/interface/product.interface";

import Card from "../../Card/Card";

export default async function HomeProducts() {
    let products: productResponse = await getProducts();
    return (
        <section className="max-w-7xl mx-auto my-14 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
            <div className="mb-8">
                <SectionTitle title={'Products'} subtitle={'Featured'} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {products?.data.map((product: IProduct) => {
                    return (
                     <Card key={product._id} product={product} />
                    );
                })}
            </div>
        </section>
    );
}