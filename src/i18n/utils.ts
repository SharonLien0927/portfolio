import { defaultLang, ui, type Lang, type UIKey } from './ui';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function t(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** 站內連結：自動加上 GitHub Pages 的 base 與語言前綴。path 可以是 'yarn/' 或 '#contact' */
export function localePath(lang: Lang, path = '') {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  return `${base}${prefix}/${path.replace(/^\//, '')}`;
}

/** public/ 底下的檔案網址 */
export function assetUrl(path: string) {
  return `${base}/${path.replace(/^\//, '')}`;
}

export const otherLang = (lang: Lang): Lang => (lang === 'zh-tw' ? 'en' : 'zh-tw');
