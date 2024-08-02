import React from 'react';
import Feature from '../../components/feature/Feature';
import './solutions.css';

const Solutions = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="eTRACKER" text=" eTracker is a web application designed to help users manage and analyze their expenses. It provides tools for tracking spending, gaining insights into financial habits, and predicting future expenses." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">manage your business in a smart way to reduce business risks & losses</h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="TRACK" text="Keep a detailed record of your spending habits.Log and categorize every expense effortlessly.Monitor your daily expenditures with precision." />
      <Feature title="MANAGE" text="Organize your finances with ease and clarity.Control your budget and spending in one place.Set financial goals and track your progress." />
      <Feature title="ANALYSE" text="Gain insights into your financial behavior.Visualize your spending patterns and trends.Make informed decisions with detailed reports." />
    </div>
  </div>
);

export default Solutions;