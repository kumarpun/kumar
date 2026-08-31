"use client";

import { useCallback, useRef } from "react";

/**
 * Pointer-driven 3D tilt. Writes --rx/--ry (rotation) and --mx/--my (sheen
 * origin) onto the element so all the actual motion lives in CSS.
 *
 * Only engages on devices with a real hover pointer — on touch there is no
 * pointerleave to reset with, so an ungated tilt sticks mid-rotation.
 */
export default function Tilt({
  children,
  className = "",
  max = 9,
  as: Tag = "div",
  ...rest
}) {
  const ref = useRef(null);
  const frame = useRef(0);

  const canTilt = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onPointerMove = useCallback(
    (event) => {
      const node = ref.current;
      if (!node || !canTilt()) return;

      const { clientX, clientY } = event;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const px = (clientX - rect.left) / rect.width;
        const py = (clientY - rect.top) / rect.height;

        node.dataset.live = "1";
        node.style.setProperty("--ry", `${(px - 0.5) * 2 * max}deg`);
        node.style.setProperty("--rx", `${(0.5 - py) * 2 * max}deg`);
        node.style.setProperty("--mx", `${px * 100}%`);
        node.style.setProperty("--my", `${py * 100}%`);
      });
    },
    [max]
  );

  const onPointerLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    cancelAnimationFrame(frame.current);
    node.dataset.live = "0";
    node.style.setProperty("--rx", "0deg");
    node.style.setProperty("--ry", "0deg");
  }, []);

  return (
    <Tag
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`tilt ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
