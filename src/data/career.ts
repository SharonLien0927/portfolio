// 3D 頁「經歷與能力」的內容。改這裡就會更新中英文 3D 頁。
import type { Lang } from '../i18n/ui';

type Text = Record<Lang, string>;

export const career = {
  // 一句話的定位
  headline: {
    'zh-tw': '3D Generalist｜8 年以上業界經驗，從獨立製作到帶領團隊',
    en: '3D generalist · 8+ years in industry, from solo production to leading teams',
  } as Text,

  // 三個核心能力
  strengths: [
    {
      title: { 'zh-tw': '帶領與技術指導', en: 'Leadership & technical direction' },
      text: {
        'zh-tw': '負責腳本規劃、技術指導與時程管理，帶領團隊在緊湊展期內如期交付裸視 3D 等大型專案。',
        en: 'Script planning, technical direction and scheduling, leading teams to deliver large naked-eye 3D projects on tight exhibition deadlines.',
      },
    },
    {
      title: { 'zh-tw': '全流程獨立製作', en: 'End-to-end production' },
      text: {
        'zh-tw': '從發想、分鏡、建模、貼圖、動畫、算圖到後製皆能獨立完成，（依複雜程度）最短可三週內交付整支裸視 3D 影片。',
        en: 'Concept, storyboard, modelling, texturing, animation, rendering and compositing on my own — depending on complexity, a full naked-eye 3D film in as little as three weeks.',
      },
    },
    {
      title: { 'zh-tw': '用 3D 解決問題', en: 'Solving problems with 3D' },
      text: {
        'zh-tw': '依需求選擇呈現方式與製作流程，例如以 AI 生圖加速發想及參考，四天完成一個線上展覽場景。',
        en: 'Choosing the right approach and pipeline for each brief — e.g. using AI image generation for fast ideation and references to finish an online exhibition scene in four days.',
      },
    },
  ],

  // 工作經歷（新的放上面）
  jobs: [
    {
      company: { 'zh-tw': '威宏控股股份有限公司', en: 'WW Holding' },
      role: { 'zh-tw': '3D 美術設計師・部門小組長', en: '3D Artist · Team Lead' },
      period: '2024.12 – now', // now 會依語言顯示「現在」或 Present
      points: {
        'zh-tw': [
          '擔任部門小組長：分配工作、管理時程，統籌集團內 3D 相關事務',
          '負責與各廠商溝通協調，並與旗下品牌 CIPU 合作，解決產品視覺上的各種需求',
          'CIPU 包款 3D：依實體包款拍照從零建模，製作產品圖、360° 旋轉與 IG 廣告動畫',
          'CIPU AI 商品影片：自行撰寫腳本、製作分鏡，以 Seedance、Kling 生成並剪輯配樂',
        ],
        en: [
          'Team lead: assign work, manage schedules and oversee all 3D work across the group',
          'Coordinate with vendors and partner with the group’s bag brand CIPU to solve its product visual needs',
          'CIPU bags in 3D: model from scratch from photos of the real bags; product shots, 360° spins and Instagram ad animations',
          'CIPU AI product videos: write scripts, storyboard, generate with Seedance and Kling, then edit and score',
        ],
      },
    },
    {
      company: { 'zh-tw': '王一設計 KingOne Design', en: 'KingOne Design' },
      role: { 'zh-tw': '3D 美術設計師', en: '3D Artist' },
      period: '2022.07 – 2024.05',
      points: {
        'zh-tw': [
          '獨立完成中華航空、鴻佰科技裸視 3D 動畫；鴻海裸視 3D 擔任腳本與技術指導，帶領團隊執行',
          '中華航空線上博物館、國研院等網頁 3D 互動場景，與工程師協作上線',
          '自有產品 seeulair 線上展覽：以 AI 生圖 + Blender 製作近 30 個風格場景',
        ],
        en: [
          'Produced naked-eye 3D films for China Airlines and Ingrasys solo; led script and technical direction for Foxconn’s naked-eye 3D projects',
          'Built interactive web 3D for the China Airlines Online Museum and NARLabs, launching with engineers',
          'Created nearly 30 styled scenes for seeulair, an in-house online exhibition product, with AI image generation + Blender',
        ],
      },
    },
    {
      company: { 'zh-tw': '超現實科技 Surreal Technology', en: 'Surreal Technology' },
      role: { 'zh-tw': '3D 美術設計師', en: '3D Artist' },
      period: '2017.08 – 2022.07',
      points: {
        'zh-tw': [
          'LUXGEN GPM、GT225、S5 產品影片：動態分鏡、場景、打光、動畫、算圖與後製',
          'Toyota 官網 Altis、Camry 360° 外觀與內裝渲染',
          'VR 教育產品 SURREALM、WTA 密室逃脫：場景、角色 3D 化與 Unity 整合',
        ],
        en: [
          'LUXGEN GPM, GT225 and S5 product films: motion storyboards, scenes, lighting, animation, rendering and compositing',
          '360° exterior and interior renders of the Altis and Camry for the Toyota website',
          'Educational VR products SURREALM and WTA: scenes, characters and Unity integration',
        ],
      },
    },
  ],

  education: {
    'zh-tw': '世新大學 數位多媒體設計學系（遊戲組）',
    en: 'Shih Hsin University — Digital Multimedia Design (Game Design)',
  } as Text,

  // 技能分組
  skills: [
    { group: { 'zh-tw': '3D 製作與算圖', en: '3D & rendering' }, items: ['Blender', 'Maya', '3ds Max', 'Cycles', 'Redshift'] },
    { group: { 'zh-tw': '貼圖與即時引擎', en: 'Texturing & real-time' }, items: ['Substance Painter', 'Unity', 'Babylon.js'] },
    { group: { 'zh-tw': '後製與設計', en: 'Post & design' }, items: ['After Effects', 'Photoshop', 'Illustrator', 'Procreate'] },
    { group: { 'zh-tw': 'AI 與網頁', en: 'AI & web' }, items: ['Midjourney', 'Claude', 'Seedance', 'Kling', 'AI 影片製作|AI video', 'Framer'] },
  ],

  // 合作過的品牌
  clients: {
    'zh-tw': ['CIPU', '中華航空', '鴻海', '鴻佰科技', 'Toyota', 'LUXGEN', '國家實驗研究院'],
    en: ['CIPU', 'China Airlines', 'Foxconn', 'Ingrasys', 'Toyota', 'LUXGEN', 'NARLabs'],
  } as Record<Lang, string[]>,
};
