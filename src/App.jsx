import { Hero, Leaderboard, Topthree, CommunityLead, Footer  } from './sections';

import Nav from './components/Nav';

const App = () => (
  <main>
    <Nav />
  <section>
    <Hero />
  </section>
  <section>
    <Topthree />
  </section>
  <section>
    <Leaderboard />
  </section>
  <section>
    <CommunityLead />
  </section>
  <section>
    <Footer />
  </section>
  </main>
)

export default App;
