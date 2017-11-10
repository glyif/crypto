import React from 'react';
import Layout from '../components/Layout';
import Sections from '../components/Sections';
import IntroSection from '../components/IntroSection';
import EcosystemSection from '../components/EcosystemSection';

const App = () => (
    <Layout>
        <Sections>
            <IntroSection />
            <EcosystemSection />
        </Sections>
    </Layout>
);

export default App;