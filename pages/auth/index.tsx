import React, { useState } from "react";
import LoginForm from "../../components/Login/LoginForm";
import { useRouter } from "next/router";
import { useAppStore } from "../../stores/appStore";

const Login = () => {
  const [magicWord, sayMagicWord] = useState({ key: "", pass: "" });
  const [error, setError] = useState(false);
  const router = useRouter();

  const setIsAuth = useAppStore((state) => state.setIsAuth);

  const onSubmit = () => {
    const { key, pass } = magicWord;
    if (key === "impala@rugby.com" && pass === "123") {
      setIsAuth(true);
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
