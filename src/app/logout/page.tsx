"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");


    const timer = setTimeout(() => {
      router.push("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-3">
        You’ve logged out successfully ✅
      </h1>
      <p className="text-gray-600">Redirecting to login page...</p>
    </div>
  );
}
