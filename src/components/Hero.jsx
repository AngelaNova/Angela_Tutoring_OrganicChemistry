import styles from "../style";
import { discount, chemistry } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="discount_img animate-[spin_6s_linear_infinite]" />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">10%</span> Discount For{" "}
            <span className="text-white">12 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[22px] text-white ss:leading-[100.8px] leading-[75px]">
            This is 
            <span className="text-gradient"> Organic <br/> Chemistry </span> 
            Tutoring.
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] text-justify mt-5`}>
          Master organic chemistry with personalized tutoring sessions tailored to your needs. Our experts cover everything from reaction mechanisms to spectroscopy, ensuring your success in the subject and deeper understanding. Learning, not memorizing! 
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 md:my-10 p-5 relative bmdandsm:mt-[-400px] bmdandsm:mr-[-600px]`}>
        <img src={chemistry} alt="chemistry" className="chemistry_img" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 green__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
