export function getSectionScrollTop(target: HTMLElement) {
  const navHeight =
    document.querySelector("nav")?.getBoundingClientRect().height ?? 80;
  const rect = target.getBoundingClientRect();
  const targetTop = window.scrollY + rect.top;
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  if (isMobile) {
    return targetTop - navHeight - 16;
  }

  return targetTop - (window.innerHeight - rect.height) / 2;
}

export function scrollToSection(href: string) {
  const target = document.querySelector<HTMLElement>(href);
  if (!target) return;

  window.history.pushState(null, "", href);
  requestAnimationFrame(() => {
    window.scrollTo({
      top: Math.max(0, getSectionScrollTop(target)),
      behavior: "smooth",
    });
  });
}
