// import styles from "./Bookmark.module.css";
import styles from "./MainNewsPage.module.css";
import deleteIcon from "./delete.svg"
import closeIcon from "./closeicon.svg"
import { useState } from "react";

export default function Bookmark( {blur, setBlur, bookmark , setBookmark}){ 
    console.log(bookmark)
    const [link, setLink] = useState('')

    function handleDelete2 (){
        setBlur(!blur)
    }
    function handleDelete(link){
        setBlur(!blur);
        setLink(link);
    }
    function handlerealDelete(link){
        setBookmark(bookmark.filter(item => item.link !== link))
        setBlur(!blur)
    }
    
    return (
        <>
        <div className={`${blur ? 'doblur' : ''}`}>
        <div className={styles['news-container']}>
            <div className={styles.mainNews}>
                {bookmark.map((book, index)=>(
                    <div className={styles.booked} key={index}>
                        <img src={book.imageLink}></img>
                        <div>
                            <h3 className={book.title}>{book.title}</h3>
                            <div className={styles.btnContainer}>
                                <a href={book.link}>Read More</a>
                                <img src={deleteIcon} onClick={()=>handleDelete(book.link)}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <div>
            {blur && 
            <div className={styles.confirmContent}>
                <div>
                <h3>Are You Sure that to remove this article from Bookmark ?</h3>
                <img src={closeIcon} onClick={handleDelete2}/>
                </div>
            <div className={styles.confirmBtn}>
                <button onClick={()=>handlerealDelete(link)}>Yes </button>
                <button onClick={handleDelete2}>No </button>
            </div>
        </div>}
        </div>
        </>
    )
}