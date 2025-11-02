"use client";

import { Product } from "@/src/interfaces/product";
import ProductCard from "./ProductCard";

interface Props {
    products: Product[];
}

const ProductsList = ({ products }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.sku} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
