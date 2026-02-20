import Image from "next/image";
import type { ReactNode } from "react";

type AuthImageProps = {
  src: string;
  alt: string;
};

export default function AuthImage({ src, alt }: AuthImageProps): ReactNode {
  return (
    <div className="relative aspect-25/32 w-full">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
