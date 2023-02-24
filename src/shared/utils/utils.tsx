import { isDesktop, isMobile, isTablet } from "react-device-detect";

export const pickSrc = (
  imgDesktop: string,
  imgTablet: string,
  imgMobile: string
) => {
  switch (true) {
    case isDesktop:
      return imgDesktop;
    case isTablet:
      return imgTablet;
    case isMobile:
      return imgMobile;
    default:
      return imgMobile;
  }
};
