"use client";
// import { CanvasContextProvider } from "./CanvasContext";
import { UserContextProvider } from "./UserContext";

export default function EditorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserContextProvider>
      {children}
      {/* <CanvasContextProvider>{children}</CanvasContextProvider> */}
    </UserContextProvider>
  );
}
