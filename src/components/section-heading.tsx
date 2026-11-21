type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  index,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-index">{index}</span>
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
