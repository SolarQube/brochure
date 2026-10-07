import React from 'react';
import { solarQubeLogo } from '../assets/images';

interface SolarQubeLogoProps {
  className?: string;
  customLogoUrl?: string | null;
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
}

/**
 * SolarQube Energy Logo
 * Recreates the exact typography, solar panel cell texture in the letters,
 * luminous glowing orb for 'O', and upward-arrow for 'Q', with 'ENERGY' underneath.
 * Also supports displaying custom uploaded Logo.jpg if provided.
 */
export const SolarQubeLogo: React.FC<SolarQubeLogoProps> = ({
  className = 'h-16',
  customLogoUrl,
  variant = 'light',
  showTagline = true,
}) => {
  // Use the uploaded logo by default; a toolbar-uploaded logo overrides it
  const logoSrc = customLogoUrl || solarQubeLogo;
  if (logoSrc) {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img
          src={logoSrc}
          alt="SolarQube Energy Logo"
          className="h-full w-auto object-contain max-h-full"
        />
      </div>
    );
  }

  // Vector render matching the exact logo
  const navyColor = variant === 'dark' ? '#FFFFFF' : '#0B1B3D';
  const energyTextColor = variant === 'dark' ? '#94A3B8' : '#0B1B3D';
  const gridStroke = variant === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(56,189,248,0.25)';

  return (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      <svg
        viewBox="0 0 520 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        style={{
          aspectRatio: '520 / 150',
          maxHeight: '100%',
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Subtle Photovoltaic Solar Cell Grid Pattern for Letters */}
          <pattern
            id="solarCellGrid"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <rect width="12" height="12" fill={navyColor} />
            <line x1="0" y1="0" x2="12" y2="0" stroke={gridStroke} strokeWidth="0.8" />
            <line x1="0" y1="6" x2="12" y2="6" stroke={gridStroke} strokeWidth="0.5" strokeDasharray="1 1" />
            <line x1="0" y1="0" x2="0" y2="12" stroke={gridStroke} strokeWidth="0.8" />
            <line x1="6" y1="0" x2="6" y2="12" stroke={gridStroke} strokeWidth="0.5" strokeDasharray="1 1" />
            {/* Busbar points */}
            <circle cx="6" cy="6" r="0.75" fill={gridStroke} />
          </pattern>

          {/* Glowing Sun/Orb Gradient for the letter 'O' */}
          <radialGradient id="sunOrbCore" cx="45%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#A5F3FC" />
            <stop offset="55%" stopColor="#06B6D4" />
            <stop offset="85%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </radialGradient>

          {/* Outer glow ring for 'O' */}
          <linearGradient id="orbRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.9" />
          </linearGradient>

          {/* Subtle Drop Shadow for the orb */}
          <filter id="orbGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* LOGO TEXT: SOLARQUBE */}
        <g id="SolarQubeText">
          {/* 'S' */}
          <text
            x="10"
            y="72"
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="64"
            letterSpacing="-0.5"
            fill="url(#solarCellGrid)"
          >
            S
          </text>

          {/* 'O' - The Radiant Solar Energy Orb */}
          <g transform="translate(68, 14)">
            {/* Subtle outer aura */}
            <circle cx="28" cy="34" r="27" fill="none" stroke="url(#orbRing)" strokeWidth="2.5" opacity="0.7" />
            {/* Main sphere with solar gradient */}
            <circle cx="28" cy="34" r="25" fill="url(#sunOrbCore)" filter="url(#orbGlow)" />
            {/* Swirling energy highlight arcs */}
            <ellipse
              cx="27"
              cy="33"
              rx="21"
              ry="12"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              opacity="0.75"
              transform="rotate(-25 27 33)"
            />
            <ellipse
              cx="28"
              cy="34"
              rx="15"
              ry="8"
              fill="none"
              stroke="#E0F2FE"
              strokeWidth="1.2"
              opacity="0.6"
              transform="rotate(40 28 34)"
            />
            {/* Central luminous core */}
            <circle cx="25" cy="31" r="7" fill="#FFFFFF" opacity="0.95" />
          </g>

          {/* 'LAR' */}
          <text
            x="132"
            y="72"
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="64"
            letterSpacing="-0.5"
            fill="url(#solarCellGrid)"
          >
            LAR
          </text>

          {/* 'Q' - Electric Cyan with Diagonal Upward Arrow */}
          <g transform="translate(270, 16)">
            {/* Q outer body */}
            <path
              d="M 28 4 C 13 4, 3 17, 3 32 C 3 47, 13 60, 28 60 C 34 60, 40 57, 44 53 L 53 62 L 60 55 L 51 46 C 54 42, 56 37, 56 32 C 56 17, 45 4, 28 4 Z M 28 17 C 36 17, 42 24, 42 32 C 42 37, 39 42, 35 45 L 26 36 L 20 42 L 31 51 C 30 51.5, 29 52, 28 52 C 20 52, 14 45, 14 32 C 14 24, 20 17, 28 17 Z"
              fill="#0284C7"
            />
            {/* Upward Energy Arrow in Q */}
            <path
              d="M 32 30 L 41 21 M 41 21 L 34 21 M 41 21 L 41 28"
              stroke="#0284C7"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* 'UBE' */}
          <text
            x="340"
            y="72"
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="64"
            letterSpacing="-0.5"
            fill="url(#solarCellGrid)"
          >
            UBE
          </text>
        </g>

        {/* 'ENERGY' Tagline - Exactly Centered and Spaced */}
        {showTagline && (
          <text
            x="385"
            y="114"
            textAnchor="middle"
            fontFamily="'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="700"
            fontSize="26"
            letterSpacing="6.5"
            fill={energyTextColor}
          >
            ENERGY
          </text>
        )}
      </svg>
    </div>
  );
};
