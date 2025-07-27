
// ================= Menu icon navbar =================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x'); 
  navbar.classList.toggle('active');  
};

// ================= Scroll Section =================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  // =============== Stick navbar ==================

    let header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100);

  // =================== remove menu icon navbar when click navbar link(scroll) =======================
  menuIcon.classList.remove('bx-x'); 
  navbar.classList.remove('active'); 


};

// ========== Dark Light Mode ==========

let darkModeIcon =document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () =>{
  darkModeIcon.classList.toggle ('bx-sun');  
  document.body.classList.toggle('dark-mode');
};

// ========== Language Toggle ==========
let currentLanguage = 'en';
let languageSwitch = document.querySelector('#language-switch');
let langText = document.querySelector('#lang-text');

// Language translations
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    project: 'Project',
    activities: 'Activities',
    contact: 'Contact',
    
    // Home section
    hello: 'Hello, I am',
    name: 'Huynh Cong Tien',
    homeDescription: 'Welcome to my portfolio! I\'m a passionate programmer who loves bringing ideas to life through simple, effective, and well-designed software.',
    homeDescription2: 'Feel free to explore this portfolio to learn more about my projects, skills, and how I can help bring your ideas to life.',
    downloadCV: 'Download CV',
    
    // Professions
    mobileApp: 'Mobile Application',
    backend: 'Back-end',
    frontend: 'Front-end',
    desktopApp: 'Desktop Application',
    
    // About section
    aboutTitle: 'About Me',
    aboutSubtitle: 'Hi, I\'m Here To Help You Next Project!',
    aboutDescription: 'As a final-year Information Technology student, I have a solid foundation in software development with hands-on experience in Back-End projects using Java Spring Boot, combined with React for building user interfaces. I\'m also proficient in using Figma and Canvas for UI design, Postman for API testing, and have strong knowledge of databases such as MySQL and SQL Server. In addition to technical skills, I possess strong communication abilities, a high sense of self-learning, and a proactive attitude toward exploring new technologies. I\'m driven by a continuous desire to grow and improve in the tech industry.',
    readMore: 'Read More',
    
    // Portfolio section
    latestProject: 'Latest Project',
    
    // Activities section
    activitiesTitle: 'Academic & Extracurricular Activities',
    scientificResearch: 'Scientific Research 2025',
    scientificDescription: 'Participated in a university-level scientific research activity; presented the project before an academic committee; developed critical thinking, data analysis, and scientific report writing skills.',
    techChallenge: 'Tech Innovators Challenge 2025',
    techDescription: 'The "Tech Innovators Challenge" competition organized by the Faculty of Information Technology is one of the key academic activities in the 2024-2025 academic year.',
    workshopsTitle: 'Workshops',
    workshopsDescription: 'Actively participated in workshops and seminars to develop soft skills such as communication, teamwork, and critical thinking.',
    
    // Tags
    academic: 'Academic',
    research: 'Research',
    presentation: 'Presentation',
    awardWinner: 'Award Winner',
    workshops: 'Workshops',
    
    // Contact section
    contactTitle: 'Contact Me!',
    phoneNumber: 'Phone Number',
    emailAddress: 'Email Address',
    location: 'Location',
    locationName: 'Ho Chi Minh City, Vietnam',
    callNow: 'Call Now',
    sendEmail: 'Send Email',
    viewMap: 'View Map',
    followMe: 'Follow Me On',
    workTogether: 'Let\'s Work Together!',
    workDescription: 'I\'m always excited to take on new challenges and collaborate on innovative projects. Whether you have a specific idea in mind or just want to explore possibilities, I\'d love to hear from you!',
    startProject: 'Start a Project',
    
    // Footer
    copyright: 'Copyright © 2023 By CT9(Huynh Cong Tien) | All Rights Reserved'
  },
  
  vi: {
    // Navigation
    home: 'Trang Chủ',
    about: 'Giới Thiệu',
    project: 'Dự Án',
    activities: 'Hoạt Động',
    contact: 'Liên Hệ',
    
    // Home section
    hello: 'Xin chào, tôi là',
    name: 'Huỳnh Công Tiến',
    homeDescription: 'Chào mừng đến với portfolio của tôi! Tôi là một lập trình viên đam mê, yêu thích việc biến ý tưởng thành hiện thực thông qua phần mềm đơn giản, hiệu quả và được thiết kế tốt.',
    homeDescription2: 'Hãy thoải mái khám phá portfolio này để tìm hiểu thêm về các dự án, kỹ năng của tôi và cách tôi có thể giúp biến ý tưởng của bạn thành hiện thực.',
    downloadCV: 'Tải CV',
    
    // Professions
    mobileApp: 'Ứng Dụng Di Động',
    backend: 'Back-end',
    frontend: 'Front-end',
    desktopApp: 'Ứng Dụng Desktop',
    
    // About section
    aboutTitle: 'Giới Thiệu Về Tôi',
    aboutSubtitle: 'Xin chào, tôi ở đây để giúp dự án tiếp theo của bạn!',
    aboutDescription: 'Là sinh viên năm cuối ngành Công nghệ Thông tin, tôi có nền tảng vững chắc trong phát triển phần mềm với kinh nghiệm thực tế trong các dự án Back-End sử dụng Java Spring Boot, kết hợp với React để xây dựng giao diện người dùng. Tôi cũng thành thạo trong việc sử dụng Figma và Canvas cho thiết kế UI, Postman để test API, và có kiến thức vững về cơ sở dữ liệu như MySQL và SQL Server. Ngoài kỹ năng kỹ thuật, tôi sở hữu khả năng giao tiếp tốt, tinh thần tự học cao và thái độ chủ động trong việc khám phá các công nghệ mới.',
    readMore: 'Đọc Thêm',
    
    // Portfolio section
    latestProject: 'Dự Án Mới Nhất',
    
    // Activities section
    activitiesTitle: 'Hoạt Động Học Thuật & Ngoại Khóa',
    scientificResearch: 'Nghiên Cứu Khoa Học 2025',
    scientificDescription: 'Tham gia hoạt động nghiên cứu khoa học cấp trường; trình bày dự án trước hội đồng học thuật; phát triển tư duy phản biện, phân tích dữ liệu và kỹ năng viết báo cáo khoa học.',
    techChallenge: 'Tech Innovators Challenge 2025',
    techDescription: 'Cuộc thi "Tech Innovators Challenge" do Khoa Công nghệ Thông tin tổ chức là một trong những hoạt động học thuật quan trọng trong năm học 2024-2025.',
    workshopsTitle: 'Hội Thảo',
    workshopsDescription: 'Tích cực tham gia các hội thảo và seminar để phát triển kỹ năng mềm như giao tiếp, làm việc nhóm và tư duy phản biện.',
    
    // Tags
    academic: 'Học Thuật',
    research: 'Nghiên Cứu',
    presentation: 'Thuyết Trình',
    awardWinner: 'Đạt Giải',
    workshops: 'Hội Thảo',
    
    // Contact section
    contactTitle: 'Liên Hệ Với Tôi!',
    phoneNumber: 'Số Điện Thoại',
    emailAddress: 'Địa Chỉ Email',
    location: 'Địa Điểm',
    locationName: 'Thành phố Hồ Chí Minh, Việt Nam',
    callNow: 'Gọi Ngay',
    sendEmail: 'Gửi Email',
    viewMap: 'Xem Bản Đồ',
    followMe: 'Theo Dõi Tôi Trên',
    workTogether: 'Hãy Cùng Làm Việc!',
    workDescription: 'Tôi luôn hào hứng đón nhận những thử thách mới và hợp tác trong các dự án sáng tạo. Dù bạn có ý tưởng cụ thể hay chỉ muốn khám phá các khả năng, tôi rất mong được nghe từ bạn!',
    startProject: 'Bắt Đầu Dự Án',
    
    // Footer
    copyright: 'Bản quyền © 2023 Bởi CT9(Huỳnh Công Tiến) | Tất cả quyền được bảo lưu'
  }
};

function updateLanguage(lang) {
  const t = translations[lang];
  
  // Update navigation
  document.querySelector('a[href="#home"]').textContent = t.home;
  document.querySelector('a[href="#about"]').textContent = t.about;
  document.querySelector('a[href="#portfolio"]').textContent = t.project;
  document.querySelector('a[href="#activities"]').textContent = t.activities;
  document.querySelector('a[href="#contact"]').textContent = t.contact;
  
  // Update home section
  document.querySelector('.home-content h3').textContent = t.hello;
  document.querySelector('.home-content h1').textContent = t.name;
  const homeParagraph = document.querySelector('.home-content p');
  homeParagraph.innerHTML = t.homeDescription + '<br>' + t.homeDescription2;
  document.querySelector('.home-content .btn').textContent = t.downloadCV;
  
  // Update professions
  const professions = document.querySelectorAll('.profession h3');
  if (professions[0]) professions[0].innerHTML = t.mobileApp.replace(' ', '<br />');
  if (professions[1]) professions[1].textContent = t.backend;
  if (professions[2]) professions[2].textContent = t.frontend;
  if (professions[3]) professions[3].innerHTML = t.desktopApp.replace(' ', '<br />');
  
  // Update about section
  document.querySelector('.about-content h2').innerHTML = t.aboutTitle.replace(' Me', ' <span>Me</span>').replace(' Tôi', ' <span>Tôi</span>');
  document.querySelector('.about-content h3').textContent = t.aboutSubtitle;
  document.querySelector('.about-content p').textContent = t.aboutDescription;
  document.querySelector('.about-content .btn').textContent = t.readMore;
  
  // Update portfolio section
  document.querySelector('.portfolio .heading').innerHTML = t.latestProject.replace('Latest', 'Latest <span>').replace('Project', 'Project</span>').replace('Mới Nhất', 'Mới Nhất <span>').replace('Dự Án', 'Dự Án</span>');
  
  // Update activities section
  document.querySelector('.activities .heading').innerHTML = t.activitiesTitle.replace('Academic &', 'Academic & <span>').replace('Activities', 'Activities</span>').replace('Học Thuật &', 'Học Thuật & <span>').replace('Ngoại Khóa', 'Ngoại Khóa</span>');
  
  const activityTitles = document.querySelectorAll('.activity-content h4');
  const activityDescriptions = document.querySelectorAll('.activity-content p');
  
  if (activityTitles[0]) activityTitles[0].textContent = t.scientificResearch;
  if (activityDescriptions[0]) activityDescriptions[0].textContent = t.scientificDescription;
  
  if (activityTitles[1]) activityTitles[1].textContent = t.techChallenge;
  if (activityDescriptions[1]) activityDescriptions[1].textContent = t.techDescription;
  
  if (activityTitles[2]) activityTitles[2].textContent = t.workshopsTitle;
  if (activityDescriptions[2]) activityDescriptions[2].textContent = t.workshopsDescription;
  
  // Update tags
  const tags = document.querySelectorAll('.tag');
  tags.forEach(tag => {
    const text = tag.textContent.toLowerCase();
    if (text.includes('academic') || text.includes('học thuật')) tag.textContent = t.academic;
    if (text.includes('research') || text.includes('nghiên cứu')) tag.textContent = t.research;
    if (text.includes('presentation') || text.includes('thuyết trình')) tag.textContent = t.presentation;
    if (text.includes('award') || text.includes('đạt giải')) tag.textContent = t.awardWinner;
    if (text.includes('workshops') || text.includes('hội thảo')) tag.textContent = t.workshops;
  });
  
  // Update contact section
  document.querySelector('.contact .heading').innerHTML = t.contactTitle.replace('Contact', 'Contact <span>').replace('Me!', 'Me!</span>').replace('Liên Hệ', 'Liên Hệ <span>').replace('Với Tôi!', 'Với Tôi!</span>');
  
  const contactHeaders = document.querySelectorAll('.contact-details h3');
  const contactButtons = document.querySelectorAll('.contact-link');
  
  if (contactHeaders[0]) contactHeaders[0].textContent = t.phoneNumber;
  if (contactHeaders[1]) contactHeaders[1].textContent = t.emailAddress;
  if (contactHeaders[2]) contactHeaders[2].textContent = t.location;
  
  if (contactButtons[0]) contactButtons[0].textContent = t.callNow;
  if (contactButtons[1]) contactButtons[1].textContent = t.sendEmail;
  if (contactButtons[2]) contactButtons[2].textContent = t.viewMap;
  
  const locationText = document.querySelector('.contact-details p:last-of-type');
  if (locationText && locationText.textContent.includes('Ho Chi Minh')) {
    locationText.textContent = t.locationName;
  }
  
  document.querySelector('.social-contact h3').textContent = t.followMe;
  document.querySelector('.contact-cta h3').textContent = t.workTogether;
  document.querySelector('.contact-cta p').textContent = t.workDescription;
  document.querySelector('.contact-btn').innerHTML = `<i class='bx bx-send'></i>${t.startProject}`;
  
  // Update footer
  document.querySelector('.footer-text p').textContent = t.copyright;
}

languageSwitch.onclick = () => {
  currentLanguage = currentLanguage === 'en' ? 'vi' : 'en';
  langText.textContent = currentLanguage.toUpperCase();
  updateLanguage(currentLanguage);
  
  // Save language preference
  localStorage.setItem('preferredLanguage', currentLanguage);
};

// Load saved language preference
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && savedLanguage !== currentLanguage) {
    currentLanguage = savedLanguage;
    langText.textContent = currentLanguage.toUpperCase();
    updateLanguage(currentLanguage);
  }
});

// =========== Scroll Reveal =============
ScrollReveal({
   reset: true,
   distance:'80px',
   duration: 2000,
   delay: 200
  });

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-image img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin:'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin:'right' });


