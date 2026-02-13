"use client";
import { useEffect, useState } from "react";

import { z } from "zod";

export const lastLoggedInUserSchema = z.string().nullable();

export type LastLoggedInUserType = z.infer<typeof lastLoggedInUserSchema>;

export const useLastConnectedUser = (): LastLoggedInUserType => {
  const [user, setUser] = useState<LastLoggedInUserType>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem("LAST_CONNECTED_FULLNAME");

    try {
      const validatedUser = lastLoggedInUserSchema.parse(storedValue);

      setUser(validatedUser);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setUser(null);
    }
  }, []);

  return user;
};
