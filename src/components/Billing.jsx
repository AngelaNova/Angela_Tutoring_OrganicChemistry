import { lab, McGill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="License" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={lab} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded ml-[-60px]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Manage your <br className="sm:block hidden" /> Chemistry Learning & Progress
 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Dive into the world of organic chemistry alongside a McGill University alumna. Our tutoring services offer unparalleled expertise to help you excel in your chemistry journey.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={McGill} alt="McGill University" className="rounded-lg w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer opacity-94" />
      </div>
    </div>
  </section>
);

export default Billing;
