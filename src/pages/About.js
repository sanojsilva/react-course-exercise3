import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div>
      About
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default About;
