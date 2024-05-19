import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Is the rate already with commission?",
      answer: "We do not charge a commission on the exchange",
    },
    {
      question: "What AML are you sending cryptocurrency with?",
      answer:
        "We send completely clean funds. You can make deposits to the exchanges immediately.",
    },
    {
      question: "How do you get a percentage of other people's deals?",
      answer: "We get a small commission for facilitating the exchange.",
    },
    {
      question: "Does the exchange happen automatically?",
      answer: "Yes, the exchange process is fully automated.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="cont_faq w-3/6 mx-auto mt-56 pb-20 max-w-7xl">
      <div className="mb-10 flex justify-between items-center">
        <div>
          <h1 className="text-white font-cold text-3xl mb-3">
            Answers to frequently asked questions
          </h1>
          <p className="text-white/40">
            Any questions? Contact our support, they will be happy to help you.
          </p>
        </div>
        <a
          href="https://t.me/qdyyys"
          className="px-5 py-2 rounded-lg bg-customDarkBlue active:scale-95 transition-all"
        >
          Support
        </a>
      </div>
      <div className="text-white flex flex-col gap-5" id="FAQ">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-customBlue/40 border rounded-md px-5 py-2 font-bold text-xl flex justify-between cursor-pointer hover:border-customBlue transition-all items-center"
            onClick={() => handleToggle(index)}
          >
            <div>
              <p>{item.question}</p>
              {openIndex === index && (
                <p className="font-light">{item.answer}</p>
              )}
            </div>
            <span className="text-white/40">
              {openIndex === index ? "-" : "+"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
