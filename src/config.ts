// 網站基本資料：改這裡就會套用到全站
export const site = {
  // 網站風格：'butter' 奶油亮色、'crystal' 水晶深色、'dream' 夢境淺色分區、'night' 夜色深色分區（3D 區粉紫光、編織區藍黃光、首頁兩者融合）
  theme: 'night' as 'butter' | 'crystal' | 'dream' | 'night',
  name: { 'zh-tw': '你的名字', en: 'Your Name' },
  email: 'hello@example.com',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
  ],
  // 聯絡表單用 Web3Forms 寄信：到 https://web3forms.com 輸入你的 email 就會收到 Access Key，貼在下面。
  // 這個 key 本來就是設計成放在網頁上的，公開沒有關係。留空時表單會改成開啟寄信程式（mailto）。
  web3formsKey: '',
};
