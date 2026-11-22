// Remembers, for this browser tab session, which commands already "ran",
// so revisiting the page or jumping around does not replay typing.
const KEY = "typed-sections";

function read(): Set<string> {
  try {
    return new Set(JSON.parse(sessionStorage.getItem(KEY) || "[]"));
  } catch {
    return new Set();
  }
}

export function wasTyped(id: string) {
  return read().has(id);
}

export function markTyped(id: string) {
  const s = read();
  s.add(id);
  try {
    sessionStorage.setItem(KEY, JSON.stringify([...s]));
  } catch {
    /* ignore */
  }
}
