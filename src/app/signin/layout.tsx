import type { ReactNode } from "react";

type SignInLayoutProps = {
  children: ReactNode;
};

export default function SignInLayout({ children }: SignInLayoutProps): React.ReactNode {
  return (
    <div className="flex min-h-screen">
      {/* Colonne gauche */}
      <div className="flex w-1/2 items-center justify-center">{children}</div>

      {/* Colonne droite */}
      <div className="w-1/2 bg-gray-100">{/* Contenu secondaire (image, branding, etc.) */}</div>
    </div>
  );
}
