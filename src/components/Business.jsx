import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] max-w-[60%]  ${index !== features.length - 1 ? "mb-6" : "mb-0"} `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimGreen  `}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Chemistry Tutoring Excellence
      </h2>
      <ul className={`${styles.paragraph} max-w-[500px] mt-5 list-disc list-inside text-justify`}>
        <b>You Learn, We Guide</b> <br/>
        <li>Achieve success in organic chemistry with our tailored tutoring services. Let us help you master the material and excel in your studies!</li>
        <li>With personalized tutoring, you can strengthen your understanding, improve your grades, and unlock your full potential in organic chemistry.</li>
      </ul>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col flex-wrap `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
