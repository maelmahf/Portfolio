import { ImageResponse } from "next/og";

export const alt = "Mohammed Elmahfoudi — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f2f0e9", color: "#11110f", padding: "54px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, textTransform: "uppercase", letterSpacing: 2 }}><span>Portfolio / 2026</span><span>Software Engineer</span></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 112, fontWeight: 800, lineHeight: .78, letterSpacing: -9, textTransform: "uppercase" }}><span>Mohammed</span><span>Elmahfoudi</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #11110f", paddingTop: 18, fontSize: 19 }}><span>Full-Stack / Backend / DevOps</span><span>Morocco ↗</span></div>
    </div>,
    size,
  );
}
