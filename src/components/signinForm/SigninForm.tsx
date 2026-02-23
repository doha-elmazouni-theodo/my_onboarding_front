"use client";

import React, { useEffect, useState } from "react";

import { Button } from "~components/elements/button";
import { Input } from "~components/elements/input";
import {
  defaultSignInFormValues,
  signInValidationSchema,
  type TSignInFormType,
} from "~components/lib/signInValidationSchema";
import { useLoginMutation } from "~hooks/signin.hook";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";
import type { LoginResponse } from "~services/urls";
import { enqueueSnackbar } from "~utils/notistackRef";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";

export default function SigninForm(): React.JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    control,
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
  const { mutate } = useLoginMutation({
    onSuccess: (data: LoginResponse) => {
      clearErrors();
      if (!data.success) {
        enqueueSnackbar(data.error, { variant: "error", autoHideDuration: 1000 });
        return;
      }
      localStorage.setItem("LAST_CONNECTED_EMAIL", data.user.email);
      localStorage.setItem("LAST_CONNECTED_FULLNAME", data.user.fullname);
      router.push("/mySpace");
    },

    onError: (error) => {
      clearErrors();

      enqueueSnackbar(error, { variant: "error", autoHideDuration: 1000 });
    },
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
  const onSubmit = (formData: TSignInFormType) => {
    mutate(formData);
  };

  const [showPassword, setShowPassword] = useState(false);

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
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                label={<TranslateMessage txKey={txKeys.common.emailAddress} />}
                value={field.value}
                onChange={field.onChange}
                ref={field.ref}
                onBlur={() => {
                  field.onBlur();
                  clearErrors("email");
                }}
                error={errors.email !== undefined}
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                type={showPassword ? "text" : "password"} // ✅ c'est ça qui affiche / masque
                label={<TranslateMessage txKey={txKeys.common.password} />}
                value={field.value}
                onChange={field.onChange}
                onBlur={() => {
                  field.onBlur();
                  clearErrors("password");
                }}
                ref={field.ref}
                error={errors.password !== undefined}
                errorMessage={errors.password?.message}
                endAdornment={
                  <button
                    type="button"
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
                    className="cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                  </button>
                }
              />
            )}
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
