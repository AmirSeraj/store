import Gallery from "@/app/components/product/Gallery";
import MovingShoppingCart from "@/app/components/product/MovingShoppingCart";
import ProductDescription from "@/app/components/product/ProductDescription";
import React from "react";

const SingleProduct = ({ params }) => {
  const { productName } = params;
  const product = {
    leftInStock: 'فقط دو عدد در انبار باقی مانده است',
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

  return (
    <div className="flex flex-col items-center">
      <MovingShoppingCart product={product} />
      <div className="grid grid-cols-12">
        <div className="lg:col-span-4 col-span-12 p-4">
          <Gallery productImages={product.productImages} />
        </div>
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default SingleProduct;
