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
      // 3D 頁的篩選分類，例如「產品渲染」「動態影像」「視覺設計」（英文版寫對應的英文）
      category: z.string(),
      role: z.string().optional(),
      client: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // 封面圖放 src/assets/images/，路徑相對於這個 mdx 檔
      cover: image().optional(),
      // hover 預覽影片放 public/videos/，這裡寫 "videos/xxx.mp4"
      video: z.string().optional(),
      // 案例頁上方的完整影片（有播放控制），放 public/videos/
      film: z.string().optional(),
      tools: z.string().optional(),
      duration: z.string().optional(),
      // 公開成果的連結（YouTube、網站…）
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
      // 案例頁下方的圖片區塊，例如「分鏡腳本」「算圖成果」「現場實錄」
      galleries: z
        .array(z.object({ title: z.string(), note: z.string().optional(), cols: z.number().default(2), images: z.array(image()) }))
        .default([]),
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

const yarn = defineCollection({
  loader: mdx('yarn'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      status: z.enum(['available', 'commission', 'sold']).default('commission'),
      // 類型：custom 可客製的原創作品；daily 手作日常（材料包等純分享，不接單，作品頁不顯示客製按鈕）
      kind: z.enum(['custom', 'daily']).default('custom'),
      // 工法：knit 棒針、crochet 鉤針、mixed 兩種都有
      technique: z.enum(['knit', 'crochet', 'mixed']).optional(),
      yarn: z.string().optional(),
      size: z.string().optional(),
      cover: image().optional(),
      // 作品頁下方的更多照片
      gallery: z.array(image()).default([]),
      order: z.number().default(0),
    }),
});

// 各區塊的文案（hero、about、contact、yarn-intro、yarn-process、yarn-soon）
const pages = defineCollection({
  loader: mdx('pages'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      eyebrow: z.string().optional(),
      // 大標題分三行；{cube}、{yarn}、{since} 會變成圓形圖示
      lines: z.array(z.string()).optional(),
      // 簡介文字的位置：inline 夾在第二行左邊；below 是階梯排法，簡介和 since 徽章放在大標題下方
      leadPosition: z.enum(['inline', 'below']).default('inline'),
      // 首頁封面：輪流切換的關鍵字、背景跑馬燈文字
      roles: z.array(z.string()).optional(),
      marquee: z.string().optional(),
      since: z.string().optional(),
      // About：置中的大字宣言，*星號* 包起來的字會變藍色
      statement: z.string().optional(),
      subtitle: z.string().optional(),
      quote: z.string().optional(),
      signature: z.string().optional(),
      points: z.array(z.string()).optional(),
      photo: image().optional(),
      stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
      steps: z.array(z.object({ title: z.string(), text: z.string() })).optional(),
    }),
});

export const collections = { projects, services, yarn, pages };
