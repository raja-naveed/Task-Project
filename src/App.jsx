import React from 'react'
import Main from './sections/Main';
import Page from './sections/Page';
import Revolutionary from './sections/Revolutionary';
import Group from './sections/Group';
import RealEstate from './component/RealEstate';
import Signpage from './sections/Signpage';
import Page3 from './sections/Page3';
import Email from './sections/Email';
import Page2 from './sections/Page2';
import Download from './sections/Download';
import ThankYou from './sections/ThankYou';
import Terms from './sections/Terms';
import Policies from './sections/Policies';
import Contact from './sections/Contact';
import Screens from './sections/Screens';

const App = () => {
  return (
    <div>
      <Main />
      <Page />
      <Revolutionary/>
      <Group/>
      <RealEstate/>
      <Signpage/>
      <Page2 text={`A REAL ESTATE AND PROPERTY PLATFORM THAT WILL CHANGE THE WORLD.`} section={`section7`}/>
      <Page3/>
      <Page2 text={`GLOBAL ACCESS TO REAL ESTATE AND PROPERTY TO EVERYONE .`} section={`section9`}/>
      <Download/>
      <Email/>
      <ThankYou/>
      {/* <Terms/> */}
      {/* <Policies/> */}
      <Contact/>

    </div>
  )
}

export default App;
