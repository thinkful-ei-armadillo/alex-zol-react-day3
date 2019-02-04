import React from 'react';

function App (props) {
  return (
      <div>
          <header>
              <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Sally Smith"/>
              <h1>Sally Smith</h1>
              <hr/>
              <address>
                  <span>1234 South 5th Street -</span>
                  <span>123-456-7890 -</span>
                  <span>sally.smith@fakeemail.com </span>
              </address>
              <hr/>
          </header>
          <main>
              <section>
                  <h2>Education</h2>
                  <h3>Snow Day University</h3>
                  <p>Bachelors in Snowball Engineering</p>
                  <ul>
                      <li>Valedictorian.</li>
                      <li>4.00 GPA.</li>
                      <li>Vice-Chair of the Basket Weaving club.</li>
                  </ul>
                  <hr/>
              </section>
              <section>
                  <h2>Snowball Emporium</h2>
                  <h3>Senior Snowball Developer</h3>
                  <p>8/3/2016 - Present</p>
                  <ul>
                      <li>Worked on the team that developed the Snowballenator 3.0.</li>
                      <li>Managed ten different teams working on 30 different projects.</li>
                  </ul>
                  <br/>
                  <h2>Rudolph's Construction</h2>
                  <h3>Junior Snowball Engineer</h3>
                  <p>2/4/2014 - 7/3/2016</p>
                  <ul>
                      <li>Youngest Junior Engineer to design their own snowball.</li>
                      <li>Helped improve construction methodology to increase throughput 500%!</li>
                  </ul>
              </section>
          </main>
      </div>
  );
}

export default App;
