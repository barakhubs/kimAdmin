import { useState, useEffect } from "react";

const useTimeAgo = (dates) => {
  const [timeAgoArray, setTimeAgoArray] = useState([]);

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = Date.now();
      const newTimeAgoArray = dates.map((date) => {
        const secondsElapsed = Math.floor((now - date.getTime()) / 1000);

        if (secondsElapsed < 60) {
          return "few seconds ago";
        } else if (secondsElapsed < 3600) {
          const minutes = Math.floor(secondsElapsed / 60);
          return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
        } else if (secondsElapsed < 86400) {
          const hours = Math.floor(secondsElapsed / 3600);
          return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
        } else {
          const formattedDate = date.toLocaleDateString();
          return `on ${formattedDate}`;
        }
      });

      setTimeAgoArray(newTimeAgoArray);
    };

    calculateTimeAgo();
    // eslint-disable-next-line
  }, []); // Run this effect only once during component mount

  return timeAgoArray;
};


export default useTimeAgo;
