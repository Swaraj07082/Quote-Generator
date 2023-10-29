import React, { useContext, useEffect, useState } from "react";

export default function Box() {
  let num;

  const articles = [
    {
      text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison, type.fit",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra, type.fit",
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln, type.fit",
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe, type.fit",
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer, type.fit",
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu, type.fit",
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg, type.fit",
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle, type.fit",
    },
    {
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra",
    },
    {
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster, type.fit",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha, type.fit",
    },
    {
      text: "What you give is what you get.",
      author: "Byron Pulsifer, type.fit",
    },
    {
      text: "We can only learn to love by loving.",
      author: "Iris Murdoch, type.fit",
    },
    {
      text: "Life is change. Growth is optional. Choose wisely.",
      author: "Karen Clark, type.fit",
    },
    {
      text: "You'll see it when you believe it.",
      author: "Wayne Dyer, type.fit",
    },
    {
      text: "Today is the tomorrow we worried about yesterday.",
      author: "type.fit",
    },
  ];

  const [state, setstate] = useState({
    text1: "",
    author1: "",
    num: -1,
  });

  const OnbuttonClick = () => {
    setstate({
      num: state.num < 14 ? state.num + 1 : 0,

      text1: articles[state.num + 1].text,
      author1: articles[state.num + 1].author,
    });
  };

  return (
    <>
      <div className="container">
        <div
          className="container text-center"
          style={{
            position: "relative",
            border: "2px solid grey",
            backgroundColor: "white",
            height: 200,
            width: 800,
            top: 250,
          }}
        >
          <button
            onClick={OnbuttonClick}
            type="button"
            className="btn btn-primary btn-sm"
            style={{
              position: "relative",
              top: 30,
              paddingleft: 15,
              paddingright: 15,
            }}
          >
            New Quote
          </button>

          <p style={{ position: "relative", top: 55, fontWeight: "bold" }}>
            "{state.text1}"
          </p>

          <p style={{ position: "relative", top: 50, fontStyle: "italic" }}>
            - {state.author1}
          </p>
        </div>
      </div>
    </>
  );
}
