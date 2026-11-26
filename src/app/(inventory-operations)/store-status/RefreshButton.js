"use client";
import { useRouter } from "next/navigation";

export default function RefreshButton() {
    const router = useRouter();
    return (
        <button onClick={()=>router.refresh()} className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Refresh Current Route
        </button>
    );
}