import "./Fourthmain.css";
import course1 from "../../../img/course-content1.svg"
import course2 from "../../../img/course-content2.svg"
import course3 from "../../../img/course-content3.svg"

export default function FourthMain(){
    return(
        <div className="fourthmain">
        <div className="container">
            <div className="contents-prev">
                <h2 className="content-title">Contents Preview</h2>
            </div>
                <div className="contents-vid">
                    <img src = {course1} />
                    <img src = {course2} />
                    <img src = {course3} />
                </div>
        </div>
    </div>
    )

}