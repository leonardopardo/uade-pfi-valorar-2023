import React, { useState } from "react";
import PageHeader from "components/common/PageHeader";
import { faqs as faqsData } from "./faqs";
import FaqBasicCard from "./FaqBasicCard";

const FaqBasic = () => {
  const [faqs] = useState(faqsData);

  return (
    <>
      <PageHeader
        title="FAQ"
        description="A continuación encontrará respuestas a las preguntas que más nos hacen <br class='d-none.d-sm-block' /> acerca de utilizar a Valorar.ar"
        className="mb-3"
      />
      <FaqBasicCard faqs={faqs} />
    </>
  );
};

export default FaqBasic;
