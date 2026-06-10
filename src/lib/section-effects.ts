/** Deterministic pseudo-random helpers for section backgrounds (stable per seed). */

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rand(seed: number, index: number): number {
  const x = Math.sin(seed * 0.0001 + index * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export interface SectionGlow {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  opacity: number;
}

const GLOW_COLORS = [
  'rgba(5, 150, 105, 0.45)',   // brand emerald
  'rgba(16, 185, 129, 0.35)',
  'rgba(52, 211, 153, 0.3)',
  'rgba(139, 92, 246, 0.25)',
  'rgba(59, 130, 246, 0.2)',
  'rgba(245, 158, 11, 0.2)',
];

export function getSectionGlows(seed: string, count = 2): SectionGlow[] {
  const h = hashSeed(seed);
  return Array.from({ length: count }, (_, i) => ({
    x: 10 + rand(h, i * 4) * 80,
    y: 15 + rand(h, i * 4 + 1) * 70,
    width: 35 + rand(h, i * 4 + 2) * 35,
    height: 40 + rand(h, i * 4 + 3) * 40,
    color: GLOW_COLORS[(h + i) % GLOW_COLORS.length],
    opacity: 0.55 + rand(h, i * 4 + 4) * 0.35,
  }));
}

export interface BlobConfig {
  top: string;
  left: string;
  size: string;
  colorClass: string;
  delay: string;
}

const BLOB_PALETTE = [
  'bg-brand-400/25 dark:bg-brand-500/15',
  'bg-emerald-300/30 dark:bg-emerald-600/10',
  'bg-violet-400/10 dark:bg-violet-600/10',
  'bg-sky-400/15 dark:bg-sky-600/10',
  'bg-amber-300/15 dark:bg-amber-600/10',
];

export function getBlobConfigs(seed: string, count = 3): BlobConfig[] {
  const h = hashSeed(seed);
  return Array.from({ length: count }, (_, i) => ({
    top: `${-20 + rand(h, i * 5) * 60}%`,
    left: `${-15 + rand(h, i * 5 + 1) * 110}%`,
    size: `${min(680, 40 + rand(h, i * 5 + 2) * 45)}px`,
    colorClass: BLOB_PALETTE[(h + i) % BLOB_PALETTE.length],
    delay: `${-i * 4}s`,
  }));
}

function min(a: number, b: number) {
  return a < b ? a : b;
}

export interface PhotoWallTile {
  left: string;
  top: string;
  width: number;
  height: number;
  rotate: number;
  image: string;
}

const CTA_WALL_IMAGES = [
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6a3?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1605276374101-dee2a0ed3cd6?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cd09?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&h=160&fit=crop',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=200&h=160&fit=crop',
];

export function getPhotoWallTiles(seed = 'cta', count = 18): PhotoWallTile[] {
  const h = hashSeed(seed);
  return Array.from({ length: count }, (_, i) => ({
    left: `${rand(h, i * 6) * 92}%`,
    top: `${rand(h, i * 6 + 1) * 88}%`,
    width: Math.round(52 + rand(h, i * 6 + 2) * 36),
    height: Math.round(40 + rand(h, i * 6 + 3) * 32),
    rotate: Math.round((rand(h, i * 6 + 4) - 0.5) * 8 * 10) / 10,
    image: CTA_WALL_IMAGES[(h + i) % CTA_WALL_IMAGES.length],
  }));
}
