import React from "react";
import weblogo from "/images/web-logo.svg";
import mailogo from "/images/mail-logo.svg";
import qrcode from "/images/qr.svg";
import { fadeIn, slideIn } from "../utils/motion";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="section" id="section13">
      <div
        className="mx-auto px-1 md:px-2 py-4 pt-8"
        style={{ userSelect: "text" }}
      >
        <section className="block mb-8 ">
          <motion.h2
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="text-center uppercase tracking-widest text-[20px]"
          >
            Contact
          </motion.h2>
        </section>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 min-h-screen relative z-10">
          <section className="flex lg:min-h-[inherit] flex-col justify-between gap-16 col-span-2">
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="tracking-widest text-[12px] "
            >
              <h4>ENQUIRIES</h4>
              <a
                href="mailto:hello@zimogroup.org?subject=Hello - ZIMO GROUP"
                className="mt-1 link"
              >
                hello@zimogroup.org
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className=""
            >
              <img
                src="/images/zimo-group-logo.png"
                className="max-h-[540px] w-auto block mx-auto"
                alt=""
              />
              <img
                src="/images/zimo-logo-2.png"
                className="max-h-[20px] block mx-auto mt-10"
                alt=""
              />
              <div className="flex flex-col gap-1 text-[10px] text-center mt-2 tracking-widest">
                <p>ZIMO GROUP LIMITED</p>
                <p>
                  71 - 75 &nbsp;&nbsp; SHELTON STREET &nbsp;&nbsp; COVENT
                  GARDEN&nbsp; &nbsp; LONDON &nbsp;&nbsp; WC2H 9JQ &nbsp;&nbsp;
                  ENGLAND &nbsp;&nbsp; UNITED KINGDOM
                </p>
                <div className="flex items-center gap-4 justify-center">
                  <div className="flex items-center gap-2">
                    <img src={weblogo} alt="" />
                    <a href="#" className="link">
                      ZIMOGROUP.ORG
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={mailogo} alt="" />
                    <a
                      className="link"
                      href="mailto:hello@zimogroup.org?subject=Hello - ZIMO GROUP"
                    >
                      HELLO@ZIMOGROUP.ORG
                    </a>
                  </div>
                </div>
                <p>REGISTERED IN ENGLAND &nbsp;&nbsp; 14383397</p>
              </div>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.1)}
              whileInView="show"
              exit="hidden"
              className="tracking-widest text-[11px]"
            >
              ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED.
              <br />
              The registered office is: 71-75 Shelton Street, Covent Garden,
              London, WC2H 9JQ, England, United Kingdom.
            </motion.p>
          </section>
          <section className="lg:block ">
            <motion.h2
              variants={fadeIn("down", 0.1)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="text-center uppercase tracking-widest text-[20px]"
            >
              Contact
            </motion.h2>
          </section>
          <motion.section
          variants={slideIn ("right", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
           className="col-span-2 flex items-start md:items-center justify-start md:justify-around gap-8 lg:gap-4 xl:gap-2 flex-wrap md:flex-nowrap ">
            <div className="flex flex-col gap-4">
              <div className="text-[12px]">
                <h4 className="tracking-widest uppercase">REAL ESTATE</h4>
                <a
                  href="mailto:realestate@zimogroup.org?subject=Real Estate Enquiry - ZIMO GROUP"
                  className="tracking-wider link mt-1"
                >
                  realestate@zimogroup.org
                </a>
              </div>
              <div className="text-[12px]">
                <h4 className="tracking-widest uppercase">CARS</h4>
                <a
                  href="mailto:cars@zimogroup.org?subject=Cars Enquiry - ZIMO GRoup"
                  className="tracking-wider link mt-1"
                >
                  cars@zimogroup.org
                </a>
              </div>
              <div className="text-[12px]">
                <h4 className="tracking-widest uppercase">YACHTS</h4>
                <a
                  href="mailto:yachts@zimogroup.org?subject=Yachts Enquiry - ZIMO GROUP"
                  className="tracking-wider link mt-1"
                >
                  yachts@zimogroup.org
                </a>
              </div>
              <div className="text-[12px]">
                <h4 className="tracking-widest uppercase">WATCHES</h4>
                <a
                  href="mailto:watches@zimogroup.org?subject=Watches Enquiry - ZIMO GROUP"
                  className="tracking-wider link mt-1"
                >
                  watches@zimogroup.org
                </a>
              </div>
              <div className="text-[12px]">
                <h4 className="tracking-widest uppercase">JETS</h4>
                <a
                  href="mailto:jets@zimogroup.org?subject=Jets Enquiry - ZIMO GROUP"
                  className="tracking-wider link mt-1"
                >
                  jets@zimogroup.org
                </a>
              </div>
              <div className="text-[12px]">
                <h4 className="tracking-widest uppercase">PRIVATE ISLANDS</h4>
                <a
                  href="mailto:privateislands@zimogroup.org?subject=Private Islands Enquiry - ZIMO GROUP"
                  className="tracking-wider link mt-1"
                >
                  privateislands@zimogroup.org
                </a>
              </div>
              <div className="text-[12px]">
                <h4 className="tracking-widest uppercase">DIAMONDS</h4>
                <a
                  href="mailto:diamonds@zimogroup.org?subject=Diamonds Enquiry - ZIMO GROUP"
                  className="tracking-wider link mt-1"
                >
                  diamonds@zimogroup.org
                </a>
              </div>
              <div className="text-[12px]">
                <h4 className="tracking-widest uppercase">TRAVEL THE WORLD</h4>
                <a
                  href="mailto:ttw@zimogroup.org?subject=Travel The World Enquiry - ZIMO GROUP"
                  className="tracking-wider link mt-1"
                >
                  ttw@zimogroup.org
                </a>
              </div>
            </div>
            <section className="flex flex-col items-start gap-3">
              <div className="flex flex-col gap-4">
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">
                    PROPERTY PROFESSIONALS / AGENTS
                  </h4>
                  <a
                    href="mailto:agent@zimogroup.org?subject=Agent Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    agent@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">ADVERTISING</h4>
                  <a
                    href="mailto:advertising@zimogroup.org?subject=Advertising Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    advertising@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">SPONSORSHIP</h4>
                  <a
                    href="mailto:sponsor@zimogroup.org?subject=Sponsor Ship Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    sponsor@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">PARTNERS</h4>
                  <a
                    href="mailto:partners@zimogroup.org?subject=Partners Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    partners@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">LEGAL</h4>
                  <a
                    href="mailto:legal@zimogroup.org?subject=Legal Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    legal@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">CORPORATE</h4>
                  <a
                    href="mailto:corporate@zimogroup.org?subject=Corporate Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    corporate@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">MARKETING</h4>
                  <a
                    href="mailto:marketing@zimogroup.org?subject=Marketing Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    marketing@zimogroup.org
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <h4 className="text-[16px] uppercase tracking-widest">Press</h4>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">UNITED KINGDOM</h4>
                  <a
                    href="mailto:press-uk@zimogroup.org?subject=Press United Kingdom Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    press-uk@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">EUROPE</h4>
                  <a
                    href="mailto:press-eu@zimogroup.org?subject=Press Europe Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    press-eu@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">NORTH AMERICA</h4>
                  <a
                    href="mailto:press-na@zimogroup.org?subject=Press North America Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    press-na@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">MIDDLE EAST</h4>
                  <a
                    href="mailto:press-me@zimogroup.org?subject=Press Middle East Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    press-me@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">ASIA/AUSTRALIA</h4>
                  <a
                    href="mailto:press-apac@zimogroup.org?subject=Press Asia/Australia Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    press-apac@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">AFRICA</h4>
                  <a
                    href="mailto:press-af@zimogroup.org?subject=Press Africa Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    press-af@zimogroup.org
                  </a>
                </div>
                <div className="text-[12px]">
                  <h4 className="tracking-widest uppercase">CHINA/HONG KONG</h4>
                  <a
                    href="mailto:press-ch@zimogroup.org?subject=Press China/Hong kong Enquiry - ZIMO GROUP"
                    className="tracking-wider link mt-1"
                  >
                    press-ch@zimogroup.org
                  </a>
                </div>
              </div>
            </section>
            <div className="self-end min-h-[54px] min-w-[54px]">
              <img src={qrcode} className="h-[54px] w-[54px]" alt="" />
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
