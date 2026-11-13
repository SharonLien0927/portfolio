// 網站基本資料：改這裡就會套用到全站
export const site = {
  // 網站風格：'butter' 奶油亮色、'crystal' 水晶深色、'dream' 夢境淺色分區、'night' 夜色深色分區（3D 區粉紫光、編織區藍黃光、首頁兩者融合）
  theme: 'night' as 'butter' | 'crystal' | 'dream' | 'night',
  name: { 'zh-tw': 'Sharon', en: 'Sharon' },
  email: 'sharon1062001@gmail.com',
  // 3D 頁（求職用）的聯絡區：LinkedIn 個人頁網址、履歷 PDF（放在 public/ 底下，例如 'resume.pdf'）。留空就不顯示
  linkedin: '',
  resume: '',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
  ],
  // 聯絡表單用 Web3Forms 寄信：到 https://web3forms.com 輸入你的 email 就會收到 Access Key，貼在下面。
  // 這個 key 本來就是設計成放在網頁上的，公開沒有關係。留空時表單會改成開啟寄信程式（mailto）。
  web3formsKey: '06abfc31-743e-4975-b4b7-16b8a03e0c5c',
};
