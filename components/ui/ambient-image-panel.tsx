type AmbientImagePanelProps = {
  desktopImage: string;
  mobileImage: string;
  label?: string;
  className?: string;
  overlayClassName?: string;
};

export function AmbientImagePanel({
  desktopImage,
  mobileImage,
  label,
  className = "",
  overlayClassName = ""
}: AmbientImagePanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#dde5ec_0%,#b7c4d0_100%)] shadow-premium ${className}`}
    >
      <div className="absolute inset-0 bg-radial-grid bg-[size:22px_22px] opacity-[0.08]" />
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${mobileImage})` }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${desktopImage})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,28,0.12),rgba(8,16,28,0.58))]" />
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(69,108,139,0.12),transparent_28%)] ${overlayClassName}`}
      />
      {label ? (
        <div className="relative z-10 p-4">
          <span className="inline-flex rounded-full border border-white/30 bg-white/18 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/90 backdrop-blur">
            {label}
          </span>
        </div>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(8,16,28,0.72))]" />
    </div>
  );
}
