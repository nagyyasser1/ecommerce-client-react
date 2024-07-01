import React, { useState, useEffect, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./styles/ProducDetails.module.css";
import { Product } from "../types";
import { Helmet } from "react-helmet";
import { useCart } from "../contexts/CartContext";

type ProductDetailsProps = {
  product: Product;
};

type FormData = {
  color: string;
  size: number;
  count: number;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState<string>(product.images[0]);
  const { addToCart } = useCart();
  const { control, handleSubmit, watch, setValue } = useForm<FormData>();

  const selectedColor = watch("color", product.variants[0]?.color);
  const selectedSize = watch("size", product.variants[0]?.size);

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  const onSubmit = (data: FormData) => {
    console.log("Selected variants:", data);
    addToCart({ product, variant: data });
  };

  const availableSizes = useMemo(
    () =>
      product.variants
        .filter((variant) => variant.color === selectedColor)
        .map((variant) => variant.size),
    [product.variants, selectedColor]
  );

  const availableStock = useMemo(
    () =>
      product.variants.find(
        (variant) =>
          variant.color === selectedColor && variant.size === selectedSize
      )?.count,
    [product.variants, selectedColor, selectedSize]
  );

  useEffect(() => {
    setValue("size", availableSizes[0]);
  }, [availableSizes, setValue]);

  return (
    <div className={styles.productDetails}>
      <Helmet>
        <title>{product.page_title}</title>
        <meta name="description" content={product.meta_description} />
      </Helmet>
      <div className={styles.imageGallery}>
        <div className={styles.mainImage}>
          <img src={mainImage} alt={product.name} />
        </div>
        <div className={styles.thumbnails}>
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
              className={mainImage === image ? styles.activeThumbnail : ""}
            />
          ))}
        </div>
      </div>
      <div className={styles.details}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        {product.old_price && (
          <p className={styles.oldPrice}>${product.old_price.toFixed(2)}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className={styles.variantsForm}>
          <div className={`${styles.formGroup} ${styles.selectInput}`}>
            <label htmlFor="color">Color</label>
            <Controller
              name="color"
              control={control}
              defaultValue={selectedColor}
              render={({ field }) => (
                <select
                  {...field}
                  className={styles.selectInput}
                  onChange={(e) => {
                    setValue("color", e.target.value);
                  }}
                >
                  {[
                    ...new Set(
                      product.variants.map((variant) => variant.color)
                    ),
                  ].map((color, index) => (
                    <option key={index} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          {availableSizes.length > 0 && (
            <div className={`${styles.formGroup} ${styles.selectInput}`}>
              <label htmlFor="size">Available Sizes</label>
              <Controller
                name="size"
                control={control}
                defaultValue={selectedSize}
                render={({ field }) => (
                  <select
                    {...field}
                    className={styles.selectInput}
                    onChange={(e) => {
                      setValue("size", Number(e.target.value));
                    }}
                  >
                    {availableSizes.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          )}
          {availableStock && availableStock > 0 && (
            <div className={`${styles.formGroup} ${styles.numberInput}`}>
              <label htmlFor="count">Quantity</label>
              <Controller
                name="count"
                control={control}
                defaultValue={1}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="1"
                    max={availableStock}
                    className={styles.numberInput}
                  />
                )}
              />
            </div>
          )}
          <div className={styles.addToCartButton_container}>
            <button type="submit" className={styles.addToCartButton}>
              Add To Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
