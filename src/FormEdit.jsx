import { useState } from "react";
import styles from "./RightSide.module.css"
import closeIcon from "./closeicon.svg"
function FormEdit({userDetails, setUserDetails, showButton, setShowButton}){
    const [name, setName] = useState('');
    const[image, setImage] = useState('https://i.pravatar.cc/70')

    function handleClose(){
        setShowButton(!showButton);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        if (!name || !image) {
          // You can display an error message to the user here.
          return;
        }
      
        const id = crypto.randomUUID(); // Make sure crypto is correctly imported.
        const newDetails = {
          name,
          image: `${image}?id=${id}`,
          id,
        };
        setUserDetails(newDetails);
        // Optionally, you can reset the form or perform any other actions.
        setShowButton(!showButton);
      }
      
  
    return (<form className={styles.formAdd} onSubmit={handleSubmit}>
      <div className={styles.iconcontainer}>
        <label>Your Name</label>
        <img onClick={handleClose} className={styles.closeIcon} src={closeIcon} ></img>
      </div>
      <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Friend name"></input>
      <label>Image Url</label>
      <input value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder="Image Url"></input>
  
      <button className={styles.button}>Add</button>
    </form>
      )
   }
export default FormEdit;