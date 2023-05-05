import React from "react";

import type BaseError from "~errors/BaseError";

import type { OptionsObject, SnackbarProvider } from "notistack";

const notistackRef = React.createRef<SnackbarProvider>();

export const enqueueSnackbar = (error: BaseError, variant: OptionsObject): void => {
  notistackRef.current?.enqueueSnackbar(error.errorCode, variant);
};

export default notistackRef;
