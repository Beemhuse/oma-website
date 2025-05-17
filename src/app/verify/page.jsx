import ActionLoader from "@/components/reusables/ActionLoader";
import { VerifyIDCardContent } from "@/components/VerifyComponent";
import { Suspense } from "react";

// The main exported component that wraps with Suspense
export default function VerifyIDCard() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <ActionLoader isVisible={true} />
      </div>
    }>
      <VerifyIDCardContent />
    </Suspense>
  );
}