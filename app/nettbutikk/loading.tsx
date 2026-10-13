import SkeletonCard from "@/components/Skeleton/SkeletonCard"
import SkeletonTitle from "@/components/Skeleton/SkeletonTitle"
import SkeletonText from "@/components/Skeleton/SkeletonText"

export default function WebstoreLoadingPage() {
  return (
    <>
      <SkeletonTitle />

      <SkeletonText lines={3} />

      <SkeletonText lines={4} />

      <div style={{ 
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1rem" 
      }}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  )
}