import SkeletonCard from "@/components/Skeleton/SkeletonCard"
import SkeletonHeading from "@/components/Skeleton/SkeletonHeading"
import SkeletonText from "@/components/Skeleton/SkeletonText"

export default function WebshopLoadingPage() {
  return (
    <>
      <SkeletonHeading />
      <SkeletonText lines={2} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  )
}