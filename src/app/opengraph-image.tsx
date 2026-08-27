import { ImageResponse } from "next/og";
import { personal } from "@/data";

export const alt = `${personal.name} — Full-Stack Software Engineer`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/**
 * Dynamic OpenGraph image generator.
 * Produces a high-resolution 1200x630 preview card.
 */
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#080b12",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 70px",
        color: "#e6edf3",
        border: "2px solid #1e2530",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#3b5bdb",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            RN
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: "600",
              color: "#e6edf3",
            }}
          >
            {personal.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "6px 18px",
            borderRadius: "20px",
            background: "rgba(59, 91, 219, 0.15)",
            color: "#4c6ef5",
            fontSize: "15px",
            fontWeight: "600",
            border: "1px solid rgba(59, 91, 219, 0.3)",
          }}
        >
          {personal.location}
        </div>
      </div>

      {/* Center content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#4c6ef5",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          {personal.title} • {personal.subtitle}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "52px",
            fontWeight: "bold",
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-1px",
          }}
        >
          Scalable Web Apps & Real-Time Distributed Systems
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "20px",
            color: "#8b949e",
            lineHeight: 1.4,
            maxWidth: "950px",
          }}
        >
          NestJS • TypeScript • PostgreSQL • Redis • AWS SQS • Socket.io •
          Next.js
        </div>
      </div>

      {/* Bottom tags */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {[
          "1,000+ Concurrent Players",
          "B2B Gaming Platform",
          "4 Years Experience",
          "Clean Architecture",
        ].map((tag) => (
          <div
            key={tag}
            style={{
              display: "flex",
              padding: "8px 18px",
              borderRadius: "8px",
              background: "#0f1319",
              border: "1px solid #1e2530",
              color: "#8b949e",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    }
  );
}
