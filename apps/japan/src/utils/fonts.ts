import localFont from "next/font/local";

const MontserratBold = localFont({
  src: "./fonts/Montserrat/static/Montserrat-Bold.ttf",
});

const MontserratMedium = localFont({
  src: "./fonts/Montserrat/static/Montserrat-Medium.ttf",
});

const MontserratRegular = localFont({
  src: "./fonts/Montserrat/static/Montserrat-Regular.ttf",
});

const Harukaze = localFont({
  src: "./fonts/Harukaze.ttf",
});

const Bankai = localFont({
  src: "./fonts/bankai/Bankai.otf",
});

const AnimeAce = localFont({
  src: "./fonts/anime-ace/anime-ace.regular.ttf",
});

//
export const fonts = {
  "Montserrat-Bold": MontserratBold,
  "Montserrat-Medium": MontserratMedium,
  "Montserrat-Regular": MontserratRegular,
  Harukaze: Harukaze,
  Bankai: Bankai,
  AnimeAce,
};

// ...fonts["Montserrat-Regular"].style,
