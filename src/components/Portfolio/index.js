import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'muskytweets',
      description: 'An application that gives the user the opportunity to compare whether they believe the stock market is influenced by the media outlets.',
      link: "https://ianclark-fullstack.github.io/muskytweets/",
      repo: "https://github.com/IanClark-fullStack/muskytweets"
    },
    {
      name: 'video-game-database',
      description: "An application that allows user's to login/signup for an account and get access to a library, where they can add games they are playing or played, and a wishlist library, where they can add games they would like to purchase in the future.",
      link: 'https://vast-lake-35863.herokuapp.com/',
      repo: 'https://github.com/seanscraig/video-game-database',
    },
    {
      name: 'Online-Offline-Budget-Tracker',
      description: 'An application that allows a user to be able to track their expenses and deposits to their budget. This application can also be downloaded to the desktop and has offline functionality.',
      link: 'https://protected-ridge-10667.herokuapp.com/',
      repo: 'https://github.com/DylanDimayuga/Online-Offline-Budget-Trackers',
    },
    {
      name: 'Fitness-Tracker',
      description: 'An application where i user can track their workout for the day.',
      link: 'https://still-peak-02112.herokuapp.com/',
      repo: 'https://github.com/DylanDimayuga/Fitness-Tracker',
    },
    {
      name: 'E-Commerce',
      description: 'An application where a user can generate a MySql database, view specific tables of the it, and add, update, and delete values of the table.',
      link: 'https://watch.screencastify.com/v/L6Qxx8j2Yt0Fh0Dn41NL',
      repo: 'https://github.com/DylanDimayuga/E-Commerce',
    },
    {
      name: 'Employee-Tracker',
      description: 'An application that allows a user to create a MySql database where they track their whole company from the different departments to individual employees.',
      link: 'https://watch.screencastify.com/v/eeOUrLk3aH2TFOLcgxLr',
      repo: 'https://github.com/DylanDimayuga/Employee-Tracker',
    },
    {
      name: 'Tech-Blog',
      description: "An application that allows for a user to login/sign up for an account, have access to a shared dashboard where all user's posts can be accessed and commented on, as well as having access to a their own personal dashboard where they can create, edit, and delete their own posts.",
      link: 'https://obscure-cliffs-13753.herokuapp.com/',
      repo: 'https://github.com/DylanDimayuga/Tech-Blog',
    },
    {
      name: 'Team-Profile-Generator',
      description: "An application that generates an html page, where a user can input employee information into the terminal to create employee cards.",
      link: 'https://watch.screencastify.com/v/6vyxo9wmH5Ld3kBsbjOD',
      repo: 'https://github.com/DylanDimayuga/Team-Profile-Generator',
    },
    {
      name: 'Note-Taker',
      description: 'An application that allows a user to type out any notes and save it to the application. These notes can be accessed whenever the user returns back to the app and delete them if they are unneeded.',
      link: 'https://whispering-caverns-53518.herokuapp.com/',
      repo: 'https://github.com/DylanDimayuga/Note-Taker',
    },
    {
      name: 'Weather-Dashboard',
      description: 'An application that displays the weather for a user inputted city for the next 5 days.',
      link: 'https://dylandimayuga.github.io/Weather-Dashboard/',
      repo: 'https://github.com/DylanDimayuga/Weather-Dashboard',
    },
    {
      name: 'About-Me-Quiz',
      description: 'An application that displays a 5 question quiz where a user can go through the quiz and get a score and input it in a high-score sheet.',
      link: 'https://dylandimayuga.github.io/About-Me-Quiz/',
      repo: 'https://github.com/DylanDimayuga/About-Me-Quiz',
    },
    {
      name: 'Work-Day-Scheduler',
      description: 'An application that displays a schedule and allows a user to input any events or plans they have for current day. ',
      link: 'https://dylandimayuga.github.io/Work-Day-Scheduler/',
      repo: 'https://github.com/DylanDimayuga/Work-Day-Scheduler',
    },
    {
      name: 'Readme-Generator',
      description: "An application where a user will be prompted in the terminal a series of questions that will result in a creation of a quality ReadMe file containing the user's input",
      link: 'https://watch.screencastify.com/v/Tqb1wLSJOwE8LAANagK4',
      repo: 'https://github.com/DylanDimayuga/Readme-Generator',
    },
    {
      name: 'Password-Generator',
      description: 'An application that will allow a user to click a button, get a series of prompts, and returns a random generated password fitting the criteria given in the prompts.',
      link: 'https://dylandimayuga.github.io/Password-Generator/',
      repo: 'https://github.com/DylanDimayuga/Password-Generator',
    },
    // {
    //   name: '',
    //   description: '',
    //   link: '',
    //   repo: '',
    // },
    // {
    //   name: '',
    //   description: '',
    //   link: '',
    //   repo: '',
    // }
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
        <Project
          project={project}
          key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;