import * as THREE from 'three';

export type QualityTier = 'low' | 'medium' | 'high';

export interface DeviceQualityConfig {
  tier: QualityTier;
  dpr: number;
  shadowsEnabled: boolean;
  shadowMapSize: number;
  shadowMapType: THREE.ShadowMapType;
  maxParticles: number;
  particleEmitLimit: number;
  enableAuraLight: boolean;
  enableAuraOuterHalo: boolean;
  enableHeavyDecorations: boolean;
  cylinderSegments: number;
}

let cachedQuality: DeviceQualityConfig | null = null;

export function detectDeviceQuality(): DeviceQualityConfig {
  if (cachedQuality) return cachedQuality;

  if (typeof window === 'undefined') {
    return {
      tier: 'medium',
      dpr: 1.0,
      shadowsEnabled: true,
      shadowMapSize: 512,
      shadowMapType: THREE.PCFShadowMap,
      maxParticles: 120,
      particleEmitLimit: 100,
      enableAuraLight: true,
      enableAuraOuterHalo: true,
      enableHeavyDecorations: true,
      cylinderSegments: 24,
    };
  }

  const nav = navigator as any;
  const cores = nav.hardwareConcurrency || 4;
  const memory = nav.deviceMemory || 4; // GB (if available in Chrome)
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Check GPU via WebGL debug info if possible
  let isLowGpu = false;
  let isHighGpu = false;
  try {
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (gl) {
      const debugInfo = (gl as WebGLRenderingContext).getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const rendererStr = ((gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || '').toLowerCase();
        if (
          rendererStr.includes('mali-400') ||
          rendererStr.includes('mali-g51') ||
          rendererStr.includes('mali-g52') ||
          rendererStr.includes('adreno 3') ||
          rendererStr.includes('adreno 4') ||
          rendererStr.includes('adreno 505') ||
          rendererStr.includes('adreno 506') ||
          rendererStr.includes('powervr') ||
          rendererStr.includes('intel hd') ||
          rendererStr.includes('swiftshader') ||
          rendererStr.includes('basic render')
        ) {
          isLowGpu = true;
        } else if (
          rendererStr.includes('rtx') ||
          rendererStr.includes('gtx') ||
          rendererStr.includes('radeon rx') ||
          rendererStr.includes('apple m') ||
          rendererStr.includes('adreno 7')
        ) {
          isHighGpu = true;
        }
      }
    }
  } catch (_) {}

  let tier: QualityTier = 'medium';

  if (isLowGpu || memory <= 2 || cores <= 2 || (isMobile && (cores <= 4 && memory <= 3))) {
    tier = 'low';
  } else if (isHighGpu || (!isMobile && cores >= 8 && memory >= 8)) {
    tier = 'high';
  } else {
    tier = 'medium';
  }

  const screenDpr = window.devicePixelRatio || 1;

  if (tier === 'low') {
    cachedQuality = {
      tier: 'low',
      dpr: Math.min(Math.max(screenDpr * 0.85, 0.75), 1.0),
      shadowsEnabled: false,
      shadowMapSize: 0,
      shadowMapType: THREE.BasicShadowMap,
      maxParticles: 60,
      particleEmitLimit: 50,
      enableAuraLight: false,
      enableAuraOuterHalo: false,
      enableHeavyDecorations: false,
      cylinderSegments: 16,
    };
  } else if (tier === 'medium') {
    cachedQuality = {
      tier: 'medium',
      dpr: Math.min(screenDpr, 1.0),
      shadowsEnabled: true,
      shadowMapSize: 512,
      shadowMapType: THREE.PCFShadowMap,
      maxParticles: 120,
      particleEmitLimit: 100,
      enableAuraLight: true,
      enableAuraOuterHalo: true,
      enableHeavyDecorations: true,
      cylinderSegments: 24,
    };
  } else {
    cachedQuality = {
      tier: 'high',
      dpr: Math.min(screenDpr, 1.25),
      shadowsEnabled: true,
      shadowMapSize: 1024,
      shadowMapType: THREE.PCFSoftShadowMap,
      maxParticles: 200,
      particleEmitLimit: 160,
      enableAuraLight: true,
      enableAuraOuterHalo: true,
      enableHeavyDecorations: true,
      cylinderSegments: 32,
    };
  }

  return cachedQuality;
}
