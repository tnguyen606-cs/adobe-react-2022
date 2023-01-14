import confirm_1 from './img/confirm_1.png';
import confirm_2 from './img/confirm_2.png';
import errormessage from './img/errormessage.png';
import setexp from './img/setexp.png';
import setexp_2 from './img/setexp_2.png';
import truncation from './img/truncation.png';
import './App.css';

function App() {
  return (
    <div className="Adobe">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li className="nav-item"><a className="nav-link" href="#abstract">Introduction</a></li>
                    <li className="nav-item"><a className="nav-link" href="#roles">Roles</a></li>
                    <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                    <li className="nav-item"><a className="nav-link" href="#techstack">Tech Stack</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
      </nav>
      {/*  <!-- Masthead--> */}
      <header className="masthead">
        <div className="container">
            <div className="masthead-heading">Welcome To My Intern Expo Project - Summer 2022!</div>
        </div>
      </header>
      {/* <!-- Abstract--> */}
      <section className="page-section" id="abstract">
          <div className="container">
            <h2 className="section-heading text-uppercase">Introduction</h2>
            <p>Adobe Marketo Engage (referred to as Marketo), is marketing automation software. Marketing automation lets customers have the ability to measure marketing tasks and workflows that provides customers an operational efficiency. There are a ton of great features to help customers achieve marketing goals including Form, Landing Page, Email, Workflow Engine and so much more!</p>
          </div>
      </section>
      {/* <!-- Roles--> */}
      <section className="page-section" id="roles">
          <div className="container">
            <h2 className="section-heading text-uppercase">Roles and Responsibilities</h2>
            <p>As a front-end developer, I performed daily coding skills such as TypeScript/JavaScript with one general responsibility is to ensure that the users can easily interact with Marketo website's appearance. Whenever users visit a page, anything that they see, click on and perform specific tasks is the work of a front-end developer.</p>
            <p>Attend to the daily standup meeting allows me and other team members to share status updates and identify obstacles standing in our way. In addition to present an increment stage of my project during a team meeting reoccurring every week, including manger and other team developers, the group can provide feedback on my current solution and use case testing that I've missed. Also, there's the Sprint Retrospective meeting, which allowed me and the development team to look back at what went well, what could be done better and what's we were looking for in the next Sprint projects.</p>
            <p>To reduce meetings without compromising on productivity, the development team and I were using Slack as a platform to keep communication into our workflow across our organization. There are a lot of tasks that I can address on Slack, I can get quick real-time answers to my problem queries from product manager, UX design team, QE team, and my team members, which helps me make progress, decisions faster.</p>
          </div>
      </section>
      {/* <!-- Projects--> */}
      <section className="page-section" id="projects">
          <div className="container">
            <h2 className="section-heading text-uppercase">Project Scope</h2>
            <div>
              <h3 className="section-subheading">1. Implement a Confirmation Modal UI Enhancement</h3>
              <ul className="list-inline">
                <p><strong>Purpose:</strong></p>
                <li>
                The purpose of this Confirmation Modal UI Enhancement is to support the user's experience to have a better responsive design while still maintaining all existing functionality and consistency implemented in the old modal. With this UI enhancement, the user now can view two separate sections for the applicable vs skipped assets from selected assets instead of one like before, which helps the user eliminate the confusion with status light colors as in the old version of it.
                </li>
                <p><strong>Tasks:</strong></p>
                <li>
                  <ul>
                    <li>Display two separate sections for applicable vs skipped assets in a dialog box.</li>
                    <li>Display asset name as hyperlinked, clicking/pressing key on it will navigate the user into the asset in a new tab.</li>
                    <li>Display 2 scrollbars for each section if the list of assets is too long.</li>
                    <li>Display the asset name, and the reason for the selected asset in skipped tableview.</li>
                    <li>Display focus on action button so that user can fully navigate the dialog box by using keyboard.</li>
                  </ul>
                </li>
                <p><strong>Demo:</strong></p>
                <img className="img-fluid" src={ setexp } alt="Set Expiration Modal"></img>
                <img className="img-fluid" src={ setexp_2 } alt="Set Expiration Modal"></img>
              </ul>
            </div>
            <div>
              <h3 className="section-subheading">2. Implement a Set Expiration Modal Feature</h3>
              <ul className="list-inline">
                <p><strong>Purpose:</strong></p>
                <li>
                The purpose of this feature is that user now can select a single or multiple assets and perform Set expiration action on them. In addition to view the applicable vs skipped assets from the selected list, user can pick a valid
date/time, review accessible assets to make an informed decision before setting expiration.
                </li>
                <p><strong>Tasks:</strong></p>
                <li>
                  <ul>
                    <li>Display the date-picker field to set a date and time.</li>
                    <li>Display two separate sections for applicable vs skipped assets in the modal.</li>
                    <li>Display the asset name, and the reason for the selected asset in skipped tableview.</li>
                    <li>Display Set/Cancel button in the modal itself.</li>
                    <li>Display focus on action button so that user can fully navigate the dialog box by using keyboard.</li>
                  </ul>
                </li>
                <p><strong>Demo:</strong></p>
                <div className="row">
                  <div id="confirm">
                    <p className="figure-caption">Old Confirm Modal</p>
                    <img src={ confirm_1 } width="600" height="700" alt="Old Confirm Modal"></img>
                  </div>
                  <div id="confirm">
                    <p className="figure-caption">Updated Confirm Modal</p>
                    <img src={ confirm_2 } width="600" height="700" alt="Updated Confirm Modal"></img>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <h3 className="section-subheading">3. Fix Bugs</h3>
              <p><strong>Truncation of a name text</strong></p>
              <p>
              Added a truncation to a name text in the mass asset page as shrinking the window size down, and a tool-tip hover to show the entire name text if the text's length is longer than 30 characters.
              </p>
              <img className="img-fluid" src={ truncation } alt="Truncation Bug"></img>
              <p><strong>Fix an unhelpful error message as activating trigger</strong></p>
              <p>
              When click on the "view failures" link, a detailed message appears to tell the suer that the trigger campaign is missing a flow step, instead of showing an unknown message.
              </p>
              <img className="img-fluid" src={ errormessage } alt="Error Message Bug"></img>
              <p><strong>Pressing key to execute a modal</strong></p>
              <p>
              Added a focus on the confirm button in the confirmation modal so that a user can execute the dialog by pressing key instead of clicking on the button.
              </p>        
            </div>          
          </div>
      </section>
      {/* Tech Stack */}
      <section className="page-section" id="techstack">
          <div className="container">
            <h2 className="section-heading text-uppercase">Tech Stack</h2>
            <p><strong>Programming languages:</strong> TypeScript, JavaScript, Json, HTML/CSS.</p>
            <p><strong>IDE:</strong> Visual Studio Code.</p>
            <p><strong>Framework/Others:</strong> Jest, Docker, Smartproxy, Requestly, Git, React Redux.</p>
          </div>
      </section>
      {/* <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container">
            <div>
                <h2 className="section-heading text-uppercase">Contact Me</h2>
                <p><strong>Email:</strong> tnguyen606@gatech.edu</p>
                <p><strong>Phone:</strong> +1 (404) 883 - 7474</p>
                <a className="App-link"
                  href="https://www.linkedin.com/in/hongtam-nguyen/"
                  target="_blank"
                  rel="noreferrer"><strong>linkedin.com/in/hongtam-nguyen/</strong></a>
            </div>
            
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="footer py-4">
        <div className="container">
          <div>tamnguyen-adobe-internship.azurewebsites.net</div>
        </div>
      </footer>     
    </div>

    // 
  );
}

export default App;
