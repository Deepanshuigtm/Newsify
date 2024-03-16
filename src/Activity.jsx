import styles from"./Activity.module.css"
import React, { useState, useEffect } from 'react';


export default function Activity(){

  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    if (videoVisible) {
      // Load the YouTube API script
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(script);

      script.onload = () => {
        // Initialize the YouTube player
        const player = new window.YT.Player('widget2', {
          videoId: 'rayRgPVWL_A',
          playerVars: {
            modestbranding: 1,
            rel: 0,
            enablejsapi: 1,
            mute: 0,
            autoplay: 0, // Auto-play is set to 0 initially
          },
          events: {
            onReady: (event) => {
              // Video is ready to play
              event.target.playVideo();
            },
          },
        });
      };
    }
  }, [videoVisible]);

  const handlePlayClick = () => {
    setVideoVisible(true);
  };
    return (
        <div className={styles.activity}>
            <div className={styles.activityBlock}>
            <div className="css-2owlxz">
                {!videoVisible ? (
                    <button type="button" className="lty-playbtn" onClick={handlePlayClick}>
                    <span className="lyt-visually-hidden">Play</span>
                    </button>
                ) : null}
                <iframe
                    width="560"
                    height="315"
                    title="The new iPhone 15 Pro. Made with aerospace-grade titanium. #Shorts"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    src={`https://www.youtube-nocookie.com/embed/rayRgPVWL_A?modestbranding=1&rel=0&enablejsapi=1&mute=0&autoplay=${videoVisible ? 1 : 0}`}
                    id="widget2"
                ></iframe>
            </div>
            
                {/* <img alt="Youtube" src="https://i.ytimg.com/vi/rayRgPVWL_A/maxresdefault.jpg" className="chakra-image css-0"></img> */}
            </div>
        </div>
    )
}
