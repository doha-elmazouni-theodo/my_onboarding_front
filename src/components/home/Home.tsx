"use client";
import backgroundImage from "~/assets/svg/Tiles.svg";
import { Button } from "~components/elements/button";
import { cn } from "~components/lib/utils";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";

import { useLastConnectedUser } from "./hooks";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FC } from "react";

const Home: FC = () => {
  const router = useRouter();

  const handleJoinClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/signup");
  };
  const handleSignInClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push("/signin");
  };
  const user = useLastConnectedUser();

  return (
    <div
      className={cn(
        "homepage-background fixed inset-0 flex min-h-screen items-center justify-center bg-center bg-repeat text-center",
      )}
      style={{
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-member-access
        backgroundImage: `url(${backgroundImage.src ?? backgroundImage})`,
      }}
    >
      {/* Authentication link */}
      {(user ?? "").length > 0 && (
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Image src="/user-filled.svg" alt="User icon" width={16} height={16} />

          <Link
            href={{
              pathname: "/signin",
              query: { prefilled: "true" },
            }}
          >
            <TranslateMessage
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              txKey={txKeys.common.continueAs}
              values={{ user }}
              components={{
                gray: <span className="text-[13px] text-(--official-gray)" />,
                user: <strong className="text-[13px] font-bold text-white" />,
              }}
            />
          </Link>
        </div>
      )}

      {/* Centered content */}
      <div className="center relative z-10 flex min-h-screen w-full max-w-4xl items-center justify-center px-4 py-8 text-center">
        <div className="flex flex-col items-center">
          <Image src="/Theodo.svg" alt="Theodo logo" width={295} height={63.65} />
          <h1 className="mega-title mt-6 text-white">
            <TranslateMessage txKey={txKeys.common.megaTitle} />
          </h1>
          <p className="body-text-regular mt-2 text-white">
            <TranslateMessage txKey={txKeys.common.subtitle} />
          </p>

          {/* Buttons */}
          <div className="mt-15 flex justify-center gap-4">
            <Button variant="default" onClick={handleJoinClick}>
              <TranslateMessage txKey={txKeys.common.join} />
            </Button>
            <Button variant="primary" onClick={handleSignInClick}>
              <TranslateMessage txKey={txKeys.common.signIn} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
