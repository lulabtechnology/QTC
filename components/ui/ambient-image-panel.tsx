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
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#0d1b31_0%,#08111d_100%)] shadow-premium ${className}`}
    >
      <div className="absolute inset-0 bg-radial-grid bg-[size:22px_22px] opacity-[0.12]" />
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${mobileImage})` }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${desktopImage})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,22,0.18),rgba(4,10,22,0.76))]" />
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,138,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)] ${overlayClassName}`}
      />
      {label ? (
        <div className="relative z-10 p-4">
          <span className="inline-flex rounded-full border border-white/12 bg-black/20 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur">
            {label}
          </span>
        </div>
      ) : null}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(7,17,31,0.72))]" />
    </div>
  );
}
