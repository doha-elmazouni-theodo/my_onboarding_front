// renderer.tsx
import React from "react";

import { TranslationProvider } from "@/providers/TranslationProvider";

import type { RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";

export class Renderer {
  // 1. UI privée
  private ui: ReactElement;

  constructor(ui: ReactElement) {
    this.ui = ui;
  }

  // 2. Ajout du provider de traduction
  withTranslation() {
    this.ui = <TranslationProvider>{this.ui}</TranslationProvider>;

    return this; // important pour le chaining
  }

  // 3. Méthode pour regrouper tous les providers
  withAllProviders() {
    return this.withTranslation();
    // plus tard :
    // .withTheme()
    // .withAuth()
    // .withQueryClient()
  }

  // 4. Render final
  render(): RenderResult {
    return render(this.ui);
  }
}
