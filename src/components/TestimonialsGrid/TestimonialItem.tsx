import { ReactNode } from "react";

enum TestimonialVariant {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH,
}

const variantStyles = {
  FIRST:
    "bg-userModerateViolet lg:col-span-2 bg-quotationBgImg bg-no-repeat " +
    "bg-auto bg-[right_2rem_top] lg:bg-[right_5rem_top] text-white",
  SECOND: "bg-userVeryDarkGrayishBlue text-white",
  THIRD: "bg-userWhite text-userVeryDarkGrayishBlue",
  FOURTH: "bg-userVeryDarkBlackishBlue lg:col-span-2 text-white",
  FIFTH:
    "bg-userWhite row-span-2 lg:col-start-4 lg:row-start-1 text-userVeryDarkGrayishBlue",
};

const VARIANT_MAPS: Record<TestimonialVariant, string> = {
  [TestimonialVariant.FIRST]: variantStyles.FIRST,
  [TestimonialVariant.SECOND]: variantStyles.SECOND,
  [TestimonialVariant.THIRD]: variantStyles.THIRD,
  [TestimonialVariant.FOURTH]: variantStyles.FOURTH,
  [TestimonialVariant.FIFTH]: variantStyles.FIFTH,
};

type Props = {
  variant: TestimonialVariant;
  children: ReactNode;
};

function TestimonialItem({ variant, children }: Props) {
  const testimonialItemBaseStyles = "w-full rounded-lg py-6 px-8 shadow-2xl";
  const finalStyles = `${testimonialItemBaseStyles} ${VARIANT_MAPS[variant]}`;

  return <div className={finalStyles}>{children}</div>;
}

TestimonialItem.variant = TestimonialVariant;

export default TestimonialItem;
