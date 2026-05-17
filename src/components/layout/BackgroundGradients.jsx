export default function BackgroundGradients() {
  return (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      <div className="glow-spot w-[500px] h-[500px] bg-white/[0.03] -top-32 -left-32" />
      <div className="glow-spot w-[600px] h-[600px] bg-white/[0.02] top-1/2 -right-48" />
      <div className="glow-spot w-[400px] h-[400px] bg-white/[0.025] bottom-0 left-1/3" />
    </div>
  )
}
