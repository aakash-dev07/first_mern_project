import { useState } from "react";


export const Register = () => {

  const [inputvalue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value
      }


    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(inputvalue),
        credentials: "include"
      })

      if (response.ok) {
        alert("Form submitted successfully")
        const data = await response.json()
        console.log(data)
        setInputValue({
          username: "",
          email: "",
          password: "",
          phone: "",
        })
      }

      else {
        const errorData = await response.json(); // बैकएंड से एरर मैसेज निकालें
        console.error("Backend Error Status:", response.status); // 👈 पोर्ट/स्टेटस चेक करने के लिए
        console.error("Backend Error Message:", errorData);      // 👈 असली समस्या जानने के लिए
        alert(`Registration Failed: ${errorData.msg || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error during submission:", error);
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">

      {/* Main Container */}
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">

        <div className="grid md:grid-cols-2">

          {/* ================= IMAGE SECTION ================= */}
          <div className="relative hidden min-h-[680px] md:block">

            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
              alt="People working together"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* <img src="public/img/2.svg" alt="People working together" /> */}

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-indigo-950/80 to-purple-950/90"></div>

            {/* Image Content */}
            <div className="relative z-10 flex h-full flex-col justify-end p-10">

              {/* Small Badge */}
              <span className="mb-5 w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300 backdrop-blur-md">
                Welcome
              </span>

              <h2 className="max-w-md text-4xl font-bold leading-tight text-white">
                Start your journey
                <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  with us.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
                Join our community and discover a simple,
                secure and better way to manage your account.
              </p>

              {/* Decorative Line */}
              <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>

            </div>

          </div>


          {/* ================= FORM SECTION ================= */}
          <div className="bg-slate-900 p-8 sm:p-10 lg:p-12">

            {/* Heading */}
            <div className="mb-8">

              <h1 className="text-3xl font-bold tracking-tight text-white">
                Create Account
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Create your account and get started with us.
              </p>

            </div>


            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Username
                </label>

                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleInputChange}
                  value={inputvalue.username}
                  placeholder="Enter your username"
                  className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>


              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                  value={inputvalue.email}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>


              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleInputChange}
                  value={inputvalue.phone}
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>


              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleInputChange}
                  value={inputvalue.password}
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>


              {/* Confirm Password */}
              {/* <div>
                                <label
                                    htmlFor="confirmPassword"
                                    className="mb-2 block text-sm font-medium text-slate-300"
                                >
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Confirm your password"
                                    className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
                                />
                            </div> */}


              {/* Terms */}
              {/* <div className="flex items-start gap-3 pt-1">

                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-5 text-slate-400"
                >
                  I agree to the{" "}
                  <span className="font-medium text-indigo-400 hover:text-indigo-300">
                    Terms & Conditions
                  </span>
                </label>

              </div> */}


              {/* Register Button */}
              <button
                type="submit"

                className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/30 active:translate-y-0"
              >
                <span className="relative z-10">
                  Create Account
                </span>
              </button>

            </form>




            {/* Login */}
            <p className="mt-7 text-center text-sm text-slate-500">

              Already have an account?{" "}

              <a
                href="/login"
                className="font-semibold text-indigo-400 transition hover:text-indigo-300"
              >
                Login
              </a>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};


// import { useState } from "react";

// export const Register = () => {
//   const [inputvalue, setInputValue] = useState({
//     username: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const [agreed, setAgreed] = useState(false); // Checkbox के लिए स्टेट

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // रिफ्रेश होने से रोकता है

//     if (!agreed) {
//       alert("कृपया Terms & Conditions स्वीकार करें!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:3000/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(inputvalue),
//       });

//       const data = await response.json(); // backend से आया रिस्पॉन्स पढ़ें

//       if (response.ok) {
//         alert("Form submitted successfully!");
//         // फॉर्म को खाली करने के लिए:
//         setInputValue({ username: "", email: "", phone: "", password: "" });
//         setAgreed(false);
//       } else {
//         console.log("Server Error:", data);
//         alert(data.message || "डेटा सर्वर तक नहीं पहुँच सका");
//       }
//     } catch (error) {
//       console.error("Internal server error on frontend:", error);
//       alert("सर्वर से कनेक्ट करने में असमर्थ (Network/CORS Error)");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
//       <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
//         <div className="grid md:grid-cols-2">
//           {/* IMAGE SECTION */}
//           <div className="relative hidden min-h-[680px] md:block">
//             <img
//               src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
//               alt="People working together"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-indigo-950/80 to-purple-950/90"></div>
//             <div className="relative z-10 flex h-full flex-col justify-end p-10">
//               <span className="mb-5 w-fit rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300 backdrop-blur-md">
//                 Welcome
//               </span>
//               <h2 className="max-w-md text-4xl font-bold leading-tight text-white">
//                 Start your journey
//                 <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                   with us.
//                 </span>
//               </h2>
//               <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
//                 Join our community and discover a simple, secure and better way to manage your account.
//               </p>
//               <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
//             </div>
//           </div>

//           {/* FORM SECTION */}
//           <div className="bg-slate-900 p-8 sm:p-10 lg:p-12">
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold tracking-tight text-white">
//                 Create Account
//               </h1>
//               <p className="mt-2 text-sm leading-6 text-slate-400">
//                 Create your account and get started with us.
//               </p>
//             </div>

//             <form className="space-y-5" onSubmit={handleSubmit}>
//               {/* Username */}
//               <div>
//                 <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-300">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   required
//                   onChange={handleInputChange}
//                   value={inputvalue.username}
//                   placeholder="Enter your username"
//                   className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   onChange={handleInputChange}
//                   value={inputvalue.email}
//                   placeholder="Enter your email"
//                   className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   required
//                   onChange={handleInputChange}
//                   value={inputvalue.phone}
//                   placeholder="Enter your phone number"
//                   className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   required
//                   onChange={handleInputChange}
//                   value={inputvalue.password}
//                   placeholder="Create a password"
//                   className="w-full rounded-lg border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-indigo-500 focus:bg-slate-800 focus:ring-2 focus:ring-indigo-500/20"
//                 />
//               </div>

//               {/* Terms Checkbox */}
//               <div className="flex items-start gap-3 pt-1">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   checked={agreed}
//                   onChange={(e) => setAgreed(e.target.checked)}
//                   className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900"
//                 />
//                 <label htmlFor="terms" className="text-sm leading-5 text-slate-400">
//                   I agree to the{" "}
//                   <span className="font-medium text-indigo-400 hover:text-indigo-300">
//                     Terms & Conditions
//                   </span>
//                 </label>
//               </div>

//               {/* Register Button */}
//               <button
//                 type="submit"
//                 className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-500 hover:to-purple-500 hover:shadow-indigo-500/30 active:translate-y-0"
//               >
//                 <span className="relative z-10">Create Account</span>
//               </button>
//             </form>

//             <p className="mt-7 text-center text-sm text-slate-500">
//               Already have an account?{" "}
//               <a href="/login" className="font-semibold text-indigo-400 transition hover:text-indigo-300">
//                 Login
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };