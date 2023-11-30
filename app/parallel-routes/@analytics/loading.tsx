import { CardSkeleton } from "@/components/skeletons";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
         <h2 className="custom-header2 text-red-300">Louding Analytics...</h2>
         <CardSkeleton />
        </>
    )
  }