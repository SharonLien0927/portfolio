import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 每個 collection 底下分 zh-tw/ 與 en/ 兩個資料夾；同一份內容在兩種語言用同一個檔名
const mdx = (dir: string) => glob({ pattern: '**/*.mdx', base: `./src/content/${dir}` });

const projects = defineCollection({
  loader: mdx('projects'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number(),
      role: z.string().optional(),
      client: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // 封面圖放 src/assets/images/，路徑相對於這個 mdx 檔
      cover: image().optional(),
      // hover 預覽影片放 public/videos/，這裡寫 "videos/xxx.mp4"
      video: z.string().optional(),
      order: z.number().default(0),
    }),
});

const services = defineCollection({
  loader: mdx('services'),
  schema: z.object({
    title: z.string(),
    group: z.enum(['digital', 'handmade']),
    tags: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const crochet = defineCollection({
  loader: mdx('crochet'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      status: z.enum(['available', 'commission', 'sold']).default('commission'),
      cover: image().optional(),
      order: z.number().default(0),
    }),
});

// 各區塊的文案（hero、about、contact、crochet-intro、crochet-process、crochet-soon）
const pages = defineCollection({
  loader: mdx('pages'),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    lines: z.array(z.string()).optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    steps: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
  }),
});

export const collections = { projects, services, crochet, pages };
