"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [mood, setMood] = useState("idle");
  const [username, setUsername] = useState("");
  const route = useRouter();
  const triggerSmash = () => {
    setMood("happy");
    setTimeout(() => {
      setMood("idle");
    }, 4000);
  };
  const handleLogin = () => {
    localStorage.setItem("username", username);
    route.push("/dashboard");
  };
  return (
    <div className="login-page">
      <div
        className={`capyimg capy-${mood}`}
        onClick={triggerSmash}
        style={{ cursor: "pointer" }}
      >
        {mood === "idle" && <img src="/capy-idle.jpg" alt="Capybara Idle" />}

        {mood === "looking" && (
          <img src="/capy-looking.jpg" alt="Capybara Looking" />
        )}

        {mood === "shy" && <img src="/capy-shy.jpg" alt="Capybara Shy" />}

        {mood === "happy" && <img src="/capy-happy.jpg" alt="Capybara Happy" />}
      </div>

      <div className={`login ${mood === "happy" ? "login-recoil" : ""}`}>
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Welcome</h2>
          <label htmlFor="username">Username</label>

          <input
            id="username"
            type="text"
            placeholder="Your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setMood("looking")}
            onBlur={() => setMood("idle")}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="name@email.com"
            onFocus={() => setMood("looking")}
            onBlur={() => setMood("idle")}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onFocus={() => setMood("shy")}
            onBlur={() => setMood("idle")}
          />

          <button
            id="mybtn1"
            type="submit"
            onMouseEnter={() => setMood("happy")} // Changes to happy on hover
            onMouseLeave={() => setMood("idle")} // Reverts to idle when mouse leaves
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
