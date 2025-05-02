import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Technical Skills</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Site Supervision & Execution </Chip>
            <Chip>AutoCAD Drafting & Plan Interpretation </Chip>
            <Chip>Quantity Surveying & Estimation (BOQ Preparation) </Chip>
            <Chip>Project Scheduling using MS Excel</Chip>
            <Chip>Bar Bending Schedule (BBS ) </Chip>
            <Chip>Basic Surveying Tools (Dumpy Level, Measuring Tape)</Chip>
            <Chip>Familiarity with IS Codes and Building Standards </Chip>
            <Chip>Billing & BOQ Preparation</Chip>
            
          </div>
        </div>
      </Reveal>
      {/* <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use for fun</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Rust</Chip>
            <Chip>Tailwind</Chip>
            <Chip>Java</Chip>
            <Chip>Spring</Chip>
            <Chip>Figma</Chip>
            <Chip>Whimsical</Chip>
            <Chip>Planetscale</Chip>
            <Chip>GraphQL</Chip>
            <Chip>Python</Chip>
            <Chip>FastAPI</Chip>
          </div>
        </div>
      </Reveal> */}
    </div>
  );
};
