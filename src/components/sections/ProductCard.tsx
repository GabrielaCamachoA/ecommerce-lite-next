"use client";

import { ProductCardProps } from "@/src/interfaces/product";
import React from "react";

const ProductCard  = ({ product }: ProductCardProps) => {
    return (
        <div className="max-w-sm w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg transition-transform hover:scale-105 hover:shadow-white/10">
            <div className="overflow-hidden rounded-xl relative">
                <img
                    src={product.imageUrl }
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-xl transition-transform hover:scale-110"
                />
                <span
                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${product.isActive ? "bg-green-500/80" : "bg-red-500/80"
                        } text-white backdrop-blur-sm`}
                >
                    {product.isActive ? "Disponible" : "Agotado"}
                </span>
            </div>

            <div className="mt-4 space-y-3 text-gray-200">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-white">{product.name}</h2>
                    <span className="text-sm text-gray-400 italic">{product.brand}</span>
                </div>

                <p className="text-sm text-gray-400">{product.category}</p>
                <p className="text-gray-300 text-sm line-clamp-2">{product.description}</p>


                <div className="flex flex-wrap gap-2 mt-2">
                    {product.tags?.map((tag: string, index: number) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs bg-white/10 border border-white/20 rounded-md text-gray-300"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-lg font-bold text-white">${product.price}</p>
                    <button
                        disabled={!product.isActive}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition ${product.isActive
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-gray-600 cursor-not-allowed text-gray-300"
                            }`}
                    >
                        {product.isActive ? "Agregar al carrito" : "No disponible"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
