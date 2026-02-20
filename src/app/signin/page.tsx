import React from "react";

import AuthImage from "~components/authImage";
import SigninForm from "~components/signinForm";

export default function SigninPage(): React.JSX.Element {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      {/* Gauche: image (cachée sur mobile) */}
      <div className="hidden  lg:block">
        <AuthImage src="/microphone.png" alt="Microphone" />
      </div>

      {/* Droite: formulaire */}
      <div className="flex justify-center">
        <SigninForm />
      </div>
    </div>
  );
}
