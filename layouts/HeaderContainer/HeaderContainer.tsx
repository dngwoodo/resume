import { useState } from 'react';

import Header from '@/components//Header';

export default function HeaderContainer() {
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

  function handleClick(menuIndex: number) {
    return () => {
      if (selectedMenuIndex === menuIndex) {
        return;
      }

      setSelectedMenuIndex(menuIndex);
    };
  }

  return <Header onClick={handleClick} selectedMenuIndex={selectedMenuIndex} />;
}
