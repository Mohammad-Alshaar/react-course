import Button from "./Button/Button";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import Student from "./Student";
import UserGreeting from "./userGreeting";

function App() {
  return (
    <>
      <Header />
      <UserGreeting loggedIn={true} userName="Muhammad" />
      <div className="grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button />
      <div className="grid">
        <Student name="Spongpop" age={34} isStudent={true} />
        <Student name="ali" age={45} isStudent={true} />
        <Student name="omar" age={2} isStudent={false} />
        <Student name="figo" age={3874} isStudent={true} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student name="cris" age={12} isStudent={false} />
        <Student />
      </div>
      <Footer />
    </>
  );
}

export default App;
