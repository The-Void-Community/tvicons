type XProps = {
  size?: number;
  color?: string;
  dangerousIgnoreError?: boolean;
  constantStrokeWidth?: boolean;
};

const PADDING = 2;
const STROKE_WIDTH = 2;

export const X = ({ 
  size: sizeWithoutPadding = 24,
  color = "#D9D9D9",
  constantStrokeWidth = false,
  dangerousIgnoreError = false
}: XProps) => {
  const size = sizeWithoutPadding - PADDING;
  const svgSize = size + PADDING;
  const center = svgSize / 2;

  const strokeWidth = constantStrokeWidth || size >= 24
    ? STROKE_WIDTH
    : STROKE_WIDTH / 2;

  const offset = (size - strokeWidth) / 2;
  const x = center - offset;
  const y = center - (strokeWidth / 2);

  if (size < 12 && !dangerousIgnoreError) {
    throw new Error("size of X can not be less than 12");
  }

  const XLine = (rotate: -45|45) => {
    return (
      <rect
        x={x}
        y={y}
        width={size}
        height={strokeWidth}
        rx={strokeWidth / 2}
        transform={`rotate(${rotate} ${center} ${center})`}
        fill={color}
      />
    )
  }

  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {XLine(45)}
      {XLine(-45)}
    </svg>
  );
};
