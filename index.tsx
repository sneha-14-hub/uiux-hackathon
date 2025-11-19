import React, { useState } from "react";
import image1 from "./image-1.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";

export const Box = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  const handleFacebookSignup = () => {
    console.log("Facebook signup clicked");
  };

  return (
    <div className="relative w-[1331px] h-[656px]">
      <div className="fixed top-[172px] left-[84px] w-[1333px] h-[656px]">
        <div className="absolute top-0 left-0 w-[1345px] h-[656px]">
          <h1 className="absolute top-0 left-[204px] [font-family:'Manrope-Bold',Helvetica] font-bold text-[#142bf5] text-[50px] tracking-[0] leading-[normal]">
            Welcome to Aqverium
          </h1>

          <p className="absolute top-[394px] left-[406px] h-[35px] flex items-center justify-center [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent text-[23px] tracking-[0] leading-[normal]">
            <span className="text-black">Forget password ?</span>

            <button
              onClick={handleForgotPassword}
              className="text-[#1a38f8] cursor-pointer hover:underline"
              type="button"
            >
              {" "}
              Click here
            </button>
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email-input"
              className="absolute top-[201px] left-[57px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#142bf5] text-[35px] tracking-[0] leading-[normal]"
            >
              Email
            </label>

            <label
              htmlFor="password-input"
              className="absolute top-[316px] left-0 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#142bf5] text-[35px] tracking-[0] leading-[normal]"
            >
              Password
            </label>

            <div className="top-[316px] left-[216px] w-[520px] h-[60px] bg-[linear-gradient(90deg,rgba(239,240,249,1)_0%,rgba(124,137,255,1)_95%)] absolute rounded-[25px]">
              <input
                id="password-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-full px-6 text-[#142bf5] text-[20px] [font-family:'Poppins-Regular',Helvetica] rounded-[25px]"
                placeholder=""
                aria-label="Password"
                required
              />
            </div>

            <div className="top-[201px] left-[211px] w-[520px] h-[60px] bg-[linear-gradient(90deg,rgba(239,240,249,1)_0%,rgba(124,137,255,1)_95%)] absolute rounded-[25px]">
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full px-6 text-[#142bf5] text-[20px] [font-family:'Poppins-Regular',Helvetica] rounded-[25px]"
                placeholder=""
                aria-label="Email"
                required
              />
            </div>

            <button
              type="submit"
              className="top-[455px] left-[318px] w-[251px] h-[59px] bg-[#201192] absolute rounded-[25px] hover:bg-[#2a1ab5] transition-colors cursor-pointer"
              aria-label="Log In"
            >
              <span className="absolute top-[12px] left-[95px] h-[35px] flex items-center justify-center [font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[23px] tracking-[0] leading-[normal]">
                log In
              </span>
            </button>
          </form>

          <img
            className="absolute top-11 left-[756px] w-[575px] h-[575px] aspect-[1] object-cover"
            alt="Aqverium illustration"
            src={image1}
          />

          <p className="absolute top-[528px] left-[279px] w-[383px] [font-family:'Manrope-Regular',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal]">
            sign up with other account
          </p>

          <button
            onClick={handleGoogleSignup}
            className="top-[595px] left-[104px] absolute [font-family:'Manrope-Regular',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#142bf5] transition-colors flex items-center"
            type="button"
            aria-label="Sign up with Google"
          >
            <img
              className="absolute top-[3px] left-[-36px] w-[33px] h-[31px] aspect-[1.06]"
              alt="Google"
              src={image2}
            />
            sign up with google
          </button>

          <button
            onClick={handleFacebookSignup}
            className="top-[592px] left-[434px] absolute [font-family:'Manrope-Regular',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal] cursor-pointer hover:text-[#142bf5] transition-colors flex items-center"
            type="button"
            aria-label="Sign up with Facebook"
          >
            <img
              className="absolute top-[-6px] left-[-52px] w-[52px] h-10 aspect-[1.3]"
              alt="Facebook"
              src={image3}
            />
            sign up with facebook
          </button>
        </div>
      </div>
    </div>
  );
};
