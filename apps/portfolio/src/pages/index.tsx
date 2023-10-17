import { ELocale } from "@/utils/data/type";
import { cvData } from "../utils/data/index";
import { CvPage, CvPageProps } from "@/components/CV/CVPage/CVPage";

export default function Home({ data }: CvPageProps) {
  return <CvPage data={data} />;
}

export const getStaticProps = async () => {
  const locale = ELocale.FR;
  return {
    props: {
      data: cvData[locale],
    },
  };
};
