// app/Providers.tsx
'use client'

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}<Toaster position="bottom-right" /></SessionProvider>;
}
