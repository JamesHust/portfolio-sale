import React from "react";

import { productsList } from "@/data";
import { Button } from "@/components/base/moving-borders";
import Image from "next/image";

const Products = () => {
  return (
    <section
      className="md:pt-56 ull z-[2] px-4"
      id="products"
    >
      <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-5xl text-white">
        Thông tin <span className="text-purple">sản phẩm</span>
      </h1>
      <div className="w-full mt-5 md:mt-12 grid md:grid-cols-2 grid-cols-1 gap-3">
        {productsList.map((product) => (
          <a
            key={product.id}
            href={product.href}
            target="_blank"
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              className="flex-1 text-white bg-white/10 border-white"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <Image
                  src={product.thumbnail}
                  alt={product.thumbnail}
                  width={300}
                  height={300}
                  className="h-20 w-20 md:w-32 md:h-32"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">{product.title}</h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">{product.desc}</p>
                </div>
              </div>
            </Button>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Products;
