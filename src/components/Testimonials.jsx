import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full green__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6 ">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Unlock the door to academic success with our comprehensive tutoring services tailored to meet your learning needs.
        </p>
      </div>
    </div>

    <div className="relative w-full flex gap-6 snap-x snap-proximity overflow-x-auto pb-14  box-border">
      {feedback.map((card) => (
      <div key={card.id} className={"flex-none snap-center shrink-0 cursor-pointer"}>
        <FeedbackCard {...card} />
      </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
