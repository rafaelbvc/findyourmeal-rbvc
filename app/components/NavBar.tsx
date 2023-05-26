"use client";

import Link from "next/link";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import GitIcon from "../../public/icons/icons8-github-192.svg";
import LinkedInIcon from "../../public/icons/icons8-linkedin-128.svg";
import TableIcon from "../../public/icons/tableMain.svg";
import { exportUrls } from "../../utils/exportUrls";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import AuthModal from "./authModal";
import * as styles from "./styles/NavBarStyle"

function NavBare() {
  const [getWidth, setGetWidth] = useState(0);
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();
  const [menu, setMenu] = useState("");
  const [hiddenFlex, setHiddenFlex] = useState("hidden");
  const [displayContent, setDisplayContent] = useState(styles.handleStyles.closeSM);

  useLayoutEffect(() => {
    setGetWidth(window.innerWidth);
  });

  useEffect(() => {
    displayContent;
    menu;
    hiddenFlex;
  },);

  return (
    // <div className="fixed bg-white">
    <nav
      className={`${displayContent} ${styles.returnStyles.navMain}`}
    >
      <div className={`${styles.returnStyles.divOpenTable}`}>
        <Link href="/" className={`${styles.returnStyles.linkOpenTable}`}>
          <Image
            src={TableIcon}
            alt="Table Icon"
            className={`${styles.returnStyles.imgOpenTable}`}
          ></Image>
          <p className={`${styles.returnStyles.pOpenTable}`}>
            OpenTable
          </p>
        </Link>
        <div className={`${!hiddenFlex} ${menu} order-2`}>
          <div
            className={`${styles.returnStyles.divHambMenu}`}
            onClick={() => {
              setHiddenFlex("flex");
              setDisplayContent(styles.handleStyles.openSM);
              setMenu("hidden");
            }}
          >
            <div className={`${styles.returnStyles.divHambMenuItem}`}>
              |
            </div>
            <div className={`${styles.returnStyles.divHambMenuItem}`}>
              |
            </div>
            <div className={`${styles.returnStyles.divHambMenuItem}`}>
              |
            </div>
          </div>
        </div>
        <div
          className={`${hiddenFlex} ${styles.returnStyles.divHambMenuX}`}
          onClick={() => {
            setHiddenFlex("hidden");
            setDisplayContent(styles.handleStyles.closeSM);
            setMenu("");
          }}
        >
          <p className={`${styles.returnStyles.pHambMenuX}`}>
            X
          </p>
        </div>
      </div>
      <div
        className={`${hiddenFlex} ${styles.returnStyles.divCredits}`}
      >
        <p className={`${styles.returnStyles.pDivCredits}`}>
          Rafael Vendramini
        </p>
        <Link
          href={exportUrls.github}
          target="blank"
          className={`${styles.returnStyles.imgDivCredits}`}
        >
          <Image src={GitIcon} alt="GitHubIcon Icon" />
        </Link>
        <Link
          href={exportUrls.linkedin}
          target="blank"
          className={`${styles.returnStyles.imgDivCredits}`}
        >
          <Image src={LinkedInIcon} alt="LinkedIn Icon" />
        </Link>
      </div>
      <div
        className={`${hiddenFlex} ${styles.returnStyles.divSignInUp}`}
      >
        {loading ? null : (
          <>
            {data ? (
              <button
                className={`${styles.returnStyles.buttonSignout}`}
                onClick={signout}
              >
                Sign out
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}       
          </>
        )}
      </div>
    </nav>
    // </div>
  );
}

export default NavBare;
