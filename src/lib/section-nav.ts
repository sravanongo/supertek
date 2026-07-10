export function scrollToSection(sectionId: string, behavior: ScrollBehavior = "auto") {
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior, block: "start" });
  window.history.replaceState(null, "", `/#${sectionId}`);
}

export function scrollToTop(behavior: ScrollBehavior = "auto") {
  window.scrollTo({ top: 0, behavior });
  window.history.replaceState(null, "", "/");
}

export async function navigateToSection(
  sectionId: string,
  pathname: string,
  navigate: (opts: { to: "/"; hash: string }) => Promise<unknown>,
) {
  if (pathname === "/") {
    scrollToSection(sectionId);
    return;
  }
  await navigate({ to: "/", hash: sectionId });
  requestAnimationFrame(() => scrollToSection(sectionId));
}
