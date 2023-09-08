import BA1 from "../../assets/project/business analyces/img1.avif";
import BA2 from "../../assets/project/business analyces/img2.avif";
import BA3 from "../../assets/project/business analyces/img3.avif";
import BA4 from "../../assets/project/business analyces/img4.avif";
import BA5 from "../../assets/project/business analyces/img5.avif";
import HL1 from "../../assets/project/humo legal/img1.avif";
import HL2 from "../../assets/project/humo legal/img2.avif";
import HL3 from "../../assets/project/humo legal/img3.avif";
import HL4 from "../../assets/project/humo legal/img4.avif";
import HL5 from "../../assets/project/humo legal/img5.avif";
import MP1 from "../../assets/project/med-pro/img1.avif";
import MP2 from "../../assets/project/med-pro/img2.avif";
import MP3 from "../../assets/project/med-pro/img3.avif";
import MP4 from "../../assets/project/med-pro/img4.avif";
import MP5 from "../../assets/project/med-pro/img5.avif";
import WA1 from "../../assets/project/web-agency/img1.avif";
import WA2 from "../../assets/project/web-agency/img2.avif";
import WA3 from "../../assets/project/web-agency/img3.avif";
import WA4 from "../../assets/project/web-agency/img4.avif";
import WA5 from "../../assets/project/web-agency/img5.avif";

const myWorks = [
  {
    name: "Business Analytics",
    data: "1.10.2022",
    stacks: "HTML, CSS, SCSS, BEM, JS, adaptive",
    info: "Cайт построен с использованием простых стеков. Цель создания сайта: совершенствование навыков верстки, идеальная работа со SCSS и семантическими тегами.",
    image: BA1,
    images: [BA1, BA2, BA3, BA4, BA5],
    url:'https://github.com/Zohid7717?tab=repositories'
  },
  {
    name: "Humo-Legal",
    data: "1.08.2023",
    stacks: "HTML, CSS, SCSS, BEM, JS, adaptive, React, Material UI, Axios, Redux toolkit, i18next, React Hook Form, React Router Dom, Swiper, MongoDB, Mongoose",
    info: "Сайт создан по заказу юридической фирмы. Это первый сайт, который готов к использованию. Сайт мультиязычный и предоставляет переводы на узбекский, русский и английский языки. Административная часть сайта, которая позволяет управлять различными секциями, такими как отзывы, услуги, персонал, пресс-центр, заявки и вопросы. Это значит, что можно быстро и легко обновлять информацию на сайте и предоставлять клиентам самую актуальную информацию.",
    image: HL1,
    images: [HL1, HL2, HL3, HL4, HL5],
    url:'https://github.com/Zohid7717/humo-legal-react'
  },
  {
    name: "ИЦНМН",
    data: "30.10.2022",
    stacks: "HTML, CSS, SCSS, BEM, JS, adaptive",
    info: "Сайт создан учебных целях. Сайт Исследовательского Центра Новейших Методов в Наркологии. Сайт с сложной структурой части header. А двигающиеся части при адаптиве main секции были настоящей испытанией для начинающего фронтендшика",
    image: MP1,
    images: [MP1, MP2, MP3, MP4, MP5],
    url:'https://github.com/Zohid7717/med-spb.pro'
  },
  {
    name: "Agency Web Site",
    data: "25.04.2023",
    stacks: "HTML, CSS, SCSS, BEM, JS, adaptive, React, Axios, Json-Server",
    info: "Сайт создан учебных целях. Сайт компании по SMM, создании сайтов и интернет услуг. Сайт имеет разного рода слайдером, темную и светлую тему.",
    image: WA1,
    images: [WA1, WA2, WA3, WA4, WA5],
    url:'https://github.com/Zohid7717/agency-website-in-react-js'
  },
]

export default myWorks;