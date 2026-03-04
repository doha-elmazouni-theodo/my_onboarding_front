"use client";

import "react-awesome-lightbox/build/style.css";

import { useState } from "react";

import { Download, Expand, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import Lightbox from "react-awesome-lightbox";

type ImageHolderProps = {
  imgUrl: string;
  handleRemoveImage: () => void;
};

const ImageHolder: FC<ImageHolderProps> = ({ imgUrl, handleRemoveImage }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="group relative h-42.5 w-full overflow-hidden rounded-xl bg-white/10">
        {/* Image */}
        <Image
          src={imgUrl}
          alt="Product"
          fill
          priority={false}
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-125"
        />

        {/* Overlay (hover) */}
        <div className="absolute inset-0 size-full bg-black/0  bg-blend-multiply transition-all duration-300 ease-in-out group-hover:bg-black/30">
          <div className="absolute top-3 right-3 flex items-center gap-4 text-white opacity-0 group-hover:opacity-100">
            {/* Delete */}
            <button
              type="button"
              aria-label="Remove image"
              onClick={handleRemoveImage}
              className="cursor-pointer opacity-90 transition-opacity duration-200 ease-in-out hover:opacity-100"
            >
              <Trash2 className="size-5 " />
            </button>

            {/* Zoom */}
            <button
              type="button"
              aria-label="Zoom image"
              onClick={() => {
                setIsLightboxOpen(true);
              }}
              className="cursor-pointer opacity-90 transition-opacity duration-200 ease-in-out hover:opacity-100"
            >
              <Expand className="size-5 " />
            </button>

            {/* Download */}
            <Link
              href={imgUrl}
              target="_blank"
              download="product"
              aria-label="Download image"
              className="cursor-pointer opacity-90 transition-opacity duration-200 ease-in-out hover:opacity-100"
            >
              <Download className="size-5 " />
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          image={imgUrl}
          onClose={() => {
            setIsLightboxOpen(false);
          }}
        />
      )}
    </>
  );
};

export default ImageHolder;
