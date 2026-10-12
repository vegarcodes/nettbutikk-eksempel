import "./Skeleton.css";

export type SkeletonTextProps = {
  lines?: number;
}

export default function SkeletonText({
  lines = 4
}: SkeletonTextProps) {

  let lineElements = [];

  for (let i = 0; i < lines; i++) {
    lineElements.push(<div key={i} className="skeleton-text-line shimmer"></div>)
  }

  return (
    <div className="skeleton-text-wrapper">
      {lineElements}
    </div>
  )
}