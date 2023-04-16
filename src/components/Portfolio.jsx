import React from "react";
import e_kart from "../assets/portfolio/e_kart.png";
import tictactoe from "../assets/portfolio/tictactoe.png";
import quiz from "../assets/portfolio/quiz.png";
import budget from "../assets/portfolio/budget.png";
import joke from "../assets/portfolio/joke.png";
import custom_music from "../assets/portfolio/custom_music.png";


const Portfolio = () => {


    const portfolios = [
        {
            id: 1,
            src: e_kart,
            href: 'https://github.com/bk408/E-kart-React-app',
            
        },
        {
            id: 2,
            src: budget,
            href: 'https://github.com/bk408/Budget-app',
            nhref: 'https://amzbudget-app.netlify.app/',
        },
        {
            id: 3,
            src: custom_music,
            href: 'https://github.com/bk408/custom-music-player',
            nhref: 'https://custommusic-player.netlify.app/',
        },
        {
            id: 4,
            src: joke,
            href: 'https://github.com/bk408/Random-joke-generator',
            nhref: 'https://randomjoke-generator.netlify.app/',
        },
        {
            id: 5,
            src: quiz,
            href: 'https://github.com/bk408/quiz-app',
            nhref: 'https://quizapphcj.netlify.app/',
        },
        {
            id: 6,
            src: tictactoe,
            href: 'https://github.com/bk408/tic-tac-toe-game',
            nhref: 'https://amztic-tac-toe-game.netlify.app/',
        },
        
    ]
  return (
    <div name="portfolio" className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

       



        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

            {
        portfolios.map(({id, src, href, nhref }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={nhref} target="_blank" rel="noreferrer">Demo</a>
                </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={href} target="_blank" rel="noreferrer">Code
                </a>
                </button>

            </div>
          </div>
        ))
       }
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
