import React from "react";
import styles from "./notFound.module.css"; 

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {Array.from("404 - Page Not Found").map((char, index) => (
          <span
            key={index}
            style={{
              color: `hsl(${index * 30}, 100%, 50%)`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default NotFound;
