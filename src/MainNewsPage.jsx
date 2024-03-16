import { useState, useEffect } from "react";
import styles from "./MainNewsPage.module.css";
import bookmarkIcon from './bookmark.svg';
import bookmarkIcon2 from './bookmark2.svg';
import shareIcon from "./share.svg"
import closeIcon from "./closeicon.svg"

function formatdate({ dateofnews }) {
    const date = new Date(dateofnews);
  
    if (isNaN(date.getTime())) {
      // Check if the date is valid
      return "Invalid Date";
    }
  
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata", // IST time zone
    };
  
    // Format the date to IST time zone
    return date.toLocaleString("en-IN", options);
  }

  function getCurrentDate() {
    const today = new Date();
    today.setDate(today.getDate() -1); // Subtract 1 day from the current date
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  
  const currentDate = getCurrentDate();
  
  const BASE_URL = (
    'https://newsapi.org/v2/everything?' +
    'q=weather&' +
    `from=${currentDate}&` +
    'sortBy=popularity&' +
    'apiKey=b4fdcc05488e443d8e11ad14a807c76d'
  );

export default function MainNewsPage({alert, setAlert, bookmark ,setBookmark, news, isLoading, setIsLoading, setNews }) {

  function handleDelete2(){
    setAlert(!alert);
  }

  function handleBookmark(title, img, url) {
    // Check if the bookmark with the same title already exists
  if (!bookmark.some(book => book.title === title)) {
    const newbook = {
      "title": title,
      "imageLink": img,
      'link': url
    }
    setBookmark((bookmark) => [...bookmark, newbook]);
  } else {
    setAlert(true); // Set the alert to true
  }
  }
  function handlesvgs(title){
      console.log(title);
      return bookmark.some(book => book.title === title) ? true : false;

  }
    useEffect(function(){
        async function fetchcCities(){
          try{
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}`);
            const data = await res.json();
            setNews(data.articles);
            console.log(data)
          }catch{
            alert('There was an error in loading the data...');
          }finally{
            setIsLoading(false);
            if(news != null){
              console.log("true")
            }
          }
        }
        fetchcCities();
      },[])

    return (
      <>
      <div className={styles['news-container']}>
        <div className={styles.mainNews}>
        {news.map((article, index) => (
            <div className={styles.article} key={index}>
                <div className={styles.heasbook}>
                    <h3>{article.title}</h3>
                    <img className="ionbookmark" src={shareIcon} />
                    <img onClick={() => handleBookmark(article.title, article.urlToImage, article.url)} className="ionbookmark" src={`${handlesvgs(article.title) ? bookmarkIcon2 : bookmarkIcon}`} alt="Bookmark" />
                </div>
                <img src={article.urlToImage}></img>
                <p className={styles.date}>Published At : {formatdate({ dateofnews: article.publishedAt })}</p>
                <p>{article.description}</p>
                {/* <p>{article.content}</p> */}
                <a href={article.url}>Read More</a>
                <p>Author: {article.author}</p>
                {/* Add more elements to display other article properties */}
            </div>
            ))}
        </div>
      </div>
      <div>
            {alert && 
            <div className={styles.confirmContent}>
                <div>
                <h3>Article already bookmarked.</h3>
                <img src={closeIcon} onClick={handleDelete2}/>
                </div>
        </div>}
        </div>
      </>
    );
  }
  