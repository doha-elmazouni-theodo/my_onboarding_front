import { signInValidationSchema } from "~components/lib/signInValidationSchema";

describe("signInValidationSchema", () => {
  it("detects missing email", () => {
    const invalidData = {
      password: "abcd",
    };

    expect(() => signInValidationSchema.parse(invalidData)).toThrow();
  });

  it("detects email not ending with @theodo.com", () => {
    const invalidData = {
      email: "test@gmail.com",
      password: "abcd",
    };

    expect(() => signInValidationSchema.parse(invalidData)).toThrow();
  });

  it("detects missing password", () => {
    const invalidData = {
      email: "test@theodo.com",
    };

    expect(() => signInValidationSchema.parse(invalidData)).toThrow();
  });

  it("detects password with less than 4 characters", () => {
    const invalidData = {
      email: "test@theodo.com",
      password: "abc",
    };

    expect(() => signInValidationSchema.parse(invalidData)).toThrow();
  });
});
