import React, { memo, useEffect, useState } from "react";
import { formatTime } from "../utils/public";

const Timer: React.FC<{ initialTime: number | null; onFinish: () => void }> =
  memo((props) => {
    const [timeLeft, setTimeLeft] = useState(props.initialTime || 0);

    useEffect(() => {
      if (timeLeft < 0) return;
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }, [props, timeLeft]);

    if (timeLeft <= 0) {
      props.onFinish();
    }

    return (
      <>
        {timeLeft > 0 ? (
          <span className="font-bold text-primary self-end">
            {formatTime(timeLeft)}
          </span>
        ) : null}
      </>
    );
  });

export default Timer;
