type XProps = {
  size?: number;
  color?: string;
  background?: string;
  dangerousIgnoreError?: boolean;
  constantStrokeWidth?: boolean;
  multiplier?: number;
};

const PADDING = 4;
const STROKE_WIDTH = 2;
const MULTIPLIER = 0.8;

export const CircleX = ({ 
  size: sizeWithoutPadding = 24,
  color = "var(--bg-default)",
  background = "var(--fg-default)",
  constantStrokeWidth = false,
  dangerousIgnoreError = false,
  multiplier = MULTIPLIER
}: XProps) => {
  const size = sizeWithoutPadding - PADDING;
  if (size < 16 && !dangerousIgnoreError) {
    throw new Error("size of X can not be less than 16");
  }

  if (multiplier > MULTIPLIER) {
    throw new Error("multiplier of X can not be more than " + MULTIPLIER);
  }

  const svgSize = size + PADDING;
  const xSize = size * multiplier;
  const center = svgSize / 2;

  const strokeWidth = constantStrokeWidth || size >= 24
    ? STROKE_WIDTH
    : STROKE_WIDTH / 2;

  const offset = (xSize - strokeWidth) / 2;
  const x = center - offset;
  const y = center - (strokeWidth / 2);

  const XLine = (rotate: -45|45) => {
    return (
      <rect
        x={x}
        y={y}
        width={xSize}
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
      <circle
        cx={center}
        cy={center}
        r={center}
        fill={background}
      />

      {XLine(45)}
      {XLine(-45)}
    </svg>
  );
};
