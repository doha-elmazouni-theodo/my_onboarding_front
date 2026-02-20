declare module "~i18n/translations" {
  const txKeys: {
    common: {
      changeLanguage: string;
      labelExample: string;
      labelExampleFormatted: string;
      generalError: string;
      styledButton: string;
      megaTitle: string;
      subtitle: string;
      join: string;
      signIn: string;
      continueAs: string;
      welcome: string;
      back: string;
      dontHaveAccount: string;
      signupGoogle: string;
      signupApple: string;
      emailAddress: string;
      password: string;
    };
    errors: {
      emailInvalid: string;
      passwordIncorrect: string;
      passwordTooShort: string;
      emailMustEndWithTheodo: string;
      emailRequired: string;
      passwordRequired: string;
    };
  };

  export default txKeys;
}
