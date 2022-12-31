import React, { useEffect, useState } from "react";
import LoginForm from "@components/Login/LoginForm";
import { useRouter } from "next/router";
import { useAppStore } from "@stores/appStore";
import { eventLogger } from "@utils/utils";
import { setCookie } from "nookies";

const Login = () => {
  const [magicWord, sayMagicWord] = useState({ key: "", pass: "" });
  const [error, setError] = useState(false);
  const router = useRouter();

  const setIsAuth = useAppStore((state) => state.setIsAuth);
  useEffect(() => {
    eventLogger({
      event: "Visit Login Page",
    });
  }, []);

  const onSubmit = () => {
    const { key, pass } = magicWord;
    if (
      (key === "impala@rugby.com" && pass === "123") ||
      (key === "@guest-user" && pass === "imp@l@123") ||
      (key === "takeover@rugby.com" && pass === "2023")
    ) {
      setIsAuth(true, key);
      setCookie(null, "authEmail", key, {
        maxAge: 36000,
        sameSite: "strict",
        path: "/",
      });
      router.push("/dashboard");
    } else {
      setError(true);
    }
  };
  return (
    <div className="h-full flex items-center">
      <LoginForm
        magicWord={magicWord}
        sayMagicWord={sayMagicWord}
        onSubmit={onSubmit}
        error={error}
      />
    </div>
  );
};

export default Login;
