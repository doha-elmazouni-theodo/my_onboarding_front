import PurchaseItem from "~components/purchaseItem/PurchaseItem";
import apiClient from "~utils/axiosApiClient";

import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";

type PurchaseStatus = string | "cancelled" | "pending" | "purchased";

type Purchase = {
  id: string;
  imageUrl: string;
  label: string;
  price: number;
  rating: number;
  status: PurchaseStatus;
};

const PurchaseList: FC = () => {
  const { data } = useQuery({
    queryKey: ["purchases"],
    queryFn: async () => apiClient.get<Purchase[]>("/purchases"),
  });

  if (!Array.isArray(data)) return null;

  return (
    <div className="flex flex-col gap-2.5">
      {data.map((purchase) => (
        <div key={purchase.id} className="rounded-md pt-4">
          <PurchaseItem
            imageUrl={purchase.imageUrl}
            label={purchase.label}
            price={purchase.price}
            rating={0}
            status=""
          />
        </div>
      ))}
    </div>
  );
};

export default PurchaseList;
