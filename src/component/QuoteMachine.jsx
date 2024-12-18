import { useState } from "react";
import "../component/quoteMachine.css";

import quotes from "../assets/quotes.json";

function App() {
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * 9)];
  }

  function getBackgroundColor() {
    let red = Math.floor(Math.random() * 128);
    let green = Math.floor(Math.random() * 128);
    let blue = Math.floor(Math.random() * 128);

    return `rgb(${red},${green},${blue})`;
  }

  const [quote, setQuote] = useState(getRandomQuote());
  const [randomColor, setRandomColor] = useState(getBackgroundColor());

  function changeQuote() {
    setQuote(getRandomQuote());
    setRandomColor(getBackgroundColor());
  }

  const transition = "all 1s";

  return (
    <main style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box" style={{ backgroundColor: "white" }}>
        <div id="outer">
          <div id="inner">
            <h1 id="text" style={{ color: randomColor, fontWeight: 400 }}>

              {/* svg */}

              <svg
                
                clip-rule="evenodd"
                fill-rule="evenodd"
                fill={randomColor}
                width="30px"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m20.622 4c.76 0 1.378.608 1.378 1.355 0 .531-.315 1.018-.843 1.302-1.212.645-2.614 2.735-2.983 4.286 2.38.538 3.8 2.394 3.8 4.564 0 2.169-1.859 4.493-4.627 4.493-3.501 0-5.096-2.882-5.096-5.561 0-5.742 6.32-10.439 8.371-10.439zm-10.251 0c.76 0 1.378.608 1.378 1.355 0 .531-.315 1.018-.843 1.302-1.212.645-2.614 2.735-2.983 4.286 2.38.538 3.8 2.394 3.8 4.564 0 2.169-1.859 4.493-4.627 4.493-3.501 0-5.096-2.882-5.096-5.561 0-5.742 6.32-10.439 8.371-10.439zm6.21 8.428c-.112-3 1.984-5.754 3.649-6.966-1.911.782-6.479 4.857-6.479 8.977 0 1.869.942 4.051 3.596 4.051 1.871 0 3.127-1.542 3.127-2.983 0-1.453-.862-3.166-3.893-3.079zm-10.251 0c-.112-3 1.984-5.754 3.649-6.966-1.911.782-6.479 4.857-6.479 8.977 0 1.869.942 4.051 3.596 4.051 1.871 0 3.127-1.542 3.127-2.983 0-1.453-.862-3.166-3.893-3.079z"
                  fill-rule="nonzero"
                />
              </svg>

              {/* svg */}
              {quote.quote}
            </h1>
          </div>

          <div id="author-div">
            <p
              id="author"
              style={{ color: randomColor, fontWeight: 600, transition }}
            >
              - {quote.author}
            </p>
          </div>

          <div id="btn-div">
            <div>
              <a
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                target="_blank"
              >
                {/* svg */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill={randomColor}
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z" />
                </svg>

                {/* svg */}
              </a>
              <a
                id="tumblr-quote"
                href="https://www.tumblr.com/login"
                target="_blank"
              >
                {/* svg */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill={randomColor}
                  viewBox="0 0 24 24"
                >
                  <path d="M16.586 16.461l.664 1.967-.016.07c-.5.48-1.703.837-2.686.854l-.11.001c-3.232 0-3.788-2.468-3.788-3.926v-4.692l-.066-.067h-1.855l-.067-.067-.016-2.041.042-.062c1.67-.65 2.604-1.73 2.849-3.729.014-.111.105-.114.106-.114h2.298l.067.067v3.211l.068.067h2.535l.067.067v2.534l-.067.067h-2.546l-.064.067v4.47c.016.959.477 1.445 1.376 1.445.363 0 .744-.084 1.124-.229l.085.04zm7.414-16.461v24h-24v-24h24zm-6 18.601l-.992-2.941-.064-.046h-2.183c-.103 0-.107-.312-.108-.414v-3.81l.067-.067h2.546l.067-.067v-3.844l-.067-.067h-2.535l-.067-.067v-3.211l-.067-.067h-4.766c-.326 0-.702.242-.757.689-.227 1.852-1.254 2.75-2.85 3.284l-.179.059-.045.064v3.16l.067.067h1.933v4.104c0 3.107 2.027 4.573 6.005 4.573 1.601 0 3.365-.57 3.89-1.261l.105-.138z" />
                </svg>

                {/* svg */}
              </a>
            </div>

            <div>
              <button
                id="new-quote"
                style={{
                  backgroundColor: randomColor,
                  color: "white",
                  border: "none",
                }}
                onClick={changeQuote}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
