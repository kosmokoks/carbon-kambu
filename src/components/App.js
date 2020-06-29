import React from "react";
import { Button } from "carbon-components-react";
import { Tabs, Tab } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';

const App = () => {
    return <div>
        <Tabs>
            <Tab
                href="#"
                id="tab-1"
                label="Tab label 1"
            >
                <div className="some-content">
                    Content for first tab goes here.
                </div>
            </Tab>
            <Tab
                href="#"
                id="tab-1"
                label="Tab label 1"
            >
                <div className="some-content">
                    Content for second tab goes here.
                </div>
            </Tab>
            <Tab
                href="#"
                id="tab-1"
                label="Tab label 1"
            >
                <div className="some-content">
                    Content for third tab goes here.
                </div>
            </Tab>
        </Tabs>
    </div>
}

export default App;
