import React, { Component } from "react";
import { Provider } from "react-redux";

import Intro from "./intro";
import Job from "./job";
import Focus from "./focus";
import Video from "./video";
import ContactItem from "./contactItem";
import Book from "./book";
import store from "../store/store";
import setSearchText from "../actions/setSearchText";
import SearchableItems from "./searchableItems";

const books = [
  <Book
    title="Practical Module Federation"
    url="https://module-federation.myshopify.com/products/practical-module-federation"
    image="img/practical_module_federation.png"
  >
    Covers practical use of the Module Federation technology baked into Webpack
    5 that allows for easy reused of Javascript code between applications.
  </Book>,
  <Book
    title="Learning AngularJS"
    url="https://www.packtpub.com/web-development/learning-angularjs-video"
    image="img/learning_angularjs.png"
  >
    A screencast series with practical examples of using AngularJS 1.x in the
    real world.
  </Book>,
  <Book
    title="Code Generation in Action"
    url="http://www.amazon.com/Code-Generation-Action-Jack-Herrington/dp/1930110979"
    image="img/cgia.png"
  >
    Uses Ruby to build a variety of different types of code generators and
    applies those to various common problems like databases, REST services, XML
    parsing, etc.
  </Book>,
  <Book
    title="PHP Hacks"
    url="http://www.amazon.com/PHP-Hacks-Creating-Dynamic-Websites/dp/0596101392"
    image="img/php_hacks.png"
  >
    A set of real world useful hacks based in PHP that provide good starting
    points to solve a wide variety of common web development problems.
  </Book>,
  <Book
    title="Podcasting Hacks"
    url="http://www.amazon.com/Podcasting-Hacks-Tips-Tools-Blogging/dp/0596100663"
    image="img/podcasting_hacks.png"
  >
    A really fun book about the art and technology of podcasting. With not only
    audio advice on microphone choices, noise reduction and editing, but also
    interviews with hosts from NPR, MST3K and others.
  </Book>,
];

const contacts = [
  <ContactItem icon="phone">510 304 2117</ContactItem>,
  <ContactItem icon="envelope" service="Email" url="mailto:jherr@pobox.com">
    jherr@pobox.com
  </ContactItem>,
  <ContactItem
    icon="github"
    service="Github"
    url="https://github.com/jherr"
  ></ContactItem>,
  <ContactItem
    icon="youtube"
    service="YouTube"
    url="https://www.youtube.com/user/jherr2006"
  ></ContactItem>,
  <ContactItem
    icon="twitter"
    service="Twitter"
    url="https://twitter.com/jherr"
  ></ContactItem>,
  <ContactItem
    icon="linkedin"
    service="LinkedIn"
    url="https://www.linkedin.com/in/jherr"
  ></ContactItem>,
];

const videos = [
  <Video url="https://youtu.be/CZMXRMdHm34" title="Top Tech Trends for 2021">
    Ten tech trends to watch and to experiment with to build your skills and
    resume in 2021.
  </Video>,
  <Video
    url="https://youtu.be/vrZpGsL1-Ws"
    title="Blue Collar Coder Introduction"
  >
    An introduction to my channel and my approach to teaching.
  </Video>,
  <Video url="https://youtu.be/tFDvEITdJZ8" title="MicroFEs Simplified">
    Walks you through the process of buidling and sharing Micro-FEs using the
    Module Federation functionality built into Webpack 5.
  </Video>,
  <Video url="https://youtu.be/j8AVXNozac8" title="Introduction to React #1">
    The starting point of my multipart series teaching React fundamentals from
    deployment through to advanced state management concepts.
  </Video>,
  <Video
    url="https://www.youtube.com/watch?v=j92fxPpFaL8"
    title="Converting To Typescript - Basic Types"
  >
    Learn how to code in Typescript by converting the Javascript you already
    know into Typescript.
  </Video>,
  <Video
    url="https://youtu.be/zJvB2hnsXr0"
    title="Four GraphQL Clients Compared"
  >
    We take a look at four different GraphQL clients; fetch, graphql-request,
    Apollo Client, and Relay.
  </Video>,
];

const jobs = [
  <Job
    dat="2017-2020"
    company="Nike"
    location="Beaverton, OR"
    title="Principal Engineer"
    focusElements={[
      <Focus skill="React">
        Developed and lead a small team building out the core React platform for
        the Fortune 100 company.
      </Focus>,
      <Focus skill="GraphQL">
        Developed a pluggable GraphQL architecture that powers an aggregation
        API.
      </Focus>,
      <Focus skill="Leadership">
        I lead the both the UX Platform team as well as a group of four
        principal engineers to architect the common platform and to prioritize
        cross-team efforts.
      </Focus>,
    ]}
  >
    I started my Nike career founding and leading the UI platform team. I
    followed on from that to run several key initiatives into a pluggable
    GraphQL server and into designing, documenting and constructing a shared UI
    platform. As a passion project I designed and developed a replacement part
    recommender that was deployed and resulted in significant revenue gain.
  </Job>,
  <Job
    dates="2014-2017"
    company="Walmart Labs"
    location="Sunnyvale, CA"
    title="Front End Architect"
    focusElements={[
      <Focus skill="React">
        Developed and lead a small team building out the core React platform for
        the Fortune 1 company.
      </Focus>,
      <Focus skill="React-Native">
        Developed a react-native POC Wellness application.
      </Focus>,
      <Focus skill="Node">
        Lead and contributed to the HAPI server and proxy architecture.
      </Focus>,
      <Focus skill="Leadership">
        I lead a team of six developers on the Pharmacy project and five
        developers on the React application platform team.
      </Focus>,
      <Focus skill="Advocacy">
        I choreographed two React conferences that included both internal and
        external speakers. I also maintained an internal blog, did screencasts,
        seminars and developed a React and platform course.
      </Focus>,
    ]}
  >
    I started as an individual contributor on the mWeb team. Then migrated into
    lead of the Pharmacy project. From there I lead a proof of concept on a
    React port of Pharmacy which led to my promotion to architect and leading
    the successful effort to build out the React and Node platform as well
    advocate for the platform.
  </Job>,
  <Job
    dates="2012-2014"
    company="Lithium"
    location="San Francisco, CA"
    title="Senior Software Engineer and Team Lead"
    focusElements={[
      <Focus skill="Angular">
        Developed several POCs, as well as production code based on Angular.
      </Focus>,
      <Focus skill="D3">
        Developed several visualizations based on D3 and wrapped them in
        Angular.
      </Focus>,
      <Focus skill="Leadership">
        I ran several projects under the umbrella of Labs and the Signals
        project individually.
      </Focus>,
    ]}
  >
    At Lithium I helped driven innovation at the company by leading the Lithium
    Labs effort to look at new ways of connecting with our consumer customers as
    well as providing NLP based tools to our business customers. I used Angular
    and D3 to build out several applications for mining NLP data. I also built
    an in-house tool called Signals that allowed us to monitor our customers and
    provide our sales team with triggers that they used to get ahead of issues
    on our customer sites. I also advocated for the use of Angular and
    contributed to it's use in the production application.
  </Job>,
  <Job
    dates="2010-2012"
    company="Fortify"
    location="Sunnyvale, CA"
    title="Senior Software Engineer and Team Lead"
    focusElements={[
      <Focus skill="Flex">
        The primary UI technology for Fortify was Flex based. I was hired on in
        some part to bolster the team's Flex abilities. I implemented several
        key features of their SSC application using both Flex and Java. I lead
        the FOD team in porting code from an older Flex and Java platform to an
        updated platform.
      </Focus>,
      <Focus skill="Java">
        I implemented several key features of both SSC and FOD in both Java and
        Flex. This included support for automated upload support. I also
        developed an RCP application using SWT for editing runtime
        configurations.
      </Focus>,
      <Focus skill="Ruby">
        I used Ruby to prototype a new web-based application to provide details
        on open source security. In that context I developed the full stack
        including database code, Rails MVC code, and Ajax front-end code.
      </Focus>,
      <Focus skill="Web">
        I used both Flex and jQuery extensively at Fortify. The primary UI
        technology for both SSC and FOD was Flex. For my prototyping work I used
        an HTML5 stack and layered on top of it jQuery with our own custom
        widgets.
      </Focus>,
      <Focus skill="Leadership">
        At Fortify I helped indocrinate the team in the Agile methodology. I
        also ran the Fortify On Demand product for a year, which included nine
        successful releases.
      </Focus>,
    ]}
  >
    At Fortify I helped to develop the SSC server product that enables security
    specialists to analyze results from static analysis, dynamic analysis and
    penetration testing. That work included the entire stack from front to back
    end. After that I lead the Fortify On Demand development using Agile and
    Scrum to develop and deploy nine releases in twelve months. I developed
    several prototypes for Fortify and HP. I wrote a paper on the novel
    visualizations for one of the prototypes and that paper was accepted to
    TechCon.
  </Job>,
  <Job
    dates="2009-2010"
    company="Ning"
    location="Palo Alto, CA"
    title="Senior Software Engineer"
    focusElements={[
      <Focus skill="Database">
        At Ning I worked with DBA to diagnose performance issues with the
        databases that drove the social networks. In addition I learned and used
        Hadoop for data mining. I also developed a database for the network
        monitoring application using MySQL.
      </Focus>,
      <Focus skill="Ruby">
        PHP was the primary language at Ning for application work, but while
        working on the ads team I developed a complete Rails application for
        network monitoring.
      </Focus>,
      <Focus skill="PHP">
        PHP is the primary applications language for Ning's social network
        application. I developed Object Oriented PHP code for the model and view
        portions as well as template code for the user interface.
      </Focus>,
      <Focus skill="Web">
        Ning made extensive use of Javascript to build a highly dynamic
        interface. I wrote a lot of Javascript at Ning, including a notable
        complete rewrite of their website appearance editor.
      </Focus>,
      <Focus skill="Leadership">
        At Ning I lead the group that build a social network monitoring
        application. Starting with a prototype that I developed we added an
        additional development resource as well as two QA engineers to the team.
        I ran the project using the Agile methodology.
      </Focus>,
    ]}
  >
    At Ning I developed (as well as help design) several key projects in and
    around their primary social networking product. These included virtual
    gifts, photos and videos and network appearance. In addition I worked on
    analytics across Ning in support of the platform. I lead the effort to build
    a network categorization interface in support of ad targeting in Ruby On
    Rails. I also worked as both a team lead and on-call engineer when required.
    My work at Ning, which has 1.6 million networks and 40 million users and
    growing, provided experience in working at scale.
  </Job>,
  <Job
    dates="2004-2009"
    company="Leverage Software"
    location="San Francisco, CA"
    title="Senior Software Engineer"
    focusElements={[
      <Focus skill="Database">
        Leverage was a small enough company that no engineer could specialize,
        we all had to be full-stack engineers. As such I developed all of the
        database schema and stored procedure code for the features that I
        implemented.
      </Focus>,
      <Focus skill="Flex">
        Leverage used Flex for some of the more complex client-side data
        visualizations for it's customers to view activity on their network. I
        developed these Flex applications and maintained them on a "Leverage
        Labs" site.
      </Focus>,
      <Focus skill=".NET">
        Leverage used ASP.NET and C# for their web servers. I wrote several key
        features of the social network application from the model and controller
        code all the way to the front end page templates including the
        Javascript when required.
      </Focus>,
      <Focus skill="Web">
        I pioneered the creation of Javascript 'widgets' at Leverage that
        allowed our customers to put information about what was happening on
        their social networks on their corporate portal sites. These widgets
        were written in pure JS without the aid of a framework to allow for
        maximum portability.
      </Focus>,
      <Focus skill="Writing">
        At Leverage I wrote and maintained all of the documentation for web
        designers to use the widgets I had developed.
      </Focus>,
    ]}
  >
    I built cutting edge user experiences for the social networking platform
    using Flex, Silverlight and Ajax. I developed a widget toolkit that used
    innovative transport techniques to get Leverage's social networking data on
    any site. I developed all of my features completely from the database
    back-end to the rich Internet application front-end.
  </Job>,
];

class Home extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div id="photo-header" className="text-center">
                <div id="photo">
                  <img src="img/avatar.jpg" alt="avatar" />
                </div>
                <div id="text-header">
                  <h1>Jack Herrington</h1>
                  <h4>
                    Principal Engineer
                    <span className={`fa fa-gear fa-fw`}></span>
                    YouTuber
                    <span className={`fa fa-gear fa-fw`}></span>
                    Writer
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-7">
              <input
                type="text"
                className="form-control search d-print-none"
                placeholder="Search for..."
                onChange={(evt) =>
                  store.dispatch(setSearchText(evt.currentTarget.value))
                }
              />
              <div className="box">
                <h2>About Me</h2>
                <Intro />
              </div>
              <SearchableItems title="Experience" items={jobs} />
            </div>
            <div className="col-xs-12 col-sm-5">
              <div className="box clearfix">
                <h2>Contact</h2>
                {contacts.map((contact, index) => (
                  <div key={index}>{contact}</div>
                ))}
              </div>
              <div className="box">
                <SearchableItems title="Selected Videos" items={videos} />
              </div>
              <div className="box">
                <SearchableItems title="Books/Screencasts" items={books} />
              </div>
              <div className="box">
                <h2>Outside of work</h2>
                <p>
                  I work with the Beaverton public school system to teach coding
                  to fourth graders using Micro:BITs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default Home;
