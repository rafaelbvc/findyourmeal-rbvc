"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import TableIcon from "./icons/TableIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import ThemeBtn from "./buttons/ThemeBtn";
import ModalOpenBtn from "./buttons/ModalOpenBtn";
import AuthModalcopy from "./AuthModalcopy";

function NavBare() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();

  return (
    <nav className="container fixed bg-white flex px-2 center w-full gap-2 z-50">
      <TableIcon />
      <Link href="/" className="flex pTitles gap-2">
        FindYourMeal
      </Link>
      <div className="onlyBeforeSM">
        <ModalOpenBtn />
      </div>
      <div className="afterSM mx-auto gap-4">
        <p className="afterLG pTitles">Rafael Vendramini</p>
        <p className="onlyMD pTitles">Rafael</p>
        <Link href="/" className="afterSM cursor-pointer m-auto">
          <GitHubIcon width="sm" color="gray" />
        </Link>
        <Link href="/" className="afterSM cursor-pointer m-auto">
          <LinkedInIcon width="sm" color="gray" />
        </Link>
      </div>
      <div className="afterSM justify-end">
        {loading ? null : (
          <div className="flex">
            {data ? (
              <ThemeBtn
                tColor="white"
                colorBtn="blue"
                text="Sign Out"
                resize="w-[6.25rem] h-[1.9rem] m-1 p-1"
                onClick={signout}
                className="order-3"
              />
            ) : (
              <div className="flex">
                <AuthModalcopy isSignin={true} />
                <AuthModalcopy isSignin={false} />
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBare;

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
// import * as styles from "./styles/NavBarStyles"

// function NavBare() {
//   const [getWidth, setGetWidth] = useState(0);
//   const { data, loading } = useContext(AuthenticationContext);
//   const { signout } = useAuth();
//   const [menu, setMenu] = useState("");
//   const [hiddenFlex, setHiddenFlex] = useState("hidden");
//   const [displayContent, setDisplayContent] = useState(styles.handleStylesNavBar.closeSM);

//   useLayoutEffect(() => {
//     setGetWidth(window.innerWidth);
//   });

//   useEffect(() => {
//     displayContent;
//     menu;
//     hiddenFlex;
//   },);

//   return (
//     // <div className="fixed bg-white">
//     <nav
//       className={`${displayContent} ${styles.returnStylesNavBar.navMain}`}
//     >
//       <div className={`${styles.returnStylesNavBar.divOpenTable}`}>
//         <Link href="/" className={`${styles.returnStylesNavBar.linkOpenTable}`}>
//           <Image
//             src={TableIcon}
//             alt="Table Icon"
//             className={`${styles.returnStylesNavBar.imgOpenTable}`}
//           ></Image>
//           <p className={`${styles.returnStylesNavBar.pOpenTable}`}>
//             OpenTable
//           </p>
//         </Link>
//         <div className={`${!hiddenFlex} ${menu} order-2`}>
//           <div
//             className={`${styles.returnStylesNavBar.divHambMenu}`}
//             onClick={() => {
//               setHiddenFlex("flex");
//               setDisplayContent(styles.handleStylesNavBar.openSM);
//               setMenu("hidden");
//             }}
//           >
//             <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
//               |
//             </div>
//             <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
//               |
//             </div>
//             <div className={`${styles.returnStylesNavBar.divHambMenuItem}`}>
//               |
//             </div>
//           </div>
//         </div>
//         <div
//           className={`${hiddenFlex} ${styles.returnStylesNavBar.divHambMenuX}`}
//           onClick={() => {
//             setHiddenFlex("hidden");
//             setDisplayContent(styles.handleStylesNavBar.closeSM);
//             setMenu("");
//           }}
//         >
//           <p className={`${styles.returnStylesNavBar.pHambMenuX}`}>
//             X
//           </p>
//         </div>
//       </div>
//       <div
//         className={`${hiddenFlex} ${styles.returnStylesNavBar.divCredits}`}
//       >
//         <p className={`${styles.returnStylesNavBar.pDivCredits}`}>
//           Rafael Vendramini
//         </p>
//         <Link
//           href={exportUrls.github}
//           target="blank"
//           className={`${styles.returnStylesNavBar.imgDivCredits}`}
//         >
//           <Image src={GitIcon} alt="GitHubIcon Icon" />
//         </Link>
//         <Link
//           href={exportUrls.linkedin}
//           target="blank"
//           className={`${styles.returnStylesNavBar.imgDivCredits}`}
//         >
//           <Image src={LinkedInIcon} alt="LinkedIn Icon" />
//         </Link>
//       </div>
//       <div
//         className={`${hiddenFlex} ${styles.returnStylesNavBar.divSignInUp}`}
//       >
//         {loading ? null : (
//           <>
//             {data ? (
//               <button
//                 className={`${styles.returnStylesNavBar.buttonSignout}`}
//                 onClick={signout}
//               >
//                 Sign out
//               </button>
//             ) : (
//               <>
//                 <AuthModalcopy isSignin={true} isVisible={false} />
//                 <AuthModalcopy isSignin={false} isVisible={false} />
//               </>
//             )}
//           </>
//         )}
//       </div>
//     </nav>
//     // </div>
//   );
// }

// export default NavBare;
