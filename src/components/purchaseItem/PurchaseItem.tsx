import Image from "next/image";
import type { FC } from "react";

type PurchaseStatus = string | "cancelled" | "pending" | "purchased";

type PurchaseItemProps = {
  imageUrl: string;
  label: string;
  price: number;
  rating: number;
  status: PurchaseStatus;
};

const PurchaseItem: FC<PurchaseItemProps> = ({ imageUrl, label, price, rating, status }) => {
  return (
    <div className=" flex items-center justify-between rounded-md bg-colorPalette p-4">
      <div className="flex items-center gap-3">
        <Image src={imageUrl} alt={label} width={80} height={60} />
        <div className="flex flex-col">
          <span className="font-medium">{label}</span>
          <span className="text-sm text-ring">
            {new Intl.NumberFormat("fr-MA", {
              style: "currency",
              currency: "MAD",
            }).format(price)}
          </span>
        </div>
      </div>

      <div className="flex items-center">
        <div>
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index}>★</span>
          ))}
        </div>
        <span>{status}</span>
      </div>
    </div>
  );
};

export default PurchaseItem;
