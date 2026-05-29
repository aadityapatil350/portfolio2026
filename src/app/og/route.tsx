import { ImageResponse } from "next/og";
import { type NextRequest } from "next/server";

export const runtime = "edge";

const SITE_NAME = "Aditya";
const SITE_URL = "https://adityapatil.work";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get("title") || SITE_NAME;
  const description =
    searchParams.get("description") ||
    "Lead Software Engineer building renewable energy SaaS. Indie hacker.";
  const type = searchParams.get("type") || "page";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#FAFAF9",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#2563EB",
            }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#0A0A0A",
              letterSpacing: "-0.02em",
            }}
          >
            adityapatil.work
          </span>
        </div>

        {/* Type badge */}
        {type !== "page" && (
          <div
            style={{
              position: "absolute",
              top: "60px",
              right: "80px",
              padding: "4px 12px",
              borderRadius: "9999px",
              border: "1px solid #E5E5E5",
              fontSize: "14px",
              color: "#737373",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {type}
          </div>
        )}

        {/* Divider */}
        <div
          style={{
            position: "absolute",
            bottom: "180px",
            left: "80px",
            right: "80px",
            height: "1px",
            backgroundColor: "#E5E5E5",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "12px",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? "40px" : "52px",
              fontWeight: 700,
              color: "#0A0A0A",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "20px",
            color: "#737373",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          {description.length > 120
            ? description.slice(0, 117) + "..."
            : description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
