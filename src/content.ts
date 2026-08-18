export const school = {
  name: "Çelik Fight Academy",
  instagram: "https://instagram.com/celikfightacademy",
  instagramHandle: "@celikfightacademy",
  phoneDisplay: "0533 617 82 56",
  phoneTel: "+905336178256",
  whatsapp: "https://wa.me/905336178256",
  address: "Çağlayan, Vatan Cd. No: 52 Kat: 2, 34403 Kağıthane / İstanbul",
  transit: "Çağlayan metro ve metrobüse 5 dakika yürüme",
  mapEmbed:
    "https://maps.google.com/maps?q=%C3%87a%C4%9Flayan%2C%20Vatan%20Cd.%20No%3A%2052%2C%2034403%20Ka%C4%9F%C4%B1thane%2F%C4%B0stanbul&z=16&output=embed",
};

export const pillars = [
  {
    title: "Yeni başlayanlar",
    text: "Hiç dövüş sporu yapmadıysanız 1. gruptan başlarsınız. Tempo ve seviye derste ayarlanır.",
  },
  {
    title: "Akşam grupları",
    text: "Dersler iş çıkışına göre planlandı. Haftada üç gün, sabit saatler.",
  },
  {
    title: "Kickboks, Muay Thai, MMA",
    text: "Ayakta dövüş ve MMA aynı salonda. Hangi branşın size uyduğuna birlikte bakıyoruz.",
  },
  {
    title: "Ulaşımı kolay",
    text: "Çağlayan metro ve metrobüse 5 dakika. Kağıthane merkezine yakın.",
  },
];

export const disciplines = [
  {
    id: "kickboks",
    title: "Kickboks",
    image: "/photos/kick.png",
    text: "Kombinasyon, mesafe ve tempo. Pad çalışması ve teknik tekrar. Kickboks dersleri Muay Thai ile aynı günlerde, üç grup halinde işlenir.",
  },
  {
    id: "muaythai",
    title: "Muay Thai",
    image: "/photos/muay.png",
    text: "Yumruk, tekme, diz ve dirsek. Clinch ve diz çalışması kickboks programının içinde. Pazartesi, çarşamba, cuma.",
  },
  {
    id: "mma",
    title: "MMA",
    image: "/photos/cage.png",
    text: "Ayakta dövüş ve yer. Salı, perşembe ve cumartesi 20:30–22:00. Kickboks altyapısı olanlar ve sıfırdan başlayanlar için ayrı tempo tutulur.",
  },
];

export const programs = [
  {
    id: "kickboks",
    title: "Kickboks & Muay Thai",
    price: "3500",
    days: "Pazartesi, çarşamba, cuma",
    groups: [
      { name: "1. Grup", time: "18:00 – 19:00" },
      { name: "2. Grup", time: "19:30 – 20:30" },
      { name: "3. Grup", time: "20:40 – 22:00" },
    ],
  },
  {
    id: "mma",
    title: "MMA",
    price: "4000",
    days: "Salı, perşembe, cumartesi",
    groups: [{ name: "Grup dersi", time: "20:30 – 22:00" }],
  },
];

export const week = {
  days: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
  rows: [
    {
      time: "18:00–19:00",
      cells: ["Kickboks / Muay Thai", "", "Kickboks / Muay Thai", "", "Kickboks / Muay Thai", ""],
    },
    {
      time: "19:30–20:30",
      cells: ["Kickboks / Muay Thai", "", "Kickboks / Muay Thai", "", "Kickboks / Muay Thai", ""],
    },
    {
      time: "20:30–22:00",
      cells: ["", "MMA", "", "MMA", "", "MMA"],
    },
    {
      time: "20:40–22:00",
      cells: ["Kickboks / Muay Thai", "", "Kickboks / Muay Thai", "", "Kickboks / Muay Thai", ""],
    },
  ],
};

export const faqs = [
  {
    q: "Hiç spor yapmadım, gelebilir miyim?",
    a: "Evet. Kickboks ve Muay Thai için 1. grup yeni başlayanlara göre ayarlanır. MMA için de ilk dersi birlikte planlıyoruz.",
  },
  {
    q: "İlk derse ne giymeliyim?",
    a: "Rahat spor kıyafeti ve içme suyu yeterli. Eldiven veya diğer ekipman için dersten önce WhatsApp’tan sorun — size söyleyelim.",
  },
  {
    q: "Üyelik ne kadar?",
    a: "Kickboks ve Muay Thai aylık 3500₺. MMA aylık 4000₺. 3 aylık üyelik alana 1 ay hediye.",
  },
  {
    q: "Salona nasıl gelirim?",
    a: "Çağlayan, Vatan Cd. No: 52 Kat: 2. Çağlayan metro ve metrobüse 5 dakika yürüme mesafesinde.",
  },
];

export const photos = [
  { src: "/photos/salon/img_1648.jpg", alt: "Grup dersi", span: "wide" as const },
  { src: "/photos/salon/img_1106_cover.jpg", alt: "Çelik Fight Academy sınıfı", span: "tall" as const },
  { src: "/photos/salon/img_2231.jpg", alt: "Kickboks müsabaka galibiyeti", span: "tall" as const },
  { src: "/photos/salon/img_1529.jpg", alt: "Salonda antrenman", span: "tall" as const },
  { src: "/photos/salon/img_0687.jpg", alt: "Takım", span: "wide" as const },
  { src: "/photos/salon/img_1296.jpg", alt: "Team Çelik", span: "tall" as const },
  { src: "/photos/salon/img_2082.jpg", alt: "Ders sonrası", span: "tall" as const },
  { src: "/photos/salon/img_3077.jpg", alt: "Akin Fight şampiyon", span: "tall" as const },
  { src: "/photos/takim.jpeg", alt: "Salon takımı", span: "square" as const },
  { src: "/photos/salon/img_3818.jpg", alt: "Kickboks antrenmanı", span: "tall" as const },
  { src: "/photos/salon/img_2880.jpg", alt: "Akademi", span: "tall" as const },
  { src: "/photos/salon/img_2683.jpg", alt: "Team Çelik", span: "tall" as const },
  { src: "/photos/salon/img_2691.jpg", alt: "Antrenörler", span: "tall" as const },
  { src: "/photos/salon/img_2490.jpg", alt: "Müsabaka", span: "tall" as const },
  { src: "/photos/salon/img_2895.jpg", alt: "Antrenman", span: "tall" as const },
];

export const videos = [
  { src: "/videos/antrenman.mp4", poster: "/photos/salon/img_1529.jpg", title: "Antrenman" },
];
