import { CardSkeleton } from "@/components/skeletons";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
         <h2>Louding Analytics...</h2>
         <CardSkeleton />
        </>
    )
  }