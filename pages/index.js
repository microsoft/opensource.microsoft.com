import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Activity from '../components/Activity';
import GoodFirstIssue from '../components/GoodFirstIssue';
import CreditsOverview from '../components/CreditsOverview';
import CreditsFAQ from '../components/CreditsFAQ';
import CreditsApply from '../components/CreditsApply';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Welcome to Microsoft Open Source</h1>
          <p>Discover our projects, get involved, and learn more about our open source program.</p>
        </section>
        <section>
          <h2>Recent Activity</h2>
          <Activity />
        </section>
        <section>
          <h2>Good First Issues</h2>
          <GoodFirstIssue />
        </section>
        <section>
          <h2>Azure Credits for Open Source Projects</h2>
          <CreditsOverview />
          <CreditsFAQ />
          <CreditsApply />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
