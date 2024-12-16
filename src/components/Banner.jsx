import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
import team1 from "../assets/team1.webp"
import team2 from "../assets/team2.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[500px] p-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="flex-1">
          <motion.img
            animate={{ y: [70, 100, 70] }}
            transition={{ duration: 5, ease: easeInOut, repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-purple-700 shadow-2xl"
          />
          <motion.img
            animate={{ x: [120, 150, 120] }}
            transition={{ duration: 5, ease: easeInOut, repeat: Infinity }}
            src={team2}
            className="max-w-sm w-80 rounded-t-3xl rounded-bl-3xl border-r-8 border-b-8 border-indigo-600 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            initial={{ x: -50 }}
            animate={{ x: 0, color: "indigo" }}
            transition={{ duration: 0.7, ease: easeInOut }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#6504e1 ", "#6908f4", "#f408c2"] }}
              transition={{ duration: 1, ease: easeIn }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <motion.p
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: easeInOut }}
            className="py-6"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </motion.p>
          <motion.button
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, ease: easeInOut }}
            className="bg-purple-700 px-6 py-2 rounded-md text-white font-medium hover:bg-purple-600"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
