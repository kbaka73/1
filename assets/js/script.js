const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggel = document.querySelector(".dark-light"),
  seaechToggel = document.querySelector(".searchtoggle"),
  siderbarOpen = document.querySelector(".siderbarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

let getmode = localStorage.getItem("mode");
if (getmode && getmode === "dark-mode") {
  body.classList.add("dark");
}

// js code toggle dark and light mood
modeToggel.addEventListener("click", () => {
  modeToggel.classList.toggle("active");
  body.classList.toggle("dark");
  // js code to keep user selected mode even page refrsh of file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "ligth-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});
// js code toggle search box
seaechToggel.addEventListener("click", () => {
  seaechToggel.classList.toggle("active");
});

// js code to  toggle sidebar

siderbarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickdElm = e.target;
  if (
    !clickdElm.classList.contains("siderbarOpen") &&
    !clickdElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; // اذا لم تكن اللغة متوفرة استخدم الانجليزية
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-en]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-en");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};
const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    Portfolio: "Portfolio",
    PORTFOLIO: "PORTFOLIO",
    services: "Services",
    general: "General stats",
    english: "En",
    MKAdvertising:
      "MK Advertising was founded and managed by a professional team with extensive experience in the field of information technology and design, with the aim of meeting all the needs of individuals and companies. Small businesses in the field of information technology and providing excellent software solutions of high quality helped your business grow and grow",
    offer: "Offer ends in",
    Excellentreturn: "Excellent return with us",
    Workingwithus:
      "Working with us means saving a lot of money. We will provide you marketing packagesIntegrated electronic and web services at market competitive prices and the highest possible qualityto satisfy our customers.",
    Convertingvisitors: "Help your business take off and grow faster",
    mk: "MK Advertising Company",
    specializedteam: "specialized team",
    Wetakethetime:
      "We take the time to update our knowledge and skills that have helped us Develop broad experience, deeper knowledge and expertise.",
    Designexpertise: "Design expertise",
    Wehaveateamof:
      "We have a team of specialists in web design and advertising, planning a strategy Integrated to target your audience to help your business reach the best possible performance.",
    arabic: "Ar",
    Whyshouldyou: "Why should you work with us?",
    Allourdigitalmarketingp:
      "All our digital marketing packages are available at competitive prices. We guarantee returns Great for every penny you invest.",
    customerssatisfaction: "customers satisfaction",
    Wehavearigorousquality:
      "We have a rigorous quality control process to ensure that everything we offer meets expectations and our customers' needs.",
    SupportTeam: "Support Team",
    Wehaveacustomer:
      "We have a 24/7 customer support team We are always in touch with our current and future customers.",
    Learnmore: "Learn more",
    Buynow: "Buy now",
    priceplans: "price plans",
    Chooseyouridealplan: "Choose your ideal plan",
    Weofferyouafullrange:
      "We offer you a full range of integrated web and e-marketing services. There are no limits to theway our marketing services packages can be designed to help your company reach its full potential. We are hereto help you move forward.",
    Basicpackage: "Basic package",
    Basicsite: "Basic site",
    ArticlesWritingandOne: "8-12 Articles Writing and Submission",
    pagesOne: "3-5 pages",
    Hostingemailaccounts: "Hosting & email accounts",
    MobileandtabletResponsiveWebsite: "Mobile and tablet Responsive Website",
    DomainNameRegistration: "Domain Name Registration",
    SEOfriendly: "SEO friendly",
    Standardpackage: "Standard Package",
    customsite: "custom Site",
    Writingandpreparingarticlestow: "Writing and preparing 20 articles",
    pagestow: "6 - 10 pages",
    Fullycustomizedwebsite: "Fully customized website",
    bestperformance: "best performance",
    Betterreturnsoninvestment: "Better returns on investment",
    Technicalsupportteam: "Technical support team",
    Importantlinks: "Important links",
    Aboutcompany: "Aboutcompany",
    contactnumbers: "contact numbers",
    AllrightsreservedtoMK: "All rights reserved to MK@20023",
    BestperformanceandadvancedstrategiesWith:
      "Best performance and advanced strategies With a professional team",
    Wehavearigorousqualitycontrolprocess:
      "We have a rigorous quality control process to ensure that everything we offer meets the expectations and needs of our customers.",
    Mostfrequentlyaskedquestions: "Most frequently asked questions",
    Althoughdigitalmarketingcertainly:
      "Although digital marketing certainly uses some of the same elements of traditional marketing, internet marketing has its own subtle differences. Speed is perhaps the most noticeable difference – you can have an ad on the web in a few hours if you're willing to put in the time and money. The Internet is certainly fast, however, its influence also extends to the rate at which it changes For example, less than 10 years ago, social media was only used by a few users around the world. But now, it's the primary way netizens spend their time, and it's also a very profitable marketing channel.",
    Ismarketingdifferentfromregulamarketing:
      "Is e-marketing different from regular marketing?",
    Onefthemostexcitingaspectof:
      "One of the most exciting aspects of the Internet is the wide variety of marketing opportunities available to business owners. From SEO to paid advertising to social media, the options are many and growing.    However, there is no single method that works absolutely best for all businesses. While we usually recommend a variety of strategies, some work better in certain areas than others. The only way to know what works best for your business is through experimentation and better study of impact.",
    Whatisthebestwaomarketonline: "What is the best way to market online",
    odaycustomersareonlineandif:
      "In a word - yes. Today's customers are online, and if you're not there for them, you risk becoming outdated and forgotten. Traditionalists may want to stick to marketing through print publications or via billboards, but that's a risky decision       To compete in today's world, you simply have to be part of the internet, and that includes internet marketing. Whether you choose to work with a marketing expert or try it out on your own, you should (at the very least) maintain a website with basic information and ways to contact you.",
    Doyoureallyneedinternetmarketing: "Do you really need internet marketing?",
    services: "services",
    Everythingyouneedtosucceedisinyourhands:
      "Everything you need to succeed is in your hands    All our digital marketing packages are offered at competitive prices. We guarantee you good returns on every penny invested.    We have a rigorous quality control process to ensure that everything we offer meets the expectations and needs of our customers.      We have a customer support team that works around the clock in order to always communicate with our future and existing customers.",
    Thebestpackagethebestoptions: "The best packages, the best options!",
    Weprovidewithafullrangeofintegrateweb:
      "We provide you with a full range of integrated web services and e-marketing. There are no limits to the way our marketing services packages can be designed to help your company reach its full potential. We are here to help you move forward.  Select the website package that best suits your business needs. If you are looking for more advanced solutions, we are here to help!  Our website packages are suitable for most small to medium sized businesses or organizations and include everything you need.",
    Premiumpackage: "Premium package",
    Advantages: "Advantages",
    Suitablefortargeting: "Suitable for targeting",
    local: "local",
    Atthestatelevel: "At the state level",
    localinternational: "local + international",
    Domainnameregistration: "Domain name registration",
    Easemaintenance: "Ease of updating and maintenance",
    Comprehensiveanalysisofthesite: "Comprehensive analysis of the site",
    technicalsupport: "technical support",
    Throughmailchatandtelephone: "Through mail, chat, and telephone",
    Writingandpreparingarticles: "Writing and preparing articles",
    Allpackagesinclude: "All packages include",
    Everythingyouneedtosucceedisinyourhands:
      "Everything you need to succeed is in your hands",
    Weprovideyouwithfullrangeof:
      "We provide you with a full range of integrated web services and e-marketing. There are no limits to the way our marketing services packages can be designed to help your company reach its full potential. We are here to help you move forward.",
    inquiryDonothesitatetoontactus:
      "Do you have an inquiry?! Do not hesitate to contact us",
    Readytoconnectwitmarketing:
      "Ready to connect with a marketing expert? Ready to call a marketing expert? Let's do a great job together",
    Registration: "Registration",

    DiscountsuntiltheendofRamadan:
      "Discounts until the end of Ramadan up to 35%",

    login: "Login",
  },
  ar: {
    home: "الصفحة الرئيسية",
    about: "من نحن",
    contact: "تواصل معنا",
    Portfolio: "اعمالنا",
    services: "الخدمات",
    general: "إحصائيات العام ",
    PORTFOLIO: "اعمالنا",
    MKAdvertising:
      "تأسست شركة MK للإعلان وإدارتها من قبل فريق محترف يتمتع بخبرة واسعة في مجال تقنية المعلومات والتصميم ، بهدف تلبية جميع احتياجات الأفراد والشركات. ساعدت الشركات الصغيرة في مجال تكنولوجيا المعلومات وتقديم حلول برمجية ممتازة ذات جودة عالية على نمو عملك وتنميت",
    Convertingvisitors: "ساعد مشروعك على أن ينطلق ينمو يتسارع",
    offer: "ينتهي العرض في",
    Excellentreturn: "عائد ممتاز معنا",
    mk: "شركة MK للدعاية والاعلان",
    Designexpertise: "خبرة التصميم",
    specializedteam: "فريق  متخصص",
    Wehaveateamof:
      "            لدينا فريق المتخصصين في تصميم المواقع والاعلانات ، نخطط لاستراتيجية متكاملة لاستهداف جمهورك لمساعدة عملك على الوصول إلى أفضل أداء ممكن.",
    Wetakethetime:
      "   نحن نأخذ الوقت الكافي لتحديث معرفتنا ومهاراتنا التي ساعدتنا على تطوير خبرة واسعة ومعرفة وخبرة أعمق.",
    Workingwithus:
      "العمل معنا يعني توفير الكثير من المال . سوف نقدم لك باقات تسويق الكتروني وخدمات ويب متكاملة بأسعار تنافسية السوق وباعلا جاوده ممكنه لارضاء عملائنا.",
    english: "en",
    arabic: "ar",
    Whyshouldyou: "لماذا يجب أن تعمل معنا؟",
    Allourdigitalmarketingp:
      "جميع حزم التسويق الرقمي لدينا متوفرة بأسعار تنافسية.نحن نضمن عوائد كبيرة لكل قرش تستثمره.",
    customerssatisfaction: "رضا العملاء",
    Wehavearigorousquality:
      "لدينا عملية صارمة لمراقبة الجودة لضمان أن كل ما نقدمه يلبي توقعات واحتياجات عملائنا.",
    SupportTeam: "فريق الدعم",
    Wehaveacustomer:
      " لدينا فريق دعم عملاء يعمل على مدار 24 الساعة طوال أيام الأسبوع حتى نتواصل دائمًا مع عملائنا الحاليين والمستقبليين.",
    Learnmore: "المزيد",
    Buynow: "اشتري الان",
    priceplans: "خطط الاسعار",
    Chooseyouridealplan: "اختر خطتك المثالية",
    Weofferyouafullrange:
      "نقدم لك مجموعة كاملة من خدمات الويب والتسويق الإلكتروني المتكاملة. لا توجد حدود ل    الطريقة التي يمكن بها تصميم حزم خدمات التسويق لدينا لمساعدة شركتك على الوصول إلى إمكاناتها الكاملة. نحن هنا    لمساعدتك على المضي قدمًا.",
    Basicpackage: "الحزمة الأساسية",
    Basicsite: "الموقع ألاساسي",
    ArticlesWritingandOne: "8-12 مقالات كتابة وتقديم",
    pagesOne: "3-5 صفحات",
    Hostingemailaccounts: "الاستضافة وحسابات البريد الإلكتروني",
    MobileandtabletResponsiveWebsite: "موقع مستجيب للجوّال والجهاز اللوحي",
    DomainNameRegistration: "تسجيل اسم النطاق",
    SEOfriendly: "ودية SEO",
    Standardpackage: "الحزمة القياسية",
    customsite: "موقع مخصص",
    Writingandpreparingarticlestow: "كتابة وإعداد 20 مقالاً",
    pagestow: "6 - 10 صفحات",
    Fullycustomizedwebsite: "موقع مخصص بالكامل",
    bestperformance: "أفضل أداء",
    Betterreturnsoninvestment: "أفضل عائد على الاستثمار",
    Technicalsupportteam: "فريق الدعم الفني",
    Importantlinks: "روابط هامة",
    Aboutcompany: "عن الشركة",
    contactnumbers: "ارقام التواصل",
    AllrightsreservedtoMK: "جميع الحقوق محفوظه لدي شركة MK@20023",
    BestperformanceandadvancedstrategiesWith:
      "أفضل أداء واستراتيجيات متقدمة مع فريق محترف",
    Wehavearigorousqualitycontrolprocess:
      "لدينا عملية مراقبة جودة صارمة لضمان أن كل ما نقدمه يلبي توقعات واحتياجات عملائنا.",
    Mostfrequentlyaskedquestions: "الأسئلة الأكثر شيوعاً",
    Althoughdigitalmarketingcertainly:
      "برغم أن التسويق الالكتروني بالتأكيد يستخدم بعض العناصر نفسها في التسويق التقليدي و، إلا أن للتسويق عبر الإنترنت فروقه الجوهرية الدقيقة الخاصة به.ربما تكون السرعة هي الفرق الأكثر وضوحًا – حيث يمكنك الحصول على إعلان على الويب في خلال ساعات قليلة إذا كنت على استعداد لتخصيص الوقت وإنفاق المال. من المؤكد أن الإنترنت سريع ، ومع ذلك ، فإن تأثيره يمتد أيضًا إلى المعدل الذي يتغير به.على سبيل المثال ، منذ أقل من 10 سنوات ، كانت وسائل التواصل الاجتماعي تستخدم فقط من قبل عدد قليل من المستخدمين في جميع أنحاء العالم. ولكن الآن، إنها الطريقة الأساسية التي يقضي بها مستخدمو الإنترنت وقتهم، وهي أيضًا قناة تسويق مربحة للغاية.",
    Ismarketingdifferentfromregulamarketing:
      "هل يختلف التسويق الالكتروني عن التسويق العادي",
    Onefthemostexcitingaspectof:
      "أحد أكثر جوانب الإنترنت إثارة هو التنوع الكبير في فرص التسويق المتاحة لأصحاب الأعمال. من تحسين وتهيئة المواقع لمحركات البحث (SEO) إلى الإعلانات المدفوعة إلى وسائل التواصل الاجتماعي ، الخيارات كثيرة ومتزايدة.ومع ذلك ، لا توجد طريقة واحدة تعمل بشكل أفضل في المطلق لجميع الشركات. بينما نوصي عادةً بمجموعة متنوعة من الاستراتيجيات، فإن بعضها يعمل بشكل أفضل في مجالات معينة أكثر من غيرها. الطريقة الوحيدة لمعرفة أفضل أداء لعملك هي من خلال التجربة ودراسة التأثير بشكل أفضل.",
    Whatisthebestwaomarketonline: "ما هي افضل طريقة للتسويق عبر الانترنت",
    odaycustomersareonlineandif:
      "في كلمة واحدة – نعم.العملاء اليوم متصلون بالإنترنت ، وإذا لم تكن موجودًا من أجلهم ، فإنك تخاطر بأن تصبح قديمًا ومنسياً. قد يرغب التقليديون في التمسك بالتسويق من خلال المنشورات المطبوعة أو عبر اللوحات الإعلانية ، لكن هذا قرار خطير.للمنافسة في عالم اليوم ، عليك ببساطة أن تكون جزءًا من الإنترنت ، وهذا يشمل التسويق عبر الإنترنت. سواء اخترت العمل مع خبير تسويق أو المحاولة بنفسك، يجب عليك (على الأقل) الاحتفاظ بموقع ويب يحتوي على معلومات أساسية وطرق الاتصال بك.",
    Doyoureallyneedinternetmarketing: "هل تحتاج فعلا للتسويق عبر الانترنت؟",
    services: "خدماتنا",
    Everythingyouneedtosucceedisinyourhands:
      "كل ما تحتاجه للنجاح أصبح بين يديك  يتم تقديم جميع باقات التسويق الالكتروني لدينا بأسعار تنافسية. نحن نضمن لك عوائد جيدة على كل قرش يتم استثماره.  لدينا عملية مراقبة جودة صارمة للتأكد من أن كل ما نقدمه يتوافق مع توقعات واحتياجات عملائنا.  لدينا فريق دعم عملاء يعمل على مدار الساعة من أجل تواصل مستمر دوماً مع عملائنا المقبلين والحاليين.",
    Thebestpackagethebestoptions: "أفضل الباقات أفضل الخيارات!",
    Weprovidewithafullrangeofintegrateweb:
      "نوفر لك مجموعة كاملة من خدمات الويب المتكاملة والتسويق الالكتروني. لا توجد حدود للطريقة التي يمكن بها تصميم باقات خدمات التسويق لدينا لمساعدة شركتك في الوصول إلى إمكاناتها الكاملة. نحن هنا لمساعدتك على التقدم الى الأمام.حدد باقة موقع الويب التي تناسب احتياجات عملك. إذا كنت تبحث عن حلول أكثر تقدمًا ، فنحن هنا دوماً لمساعدتك!تناسب باقات مواقع الويب لدينا معظم الشركات أو المؤسسات الصغيرة إلى المتوسطة الحجم وتشمل كل ما تحتاجه.",
    Premiumpackage: "الحزمة المميزة",
    Advantages: "المميزات",
    Suitablefortargeting: "مناسب للاستهداف",
    local: "محلي",
    Atthestatelevel: "علي مستوي الدولة",
    localinternational: "محلي + دولي",
    Domainnameregistration: "تسجيل اسم النطاق (الدومين)",
    Easemaintenance: "سهولة التحديث والصيانة",
    Comprehensiveanalysisofthesite: "تحليل شامل للموقع",
    technicalsupport: "الدعم الفني",
    Throughmailchatandtelephone: "من خلال البريد، الشات، والتليفون",
    Writingandpreparingarticles: "كتابة وتهيئة المقالات",
    Allpackagesinclude: "جميع الباقات تشمل",
    Everythingyouneedtosucceedisinyourhands: "كل ما تحتاجه للنجاح بين يديك",
    Weprovideyouwithfullrangeof:
      "نقدم لك مجموعة كاملة من خدمات الويب المتكاملة والتسويق الإلكتروني. لا توجد حدود للطريقة التي يمكن بها تصميم حزم خدمات التسويق لدينا لمساعدة شركتك على الوصول إلى إمكاناتها الكاملة. نحن هنا لمساعدتك على المضي قدما.",
    inquiryDonothesitatetoontactus:
      "هل لديك استفسار؟! لا تتردد في التواصل معنا",
    Readytoconnectwitmarketing:
      "مستعد للتواصل مع خبير التسويق؟ هل أنت جاهز للاتصال بخبير تسويق؟ دعنا نقم بعمل رائع معًا",

    Registration: "تسجيل ",
    DiscountsuntiltheendofRamadan: " خصومات حتي اخر شهر رمضان  يصل ال 35%",
    login: "تسجيل الدخول",
  },
};

// count date

let countDownDate = new Date("Mar 3, 2025 23:59:59").getTime();
let counter = setInterval(() => {
  // get date new
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
    alert("fish time");
  }
}, 1000);

let nums = document.querySelectorAll(".nun");
let section = document.querySelector(".statistic");
let started = false;

let treee = document.querySelector(".treee");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCont(num));
    }
    started = true;
  }
  if (window.scrollY >= treee.offsetTop - 250) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

function startCont(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//social-media
const socialMedia = document.querySelector(".social-media"),
  toogleBtn = socialMedia.querySelector(".toggle-btn");

toogleBtn.addEventListener("click", () => {
  socialMedia.classList.toggle("open");
});

// ScrollReveal

function revealFunction() {
  window.sr = ScrollReveal({
    duration: 650,
    distance: "250px",
    easing: "ease-out",
  });
  sr.reveal(".reveal-reset-top", { origin: "top", reset: true });
  sr.reveal(".reveal-reset-bottom", { origin: "bottom", reset: true });
  sr.reveal(".reveal-rotateww", {
    origin: "bottom",
    rotate: { z: -1, z: 2 },
    reset: true,
  });
}
window.addEventListener("load", () => {
  revealFunction();
});
