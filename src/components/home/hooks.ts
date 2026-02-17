import { useEffect, useState } from "react";

import { lastLoggedInUserSchema, type LastLoggedInUserType } from "~components/lib/schema";

export const useLastConnectedUser = (): LastLoggedInUserType => {
  const [user, setUser] = useState<LastLoggedInUserType>(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("LAST_CONNECTED_FULLNAME");
      const validatedUser = lastLoggedInUserSchema.parse(storedUser);
      setUser(validatedUser);
    } catch (_error) {
      setUser(null);
    }
  }, []);

  return user;
};
