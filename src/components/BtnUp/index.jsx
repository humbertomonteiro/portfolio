import "./btnUp.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function BtnUp() {
  function upPage() {
    window.scroll(0, 0);
  }

  return (
    <div onClick={upPage} className="btn-up">
      <BsFillArrowUpCircleFill />
    </div>
  );
}
