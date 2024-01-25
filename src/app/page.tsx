import Image, { StaticImageData } from "next/image";
import logo from "public/logo.png";
import google from "public/google.png";
import apple from "public/apple.png";
import twitter from "public/twitter.png";
import discord from "public/discord.png";
import git from "public/git.png";
import linkedin from "public/linkedin.png";

// const Navbar = () => (
//   <div className="navbar bg-[#605BFF] py-7">
//     <div className="flex gap-2.5 items-center ml-4">
//       <Image src={logo} alt="logo" width={30} height={30} />
//       <div className="text-white text-xl">Base</div>
//     </div>
//   </div>
// );

// const SignInButton = ({ src, alt, text }:{
//   src:StaticImageData,
//   alt:string,
//   text:string
// }) => (
//   <div className="p-1 ml-4 flex gap-1 items-center rounded-md bg-white">
//     <Image src={src} alt={alt} width={30} height={30} />
//     <p>{text}</p>
//   </div>
// );

export default function Home() {
  return (
    //     <div className="bg-slate-100 min-h-screen">
    //       <Navbar />
    //       <div className="m-8 flex flex-col justify-center">
    //         <div className="text font-bold text-3xl py-2">Sign In</div>
    //         <p>Sign in to your account</p>
    //       </div>
    //       <div className="flex justify-between">
    //         <SignInButton src={google} alt="google" text="Sign in with Google" />
    //         <SignInButton src={apple} alt="apple" text="Sign in with Apple" />
    //       </div>
    //     </div>
    //   );
    // }

    <div className="w-full h-screen bg-slate-50 ">
      <div className="navbar bg-[#605BFF] py-7">
        <div className="flex gap-2.5 items-center ml-4">
          <Image src={logo} alt="logo" width={30} height={30} />
          <div className="text-white text-xl">Base</div>
        </div>
      </div>
      <div className="w-full max-w p-8">
        <div className="mb-8">
          <div className="text-2xl font-bold mb-2">Sign In</div>
          <p className="text-sm text-gray-500">Sign in to your account</p>
        </div>
          <div className="flex justify-between mb-8 gap-4 items-center">
            <button className="w-full text-gray-500 rounded-lg flex items-center bg-white py-2">
              <Image src={google} alt="gogole" width={30} height={30} />
              Sign in with Apple
            </button>

            <button className="w-full text-gray-500 rounded-md flex items-center bg-white py-2">
              <Image src={apple} alt="apple" width={28} height={30} />
              Sign in with Apple
            </button>
          </div>
        <div className="bg-white rounded-xl p-7">
          <div className="text-base text-black mb-2">Email address</div>
          <input
            type="text"
            className="w-full border border-gray-300 bg-[#eaeaea] rounded-[10px] px-3 py-2 mb-4"
            value="johndoe@gmail.com"
          />
          <div className="text-base text-black mb-2">Password</div>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 bg-[#eaeaea]"
            value={"......."}
          />
          <div className="text-blue-600 text-base mb-4">Forgot password?</div>
          <button className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md">
            Sign In
          </button>
        </div>
        <div className="flex flex-col text-center mt-10 space-y-5">
          <p className="text-sm text-gray-500">Don’t have an account?</p>
          <span className="text-blue-600">Register here</span>
        </div>
        <div className="flex justify-center mt-7 gap-4">
          <Image src={git} alt="git" width={30} height={30}/>
          <Image src={twitter} alt="twitter" width={30} height={30}/>
          <Image src={linkedin} alt="linkedin" width={30} height={30}/>
          <Image src={discord} alt="discord" width={30} height={30}/>
        </div>
      </div>
    </div>
  );
}
