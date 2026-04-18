import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        menu: "Menu",
        gallery: "Gallery",
        about: "About",
        location: "Location",
        callNow: "Call Now",
      },
      hero: {
        headlineLine1: "Where tradition",
        headlineLine2: "meets taste.",
        subheadline: "Chauhan’s Sweets & Restaurant — a premium little corner for handcrafted Indian sweets, fresh snacks and the kind of chai that feels like a hug.",
        whatsapp: "Book on WhatsApp ↗",
        exploreMenu: "Explore the menu ↗",
        openDaily: "Open daily - 8 AM — 10 PM",
        address: "Islamnagar Road, Rampur Maniharan"
      },
      about: {
        title: "Our Story",
        quote: "\"Building trust through every bite, right here in Rampur Maniharan.\"",
        par1: "At Jugnu Junction, we believe that food is an emotion. For years, we have been serving the local community of Rampur Maniharan with authentic, mouth-watering street food and premium Indian sweets. We source the freshest local ingredients and prepare everything with the same love and care as you would at home.",
        features: {
          t1: "Authentic Taste",
          d1: "Traditional recipes passed down generations.",
          t2: "Local Trust",
          d2: "A beloved name in Rampur Maniharan, Saharanpur.",
          t3: "Fresh Ingredients",
          d3: "Premium quality ingredients, prepared daily."
        }
      },
      menu: {
        title: "Our Menu",
        desc: "A curated selection of authentic street food and premium sweets to satisfy your cravings.",
        categories: {
          mainCourse: "Main Course",
          chats: "Chats",
          fastFood: "Fast Food",
          famousSweets: "Famous Sweets"
        },
        items: {
          choleBhature: "Chole Bhature",
          choleChawal: "Chole Chawal",
          simpleSamosa: "Simple Samosa",
          dahiSamosa: "Dahi Samosa",
          cholaSamosa: "Chola Samosa",
          tikkiChat: "Tikki Chat",
          tikkiKhastaChat: "Tikki Khasta Chat",
          thandiChat: "Thandi Chat",
          rajbhog: "Rajbhog",
          golgappe: "Golgappe",
          dahiGolgappe: "Dahi Golgappe",
          steamMomo: "Steam Momo",
          fryMomo: "Fry Momo",
          vegNoodles: "Veg Noodles",
          paneerNoodles: "Paneer Noodles",
          frenchFries: "French Fries",
          chilliPotatoes: "Chilli Potatoes",
          manchurian: "Manchurian",
          kajuKatli: "Kaju Katli",
          gondLaddu: "Gond Laddu",
          gulabJamun: "Gulab Jamun",
          rasgulla: "Rasgulla",
          milkCake: "Milk Cake",
          rasMalai: "Ras Malai",
          jalebi: "Jalebi",
          alooTikkiChaat: "Aloo Tikki Chaat",
          ladoo: "Ladoo",
          samosa: "Samosa"
        },
        mostLoved: "Most Loved"
      },
      gallery: {
        signatureMenu: "Signature Menu",
        title1: "Sweet. Savoury. ",
        title2: "Unforgettable.",
        desc: "Every single dish, handcrafted in small batches — because shortcuts never made anyone say wow.",
        sweet: "SWEET",
        savoury: "SAVOURY"
      },
      contact: {
        visitUs: "Visit Us",
        desc: "Come experience the vibrance of authentic Indian cuisine. We are looking forward to serving you!",
        openHoursLabel: "Opening Hours",
        openHoursTime: "8:00 AM - 10:00 PM",
        openHoursSub: "Open Seven Days a Week",
        locationLabel: "Our Location",
        locationAddress: "Ch. Hukum Singh Market, Near Gupta Furniture, Islamnagar Road, Rampur Maniharan, Saharanpur, Uttar Pradesh – 247451",
        openInMap: "Open in Map →",
        callLabel: "Call for Orders",
        whatsappLabel: "WhatsApp Order",
        whatsappAction: "Message on WhatsApp",
        followUs: "Follow Us"
      },
      footer: {
        rights: "All rights reserved.",
        madeWith: "Made with ❤️ in India"
      }
    }
  },
  hi: {
    translation: {
      navbar: {
        home: "मुख्य पृष्ठ",
        menu: "मेन्यू",
        gallery: "गैलरी",
        about: "हमारे बारे में",
        location: "पता",
        callNow: "कॉल करें",
      },
      hero: {
        headlineLine1: "कुछ स्वाद याद",
        headlineLine2: "बन जाते हैं।",
        subheadline: "चौहान स्वीट्स & रेस्टोरेंट — हाथ से बनी भारतीय मिठाइयों, ताज़े स्नैक्स और ऐसी चाय के लिए एक प्रीमियम छोटा कोना, जो गले लगाने जैसा अहसास कराती है।",
        whatsapp: "WhatsApp पर बुक करें ↗",
        exploreMenu: "मेन्यू एक्सप्लोर करें ↗",
        openDaily: "प्रतिदिन खुला - सुबह 8 बजे से — रात 10 बजे तक",
        address: "इस्लामनगर रोड, रामपुर मनिहारान"
      },
      about: {
        title: "हमारी कहानी",
        quote: "\"रामपुर मनिहारान में हर निवाले के साथ विश्वास बनाना।\"",
        par1: "जुगनू जंक्शन में, हम मानते हैं कि भोजन एक भावना है। हम वर्षों से रामपुर मनिहारान के स्थानीय समुदाय को असली, स्वादिष्ट स्ट्रीट फूड और प्रीमियम भारतीय मिठाइयाँ परोस रहे हैं। हम शुद्ध स्थानीय सामग्री इस्तेमाल करते हैं और हर चीज़ उसी प्यार और देखभाल के साथ बनाते हैं, जैसी आप घर पर बनाते हैं।",
        features: {
          t1: "असली स्वाद",
          d1: "पीढ़ियों से चली आ रही पारंपरिक रेसिपी।",
          t2: "स्थानीय विश्वास",
          d2: "रामपुर मनिहारान, सहारनपुर का एक प्रिय नाम।",
          t3: "ताज़ा सामग्री",
          d3: "प्रीमियम गुणवत्ता वाली सामग्री, जिन्हें रोज़ ताज़ा तैयार किया जाता है।"
        }
      },
      menu: {
        title: "हमारा मेन्यू",
        desc: "आपकी हर लालसा को तृप्त करने के लिए असली स्ट्रीट फूड और प्रीमियम मिठाइयों का चुनिंदा संग्रह।",
        categories: {
          mainCourse: "मुख्य भोजन",
          chats: "चाट",
          fastFood: "फास्ट फ़ूड",
          famousSweets: "प्रसिद्ध मिठाइयाँ"
        },
        items: {
          choleBhature: "छोले भटूरे",
          choleChawal: "छोले चावल",
          simpleSamosa: "सिंपल समोसा",
          dahiSamosa: "दही समोसा",
          cholaSamosa: "छोला समोसा",
          tikkiChat: "टिक्की चाट",
          tikkiKhastaChat: "टिक्की खस्ता चाट",
          thandiChat: "ठंडी चाट",
          rajbhog: "राजभोग",
          golgappe: "गोलगप्पे",
          dahiGolgappe: "दही गोलगप्पे",
          steamMomo: "स्टीम मोमोज़",
          fryMomo: "फ्राई मोमोज़",
          vegNoodles: "वेज नूडल्स",
          paneerNoodles: "पनीर नूडल्स",
          frenchFries: "फ्रेंच फ्राइज़",
          chilliPotatoes: "चिली पोटैटो",
          manchurian: "मंचूरियन",
          kajuKatli: "काजू कतली",
          gondLaddu: "गोंद के लड्डू",
          gulabJamun: "गुलाब जामुन",
          rasgulla: "रसगुल्ला",
          milkCake: "मिल्क केक",
          rasMalai: "रस मलाई",
          jalebi: "जलेबी",
          alooTikkiChaat: "आलू टिक्की चाट",
          ladoo: "लड्डू",
          samosa: "समोसा"
        },
        mostLoved: "पसंदीदा"
      },
      gallery: {
        signatureMenu: "सिग्नेचर मेन्यू",
        title1: "मीठा. नमकीन. ",
        title2: "भुलाए न भूलने वाला।",
        desc: "हर एक डिश छोटे बैचों में हाथ से तैयार की जाती है — क्योंकि शार्टकट से कभी किसी के मुँह से 'वाह' नहीं निकलता।",
        sweet: "मीठा",
        savoury: "नमकीन"
      },
      contact: {
        visitUs: "यहाँ पधारें",
        desc: "आइए असली भारतीय भोजन की जीवंतता का अनुभव करें। हम आपकी सेवा करने के लिए तत्पर हैं!",
        openHoursLabel: "खुलने का समय",
        openHoursTime: "सुबह 8:00 बजे - रात 10:00 बजे तक",
        openHoursSub: "सप्ताह के सातों दिन खुला",
        locationLabel: "हमारा पता",
        locationAddress: "चौधरी हुकुम सिंह मार्केट, गुप्ता फर्नीचर के पास, इस्लामनगर रोड, रामपुर मनिहारान, सहारनपुर, उत्तर प्रदेश – 247451",
        openInMap: "मैप में खोलें →",
        callLabel: "ऑर्डर के लिए कॉल करें",
        whatsappLabel: "WhatsApp ऑर्डर",
        whatsappAction: "WhatsApp पर मैसेज करें",
        followUs: "हमें फॉलो करें"
      },
      footer: {
        rights: "सर्वाधिकार सुरक्षित।",
        madeWith: "भारत में ❤️ के साथ निर्मित"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language (English)
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
