import Container from "@components/container";
import ThemeSwitch from "@components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        Made by{" "}
        {/*  // ** 🙏  Can I ask you a favor? 🙏 **
            // Please do not remove the below link.
           // It helps us to grow & continue our work. Thank you.
          // OR contact hello@web3templates.com for commercial license.  */}
        <a
          href="https://anas-aqeel.netlify.app/"
          rel="noopener"
          target="_blank">
          Anas-Aqeel
        </a>
        {/* Do not remove above link */}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="mt-5">
        </div>
        <ThemeSwitch />
      </div>
      <Backlink />
    </Container>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://https://coding-hub.vercel.app/"
      target="_blank"
      rel="noopener"
      className="fixed flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center right-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300">
      <span>coding~hub</span>
    </a>
  );
};
