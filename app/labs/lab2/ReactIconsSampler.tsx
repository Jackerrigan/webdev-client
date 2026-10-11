import "@/app/labs/lab2/tailwind/utilities.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { FaBookBible } from "react-icons/fa6";
import { Gi3dGlasses } from "react-icons/gi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineSchool } from "react-icons/md";
import { RxArrowBottomRight } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";

export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        <Gi3dGlasses />
        <RxArrowBottomRight />
        <MdOutlineSchool className="text-4xl text-blue-600" />
        <HiOutlineAcademicCap className="text-4xl text-blue-600" />
      </div>
    </div>
  );
}
