import React from "react";
import LightPillar from "./LightPillar";
const App = () => {
  return (
    <>
      <div className="relative flex justify-center items-center">
        <div className="" style={{ width: "100%", height: "100dvh", position: "relative" }}>
          <LightPillar
            topColor="rgba(100, 200, 200, 0.9)"
            bottomColor="rgba(0, 250, 255, 0.5)"
            intensity={1.1}
            rotationSpeed={0.05}
            glowAmount={0.002}
            pillarWidth={6.9}
            pillarHeight={3}
            noiseIntensity={0.1}
            pillarRotation={45}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>

        <div className="absolute z-10 
            backdrop-blur-sm bg-white/10 
            p-6 grid grid-cols-1 
            items-center justify-items-center 
            w-80 h-auto
            border rounded-lg border-white/20 ">

          <h1 className="font-extrabold text-xl mb-4">Login</h1>

          <form className="grid grid-cols-1 gap-1 ">

            <label htmlFor="email" className="font-semibold">
              Email
            </label>

            <div className="flex justify-space-between items-center">
              <input
                type="email"
                name="Email"
                id=""
                className="basis-[70%] border rounded-lg"
              />
              <i className="basis-[30%] border fa-solid fa-address-book border-transparent "></i>
            </div>

            <label for="password">Password</label>
            <div className="flex justify-space-between items-center gap-x-0.5">
              <input
                type="password"
                name="Password"
                id=""
                className="basis-[70%] border rounded-lg"
              />
              <i className="basis-[30%] fa-sharp fa-solid fa-lock"></i>
            </div>

            <div className="flex justify-evenly items-center gap-x-4">
              <div className="flex justify-center items-center gap-x-1">
                <input className="bg-blue-800 " type="checkbox" name="Remember me" id="" />
                <label for="remember me">Remember me</label>
              </div>
              <a href="">Forget Password?</a>
            </div>
            <button type="submit" className="border rounded-lg py-1">
              Log in
            </button>
            <div className="text-sm text-center">
              <span>Don't have an account?</span>
              <a href="">Register</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default App;
