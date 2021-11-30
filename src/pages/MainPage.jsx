import React from "react";
import TheHeader from "components/TheHeader";
import MainContainer from "components/common/MainContainer";

import Heading1 from "components/common/Heading1.js";

function MainPage() {
  return (
    <main>
      <TheHeader />
      <MainContainer>
        <div claaName="intro">
          <Heading1>감성소프트 소개문구</Heading1>
        </div>
        <section className="shortcut">
          <div className="Companyshort"></div>
        </section>
      </MainContainer>
    </main>
  );
}

export default MainPage;
