import type { AdditionalProps, XProps } from "./constants";
import { STROKE_WIDTH, X_PADDING } from "./constants";

const X = ({ 
  size: sizeWithoutPadding = 24,
  color = "#D9D9D9",
  constantStrokeWidth = false,
  dangerousIgnoreError = false,
  className,
  ...props
}: AdditionalProps<XProps>) => {
  const size = sizeWithoutPadding - X_PADDING;
  const svgSize = size + X_PADDING;
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
    <div
      className={[
        "block h-fit w-fit",
        className
      ].join(" ")}
      {...props}
    >
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
    </div>
  );
};

export {
  X,
  X as TvX
};
