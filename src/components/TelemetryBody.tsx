// 'use client'

export default function TelemetryBody() {
  return (
    <>
      {/* This is equivalent to the production-telemetry.html include */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Placeholder for the telemetry body content
            // You can adapt any analytics or tracking code from your Jekyll site
            // that was in the production-telemetry.html include
          `
        }}
      />
    </>
  )
}