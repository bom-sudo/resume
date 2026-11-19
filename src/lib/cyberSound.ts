/**
 * Cybernetic audio engine for UI interactions using the Web Audio API.
 * High performance, zero external files, non-blocking, and instant response.
 */

let sharedCtx: AudioContext | null = null;

const getAudioContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioCtx) return null;
    if (!sharedCtx || sharedCtx.state === 'closed') {
      sharedCtx = new AudioCtx();
    }
    if (sharedCtx.state === 'suspended') {
      sharedCtx.resume().catch(() => { });
    }
    return sharedCtx;
  } catch {
    return null;
  }
};

/**
 * Sci-Fi language translation chime (dual-frequency chirp).
 */
export const playCyberTranslateSound = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(580, now);
    osc1.frequency.exponentialRampToValueAtTime(980, now + 0.08);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880, now);
    osc2.frequency.exponentialRampToValueAtTime(1320, now + 0.08);

    gain.gain.setValueAtTime(0.035, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.14);
    osc2.stop(now + 0.14);
  } catch {
    // Graceful fallback
  }
};

/**
 * Swarm Rebuild: Deployment activation sound (robotic boot & frequency rise).
 */
export const playSwarmDeploySound = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;

    // Sub-bass sweep
    const bass = ctx.createOscillator();
    const bassGain = ctx.createGain();
    bass.type = 'sawtooth';
    bass.frequency.setValueAtTime(120, now);
    bass.frequency.exponentialRampToValueAtTime(650, now + 0.35);
    bassGain.gain.setValueAtTime(0.04, now);
    bassGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    bass.connect(bassGain);
    bassGain.connect(ctx.destination);
    bass.start(now);
    bass.stop(now + 0.35);

    // High matrix chirp
    const chirp = ctx.createOscillator();
    const chirpGain = ctx.createGain();
    chirp.type = 'sine';
    chirp.frequency.setValueAtTime(800, now + 0.05);
    chirp.frequency.exponentialRampToValueAtTime(1800, now + 0.28);
    chirpGain.gain.setValueAtTime(0.03, now + 0.05);
    chirpGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
    chirp.connect(chirpGain);
    chirpGain.connect(ctx.destination);
    chirp.start(now + 0.05);
    chirp.stop(now + 0.32);
  } catch {
    // Graceful fallback
  }
};

// Cooldown tracker for swarm building clicks to avoid audio distortion
let lastBuildSoundTime = 0;

/**
 * Swarm Rebuild: Micro construction tick when cursors assemble elements.
 */
export const playSwarmBuildTick = (type: string = 'type') => {
  const now = performance.now();
  if (now - lastBuildSoundTime < 45) return; // throttle to max 22 clicks/sec
  lastBuildSoundTime = now;

  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Differentiate sound pitch slightly based on element type
    let baseFreq = 1400;
    if (type === 'frame') baseFreq = 950;
    else if (type === 'media') baseFreq = 1800;
    else if (type === 'pop') baseFreq = 1600;

    // Slight random variation to sound like real typing/nanotech bots
    const freq = baseFreq + (Math.random() * 200 - 100);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.6, t + 0.03);

    gain.gain.setValueAtTime(0.015, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(t);
    osc.stop(t + 0.035);
  } catch {
    // Graceful fallback
  }
};

/**
 * Swarm Rebuild: Speed switch beep (1x, 2x, 3x).
 */
export const playSwarmSpeedSound = (speedMultiplier: number) => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const freq = 600 + speedMultiplier * 250;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.setValueAtTime(freq * 1.25, now + 0.04);

    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  } catch {
    // Graceful fallback
  }
};

/**
 * Swarm Rebuild: Cursor count modifier (+ / -).
 */
export const playSwarmCountSound = (isIncrement: boolean) => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const startFreq = isIncrement ? 650 : 950;
    const endFreq = isIncrement ? 950 : 650;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.06);

    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);
  } catch {
    // Graceful fallback
  }
};

/**
 * Swarm Rebuild: All elements finished building (Harmonic completion chime).
 */
export const playSwarmDoneSound = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5]; // C major chord

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const delay = idx * 0.04;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + delay);

      gain.gain.setValueAtTime(0.025, now + delay);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + delay);
      osc.stop(now + delay + 0.35);
    });
  } catch {
    // Graceful fallback
  }
};

/**
 * Swarm Rebuild: Exit or pause warp-down sound.
 */
export const playSwarmPowerDownSound = () => {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.2);

    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.22);
  } catch {
    // Graceful fallback
  }
};
