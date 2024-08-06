import FrequentlyAsked from "@/app/components/product/FrequentlyAsked";
import Gallery from "@/app/components/product/Gallery";
import MovingShoppingCart from "@/app/components/product/MovingShoppingCart";
import ProductDefinition from "@/app/components/product/ProductDefinition";
import ProductDescription from "@/app/components/product/ProductDescription";
import SimilarProducts from "@/app/components/product/SimilarProducts";
import TechnicalDetail from "@/app/components/product/TechnicalDetail";
import WarrantyDelivery from "@/app/components/product/WarrantyDelivery";
import React from "react";

const SingleProduct = ({ params }) => {
  const { productName } = params;
  const product = {
    leftInStock: "فقط دو عدد در انبار باقی مانده است",
    title:
      "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
    colors: [
      {
        title: "مشکی",
        color: "black",
      },
      {
        title: "قرمز",
        color: "red",
      },
      {
        title: "آبی",
        color: "blue",
      },
      {
        title: "صورتی",
        color: "pink",
      },
    ],
    price: 44289500,
    discount: 10,
    // summary_features: [
    //   {
    //     title: "فناوری صفحه‌ نمایش",
    //     value: "Super Retina XDR OLED",
    //   },
    //   {
    //     title: "رزولوشن دوربین",
    //     value: "12 مگاپیکسل",
    //   },
    //   {
    //     title: "نسخه سیستم عامل",
    //     value: "iOS 15",
    //   },
    //   {
    //     title: "اندازه",
    //     value: "6.1",
    //   },
    // ],
    all_features: [
      {
        title: "معرفی",
        value:
          "گوشی موبایل iPhone 13 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. نمایشگر آیفون 13 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند. این نمایشگر رزولوشن بسیار بالایی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 460 پیکسل را در هر اینچ جا داده است. امکان شارژ بی‌‌سیم باتری در این گوشی وجود دارد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است.",
      },
      {
        title: "بررسی تخصصی",
        value:
          "      گوشی‌های هوشمند خانواده آیفون 13 در قالب چهار گوشی آیفون 13 پرو مکس، آیفون 13 پرو، آیفون 13 و آیفون 13 مینی معرفی شدند. بدون شک دو مدل پرو و پرو مکس به عنوان پرچمداران این شرکت از مشخصات فنی قدرتمند‌تری بهره برده‌اند. اما در این میان آیفون 13 به همراه مدل مینی با قیمتی مقرون‌به‌صرفه‌تر روانه بازار شده‌اند تا امکان خرید برای کاربران بیشتری امکان‌پذیر باشد. در این مقاله خواهیم دید که آیفون 13 به نسبت نسل قبلی چه مشخصاتی با خود به‌همراه داشته و در بخش‌های مختلف چه عملکردی را از خودش به‌نمایش می‌گذارد. شاید با توجه به مشخصات تقریبا مشابه آیفون 13 و آیفون 12، این سوال برای شما به وجود آید که چرا آیفون 13 می‌تواند عملکرد بهتری داشته باشد. پس با ما همراه باشید تا به دلایل عملکرد بهتر و قدرتمند‌تر آیفون 13 به نسبت آیفون 12 پی ببرید.",
      },
      {
        title: "مشخصات کلی",
        value: [
          {
            title: "ابعاد",
            value: "۱۴۶.۷x۷۱.۵x۷.۶۵ میلی‌متر",
          },
          {
            title: "وزن",
            value: "۱۷۴ گرم",
          },
          {
            title: "توضیحات سیم کارت",
            value: "سایز نانو (۸.۸ × ۱۲.۳ میلی‌متر)",
          },
        ],
      },
    ],
    relatedProducts: [
      {
        img: "/product/related/img1.avif",
        title: "آسفون S 24",
        price: 68200,
      },
      {
        img: "/product/related/img2.avif",
        title: "آسفون S Galexy 4",
        price: 9845678,
      },
      {
        img: "/product/related/img3.avif",
        title: "آسفون S P 2487",
        price: 7458900,
      },
      {
        img: "/product/related/img4.avif",
        title: "آسفون S T48759",
        price: 935897400,
      },
    ],
    productImages: [
      "/product/img1.webp",
      "/product/img2.avif",
      "/product/img3.avif",
      "/product/img4.avif",
      "/product/img5.avif",
    ],
  };

  const similarProducts = [
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone1.avif",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone2.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone3.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone4.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone5.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone2.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone3.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone4.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone2.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone5.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: "گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone4.webp",
      colors: ["red", "blue", "gray"],
    },
    {
      title: "گوشی موبایل سامسونگ مدل Galaxy S23 Ultra",
      desc: " گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و گوشی موبایل سامسونگ مدل Galaxy S23 FE دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنامم 8 گیگابایت - ویتنام",
      rate: 4.4,
      price: 29185000,
      img: "/product/related/phone2.webp",
      colors: ["red", "blue", "gray"],
    },
  ];

  const productDefinition = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aliquam laborum provident consectetur quae rerum! Fugiat et quas atque non deserunt repudiandae, asperiores blanditiis ad qui cum quasi, aspernatur nemo animi itaque pariatur. Esse culpa ad distinctio ipsa voluptatum eveniet vitae, dolor ducimus eum error adipisci dolorem at dolorum. Nostrum quae soluta, voluptate ad blanditiis aliquam omnis tempora voluptas veniam vero harum consequuntur cumque. Repudiandae rem dolor delectus! Eaque dolor minus saepe porro at laudantium quas cupiditate sapiente blanditiis? Commodi obcaecati, ipsam dolores earum quisquam excepturi sit ratione laboriosam tenetur accusantium totam nulla, veritatis veniam facere perferendis repudiandae repellat. Sit.",
  ];

  const technicaldetails = [
    {
      title: "صفحه نمایش",
      value: "6.1-inch Super Retina XDR display with True Tone",
    },
    {
      title: "دوربین پشت",
      value: "Dual 12MP camera system",
    },
    {
      title: "دوربین جلو",
      value: "12 MP TrueDepth",
    },
    {
      title: "ظرفیت",
      value: "128 GB, 256 GB, 512 GB",
    },
    {
      title: "پردازنده",
      value: "Super powerful and intelligent A15 Bionic chip",
    },
    {
      title: "SIM card",
      value: "Dual SIM – nano-SIM and eSIM",
    },
    {
      title: "بلوتوث",
      value: "5.0",
    },
    {
      title: "شبکه",
      value: "5G / LTE, Wi-Fi",
    },
  ];

  const questions = [
    {
      title: "قیمت این گوشی بستگی به چه مواردی داه؟",
      value: "قیمت این گوشی به موارد زیادی بستگی دارد مثل نور صفحه و ....",
    },
    {
      title: "قیمت این گوشی بستگی به چه مواردی داه؟",
      value: "قیمت این گوشی به موارد زیادی بستگی دارد مثل نور صفحه و ....",
    },
    {
      title: "قیمت این گوشی بستگی به چه مواردی داه؟",
      value: "قیمت این گوشی به موارد زیادی بستگی دارد مثل نور صفحه و ....",
    },
    {
      title: "قیمت این گوشی بستگی به چه مواردی داه؟",
      value: "قیمت این گوشی به موارد زیادی بستگی دارد مثل نور صفحه و ....",
    },
    {
      title: "قیمت این گوشی بستگی به چه مواردی داه؟",
      value: "قیمت این گوشی به موارد زیادی بستگی دارد مثل نور صفحه و ....",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <MovingShoppingCart product={product} />
      <div className="grid grid-cols-12 2xl:px-[18%] xl:px-[13%] sm:px-[8%] px-[5%]">
        <div className="lg:col-span-6 col-span-12 p-4">
          <Gallery productImages={product.productImages} />
        </div>
        <ProductDescription product={product} />
      </div>
      <SimilarProducts
        features={similarProducts}
        title={"محصولات مشابه"}
        nextClass="similar-next"
        prevClass="similar-prev"
      />
      <SimilarProducts
        features={similarProducts}
        title={"پرفروش ترین ها"}
        nextClass="best-sellers-next"
        prevClass="best-sellers-prev"
      />
      <div className="w-full flex justify-center items-center min-h-[220px] bg-[#f5f5f5] mt-10">
        <WarrantyDelivery />
      </div>
      <ProductDefinition productDefinition={productDefinition} />
      <TechnicalDetail technicaldetails={technicaldetails} />
      <FrequentlyAsked data={questions} />
    </div>
  );
};

export default SingleProduct;
