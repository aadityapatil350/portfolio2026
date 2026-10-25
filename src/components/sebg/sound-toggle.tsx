"use client";

import { useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { sound } from "@/lib/sound-effects";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("sound-state-change", callback);
  return () => window.removeEventListener("sound-state-change", callback);
}

function getSnapshot() {
  if (typeof window === "undefined") return false;
  return typeof sound.isEnabled === "function" ? sound.isEnabled() : false;
}

function getServerSnapshot() {
  return false;
}

export function SoundToggle() {
  const enabled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const handleToggle = () => {
    if (typeof sound.toggle === "function") {
      sound.toggle();
    }
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={enabled ? "Mute audio sound effects" : "Enable audio sound effects"}
      aria-pressed={enabled}
      title={enabled ? "Sound effects active (Click to mute)" : "Sound effects muted (Click to enable)"}
      className="fixed bottom-5 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300/60 bg-[#fbfbf8]/90 text-[#0b0b0c] shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-white active:scale-95 dark:border-neutral-700/60 dark:bg-[#121214]/90 dark:text-[#fbfbf8] dark:hover:bg-neutral-800"
    >
      {enabled ? (
        <Volume2 className="h-4 w-4 text-[#2261e9] transition-transform duration-200" />
      ) : (
        <VolumeX className="h-4 w-4 text-neutral-400 transition-transform duration-200" />
      )}
    </button>
  );
}
