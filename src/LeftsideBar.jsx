import { useState } from "react"
import FormEdit from "./FormEdit"
import styles from "./RightSide.module.css"

export default function LeftsideBar({blur}){
    const [userDetails, setUserDetails] = useState({
        name: '',
        image:'https://i.pravatar.cc/70?=Deepans',
        id:'0'
    })
    const [showButton, setShowButton] = useState(false)

    function handleEdit(){
        setShowButton(!showButton);
    }

    return(
        <div className={`${blur ? 'doblur' : ''}`}>
            <div className={styles.sideContainerleft}>
            <div><h3>User Profile</h3></div>
            <div className={styles.newsdateSub}>
                {userDetails.name != '' && <div>
                    <h3>Welcome Back {userDetails.name}</h3>
                    <img src={userDetails.image} alt={userDetails.name} />
                </div>}
                { !showButton && <button className={styles.button} onClick={handleEdit}>Edit Profile</button>}
                    
            </div>
            {showButton && <div className={styles.editContent}>
                { showButton && <FormEdit showButton={showButton} setShowButton={setShowButton} userDetails={userDetails} setUserDetails={setUserDetails}/>}
            </div>}
        </div>
        </div>
    )
}

