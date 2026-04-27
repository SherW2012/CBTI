// artworks.jsx — OrnateFrame + ArtworkSVG components
// Loaded via <script type="text/babel" src="artworks.jsx"> in main file

function ArtworkSVG({ type }) {
  const s = { viewBox: '0 0 78 128', width: '100%', height: '100%' };
  switch (type) {
    case 'FUJI': return (
      <svg {...s}>
        <rect width="78" height="128" fill="#b4c6d4"/>
        <ellipse cx="39" cy="50" rx="30" ry="38" fill="white" opacity="0.45"/>
        <rect x="16" y="8" width="46" height="68" fill="none" stroke="rgba(230,242,252,0.9)" strokeWidth="2.5"/>
        <line x1="39" y1="8" x2="39" y2="76" stroke="rgba(230,242,252,0.75)" strokeWidth="1.5"/>
        <line x1="16" y1="42" x2="62" y2="42" stroke="rgba(230,242,252,0.75)" strokeWidth="1.5"/>
        <path d="M16,8 C21,15 19,33 16,42 C20,33 25,25 27,8Z" fill="rgba(238,248,255,0.65)"/>
        <path d="M62,8 C57,15 59,33 62,42 C58,33 53,25 51,8Z" fill="rgba(238,248,255,0.65)"/>
        <circle cx="39" cy="76" r="7" fill="#2c3c48" opacity="0.8"/>
        <path d="M32,83 Q30,108 31,128 L47,128 Q48,108 46,83Z" fill="#2c3c48" opacity="0.65"/>
        <rect y="110" width="78" height="18" fill="#8eaabb" opacity="0.35"/>
        <rect width="78" height="128" fill="#6090b0" opacity="0.06"/>
      </svg>
    );
    case 'CANON': return (
      <svg {...s}>
        <defs>
          <radialGradient id="cg1" cx="50%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#f8e4ae"/>
            <stop offset="100%" stopColor="#c07022"/>
          </radialGradient>
        </defs>
        <rect width="78" height="128" fill="url(#cg1)"/>
        <circle cx="8" cy="18" r="9" fill="white" opacity="0.12"/>
        <circle cx="68" cy="12" r="13" fill="white" opacity="0.09"/>
        <circle cx="14" cy="108" r="8" fill="white" opacity="0.1"/>
        <circle cx="62" cy="100" r="11" fill="white" opacity="0.08"/>
        <ellipse cx="39" cy="54" rx="13" ry="15" fill="#180e06" opacity="0.9"/>
        <path d="M26,54 C26,39 52,39 52,54 C49,41 29,41 26,54Z" fill="#100808"/>
        <path d="M20,69 Q22,95 24,128 L54,128 Q56,95 58,69 Q48,63 39,63 Q30,63 20,69Z" fill="#180e06" opacity="0.85"/>
      </svg>
    );
    case 'SONY': return (
      <svg {...s}>
        <rect width="78" height="128" fill="#0c1420"/>
        {[11,22,33,44,55,66].map((x,i) => <line key={'sv'+i} x1={x} y1="0" x2={x} y2="108" stroke="#1a2e48" strokeWidth="0.6"/>)}
        {[13,26,39,52,65,78,91].map((y,i) => <line key={'sh'+i} x1="0" y1={y} x2="78" y2={y} stroke="#1a2e48" strokeWidth="0.6"/>)}
        <polyline points="0,72 10,66 16,78 24,60 30,80 38,62 46,74 54,58 60,70 68,54 78,62" fill="none" stroke="#2858a0" strokeWidth="1.3"/>
        <rect x="0" y="108" width="11" height="20" fill="#c82020"/>
        <rect x="11" y="108" width="11" height="20" fill="#c8c020"/>
        <rect x="22" y="108" width="11" height="20" fill="#20c020"/>
        <rect x="33" y="108" width="11" height="20" fill="#20c8c8"/>
        <rect x="44" y="108" width="11" height="20" fill="#2020c8"/>
        <rect x="55" y="108" width="11" height="20" fill="#c020c8"/>
        <rect x="66" y="108" width="12" height="20" fill="#e8e8e8"/>
        <text x="4" y="105" fontSize="5" fill="#4070b0" fontFamily="monospace" opacity="0.8">S-Log3  LUT</text>
      </svg>
    );
    case 'NIKON': return (
      <svg {...s}>
        <defs>
          <linearGradient id="ng1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c5d8e8"/>
            <stop offset="100%" stopColor="#e8f0f8"/>
          </linearGradient>
        </defs>
        <rect width="78" height="128" fill="url(#ng1)"/>
        <rect y="95" width="78" height="33" fill="#b8c8d4" opacity="0.55"/>
        <path d="M20,128 C20,100 30,80 38,60 C42,50 44,35 44,22" fill="none" stroke="#2a3038" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M38,60 C32,52 22,48 14,44" fill="none" stroke="#2a3038" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M40,72 C46,66 58,62 64,58" fill="none" stroke="#2a3038" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M42,46 C38,40 28,34 21,30" fill="none" stroke="#2a3038" strokeWidth="1" strokeLinecap="round"/>
        <ellipse cx="44" cy="22" rx="5" ry="3.5" fill="#2a3038"/>
        <circle cx="47" cy="20" r="2.5" fill="#2a3038"/>
        <path d="M49.5,19.5 L55,17 L50,21Z" fill="#2a3038"/>
        <rect y="90" width="78" height="38" fill="white" opacity="0.28"/>
      </svg>
    );
    case 'LEICA': return (
      <svg {...s}>
        <rect width="78" height="128" fill="#080808"/>
        <polygon points="78,0 78,92 18,128 0,128 0,102" fill="#e4e4e0" opacity="0.88"/>
        <polygon points="78,0 78,68 36,128 18,128 78,92" fill="white" opacity="0.13"/>
        <circle cx="22" cy="112" r="5" fill="#101010"/>
        <path d="M18,117 Q17,123 18,128 L26,128 Q27,123 26,117Z" fill="#101010"/>
        <line x1="0" y1="58" x2="28" y2="128" stroke="#141414" strokeWidth="2.5"/>
        <line x1="0" y1="80" x2="13" y2="128" stroke="#141414" strokeWidth="2"/>
      </svg>
    );
    case 'HASSELBLAD': return (
      <svg {...s}>
        <defs>
          <linearGradient id="hg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ddd0cc"/>
            <stop offset="100%" stopColor="#c4b0aa"/>
          </linearGradient>
        </defs>
        <rect width="78" height="128" fill="url(#hg1)"/>
        <rect x="8" y="8" width="62" height="112" fill="none" stroke="rgba(100,70,60,0.25)" strokeWidth="0.8"/>
        <rect x="14" y="14" width="50" height="100" fill="none" stroke="rgba(100,70,60,0.14)" strokeWidth="0.5"/>
        {[[8,8],[70,8],[8,120],[70,120]].map(([cx,cy],i) => <circle key={'hc'+i} cx={cx} cy={cy} r="2" fill="rgba(100,70,60,0.4)"/>)}
        <ellipse cx="39" cy="42" rx="7" ry="8" fill="rgba(50,35,30,0.55)"/>
        <path d="M31,50 C29,80 30,110 31,114 L47,114 C48,110 49,80 47,50 Q43,45 39,45 Q35,45 31,50Z" fill="rgba(50,35,30,0.42)"/>
        <line x1="14" y1="64" x2="64" y2="64" stroke="rgba(100,70,60,0.12)" strokeWidth="0.5"/>
        <line x1="14" y1="96" x2="64" y2="96" stroke="rgba(100,70,60,0.12)" strokeWidth="0.5"/>
      </svg>
    );
    case 'OLYMPUS': return (
      <svg {...s}>
        <defs>
          <linearGradient id="og1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0a840"/>
            <stop offset="40%" stopColor="#d08048"/>
            <stop offset="100%" stopColor="#6a4028"/>
          </linearGradient>
        </defs>
        <rect width="78" height="128" fill="url(#og1)"/>
        <circle cx="58" cy="28" r="12" fill="#f8e060" opacity="0.88"/>
        <circle cx="58" cy="28" r="17" fill="#f8d040" opacity="0.28"/>
        <path d="M0,80 L18,52 L36,66 L54,42 L72,58 L78,54 L78,128 L0,128Z" fill="#3a2818" opacity="0.85"/>
        <path d="M0,95 L22,74 L42,84 L62,67 L78,78 L78,128 L0,128Z" fill="#2a1e10" opacity="0.9"/>
        <path d="M0,110 L26,92 L52,102 L78,90 L78,128 L0,128Z" fill="#1a1208" opacity="0.95"/>
        <rect y="76" width="78" height="18" fill="white" opacity="0.1"/>
      </svg>
    );
    case 'RICOH': return (
      <svg {...s}>
        <rect width="78" height="128" fill="#f0c830"/>
        <rect x="0" y="0" width="36" height="62" fill="#1a1808"/>
        <polygon points="36,62 36,0 78,0 78,32" fill="#2a2210" opacity="0.9"/>
        <rect y="92" width="78" height="36" fill="#1a1808"/>
        <rect x="10" y="96" width="58" height="3" fill="white" opacity="0.6"/>
        <rect x="10" y="103" width="58" height="3" fill="white" opacity="0.6"/>
        <rect x="10" y="110" width="58" height="3" fill="white" opacity="0.6"/>
        <circle cx="50" cy="83" r="4" fill="#1a1808"/>
        <path d="M46,87 Q45,94 46,102 L54,102 Q55,94 54,87Z" fill="#1a1808"/>
        <rect x="40" y="10" width="5" height="34" fill="#e84020" opacity="0.85"/>
      </svg>
    );
    case 'APPLE': return (
      <svg {...s}>
        <rect width="78" height="128" fill="#f2f4f0"/>
        <rect y="86" width="78" height="42" fill="#e8eae6"/>
        <line x1="0" y1="86" x2="78" y2="86" stroke="#d0d4d0" strokeWidth="0.8"/>
        <path d="M0,86 L14,74 L28,80 L44,68 L62,76 L78,70 L78,86Z" fill="#c8d0c8" opacity="0.55"/>
        <circle cx="39" cy="83" r="2" fill="#606860"/>
        <line x1="39" y1="85" x2="39" y2="90" stroke="#606860" strokeWidth="1.2"/>
        <rect x="16" y="112" width="46" height="2.5" fill="#c8ccc8" opacity="0.5" rx="1.2"/>
        <rect x="24" y="118" width="30" height="2" fill="#d4d8d4" opacity="0.4" rx="1"/>
      </svg>
    );
    case 'ANDROID': return (
      <svg {...s}>
        <defs>
          <filter id="blra">
            <feGaussianBlur stdDeviation="2.8"/>
          </filter>
        </defs>
        <rect width="78" height="128" fill="#e8e0d8"/>
        <g filter="url(#blra)">
          <rect x="20" y="46" width="38" height="40" rx="4" fill="#8a7a68" opacity="0.75"/>
          <rect x="20" y="46" width="38" height="7" rx="2" fill="#6a5a48" opacity="0.65"/>
          <path d="M58,58 C65,58 69,63 69,68 C69,73 65,76 58,76" fill="none" stroke="#8a7a68" strokeWidth="5" strokeLinecap="round" opacity="0.6"/>
          <path d="M30,43 C30,37 33,34 30,29" fill="none" stroke="#a09080" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <path d="M39,41 C39,35 42,32 39,27" fill="none" stroke="#a09080" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          <rect y="86" width="78" height="42" fill="#d0c8c0" opacity="0.8"/>
        </g>
        <rect width="78" height="128" fill="white" opacity="0.2"/>
        <text x="5" y="124" fontSize="4" fill="#808080" fontFamily="monospace" opacity="0.6">2025/03/14  09:47</text>
      </svg>
    );
    case 'DJI': return (
      <svg {...s}>
        <rect width="78" height="128" fill="#050c18"/>
        {[0,13,26,39,52,65,78].map((x,i) => <line key={'dv'+i} x1={x} y1="0" x2={x} y2="90" stroke="#0a2040" strokeWidth="0.8"/>)}
        {[0,15,30,45,60,75,90].map((y,i) => <line key={'dh'+i} x1="0" y1={y} x2="78" y2={y} stroke="#0a2040" strokeWidth="0.8"/>)}
        <path d="M39,0 L39,90" stroke="#c88020" strokeWidth="1.5" opacity="0.65"/>
        <path d="M0,52 L78,52" stroke="#c88020" strokeWidth="1.2" opacity="0.5"/>
        <path d="M0,28 L78,62" stroke="#c88020" strokeWidth="0.7" opacity="0.35"/>
        {[[5,5],[20,8],[35,18],[58,5],[67,22],[46,35],[9,40],[70,42],[28,48],[55,56]].map(([x,y],i) =>
          <rect key={'dl'+i} x={x} y={y} width={2+i%3} height={2+i%2} fill="#f0d080" opacity={0.4+i*0.04}/>
        )}
        <path d="M0,70 C22,68 42,74 56,70 L78,68" fill="none" stroke="#1a4060" strokeWidth="5" opacity="0.8"/>
        <rect y="90" width="78" height="38" fill="#0a1828"/>
        <rect y="88" width="78" height="5" fill="#c87010" opacity="0.4"/>
        <path d="M0,90 L5,80 L10,82 L14,70 L18,72 L22,64 L26,66 L30,56 L36,58 L40,50 L44,58 L48,54 L52,62 L56,60 L60,68 L64,66 L68,73 L72,71 L78,78 L78,90Z" fill="#0e1e30"/>
      </svg>
    );
    case 'XZLWC': return (
      <svg {...s}>
        <rect x="0" y="0" width="40" height="65" fill="#e8c870"/>
        <rect x="40" y="0" width="38" height="65" fill="#8eaabf"/>
        <rect x="0" y="65" width="40" height="63" fill="#7aac80"/>
        <rect x="40" y="65" width="38" height="63" fill="#1a1820"/>
        <circle cx="20" cy="28" r="8" fill="#c09040" opacity="0.65"/>
        <path d="M13,36 Q12,52 13,65 L27,65 Q28,52 27,36Z" fill="#c09040" opacity="0.55"/>
        <rect x="44" y="8" width="12" height="22" fill="#3a5068" opacity="0.8"/>
        <circle cx="65" cy="48" r="5" fill="white" opacity="0.22"/>
        <path d="M0,65 L10,50 L20,58 L30,46 L40,54 L40,65Z" fill="#4a8050" opacity="0.7"/>
        <rect x="44" y="70" width="30" height="18" fill="#0c1420" opacity="0.9"/>
        <circle cx="60" cy="97" r="4" fill="#c06020" opacity="0.6"/>
        <line x1="41" y1="0" x2="39" y2="128" stroke="white" strokeWidth="1.5" opacity="0.45"/>
        <line x1="0" y1="64" x2="78" y2="66" stroke="white" strokeWidth="1.5" opacity="0.45"/>
        <circle cx="40" cy="65" r="3.5" fill="white" opacity="0.75"/>
        <circle cx="40" cy="65" r="1.8" fill="#c04020" opacity="0.9"/>
      </svg>
    );
    default: return <svg {...s}><rect width="78" height="128" fill="#ddd"/></svg>;
  }
}

function OrnateFrame({ type, height }) {
  const h = height || 156;
  const fw = Math.round(h * 0.69);
  const border = 13;

  return (
    <div style={{ position: 'relative', width: fw, height: h, flexShrink: 0 }}>
      {/* Shadow base */}
      <div style={{ position: 'absolute', inset: 0, borderRadius: 4, background: '#1a1208', boxShadow: '0 6px 22px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.3)' }}/>
      {/* Gold frame face */}
      <div style={{ position: 'absolute', inset: 1, borderRadius: 3, background: 'linear-gradient(145deg, #7a4e10 0%, #f0dc60 18%, #c09028 36%, #f8e870 52%, #b87020 68%, #e0b840 84%, #8a5818 100%)' }}/>
      {/* Dark recess / mat */}
      <div style={{ position: 'absolute', inset: border - 2, background: '#1e140a', borderRadius: 1 }}/>
      {/* Inner gold line */}
      <div style={{ position: 'absolute', inset: border - 2, border: '1.5px solid rgba(220,180,50,0.6)', borderRadius: 1, zIndex: 3, pointerEvents: 'none' }}/>
      {/* Artwork */}
      <div style={{ position: 'absolute', inset: border, overflow: 'hidden', borderRadius: 1, zIndex: 1 }}>
        <ArtworkSVG type={type} />
      </div>
      {/* Corner & side ornaments */}
      <svg width={fw} height={h} style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none' }}>
        {[[border, border], [fw - border, border], [fw - border, h - border], [border, h - border]].map(([cx, cy], i) => (
          <g key={i} transform={'translate(' + cx + ',' + cy + ')'}>
            <path d="M0,-7 L5,0 L0,7 L-5,0 Z" fill="none" stroke="#f0d858" strokeWidth="1.1" opacity="0.88"/>
            <circle r="2.2" fill="#f0d858" opacity="0.92"/>
            <line x1="-11" y1="0" x2="-5.5" y2="0" stroke="#f0d858" strokeWidth="0.8" opacity="0.65"/>
            <line x1="5.5" y1="0" x2="11" y2="0" stroke="#f0d858" strokeWidth="0.8" opacity="0.65"/>
            <line x1="0" y1="-11" x2="0" y2="-5.5" stroke="#f0d858" strokeWidth="0.8" opacity="0.65"/>
            <line x1="0" y1="5.5" x2="0" y2="11" stroke="#f0d858" strokeWidth="0.8" opacity="0.65"/>
            <circle cx="-11" cy="0" r="0.9" fill="#f0d858" opacity="0.7"/>
            <circle cx="11" cy="0" r="0.9" fill="#f0d858" opacity="0.7"/>
            <circle cx="0" cy="-11" r="0.9" fill="#f0d858" opacity="0.7"/>
            <circle cx="0" cy="11" r="0.9" fill="#f0d858" opacity="0.7"/>
          </g>
        ))}
        {[[fw / 2, border], [fw / 2, h - border], [border, h / 2], [fw - border, h / 2]].map(([cx, cy], i) => (
          <g key={i} transform={'translate(' + cx + ',' + cy + ')'}>
            <path d="M0,-4 L3,0 L0,4 L-3,0 Z" fill="#f0d858" opacity="0.72"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

Object.assign(window, { ArtworkSVG, OrnateFrame });
