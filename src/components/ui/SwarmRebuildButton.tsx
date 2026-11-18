import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MousePointer2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import '../../lib/vendor/cursor-swarm.js';

// cursor-swarm.js (MIT, ZhengLinLei) registers window.CursorSwarm. The page is rebuilt as the
// visitor scrolls, and taken apart again when they scroll back up.
interface SwarmInstance {
  setSpeed(n: number): void;
  toggle(): void;
  buildAll(): void;
  destroy(): void;
}
type SwarmCtor = new (opts: Record<string, unknown>) => SwarmInstance & { init(): SwarmInstance };

const SPEEDS = [1, 2, 3];

const chip =
  'px-2.5 py-1 rounded-md text-xs font-medium border border-border-primary transition-colors';

export const SwarmRebuildButton: React.FC = () => {
  const { lang } = useLanguage();
  const swarmRef = useRef<SwarmInstance | null>(null);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(false);
  const [speed, setSpeed] = useState(1);

  const exit = useCallback(() => {
    swarmRef.current?.destroy();
    swarmRef.current = null;
    setActive(false);
    setPaused(false);
  }, []);

  const start = useCallback(() => {
    const Ctor = (window as unknown as { CursorSwarm?: SwarmCtor }).CursorSwarm;
    if (!Ctor || swarmRef.current) return;
    window.scrollTo({ top: 0, behavior: 'instant' });
    swarmRef.current = new Ctor({
      cursors: 3,
      speed,
      startPosition: 'corners',
      palette: 'default',
      hudPosition: 'bottom-right',
      ignore: '[data-cs-ignore]',
      respectReducedMotion: false,
    }).init();
    setActive(true);
  }, [speed]);

  const changeSpeed = (n: number) => {
    setSpeed(n);
    swarmRef.current?.setSpeed(n);
  };

  const togglePause = () => {
    swarmRef.current?.toggle();
    setPaused((v) => !v);
  };

  // The swarm rewrites text nodes, so put the page back before React swaps the language.
  useEffect(() => exit, [lang, exit]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && e.code === 'KeyL') {
        e.preventDefault();
        if (swarmRef.current) exit();
        else start();
      } else if (e.key === 'Escape' && swarmRef.current) exit();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [start, exit]);

  if (!active) {
    return (
      <button
        data-cs-ignore
        onClick={start}
        title="Alt+Shift+L"
        className="fixed z-[9999] left-1/2 -translate-x-1/2 bottom-8 inline-flex items-center gap-2 rounded-full px-5 py-3 bg-bg-inverse text-text-inverse text-sm font-medium uppercase tracking-wider hover:scale-105 active:scale-95 transition-transform"
      >
        <MousePointer2 className="w-4 h-4" />
        Swarm Rebuild
      </button>
    );
  }

  return (
    <div
      data-cs-ignore
      style={{ position: 'fixed', zIndex: 2147483100, left: '50%', bottom: '2rem', transform: 'translateX(-50%)' }}
      className="flex items-center gap-3 rounded-2xl bg-bg-primary text-text-primary border border-border-primary px-4 py-3 select-none"
    >
      <div className="flex gap-1">
        {SPEEDS.map((n) => (
          <button
            key={n}
            onClick={() => changeSpeed(n)}
            className={`${chip} ${speed === n ? 'bg-bg-inverse text-text-inverse' : 'text-text-muted'}`}
          >
            {n}×
          </button>
        ))}
      </div>
      <div className="flex gap-1">
        <button onClick={togglePause} className={`${chip} text-text-muted`}>
          {paused ? 'Resume' : 'Pause'}
        </button>
        <button onClick={() => swarmRef.current?.buildAll()} className={`${chip} text-text-muted`}>
          Show all
        </button>
        <button onClick={exit} title="Esc" className={`${chip} text-text-muted`}>
          Exit
        </button>
      </div>
    </div>
  );
};
