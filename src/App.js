import "./styles.css";

export default function App() {
  return (
    <div className="loginPage">
      <div className="header">
        <img
          className="logo"
          src="https://cdn.discordapp.com/attachments/992426402194391121/1003583003995418684/logo.png"
          alt="rogo"
        />
        <div className="mainTitle">
          <span className="titleChar1">食</span>
          <span className="titleChar2">べ</span>
          <span className="titleChar3">ロ</span>
          <span className="titleChar4">グ</span>
          <span className="titleChar5">先</span>
          <span className="titleChar6">生</span>
        </div>
        <button className="signUpButton">sign up</button>
        <button className="loginButton">login</button>
      </div>
      <form className="loginForm">
        <h1>Login</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type={"submit"}>LOGIN</button>
      </form>
    </div>
  );
}
