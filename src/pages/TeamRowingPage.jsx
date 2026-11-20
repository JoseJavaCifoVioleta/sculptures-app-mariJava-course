import React from "react";

export default function TeamRowingPage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>🚣‍♂️ Equipo CIFO La Violeta — ¡Remando Juntos! 🚣‍♀️</h2>
      <p style={{ color: "#666", marginBottom: "20px" }}>
        Todos a una en el barco del desarrollo: Mari, Sharona, Francesca, Eliecer y José.
      </p>

      {/* SVG Animado Estilo Funko Remando */}
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          background: "linear-gradient(180deg, #d4f1f9 0%, #a9e2f5 65%, #3ba4dc 100%)",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          border: "3px solid #81d4fa",
        }}
      >
        <svg
          viewBox="0 0 1100 480"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            {/* Sombra de los Funkos */}
            <filter id="funkoShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.25" />
            </filter>

            {/* Estilos y animaciones con origen de transformación relativo (.rower-inner) */}
            <style>
              {`
                /* Olas del mar */
                @keyframes waveMove {
                  0% { transform: translateX(0); }
                  50% { transform: translateX(-35px); }
                  100% { transform: translateX(0); }
                }
                .wave-back {
                  animation: waveMove 3s ease-in-out infinite;
                }
                .wave-front {
                  animation: waveMove 2.2s ease-in-out infinite reverse;
                }

                /* Balanceo del barco */
                @keyframes boatRock {
                  0% { transform: translateY(0) rotate(0deg); }
                  25% { transform: translateY(-3px) rotate(0.8deg); }
                  50% { transform: translateY(3px) rotate(-0.8deg); }
                  75% { transform: translateY(-2px) rotate(0.6deg); }
                  100% { transform: translateY(0) rotate(0deg); }
                }
                .boat-group {
                  transform-origin: 550px 340px;
                  animation: boatRock 2.6s ease-in-out infinite;
                }

                /* Movimiento de remar: se aplica a .rower-inner con origen en sus propias caderas (45px, 115px) */
                @keyframes rowerBodySwing {
                  0% { transform: rotate(-7deg); }
                  50% { transform: rotate(10deg); }
                  100% { transform: rotate(-7deg); }
                }
                .rower-inner {
                  transform-origin: 45px 115px;
                  animation: rowerBodySwing 2.6s ease-in-out infinite;
                }

                /* Movimiento del remo */
                @keyframes oarSwing {
                  0% { transform: rotate(-22deg); }
                  50% { transform: rotate(18deg); }
                  100% { transform: rotate(-22deg); }
                }
                .oar-inner {
                  transform-origin: 15px 15px;
                  animation: oarSwing 2.6s ease-in-out infinite;
                }

                /* Nubes */
                @keyframes cloudDrift {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(1200px); }
                }
                .cloud-1 { animation: cloudDrift 35s linear infinite; }
                .cloud-2 { animation: cloudDrift 45s linear infinite; }
              `}
            </style>

            {/* Ojo Funko con brillo */}
            <g id="funkoEye">
              <circle cx="0" cy="0" r="10" fill="#111" />
              <circle cx="-3" cy="-3" r="3" fill="#fff" />
            </g>

            {/* Ojo bonito azul limpio para Francesca (estilo Funko con brillo, sin eyeliner raro) */}
            <g id="francescaEye">
              {/* Sombra azul suave arriba */}
              <ellipse cx="0" cy="-3" rx="10" ry="4" fill="#80d8ff" opacity="0.6" />
              {/* Ojo azul vibrante */}
              <circle cx="0" cy="0" r="10" fill="#0288d1" />
              <circle cx="0" cy="0" r="7" fill="#01579b" />
              <circle cx="0" cy="0" r="4" fill="#0d47a1" />
              {/* Brillos Funko */}
              <circle cx="-3" cy="-3" r="3" fill="#fff" />
              <circle cx="3" cy="3" r="1.5" fill="#fff" opacity="0.8" />
              {/* Pestañas sutiles arriba sin manchas de eyeliner */}
              <path d="M -9 -2 Q 0 -9 9 -2" fill="none" stroke="#263238" strokeWidth="1.8" strokeLinecap="round" />
            </g>

            {/* Remo */}
            <g id="oar">
              <rect x="0" y="0" width="10" height="150" rx="5" fill="#8d6e63" />
              <path d="M -7 130 Q 5 180 18 130 Q 9 120 5 120 Z" fill="#d7ccc8" stroke="#8d6e63" strokeWidth="2" />
            </g>
          </defs>

          {/* Sol sonriente */}
          <circle cx="980" cy="70" r="45" fill="#fbc02d" opacity="0.85" />
          <circle cx="980" cy="70" r="38" fill="#ffee58" />

          {/* Nubes */}
          <g className="cloud-1" transform="translate(-150, 40)">
            <ellipse cx="0" cy="0" rx="45" ry="20" fill="#ffffff" opacity="0.75" />
            <ellipse cx="25" cy="-8" rx="30" ry="22" fill="#ffffff" opacity="0.75" />
          </g>
          <g className="cloud-2" transform="translate(-300, 90)">
            <ellipse cx="0" cy="0" rx="35" ry="16" fill="#ffffff" opacity="0.6" />
            <ellipse cx="20" cy="-6" rx="25" ry="18" fill="#ffffff" opacity="0.6" />
          </g>

          {/* Ola de fondo */}
          <path
            className="wave-back"
            d="M 0 350 Q 110 330 220 350 T 440 350 T 660 350 T 880 350 T 1100 350 L 1100 480 L 0 480 Z"
            fill="#29b6f6"
            opacity="0.6"
          />

          {/* GRUPO PRINCIPAL: BARCO + TRIPULACIÓN FUNKO */}
          <g className="boat-group">
            {/* Casco trasero / Borde interior del barco */}
            <path
              d="M 30 310 Q 550 360 1070 310 L 1020 340 Q 550 380 80 340 Z"
              fill="#4e342e"
            />

            {/* Asientos de los remeros */}
            <rect x="90" y="315" width="60" height="8" rx="3" fill="#3e2723" />
            <rect x="290" y="315" width="60" height="8" rx="3" fill="#3e2723" />
            <rect x="490" y="315" width="60" height="8" rx="3" fill="#3e2723" />
            <rect x="690" y="315" width="60" height="8" rx="3" fill="#3e2723" />
            <rect x="890" y="315" width="60" height="8" rx="3" fill="#3e2723" />

            {/* ======================================================== */}
            {/* 1. MARI (Posición X: 75, Y: 200 - sentada en el barco) */}
            {/* ======================================================== */}
            <g transform="translate(75, 200)" filter="url(#funkoShadow)">
              <g className="rower-inner">
                {/* Remo */}
                <g transform="translate(50, 75) rotate(-15)" className="oar-inner">
                  <use href="#oar" />
                </g>

                {/* Piernas/asiento */}
                <rect x="20" y="115" width="50" height="15" rx="6" fill="#37474f" />

                {/* Cuerpo Funko */}
                <rect x="25" y="75" width="40" height="42" rx="10" fill="#e91e63" />
                <rect x="15" y="80" width="16" height="30" rx="7" fill="#f8bbd0" transform="rotate(30 15 80)" />

                {/* Cabeza cuadrada estilo Funko */}
                <rect x="0" y="0" width="90" height="78" rx="22" fill="#ffe0b2" />
                <ellipse cx="12" cy="48" rx="8" ry="6" fill="#ffb74d" opacity="0.4" />
                <ellipse cx="78" cy="48" rx="8" ry="6" fill="#ffb74d" opacity="0.4" />

                {/* Pelo claro/rubio ondulado hasta el cuello */}
                <path
                  d="M -6 30 Q -12 70 0 90 Q 10 95 15 80 Q 25 95 45 80 Q 65 95 75 80 Q 95 95 102 75 Q 104 30 92 10 Q 50 -15 -2 10 Z"
                  fill="#ffd54f"
                />
                <path d="M 0 25 Q 30 0 50 25 Q 70 5 90 28 Q 75 10 45 10 Q 15 10 0 25 Z" fill="#ffca28" />

                {/* Ojos */}
                <g transform="translate(26, 44)"><use href="#funkoEye" /></g>
                <g transform="translate(64, 44)"><use href="#funkoEye" /></g>

                {/* Gafas */}
                <rect x="16" y="33" width="22" height="22" rx="6" fill="none" stroke="#d81b60" strokeWidth="3" />
                <rect x="52" y="33" width="22" height="22" rx="6" fill="none" stroke="#d81b60" strokeWidth="3" />
                <line x1="38" y1="44" x2="52" y2="44" stroke="#d81b60" strokeWidth="3" />

                {/* Sonrisa */}
                <path d="M 40 58 Q 45 64 50 58" fill="none" stroke="#b71c1c" strokeWidth="2.5" strokeLinecap="round" />

                {/* Nombre */}
                <text x="45" y="-14" textAnchor="middle" fill="#880e4f" fontWeight="bold" fontSize="16">Mari</text>
              </g>
            </g>

            {/* ======================================================== */}
            {/* 2. SHARONA (Posición X: 275, Y: 200 - sentada en el barco) */}
            {/* ======================================================== */}
            <g transform="translate(275, 200)" filter="url(#funkoShadow)">
              <g className="rower-inner">
                {/* Remo */}
                <g transform="translate(50, 75) rotate(-15)" className="oar-inner">
                  <use href="#oar" />
                </g>

                {/* Piernas/asiento */}
                <rect x="20" y="115" width="50" height="15" rx="6" fill="#37474f" />

                {/* Pelo largo trasero (media espalda) bien tupido */}
                <path
                  d="M -10 15 Q -20 80 -10 135 Q 45 150 100 135 Q 110 80 100 15 Q 45 -25 -10 15 Z"
                  fill="#4e342e"
                />

                {/* Cuerpo Funko */}
                <rect x="25" y="75" width="40" height="42" rx="10" fill="#9c27b0" />
                <rect x="15" y="80" width="16" height="30" rx="7" fill="#e1bee7" transform="rotate(30 15 80)" />

                {/* Cabeza cuadrada estilo Funko */}
                <rect x="0" y="0" width="90" height="78" rx="22" fill="#ffecb3" />
                <ellipse cx="14" cy="50" rx="8" ry="6" fill="#ffcc80" opacity="0.4" />
                <ellipse cx="76" cy="50" rx="8" ry="6" fill="#ffcc80" opacity="0.4" />

                {/* PELO VOLUMINOSO SOBRE LA CABEZA (bien frondoso arriba) */}
                <path
                  d="M -6 20 Q -10 -20 45 -20 Q 100 -20 96 20 Q 98 45 88 50 Q 82 25 70 18 Q 45 12 18 18 Q 6 25 2 50 Q -8 45 -6 20 Z"
                  fill="#5d4037"
                />
                {/* Mechones frontales bonitos con raya al lado */}
                <path
                  d="M 2 20 Q 25 8 50 16 Q 75 10 88 24 Q 70 12 45 10 Q 20 12 2 20 Z"
                  fill="#6d4c41"
                />
                {/* Mechones largos a los lados enmarcando la cara */}
                <path d="M 0 35 Q -8 85 8 115 Q 15 85 10 40 Z" fill="#4e342e" />
                <path d="M 90 35 Q 98 85 82 115 Q 75 85 80 40 Z" fill="#4e342e" />

                {/* Ojos */}
                <g transform="translate(26, 44)"><use href="#funkoEye" /></g>
                <g transform="translate(64, 44)"><use href="#funkoEye" /></g>

                {/* Gafas */}
                <rect x="16" y="33" width="22" height="22" rx="6" fill="none" stroke="#3e2723" strokeWidth="3" />
                <rect x="52" y="33" width="22" height="22" rx="6" fill="none" stroke="#3e2723" strokeWidth="3" />
                <line x1="38" y1="44" x2="52" y2="44" stroke="#3e2723" strokeWidth="3" />

                {/* Estrellita en el pelo */}
                <text x="76" y="10" fontSize="20" fill="#ffd700">✨</text>

                {/* Sonrisa */}
                <path d="M 40 60 Q 45 66 50 60" fill="none" stroke="#b71c1c" strokeWidth="2.5" strokeLinecap="round" />

                {/* Nombre */}
                <text x="45" y="-24" textAnchor="middle" fill="#4a148c" fontWeight="bold" fontSize="16">Sharona</text>
              </g>
            </g>

            {/* ======================================================== */}
            {/* 3. FRANCESCA (Cara despejada, pelo corto abierto + mecha azul) */}
            {/* ======================================================== */}
            <g transform="translate(475, 200)" filter="url(#funkoShadow)">
              <g className="rower-inner">
                {/* Remo */}
                <g transform="translate(50, 75) rotate(-15)" className="oar-inner">
                  <use href="#oar" />
                </g>

                {/* Piernas/asiento */}
                <rect x="20" y="115" width="50" height="15" rx="6" fill="#37474f" />

                {/* Pelo trasero corto (hasta el cuello) */}
                <path
                  d="M -5 20 Q -10 65 5 75 Q 45 85 85 75 Q 100 65 95 20 Q 45 -18 -5 20 Z"
                  fill="#37474f"
                />

                {/* Cuerpo Funko */}
                <rect x="25" y="75" width="40" height="42" rx="10" fill="#00acc1" />
                <rect x="15" y="80" width="16" height="30" rx="7" fill="#80deea" transform="rotate(30 15 80)" />

                {/* Cabeza cuadrada estilo Funko (tono claro despejado) */}
                <rect x="0" y="0" width="90" height="78" rx="22" fill="#ffecb3" />
                <ellipse cx="14" cy="50" rx="8" ry="6" fill="#ffcc80" opacity="0.4" />
                <ellipse cx="76" cy="50" rx="8" ry="6" fill="#ffcc80" opacity="0.4" />

                {/* Pelo CORTO SUPERIOR BIEN PEINADO HACIA ATRÁS/LADOS (cara totalmente despejada) */}
                <path
                  d="M -4 18 Q -8 -16 45 -16 Q 98 -16 94 18 Q 88 12 70 8 Q 45 6 20 8 Q 2 12 -4 18 Z"
                  fill="#263238"
                />
                {/* Lados del pelo corto */}
                <path d="M -4 18 Q -8 55 4 60 Q 8 40 4 20 Z" fill="#37474f" />
                <path d="M 94 18 Q 98 55 86 60 Q 82 40 86 20 Z" fill="#37474f" />

                {/* MECHA AZUL VIBRANTE Y ELEGANTE EN EL LATERAL */}
                <path
                  d="M 6 12 Q 18 6 28 14 Q 24 35 15 48 Q 6 35 6 12 Z"
                  fill="#00e5ff"
                />

                {/* Ojos azules bonitos bien visibles */}
                <g transform="translate(26, 44)"><use href="#francescaEye" /></g>
                <g transform="translate(64, 44)"><use href="#francescaEye" /></g>

                {/* Sonrisa */}
                <path d="M 39 61 Q 45 68 51 61" fill="none" stroke="#c2185b" strokeWidth="2.5" strokeLinecap="round" />

                {/* Nombre */}
                <text x="45" y="-20" textAnchor="middle" fill="#006064" fontWeight="bold" fontSize="16">Francesca</text>
              </g>
            </g>

            {/* ======================================================== */}
            {/* 4. ELIECER (Posición X: 675, Y: 195 - sentado en el barco) */}
            {/* ======================================================== */}
            <g transform="translate(675, 195)" filter="url(#funkoShadow)">
              <g className="rower-inner">
                {/* Remo */}
                <g transform="translate(50, 75) rotate(-15)" className="oar-inner">
                  <use href="#oar" />
                </g>

                {/* Piernas/asiento */}
                <rect x="20" y="120" width="50" height="15" rx="6" fill="#263238" />

                {/* Cuerpo atlético en forma */}
                <path d="M 18 78 L 72 78 L 68 120 L 22 120 Z" fill="#43a047" />
                <rect x="10" y="80" width="18" height="34" rx="8" fill="#5d4037" transform="rotate(30 10 80)" />

                {/* Cabeza Funko piel morena */}
                <rect x="0" y="0" width="90" height="78" rx="22" fill="#795548" />

                {/* Pelo: UNDERCUT rapado a los lados */}
                <path d="M 0 25 L 12 25 L 12 58 L 0 50 Z" fill="#3e2723" opacity="0.6" />
                <path d="M 90 25 L 78 25 L 78 58 L 90 50 Z" fill="#3e2723" opacity="0.6" />

                {/* Pelo: CURLY arriba */}
                <ellipse cx="45" cy="8" rx="42" ry="22" fill="#1b120c" />
                <circle cx="20" cy="-2" r="10" fill="#2d1d15" />
                <circle cx="35" cy="-8" r="12" fill="#1b120c" />
                <circle cx="55" cy="-8" r="12" fill="#2d1d15" />
                <circle cx="72" cy="-2" r="10" fill="#1b120c" />
                <circle cx="45" cy="2" r="11" fill="#3a251b" />

                {/* Ojos */}
                <g transform="translate(26, 44)"><use href="#funkoEye" /></g>
                <g transform="translate(64, 44)"><use href="#funkoEye" /></g>

                {/* Cejas atléticas */}
                <line x1="20" y1="33" x2="34" y2="34" stroke="#1b120c" strokeWidth="3" strokeLinecap="round" />
                <line x1="56" y1="34" x2="70" y2="33" stroke="#1b120c" strokeWidth="3" strokeLinecap="round" />

                {/* Sonrisa blanca y enérgica */}
                <path d="M 38 60 Q 45 70 52 60 Z" fill="#ffffff" stroke="#3e2723" strokeWidth="1.5" />

                {/* Nombre */}
                <text x="45" y="-18" textAnchor="middle" fill="#1b5e20" fontWeight="bold" fontSize="16">Eliecer</text>
              </g>
            </g>

            {/* ======================================================== */}
            {/* 5. JOSÉ (Posición X: 875, Y: 200 - sentado en el barco) */}
            {/* ======================================================== */}
            <g transform="translate(875, 200)" filter="url(#funkoShadow)">
              <g className="rower-inner">
                {/* Remo */}
                <g transform="translate(50, 75) rotate(-15)" className="oar-inner">
                  <use href="#oar" />
                </g>

                {/* Piernas/asiento */}
                <rect x="18" y="115" width="54" height="15" rx="6" fill="#37474f" />

                {/* Cuerpo regordete con barriguita */}
                <ellipse cx="45" cy="98" rx="28" ry="24" fill="#fb8c00" />
                <rect x="12" y="80" width="18" height="30" rx="8" fill="#ffe0b2" transform="rotate(30 12 80)" />

                {/* Cabeza cuadrada estilo Funko */}
                <rect x="0" y="0" width="90" height="78" rx="22" fill="#ffe0b2" />
                <ellipse cx="14" cy="52" rx="9" ry="6" fill="#ffb74d" opacity="0.4" />
                <ellipse cx="76" cy="52" rx="9" ry="6" fill="#ffb74d" opacity="0.4" />

                {/* Pelo: Poco pelo (entradas despejadas) */}
                <path d="M 0 35 Q -3 65 6 70 Q 14 65 10 35 Z" fill="#6d4c41" />
                <path d="M 90 35 Q 93 65 84 70 Q 76 65 80 35 Z" fill="#6d4c41" />
                <path d="M 5 20 Q 15 15 22 25 Q 12 28 4 35 Z" fill="#5d4037" />
                <path d="M 85 20 Q 75 15 68 25 Q 78 28 86 35 Z" fill="#5d4037" />
                {/* Tres pelitos en la coronilla */}
                <path d="M 42 0 Q 40 -8 38 -12" stroke="#5d4037" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 46 0 Q 46 -10 47 -14" stroke="#5d4037" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 50 0 Q 52 -8 54 -11" stroke="#5d4037" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* Ojos grandes bondadosos */}
                <g transform="translate(26, 44)"><use href="#funkoEye" /></g>
                <g transform="translate(64, 44)"><use href="#funkoEye" /></g>

                {/* Papada simpática */}
                <path d="M 32 73 Q 45 82 58 73" fill="none" stroke="#ffb74d" strokeWidth="2.5" />

                {/* Sonrisa */}
                <path d="M 38 58 Q 45 68 52 58" fill="none" stroke="#b71c1c" strokeWidth="2.5" strokeLinecap="round" />

                {/* Nombre */}
                <text x="45" y="-18" textAnchor="middle" fill="#e65100" fontWeight="bold" fontSize="16">José</text>
              </g>
            </g>

            {/* Casco delantero del barco (cubre las piernas, sitúa a todos dentro del barco) */}
            <path
              d="M 20 300 Q 550 405 1080 300 L 1050 375 Q 550 425 50 375 Z"
              fill="#795548"
              stroke="#5d4037"
              strokeWidth="4"
            />
            {/* Franja náutica azul */}
            <path
              d="M 38 325 Q 550 405 1062 325 L 1056 340 Q 550 415 44 340 Z"
              fill="#0288d1"
            />
            {/* Texto en el barco */}
            <text x="550" y="372" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="18" letterSpacing="3">
              🚣 CIFO LA VIOLETA — JAVA FULLSTACK 🚣
            </text>
          </g>

          {/* Ola frontal que cubre la parte baja del barco */}
          <path
            className="wave-front"
            d="M -30 370 Q 100 345 230 370 T 490 370 T 750 370 T 1010 370 T 1150 370 L 1150 480 L -30 480 Z"
            fill="#0288d1"
            opacity="0.85"
          />
          {/* Espuma blanca en la cresta de la ola */}
          <path
            className="wave-front"
            d="M -30 371 Q 100 347 230 371 T 490 371 T 750 371 T 1010 371 T 1150 371"
            stroke="#ffffff"
            strokeWidth="4"
            fill="none"
            opacity="0.9"
          />
        </svg>
      </div>

      <div style={{ marginTop: "20px" }}>
        <p style={{ fontStyle: "italic", color: "#555" }}>
          "Ninguno de nosotros es tan bueno como todos nosotros juntos." — CIFO La Violeta 2026
        </p>
      </div>
    </div>
  );
}
