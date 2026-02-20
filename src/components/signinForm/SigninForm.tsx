/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { useEffect } from "react";

import { Button } from "~components/elements/button";
import { Input } from "~components/elements/input";
import {
  defaultSignInFormValues,
  signInValidationSchema,
  type TSignInFormType,
} from "~components/lib/signInValidationSchema";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SigninForm(): React.JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<TSignInFormType>({
    resolver: zodResolver(signInValidationSchema),
    defaultValues: defaultSignInFormValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  useEffect(() => {
    const isPrefilled = searchParams?.get("prefilled");

    if (isPrefilled === "true") {
      const storedEmail = localStorage.getItem("LAST_CONNECTED_EMAIL");
      if (storedEmail !== null && storedEmail !== "") {
        setValue("email", storedEmail, { shouldValidate: true });
      }
    }
  }, [searchParams, setValue]);
  const onSubmit = (): void => {
    router.push("/");
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col px-8 pt-6 pb-10 text-white">
      {/* Back button */}
      <button
        type="button"
        onClick={() => {
          router.push("/");
        }}
        className="absolute top-5 left-8 flex cursor-pointer flex-col items-start gap-1 tracking-wide"
      >
        <ArrowLeft size={18} />
        <h1 className="text-xs font-semibold">
          <TranslateMessage txKey={txKeys.common.back} />
        </h1>
      </button>

      <div className="flex flex-col justify-center gap-4 pt-24 text-center">
        <div className="flex flex-col items-center gap-6">
          <Image src="/Theodo.svg" alt="Theodo logo" width={160} height={52} priority />
          <h1 className="text-4xl font-semibold">
            <TranslateMessage txKey={txKeys.common.welcome} />
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 px-16 pt-16">
          <Input
            label={<TranslateMessage txKey={txKeys.common.emailAddress} />}
            {...register("email", {
              onBlur: () => {
                clearErrors("email");
              },
            })}
            error={Boolean(errors.email)}
            errorMessage={errors.email?.message}
          />

          <Input
            type="password"
            variant="password"
            label={<TranslateMessage txKey={txKeys.common.password} />}
            {...register("password", {
              onBlur: () => {
                clearErrors("password");
              },
            })}
            error={Boolean(errors.password)}
            errorMessage={errors.password?.message}
          />

          <div className="flex flex-col gap-4 pt-8 text-sm font-semibold">
            <Button variant="primary" fullWidth type="submit">
              <TranslateMessage txKey={txKeys.common.signIn} />
            </Button>

            <Button variant="default" fullWidth>
              <Image src="/Google.svg" alt="Google icon" width={16} height={16} />
              <TranslateMessage txKey={txKeys.common.signupGoogle} />
            </Button>
            <Button variant="default" fullWidth>
              <Image src="/Apple.svg" alt="Apple icon" width={13} height={16} />
              <TranslateMessage txKey={txKeys.common.signupApple} />
            </Button>
          </div>

          <p className="pt-3 text-[13px] font-medium">
            <TranslateMessage txKey={txKeys.common.dontHaveAccount} />
          </p>
        </form>
      </div>
    </div>
  );
}
