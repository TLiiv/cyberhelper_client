import DOMPurify from "dompurify";

export interface Email {
  id: number;
  sender: string;
  subject: string;
  body: string;
  isPhishing: boolean;
  difficulty: number;
  displayLink: string;
  hiddenLink: string;
  contactNumber: string;
  iconUrl: string;
  signature: string;
    isRead: boolean;
    imgUrl: string;
  websiteLink: string;
}

export const populateEmailBody = (body: string, email: Email, username: string): string => {
  
  const pastDate = new Date();
  pastDate.setHours(pastDate.getHours() - 23);


  const dateEt = pastDate.toLocaleDateString("et-EE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const dateRu = pastDate.toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const dateEn = pastDate.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
  return body
    .replace(/{{hiddenLink}}/g, email.hiddenLink)
      .replace(/{{displayLink}}/g, email.displayLink)
      .replace(/{{websiteLink}}/g, email.websiteLink)
    .replace(/{{contactNumber}}/g, email.contactNumber)
    .replace(/{{iconUrl}}/g, email.iconUrl)
    .replace(/{{signature}}/g, email.signature)
    .replace(/{{imgUrl}}/g, email.imgUrl)
  .replace(/{{currentDate_et}}/g, dateEt)
    .replace(/{{currentDate_ru}}/g, dateRu)
    .replace(/{{currentDate_en}}/g, dateEn)
    .replace(/{{username}}/g, username);
    
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    FORCE_BODY: true,
    ALLOWED_ATTR: ["style", "class", "type", "href", "rel", "target", "src", "onclick","onmouseover","onmouseout"],
    ALLOWED_TAGS: ["a", "button", "br", "p", "h1", "b", "div", "img"]
  });
};