import type { Lang } from '../i18n/ui';
import { localePath, t } from '../i18n/utils';
import { getLocalized, getPage } from './content';

/** 側欄展開時顯示的小卡內容 */
export interface NavDetail {
  text?: string;
  badge?: { top: string; value: string };
  bullets?: string[];
  path?: { label: string; steps: string[] };
}

export interface NavItem {
  /** 對應頁面上的 section id，捲到那裡時這一項會展開 */
  id: string;
  href: string;
  label: string;
  detail?: NavDetail;
}

export async function homeNav(lang: Lang, onHome: boolean): Promise<NavItem[]> {
  const tr = t(lang);
  const anchor = (id: string) => (onHome ? `#${id}` : localePath(lang, `#${id}`));
  const projects = await getLocalized('projects', lang);
  const about = await getPage('about', lang);
  const hero = await getPage('hero', lang);
  const years = projects.map((p) => p.data.year);

  return [
    {
      id: 'projects',
      href: anchor('projects'),
      label: tr('nav.projects'),
      detail: {
        badge: { top: tr('side.works'), value: String(projects.length) },
        text: years.length ? `${Math.min(...years)} – ${Math.max(...years)}` : undefined,
      },
    },
    {
      id: 'about',
      href: anchor('about'),
      label: tr('nav.about'),
      detail: {
        badge: hero.data.since ? { top: tr('since'), value: hero.data.since } : undefined,
        bullets: about.data.points,
      },
    },
    {
      id: 'services',
      href: anchor('services'),
      label: tr('nav.services'),
      detail: {
        text: tr('side.servicesText'),
        path: { label: tr('side.path'), steps: [tr('side.path1'), tr('side.path2'), tr('side.path3')] },
      },
    },
    {
      id: 'contact',
      href: anchor('contact'),
      label: tr('nav.contact'),
      detail: { text: tr('side.contactText') },
    },
    { id: '3d', href: localePath(lang, '3d/'), label: tr('nav.3d'), detail: { text: tr('side.3dText') } },
    { id: 'yarn', href: localePath(lang, 'yarn/'), label: tr('nav.yarn'), detail: { text: tr('side.yarnText') } },
  ];
}

/** 3D 作品頁（onPage = 在 /3d/ 頁本身；案例頁傳 false，錨點會連回 /3d/） */
export function threeDNav(lang: Lang, onPage = true): NavItem[] {
  const tr = t(lang);
  const anchor = (id: string) => (onPage ? `#${id}` : localePath(lang, `3d/#${id}`));
  return [
    { id: 'works', href: anchor('works'), label: tr('threeD.works'), detail: { text: tr('side.3dText') } },
    {
      id: 'process',
      href: anchor('process'),
      label: tr('nav.process3d'),
      detail: { path: { label: tr('side.path'), steps: [tr('side.path1'), tr('side.path2'), tr('side.path3')] } },
    },
    { id: 'contact', href: localePath(lang, '#contact'), label: tr('nav.contact'), detail: { text: tr('side.contactText') } },
    { id: 'yarn', href: localePath(lang, 'yarn/'), label: tr('nav.yarn'), detail: { text: tr('side.yarnText') } },
  ];
}

/** 編織頁（onPage = 在 /yarn/ 頁本身；作品頁傳 false） */
export function yarnNav(lang: Lang, onPage = true): NavItem[] {
  const tr = t(lang);
  const anchor = (id: string) => (onPage ? `#${id}` : localePath(lang, `yarn/#${id}`));
  return [
    { id: 'works', href: anchor('works'), label: tr('nav.works'), detail: { text: tr('side.yarnText') } },
    {
      id: 'process',
      href: anchor('process'),
      label: tr('nav.process'),
      detail: { path: { label: tr('side.path'), steps: [tr('side.path1'), tr('side.path2'), tr('side.path3')] } },
    },
    { id: 'soon', href: anchor('soon'), label: tr('nav.soon'), detail: { text: tr('side.soonText') } },
    { id: 'contact', href: localePath(lang, '#contact'), label: tr('nav.contact'), detail: { text: tr('side.contactText') } },
    { id: '3d', href: localePath(lang, '3d/'), label: tr('nav.3d'), detail: { text: tr('side.3dText') } },
  ];
}
