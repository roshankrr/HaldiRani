import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      cursor.style.top = `${event.clientY}px`;
      cursor.style.left = `${event.clientX}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Hide the default cursor
    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-50  pointer-events-none"
      style={{
        width: "30px",
        height: "30px",
        backgroundImage: "url('/cursoor.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default CustomCursor;

