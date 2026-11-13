// 編織頁的「手作須知」和「常見問題」。改這裡就會更新中英文編織頁。
import type { Lang } from '../i18n/ui';

type Text = Record<Lang, string>;

// 手作須知（放在客製流程下面）
export const notices: { title: Text; text: Text }[] = [
  {
    title: { 'zh-tw': '尺寸誤差', en: 'Size' },
    text: {
      'zh-tw': '手工編織的尺寸可能有 1–2 公分誤差，針目與形狀也會有些微不同，這正是手作獨一無二的地方。',
      en: 'Handmade pieces can vary by 1–2 cm, and stitches and shape differ slightly from piece to piece. That’s what makes each one unique.',
    },
  },
  {
    title: { 'zh-tw': '顏色差異', en: 'Colour' },
    text: {
      'zh-tw': '照片會因螢幕與光線和實物略有色差；不同批次的線材，顏色也可能有些微差異。',
      en: 'Colours may look slightly different on screen than in person, and yarn from different dye lots can vary a little.',
    },
  },
  {
    title: { 'zh-tw': '保養方式', en: 'Care' },
    text: {
      'zh-tw': '建議冷水手洗、平放陰乾，避免機洗、烘乾或用力扭擰。使用一段時間後自然起毛球是正常的。',
      en: 'Hand wash in cold water and dry flat in the shade. Avoid machine washing, tumble drying or wringing. Some pilling over time is normal.',
    },
  },
  {
    title: { 'zh-tw': '嬰幼兒用品', en: 'Baby items' },
    text: {
      'zh-tw': '眼睛、鈕扣等小配件都會確實縫牢，但仍建議在大人陪同下使用。',
      en: 'Small parts such as eyes and buttons are sewn on securely, but please use under adult supervision.',
    },
  },
  {
    title: { 'zh-tw': '價格與退換', en: 'Price & returns' },
    text: {
      'zh-tw': '標示價格為參考價，會依尺寸、配色與複雜度調整，以報價為準。客製作品開始製作後恕不退換（作品有瑕疵除外），訂金恕不退還。',
      en: 'Listed prices are a guide and may change with size, colours and complexity; the quote is final. Commissions can’t be returned once I’ve started (unless faulty), and deposits are non-refundable.',
    },
  },
];

// 常見問題
export const faqs: { q: Text; a: Text }[] = [
  {
    q: { 'zh-tw': '交期多久？', en: 'How long does it take?' },
    a: {
      'zh-tw': '依作品複雜度評估，大約 1–2 週。',
      en: 'Depending on the piece, about 1–2 weeks.',
    },
  },
  {
    q: { 'zh-tw': '可以接急件嗎？', en: 'Can you do rush orders?' },
    a: {
      'zh-tw': '可以，急件的價格會比原價高一些，歡迎先來信討論。',
      en: 'Yes, at a higher price than usual. Get in touch first and we’ll work it out.',
    },
  },
  {
    q: { 'zh-tw': '怎麼寄送？運費多少？', en: 'How is it shipped, and what does it cost?' },
    a: {
      'zh-tw': '以 7-11 賣貨便寄送，運費依平台收取，滿 NT$1,500 免運。',
      en: 'By 7-Eleven pickup (Taiwan) through 7-11 Mai Huo Bian. Shipping follows the platform’s rates and is free on orders over NT$1,500.',
    },
  },
  {
    q: { 'zh-tw': '有哪些付款方式？', en: 'How can I pay?' },
    a: {
      'zh-tw': '可以使用賣貨便平台提供的付款方式，或是銀行轉帳。',
      en: 'With any payment method on the 7-11 Mai Huo Bian platform, or by bank transfer.',
    },
  },
  {
    q: { 'zh-tw': '可以只改顏色嗎？可以照圖片做嗎？', en: 'Can I change the colours, or order from a photo?' },
    a: {
      'zh-tw': '可以更改顏色，也可以照圖片製作。但手作無法保證和圖片完全一模一樣，完美主義者請三思。',
      en: 'Yes to both. But a handmade piece can’t be guaranteed to match a photo exactly, so perfectionists may want to think twice.',
    },
  },
];
