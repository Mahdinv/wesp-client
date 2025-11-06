import { easeInOut, motion } from "framer-motion";
import { toPersianDigits } from "../utils/public";

const ProgressBar: React.FC<{
  initialValie: number;
  value: number;
  step: number;
  maxStep: number;
}> = (props) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row w-full items-center justify-between">
        <p>{toPersianDigits(props.value)}%</p>
        <p>
          مرحله {toPersianDigits(props.step)} از{" "}
          {toPersianDigits(props.maxStep)}
        </p>
      </div>
      <div className="w-full bg-gray-300 h-3 rounded-full">
        <motion.div
          initial={{ width: `${props.initialValie}%` }}
          animate={{ width: `${props.value}%` }}
          transition={{ duration: 0.5, ease: easeInOut }}
          className="bg-primary rounded-full h-3"
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
