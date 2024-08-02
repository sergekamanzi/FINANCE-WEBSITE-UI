import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Centralized Financial Control',
    text: ' By consolidating all financial activities into one platform, users can easily control and monitor their budget, expenses, and savings, making financial management straightforward and efficient.',
  },
  {
    title: 'Budget Setting and Monitoring',
    text: 'By monitoring their spending against these budgets, users can stay on track with their financial plans and avoid overspending.',
  },
  {
    title: 'Alerts and Reminders',
    text: 'These notifications help users stay proactive in managing their finances and ensure they do not miss important financial obligations.',
  },
  {
    title: 'Customizable Financial Plans',
    text: 'Whether saving for a big purchase or managing monthly expenses, users can tailor the application to fit their needs, promoting effective financial management.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">By offering comprehensive logging, centralized control, and insightful analytics, it helps users make informed financial decisions and achieve their financial goals.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;