import React from "react";
import "./whatchatgpt.css";
import Feat from "../../components/feat/Feat";

const Whatchatgpt = () => {
  return (
    <div className="gpt3__whatgpt3 section_margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feat
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient_text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feat
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feat
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feat
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default Whatchatgpt;
