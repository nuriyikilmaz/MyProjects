console.log("sa");
const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  title: "Workintech",
  logo: "https://i.ibb.co/gysPB8V/logo.png",
  links: [
    {
      href: "programlarimiz.html",
      text: "Programlarımız",
    },
    {
      href: "blog.html",
      text: "Blog",
    },
    {
      href: "sorulariniz.html",
      text: "Sorularınız",
    },
    {
      href: "hakkimizda.html",
      text: "Hakkımızda",
    },
  ],
};

/* Kodlar Buradan aşağıya */

const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent.logo);

const title = document.getElementsByTagName("title")[0];
title.textContent = siteContent.title;

const navLinks = document.querySelectorAll("nav a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = siteContent.links[i].text;
  navLinks[i].setAttribute("href", siteContent.links[i].href);
}
