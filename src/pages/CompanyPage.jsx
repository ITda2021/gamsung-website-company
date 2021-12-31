import React from "react";

import TheHeader from "components/TheHeader";
import AboutSection from "components/company/About.js";
import CeoSection from "components/company/Ceo.js";
import HistorySection from "components/company/History.js";
import CooperationSection from "components/company/Cooperation.js";
import ContactSection from "components/company/Contact.js";
import TheFooter from "components/TheFooter";

function CompanyPage() {
  return (
    <main>
      <TheHeader selectedNavItem={"company"} />
      <AboutSection />
      <CeoSection />
      <HistorySection />
      <CooperationSection />
      <ContactSection />
      <TheFooter />
    </main>
  );
}

export default CompanyPage;
