// "use client";

// import Link from "next/link";
// import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
// import Image from "next/image";
// import GitIcon from "../../public/icons/icons8-github-192.svg";
// import LinkedInIcon from "../../public/icons/icons8-linkedin-128.svg";
// import TableIcon from "../../public/icons/tableMain.svg";
// import { exportUrls } from "../../utils/exportUrls";
// import { AuthenticationContext } from "../context/AuthContext";
// import useAuth from "../../hooks/useAuth";
// import AuthModalcopy from "./authModalcopy";

// function NavBar() {
//   const [getWidth, setGetWidth] = useState(0);
//   const { data, loading } = useContext(AuthenticationContext);
//   const { signout } = useAuth();
//   const [menu, setMenu] = useState("");
//   const [hiddenFlex, setHiddenFlex] = useState("hidden");
//   const [open, setOpen] = useState(false);

//   const handleContent = () => {
//     if(open === false){
//       return ("grid grid-rows-3  place-content-center whitespace-nowrap")
//     }    return ("flex justify-between h-[40px] pb-[0.1rem]")
//   }

//   // useLayoutEffect(() => {
//   //   setGetWidth(window.innerWidth);
//   // });

//   useEffect(() => {
//     handleContent()
//   },[open]);

//   return (
//     <nav className="container fixed bg-white z-50 w-full mt-0">
//       <div className={`${handleContent}`}>
//         <div
//           className={`${styles.returnStylesNavBar.divOpenTable} ${
//             menu === "" ? "" : "border-b-2 border-dotted"
//           }`}
//         >
//           <Link
//             href="/"
//             className={`${styles.returnStylesNavBar.linkOpenTable}`}
//           >
//             <Image
//               src={TableIcon}
//               alt="Table Icon"
//               className={`${styles.returnStylesNavBar.imgOpenTable}`}
//             ></Image>
//             <p className={`${styles.returnStylesNavBar.pOpenTable}`}>
//               OpenTable
//             </p>
//           </Link>
//           <div className={`${!hiddenFlex} ${menu} order-2`}>
//             <div
//               className={`${styles.returnStylesNavBar.divHambMenu}`}
//               onClick={() => {
//                 setHiddenFlex("flex");
//                 setOpen(true);
//                 setMenu("hidden");
//               }}
//             >
//               <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
//                 |
//               </div>
//               <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
//                 |
//               </div>
//               <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
//                 |
//               </div>
//             </div>
//           </div>
//           <div
//             className={`${hiddenFlex} ${styles.returnStylesNavBar.divHambMenuX}`}
//             onClick={() => {
//               setHiddenFlex("hidden");
//               setOpen(false);
//               setMenu("");
//             }}
//           >
//             <p className={`${styles.returnStylesNavBar.pHambMenuX}`}>X</p>
//           </div>
//         </div>
//         <div
//           className={`${hiddenFlex} ${styles.returnStylesNavBar.divCredits}`}
//         >
//           <p className={`${styles.returnStylesNavBar.pDivCredits}`}>
//             Rafael Vendramini
//           </p>
//           <Link
//             href={exportUrls.github}
//             target="blank"
//             className={`${styles.returnStylesNavBar.imgDivCredits}`}
//           >
//             <Image src={GitIcon} alt="GitHubIcon Icon" />
//           </Link>
//           <Link
//             href={exportUrls.linkedin}
//             target="blank"
//             className={`${styles.returnStylesNavBar.imgDivCredits}`}
//           >
//             <Image src={LinkedInIcon} alt="LinkedIn Icon" />
//           </Link>
//         </div>
//         <div
//           className={`${hiddenFlex} ${styles.returnStylesNavBar.divSignInUp}`}
//         >
//           {loading ? null : (
//             <>
//               {data ? (
//                 <button
//                   className={`${styles.returnStylesNavBar.buttonSignout}`}
//                   onClick={signout}
//                 >
//                   Sign out
//                 </button>
//               ) : (
//                 <>
//                   <AuthModalcopy isSignin={true} />
//                   <AuthModalcopy isSignin={false} />
//                 </>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

// // "use client";

// // import Link from "next/link";
// // import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
// // import Image from "next/image";
// // import GitIcon from "../../public/icons/icons8-github-192.svg";
// // import LinkedInIcon from "../../public/icons/icons8-linkedin-128.svg";
// // import TableIcon from "../../public/icons/tableMain.svg";
// // import { exportUrls } from "../../utils/exportUrls";
// // import { AuthenticationContext } from "../context/AuthContext";
// // import useAuth from "../../hooks/useAuth";
// // import AuthModalcopy from "./authModalcopy";
// // import * as styles from "./styles/NavBarStyles"

// // function NavBare() {
// //   const [getWidth, setGetWidth] = useState(0);
// //   const { data, loading } = useContext(AuthenticationContext);
// //   const { signout } = useAuth();
// //   const [menu, setMenu] = useState("");
// //   const [hiddenFlex, setHiddenFlex] = useState("hidden");
// //   const [displayContent, setDisplayContent] = useState(styles.handleStylesNavBar.closeSM);

// //   useLayoutEffect(() => {
// //     setGetWidth(window.innerWidth);
// //   });

// //   useEffect(() => {
// //     displayContent;
// //     menu;
// //     hiddenFlex;
// //   },);

// //   return (
// //     // <div className="fixed bg-white">
// //     <nav
// //       className={`${displayContent} ${styles.returnStylesNavBar.navMain}`}
// //     >
// //       <div className={`${styles.returnStylesNavBar.divOpenTable}`}>
// //         <Link href="/" className={`${styles.returnStylesNavBar.linkOpenTable}`}>
// //           <Image
// //             src={TableIcon}
// //             alt="Table Icon"
// //             className={`${styles.returnStylesNavBar.imgOpenTable}`}
// //           ></Image>
// //           <p className={`${styles.returnStylesNavBar.pOpenTable}`}>
// //             OpenTable
// //           </p>
// //         </Link>
// //         <div className={`${!hiddenFlex} ${menu} order-2`}>
// //           <div
// //             className={`${styles.returnStylesNavBar.divHambMenu}`}
// //             onClick={() => {
// //               setHiddenFlex("flex");
// //               setDisplayContent(styles.handleStylesNavBar.openSM);
// //               setMenu("hidden");
// //             }}
// //           >
// //             <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
// //               |
// //             </div>
// //             <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
// //               |
// //             </div>
// //             <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
// //               |
// //             </div>
// //           </div>
// //         </div>
// //         <div
// //           className={`${hiddenFlex} ${styles.returnStylesNavBar.divHambMenuX}`}
// //           onClick={() => {
// //             setHiddenFlex("hidden");
// //             setDisplayContent(styles.handleStylesNavBar.closeSM);
// //             setMenu("");
// //           }}
// //         >
// //           <p className={`${styles.returnStylesNavBar.pHambMenuX}`}>
// //             X
// //           </p>
// //         </div>
// //       </div>
// //       <div
// //         className={`${hiddenFlex} ${styles.returnStylesNavBar.divCredits}`}
// //       >
// //         <p className={`${styles.returnStylesNavBar.pDivCredits}`}>
// //           Rafael Vendramini
// //         </p>
// //         <Link
// //           href={exportUrls.github}
// //           target="blank"
// //           className={`${styles.returnStylesNavBar.imgDivCredits}`}
// //         >
// //           <Image src={GitIcon} alt="GitHubIcon Icon" />
// //         </Link>
// //         <Link
// //           href={exportUrls.linkedin}
// //           target="blank"
// //           className={`${styles.returnStylesNavBar.imgDivCredits}`}
// //         >
// //           <Image src={LinkedInIcon} alt="LinkedIn Icon" />
// //         </Link>
// //       </div>
// //       <div
// //         className={`${hiddenFlex} ${styles.returnStylesNavBar.divSignInUp}`}
// //       >
// //         {loading ? null : (
// //           <>
// //             {data ? (
// //               <button
// //                 className={`${styles.returnStylesNavBar.buttonSignout}`}
// //                 onClick={signout}
// //               >
// //                 Sign out
// //               </button>
// //             ) : (
// //               <>
// //                 <AuthModalcopy isSignin={true} isVisible={false} />
// //                 <AuthModalcopy isSignin={false} isVisible={false} />
// //               </>
// //             )}
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //     // </div>
// //   );
// // }

// // export default NavBare;
