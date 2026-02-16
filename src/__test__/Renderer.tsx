// renderer.tsx
import React from "react";

import { Providers } from "~app/providers";
import { TestTranslationProvider } from "~i18n";

// eslint-disable-next-line no-restricted-imports
import type { RenderResult } from "@testing-library/react";
// eslint-disable-next-line no-restricted-imports
import { render } from "@testing-library/react";
import type { ReactElement } from "react";

export class Renderer {
  private ui: ReactElement;

  public constructor(ui: ReactElement) {
    this.ui = ui;
  }

  public withTranslation(): this {
    this.ui = <TestTranslationProvider>{this.ui}</TestTranslationProvider>;

    return this;
  }

  public withAllProviders(): this {
    this.ui = <Providers>{this.ui}</Providers>;
    return this;
  }

  public render(): RenderResult {
    return render(this.ui);
  }
}
