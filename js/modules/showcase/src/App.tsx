import React from 'react';

import PageTitle from '@Layout/PageTitle/PageTitle.component';
import Handler from '@Layout/Handler/Handler.component';
import Showcase from '@Layout/Showcase/Showcase.component';

const App: React.FC = () => (
    <div style={{ position: 'relative' }}>
        <PageTitle />
        <Handler />
        <Showcase />
    </div>
);

export default App;