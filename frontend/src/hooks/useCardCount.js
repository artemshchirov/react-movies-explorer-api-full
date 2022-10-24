import { useState } from 'react';

function useCardCount(CARD_COUNT, CARD_BREAKPOINT) {
  const [countAddMovies, setCountAddMovies] = useState(0);
  const [startCountMovies, setStartCountMovies] = useState(0);

  function setParamsCountMovies(mode) {
    const deviceWidth = document.documentElement.clientWidth;
    const isUpdate = mode === 'all';

    const middleDevice =
      deviceWidth <= CARD_BREAKPOINT.TWO && deviceWidth > CARD_BREAKPOINT.ONE;
    const smallDevice =
      deviceWidth <= CARD_BREAKPOINT.ONE && deviceWidth >= 320;

    if (middleDevice) {
      setCountAddMovies(CARD_COUNT.MIDDLE_DEVICE.ADD);
      if (isUpdate) setStartCountMovies(CARD_COUNT.MIDDLE_DEVICE.START);
    } else if (smallDevice) {
      setCountAddMovies(CARD_COUNT.SMALL_DEVICE.ADD);
      if (isUpdate) setStartCountMovies(CARD_COUNT.SMALL_DEVICE.START);
    } else {
      setCountAddMovies(CARD_COUNT.BIG_DEVICE.ADD);
      if (isUpdate) setStartCountMovies(CARD_COUNT.BIG_DEVICE.START);
    }
  }

  return { countAddMovies, startCountMovies, setParamsCountMovies };
}

export default useCardCount;
