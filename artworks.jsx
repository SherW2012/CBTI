// artworks.jsx — Refined OrnateFrame with user photo upload

function PlusUploadIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="rgba(140,120,90,0.45)" strokeWidth="1" strokeDasharray="2.5 2.5"/>
      <line x1="16" y1="9" x2="16" y2="23" stroke="rgba(140,120,90,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="9" y1="16" x2="23" y2="16" stroke="rgba(140,120,90,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function OrnateFrame({ userImage, onUpload, height, aspectRatio }) {
  const fileInputRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(false);

  // Default 3:4 portrait, but adapt to user image's aspect ratio if provided
  const ratio = aspectRatio || (3 / 4); // width / height
  const h = height || 200;
  const innerH = h - 24; // mat + frame border ~12 each side
  const innerW = Math.round(innerH * ratio);
  const fw = innerW + 24;

  const border = 11;

  function handleClick() {
    if (fileInputRef.current) fileInputRef.current.click();
  }
  function handleFile(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        onUpload && onUpload({ src: ev.target.result, ratio: img.width / img.height });
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  }

  return (
    <div
      style={{
        position: 'relative',
        width: fw,
        height: h,
        flexShrink: 0,
        cursor: 'pointer',
        transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        style={{ display: 'none' }}
      />

      {/* Outer subtle shadow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 3,
        boxShadow: hovered
          ? '0 8px 22px oklch(30% 0.04 60 / 0.18), 0 2px 6px oklch(30% 0.04 60 / 0.12)'
          : '0 4px 14px oklch(30% 0.04 60 / 0.12), 0 1px 3px oklch(30% 0.04 60 / 0.08)',
        transition: 'box-shadow 0.25s',
      }}/>

      {/* Frame face — muted, low-saturation antique gold */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 3,
        background: 'linear-gradient(145deg, oklch(72% 0.04 75) 0%, oklch(82% 0.05 78) 30%, oklch(75% 0.045 73) 55%, oklch(80% 0.05 76) 75%, oklch(70% 0.04 72) 100%)',
      }}/>

      {/* Inner mat shadow line */}
      <div style={{
        position: 'absolute',
        inset: border - 2,
        borderRadius: 1,
        background: 'oklch(94% 0.01 75)',
        boxShadow: 'inset 0 1px 3px oklch(30% 0.02 60 / 0.18)',
      }}/>

      {/* Image area */}
      <div style={{
        position: 'absolute',
        inset: border,
        overflow: 'hidden',
        borderRadius: 1,
        background: userImage
          ? 'oklch(96% 0.005 75)'
          : 'oklch(93% 0.008 72)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {userImage ? (
          <img
            src={userImage}
            alt="your photo"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            opacity: hovered ? 1 : 0.85,
            transition: 'opacity 0.2s',
          }}>
            <PlusUploadIcon/>
            <span style={{
              fontSize: 9,
              fontFamily: "'DM Mono', monospace",
              color: 'oklch(55% 0.02 65)',
              letterSpacing: '0.08em',
            }}>
              UPLOAD
            </span>
          </div>
        )}
      </div>

      {/* Subtle inner gold line */}
      <div style={{
        position: 'absolute',
        inset: border,
        border: '1px solid oklch(70% 0.04 75 / 0.5)',
        borderRadius: 1,
        zIndex: 3,
        pointerEvents: 'none',
      }}/>

      {/* Minimal corner ornaments — simple dots */}
      <svg width={fw} height={h} style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none' }}>
        {[[border / 2, border / 2], [fw - border / 2, border / 2], [fw - border / 2, h - border / 2], [border / 2, h - border / 2]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="1.2" fill="oklch(60% 0.04 70)" opacity="0.55"/>
        ))}
      </svg>
    </div>
  );
}

Object.assign(window, { OrnateFrame });
