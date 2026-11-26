import { Suspense } from "react";
import SupportInformation from "./SupportInformation";

export default function SupportPage() {
    return (
        <Suspense fallback={<p>Loading support information...</p>}>
            <SupportInformation />
        </Suspense>
    );
}