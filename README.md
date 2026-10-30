# 個人作品集網站

用 [Astro](https://astro.build) 建立的靜態網站，繁體中文／英文雙語，部署在 GitHub Pages。

## 在自己電腦上預覽

```bash
npm install      # 第一次才需要
npm run dev      # 打開 http://localhost:4321/portfolio/
```

## 要改內容，改這些地方

| 想改的東西 | 檔案位置 |
|---|---|
| 名字、email、社群連結、表單金鑰 | `src/config.ts` |
| 網站風格（奶油亮色／水晶深色／夢境淺色分區／夜色深色分區） | `src/config.ts` 的 `theme`；分區配色在 `src/styles/theme-night.css`（深色）、`theme-dream.css`（淺色） |
| 配色、字型 | `src/styles/global.css` 最上面那一段；水晶主題在 `src/styles/theme-crystal.css` |
| Hero、About、Contact 的文字 | `src/content/pages/zh-tw/*.mdx`、`src/content/pages/en/*.mdx` |
| 3D 作品（`/3d/` 頁與案例頁） | `src/content/projects/zh-tw/`、`src/content/projects/en/` |
| 3D 頁開頭、合作流程 | `src/content/pages/*/3d-intro.mdx`、`3d-process.mdx` |
| 服務卡片 | `src/content/services/`（`group: digital` 或 `handmade`） |
| 編織作品（`/yarn/` 頁與作品頁） | `src/content/yarn/zh-tw/`、`src/content/yarn/en/` |
| 編織頁開頭、客製流程 | `src/content/pages/*/yarn-intro.mdx`、`yarn-process.mdx` |
| 按鈕、選單等短字 | `src/i18n/ui.ts` |

**新增作品：** 複製一個 `.mdx` 檔改內容，中文放 `zh-tw/`、英文放 `en/`，**兩邊用同一個檔名**，語言切換才會對得上。檔名就是網址，例如 `bear.mdx` → `/yarn/bear/`。

3D 作品的欄位：
- `category`：分類，3D 頁上方的篩選按鈕會自動依這個產生（例如「產品渲染」「動態影像」）
- `cover`：封面圖，放進 `src/assets/images/`，寫 `cover: "../../../assets/images/檔名.jpg"`
- `video`：hover 影片，放進 `public/videos/`，寫 `video: "videos/檔名.mp4"`（建議 5–10 秒、靜音、1–3 MB 以內）
- `order`：數字小的排前面；首頁只顯示前 4 件（1 件精選 + 3 件列表）

編織作品的欄位：
- `technique`：`knit`（棒針）、`crochet`（鉤針）、`mixed`（兩種都有）
- `yarn`：線材，`size`：尺寸，`status`：`available` 現貨、`commission` 可客製、`sold` 已售出
- `cover`：封面圖，`gallery`：作品頁下方的更多照片，寫成清單 `gallery: ["../../../assets/images/a.jpg", "../../../assets/images/b.jpg"]`

## 聯絡表單

表單用 [Web3Forms](https://web3forms.com) 寄到你的信箱（免費每月 250 封）。
到網站輸入你的 email → 收到 Access Key → 貼到 `src/config.ts` 的 `web3formsKey`。
還沒設定時，按「送出」會改成開啟訪客的寄信程式。

## 部署到 GitHub Pages

1. 在 GitHub 建立名為 `portfolio` 的 repo，把這個資料夾推上去
2. repo 的 **Settings → Pages → Source** 選 **GitHub Actions**
3. 之後每次推到 `main`，網站會自動更新到 `https://<你的帳號>.github.io/portfolio/`

repo 名稱如果不是 `portfolio`，請改 `astro.config.mjs` 裡的 `base`。
