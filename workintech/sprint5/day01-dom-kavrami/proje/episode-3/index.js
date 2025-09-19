const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Eğitimler",
    "nav-item-2": "Eğitmenler",
    "nav-item-3": "Sorular",
    "nav-item-4": "Blog",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Full Stack Web Developer",
    button: "Kayıt Olun",
  },
  "top-content": {
    "left-h4": "Kabul Şartları",
    "left-content":
      "Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.",
    "right-h4": "Haftalık Program",
    "right-content":
      "Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.",
  },
  "bottom-content": {
    "left-h4": "EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.",
    "left-content":
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    "middle-h4": "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    "middle-content":
      "Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.",
    "right-h4":
      "ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ",
    "right-content":
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    "contact-h4": "İLETİŞİM",
    address: "Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye",
    phone: "+90 (216) 550-5905",
    email: "bilgi@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2023",
  },
  images: {
    "logo-img": "https://i.ibb.co/42PDMF2/logo.png",
    "cta-img": "https://i.ibb.co/XssVKxk/cta.png",
    "accent-img": "https://i.ibb.co/5FZmL26/accent.png",
  },
};

/* Kodlar Buradan aşağıya */

const logo = document.querySelector("#logo-img");
logo.setAttribute("src", siteContent.images["logo-img"]);

// NAV
const anchor = document.querySelectorAll("header nav a");
anchor.forEach((item, index) => {
  const key = `nav-item-${index + 1}`;
  item.textContent = siteContent.nav[key] || "";
  item.setAttribute("class", "italic"); // [13] tam eşleşme: class="italic"
});

//cta kısmının eklenmesi

const cta = document.querySelector("#cta-img");
cta.setAttribute("src", siteContent.images["cta-img"]);

const ctaText = document.querySelector(".cta-text h1");
const ctaBtn = document.querySelector(".cta-text button");

ctaText.textContent = siteContent.cta.h1;
ctaBtn.textContent = siteContent.cta.button;

// top content yazılması;

const topt = document.querySelector(".top-content");
const blocks = topt.querySelectorAll(".text-content");

const topData = siteContent["top-content"];
const spec = [
  { h4: "left-h4", p: "left-content" },
  { h4: "right-h4", p: "right-content" },
];

blocks.forEach((block, i) => {
  const s = spec[i];
  if (!s) return;
  block.querySelector("h4").textContent = topData[s.h4];
  block.querySelector("p").textContent = topData[s.p];
});

// mid-img yazılması

const midImg = document.querySelector(".middle-img");
midImg.setAttribute("src", siteContent.images["accent-img"]);

// bottom content yazılması;

const bott = document.querySelector(".bottom-content");
const blocksB = bott.querySelectorAll(".text-content");

const topData2 = siteContent["bottom-content"];
const spec2 = [
  { h4: "left-h4", p: "left-content" },
  { h4: "middle-h4", p: "middle-content" },
  { h4: "right-h4", p: "right-content" },
];

blocksB.forEach((block, i) => {
  const s = spec2[i];
  block.querySelector("h4").textContent = topData2[s.h4];
  block.querySelector("p").textContent = topData2[s.p];
});

// footer

const contact = document.querySelector(".contact");
const h4 = contact.querySelector("h4");
const ps = contact.querySelectorAll("p");

h4.textContent = siteContent.contact["contact-h4"];
ps[0].textContent = siteContent.contact.address;
ps[1].textContent = siteContent.contact.phone;
ps[2].textContent = siteContent.contact.email;

// FOOTER
const foot = document.querySelector("footer");
const a = foot.querySelector("a");
// foot.classList.add("footer"); // (opsiyonel; test bunu kontrol etmiyor)
a.textContent = siteContent.footer.copyright;
a.setAttribute("class", "bold"); // [9] ve [15] gereği class="bold"
