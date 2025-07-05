// src/components/Snow.js
import { useEffect } from "react";
import "./SnowBackground.css";

const Snow = () => {
  useEffect(() => {
    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-container";
    document.body.appendChild(snowContainer);

    const snowflakesCount = 100; // عددي أكثر هنا
    for (let i = 0; i < snowflakesCount; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      snowflake.textContent = "❆";
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // بين 2-5 ثواني
      snowflake.style.fontSize = `${Math.random() * 10 + 6}px`; // حجم صغير
      snowContainer.appendChild(snowflake);
    }

    return () => {
      document.body.removeChild(snowContainer);
    };
  }, []);

  return null;
};

export default Snow;
