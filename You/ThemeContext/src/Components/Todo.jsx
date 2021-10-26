import React from 'react'
import { useContext } from "react";
import { ThemeContext } from '../Context/ThemeContext';
import styles from "./Todo.module.css"

const dark = { backgroundColor: "black", color: "white" }
const light = { backgroundColor: "white", color: "black" }

function Todo() {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div style={theme === "light" ? light : dark} className={styles.body}>
          <div className={styles.box}>
              <h1>  MyDashboard </h1>
                {/* <button className={styles.btn} onClick={handleThemeChange}>DarkMode</button> */}
                <label className={styles.switch}>
                 <input type="checkbox" />
                  <span className={`${styles.slider} ${styles.round}`} onClick={handleThemeChange}></span>
             </label>
            </div>

            <div className={styles.block}>
                <div  className={styles.line}>
                    <h1>Active Users</h1>
                    <h3>for August 2020</h3>
                </div>

                <div className={styles.line}>
                    <h3>Harish</h3>
                    <h3>...</h3>
                 </div>
                <div className={styles.line}>
                    <div>Professional level:5</div>
                    <div>4532points</div>
                </div>

                <div className={styles.line}>
                    <h3>Pavan</h3>
                    <h3>...</h3>
                 </div>
                <div className={styles.line}>
                    <div>Professional level:6</div>
                    <div>5980points</div>
                </div>

                <div className={styles.line}>
                    <h3>Sunil</h3>
                    <h3>...</h3>
                 </div>
                <div className={styles.line}>
                    <div>Professional level:7</div>
                    <div>6083points</div>
                </div>
            </div>
           
        </div>
    )
}

export default Todo
