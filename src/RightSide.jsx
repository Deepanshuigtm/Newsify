import { NavLink } from "react-router-dom"
import styles from "./RightSide.module.css"

function getCurrentDate() {
    const today = new Date();
    today.setDate(today.getDate() - 4); // Subtract 1 day from the current date
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

const date = getCurrentDate();

export default function RightSide({blur}) {

    return (
        <div className={`${blur ? 'doblur' : ''}`}>
            <div className={styles.sideContainer} >
            <div><h3>News Settings</h3></div>
            <div className={styles.newsdateSub}>
                <ul>
                    {["Today's News","Yesterday's News", `${date}`, "Choose Date"].map((category, index) => (
                        <li key={index}>
                            <NavLink to={`/${category.toLowerCase().replace(" ", "-")}`}>
                                <p>{category}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </div>
    )
    
}