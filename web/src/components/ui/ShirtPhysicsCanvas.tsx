"use client";
import dynamic from "next/dynamic";

const ShirtScene3D = dynamic(() => import("./ShirtScene3D"), {
  ssr: false,
  loading: () => null,
});

export default function ShirtPhysicsCanvas() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    >
      <ShirtScene3D />
    </div>
  );
}
