import ChangeData from "./ChangeData";
import Faq from "./Faq";

const Content = () => {
  return (
    <>
      <h1 className="title_page text-white text-6xl font-bold text-center mt-16 select-none mb-16">
        Exchange your crypto <br />
        profitably in two <span className="text-customBlue">clicks</span>
      </h1>
      <ChangeData />
      <Faq />
    </>
  );
};
export default Content;
