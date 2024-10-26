import React from "react";
import { CONTACT } from "../constants";
import MailToButton from "./MailTo";
import PhoneLink from "./PhoneLink";
import ResumeDownloadLink from "./ResumeDownloadLink";

import { motion } from "framer-motion";

function Contacts() {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <PhoneLink />
        </motion.div>

        <br />

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <MailToButton />
        </motion.div>
        <br />
        <ResumeDownloadLink />
      </div>
    </div>
  );
}

export default Contacts;
