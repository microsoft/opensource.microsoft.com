'use client'

export default function TelemetryScript() {
  return (
    <>
      {/* This is equivalent to the production-telemetry-script.html include */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Placeholder for the telemetry script content
            // You can adapt any analytics or tracking code from your Jekyll site
            // that was in the production-telemetry-script.html include
          `
        }}
      />
    </>
  )
}