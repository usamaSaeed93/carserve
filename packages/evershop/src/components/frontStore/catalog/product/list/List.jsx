import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Name } from '@components/frontStore/catalog/product/list/item/Name';
import { Thumbnail } from '@components/frontStore/catalog/product/list/item/Thumbnail';
import { Price } from '@components/frontStore/catalog/product/list/item/Price';
import Area from '@components/common/Area';
import { get } from '@evershop/evershop/src/lib/util/get';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './ProductCarousel.scss';

function ProductCarousel({ products = [], countPerRow = 3 }) {
  if (products.length === 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: countPerRow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {products.map((p) => (
          <div key={p.productId} data-aos="fade-up" className="product-card">
            <Area
              id="productListingItem"
              className="listing-item"
              product={p}
              coreComponents={[
                {
                  component: { default: Thumbnail },
                  props: {
                    url: p.url || '#',
                    imageUrl: get(p, 'image.url') || '',
                    alt: p.name || 'Product image'
                  },
                  sortOrder: 10,
                  id: 'thumbnail'
                },
                {
                  component: { default: Name },
                  props: { name: p.name || 'Product name', url: p.url || '#', id: p.productId },
                  sortOrder: 20,
                  id: 'name'
                },
                {
                  component: { default: Price },
                  props: {
                    regular: p.price?.regular || { value: 0, text: 'Free' },
                    special: p.price?.special || null
                  },
                  sortOrder: 30,
                  id: 'price'
                }
              ]}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

ProductCarousel.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sku: PropTypes.string,
      productId: PropTypes.number,
      url: PropTypes.string,
      price: PropTypes.shape({
        regular: PropTypes.shape({
          value: PropTypes.number,
          text: PropTypes.string
        }),
        special: PropTypes.shape({
          value: PropTypes.number,
          text: PropTypes.string
        })
      }),
      image: PropTypes.shape({
        alt: PropTypes.string,
        listing: PropTypes.string
      })
    })
  ).isRequired,
  countPerRow: PropTypes.number
};

export default ProductCarousel;
