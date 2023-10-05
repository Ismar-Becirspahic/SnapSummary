import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="py-6 w-full flex justify-between items-center">
        <img src={logo} alt="summary_logo" className="w-52 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/Ismar-Becirspahic")}
          className="git_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hidden" />
        <span className="text_gradient"> SnapSummary</span>
      </h1>
      <h2 className="description">
        Articles that you are reading are too long? You are not a fan of reading
        and want to know what the text is about as soon as possible? Use the
        Power of SnapSummary to summarize desired articles efficiently.
      </h2>
    </header>
  );
};

export default Hero;
