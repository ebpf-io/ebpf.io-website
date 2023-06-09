import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';

const data = {
  title: 'T-shirts, stickers and bags',
  description: 'Get the buzz for your laptop or your next conference t-shirt in the store',
  buttonText: 'Visit our store',
  buttonUrl: 'https://cilium.myspreadshop.net/all',
};

const Swag = () => (
  <section className="mb-36 lg:mb-28 md:mb-20 sm:mb-16">
    <div className="container border-t border-dashed border-gray-80 pt-32 lg:pt-24 md:pt-20 sm:pt-16">
      <div className="flex items-center justify-between lg:flex-col lg:text-center">
        <div className="flex flex-col space-y-4">
          <h2 className="heading-8xl font-bold leading-dense">{data.title}</h2>
          <p className="mt-4 text-xl leading-normal lg:mx-auto">{data.description}</p>
        </div>
        <Button
          className="mt-5 h-[52px] rounded-md px-6 md:h-[44px] sm:w-full"
          to={data.buttonUrl}
          theme="black-filled"
          size="none"
        >
          {data.buttonText}
        </Button>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-1 sm:gap-6">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 sm:grid-cols-1 sm:gap-6">
          <div className="flex items-center justify-center rounded-lg border border-gray-94 p-4">
            <StaticImage
              src="./images/sticker-2023.jpg"
              width={147}
              height={138}
              alt="Sticker"
              loading="lazy"
            />
          </div>
          <div className="col-start-1 flex items-center justify-center rounded-lg border border-gray-94 p-4">
            <StaticImage
              src="./images/sticker-2-2023.jpg"
              width={129}
              height={100}
              alt="Sticker"
              loading="lazy"
            />
          </div>
          <div className="col-start-2 row-start-1 row-end-3 flex items-center justify-center rounded-lg border border-gray-94 p-4 sm:col-auto sm:row-auto">
            <StaticImage
              src="./images/bag-2023.jpg"
              width={285}
              height={285}
              alt="Bag"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex items-center justify-center rounded-lg border border-gray-94 p-4 lg:py-6 xs:flex-col xs:space-y-8">
          <StaticImage
            src="./images/t-shirt-2023.jpg"
            width={224}
            height={277}
            alt="T-Shirt"
            loading="lazy"
          />
          <StaticImage
            src="./images/t-shirt-2-2023.jpg"
            width={227}
            height={277}
            alt="T-Shirt"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Swag;
