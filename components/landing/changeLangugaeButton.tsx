"use client";
import React from "react";

import i18n, { changeLanguage } from "~i18n/i18n";
import TranslateMessage from "~i18n/TranslateMessage";
import txKeys from "~i18n/translations";
import { Language } from "~i18n/types";

const ChangeLanguageButton: React.FC = () => (
  <button
    className="btn btn-blue"
    onClick={() => {
      changeLanguage(i18n.language === Language.FR ? Language.EN : Language.FR);
    }}
  >
    <TranslateMessage txKey={txKeys.common.changeLanguage} />
  </button>
);

export default ChangeLanguageButton;
