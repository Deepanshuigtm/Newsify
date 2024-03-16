import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Activity from './Activity';

import './App.css';
import Bookmark from './Bookmark';
import DayBeforePage from './DayBeforePage';
import Headers from './Header';
import LeftsideBar from './LeftsideBar';
import MainNewsPage from './MainNewsPage';
import RightSide from './RightSide';
import YesterdayNewsPage from './YesterdayNewsPage';

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
const initial = {
  "title": '',
  "imageLink": '',
  'link': ''
}

export default function App(){
  const [blur, setBlur] = useState(false);
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [bookmark, setBookmark] = useState([]);
  const [alert, setAlert] = useState(false);
  console.log(bookmark);
  return (
    <div>
      <BrowserRouter>
        <Headers blur={blur}/>
        <RightSide blur={blur} />
        <LeftsideBar blur={blur} />
        <Routes>
          <Route index element={<Navigate to="today's-news"/>}/>
          <Route path="today's-news" element={<MainNewsPage alert={alert} setAlert={setAlert} bookmark={bookmark} setBookmark={setBookmark} news={news} isLoading={isLoading} setNews={setNews} setIsLoading={setIsLoading} />} />
          <Route path="yesterday's-news" element={<YesterdayNewsPage alert={alert} setAlert={setAlert} bookmark={bookmark} setBookmark={setBookmark} news={news} isLoading={isLoading} setNews={setNews} setIsLoading={setIsLoading}/>} />
          <Route path="bookmark" element={<Bookmark blur={blur} setBlur={setBlur} bookmark={bookmark} setBookmark={setBookmark} />} />
          <Route path="activity" element={<Activity />} />
          <Route path={`${date}`} element={<DayBeforePage alert={alert} setAlert={setAlert} bookmark={bookmark} setBookmark={setBookmark} news={news} isLoading={isLoading} setNews={setNews} setIsLoading={setIsLoading}/>} />
          {/* <Route path="/choose-date" element={<ChooseDatePage />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}