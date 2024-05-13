import styles from "../style";
import { discount, chemistry } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-[-10%]">
          <img src={discount} alt="discount" className="w-[8%] h-[8%] animate-[spin_6s_linear_infinite]" />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">10%</span> Discount For{" "}
            <span className="text-white">12 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="flex-1 font-poppins font-semibold  text-[200%] text-white leading-[75px]  ">
            This is 
            <span className="text-gradient"> Organic <br/> Chemistry </span> 
            Tutoring.
          </h1>
          <div className="ss:flex hidden mb-[25%] mr-[42%] ">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] text-justify mt-[-10%]`}>
          Master organic chemistry with personalized tutoring sessions tailored to your needs. Our experts cover everything from reaction mechanisms to spectroscopy, ensuring your success in the subject and deeper understanding. Learning, not memorizing! 
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={chemistry} alt="billing" className="w-[30%] h-[20%] rounded relative z-[5] mt-[-32%] mr-0 ml-[55%]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 green__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;
