import { getCollection, getEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

type Localized = 'projects' | 'services' | 'crochet';

/** collection 的 id 長得像 "zh-tw/bold-coach"，拆成語言與 slug */
export function splitId(id: string) {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

export async function getLocalized<C extends Localized>(collection: C, lang: Lang) {
  const entries = await getCollection(collection, (e) => splitId(e.id).lang === lang);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** 讀取區塊文案；該語言還沒寫就退回中文 */
export async function getPage(name: string, lang: Lang) {
  const entry = (await getEntry('pages', `${lang}/${name}`)) ?? (await getEntry('pages', `zh-tw/${name}`));
  if (!entry) throw new Error(`找不到 src/content/pages/zh-tw/${name}.mdx`);
  return entry;
}
