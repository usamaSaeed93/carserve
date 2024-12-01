import React, { useEffect } from 'react';

import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';

import '../../../../../styles/tailwind.css';
import { FeaturedCards } from './hero/FeaturedProducts';

export default function MainBanner() {
  return (
    <>
      <FeaturedCards  />
    </>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
