import "./SecondMain.css"
import Button from "react-bootstrap/Button"
import Signup from "../../ui/Signup"

export default function SecondMain() {
    return(
        <div className="secondMain" id="Main">
            <div className="container">
                <div className="secondMain-title">
                    <h1 className="title">No.1 Dental Virtual Study Club</h1>
                    <p className="sub-title">Courses which will make you and your team stronger and grow bigger</p>
                </div>
                <div className="courses">
                    <div className="fullarch">
                        <h2 className="course-title">Full Arch</h2>
                        <p className="course-explained">Schedule events in advance & build excitement with a countdown overlay.</p>
                    </div>
                    <div className="marketing">
                        <h2 className="course-title">Marketing</h2>
                        <p className="course-explained">Schedule events in advance & build excitement with a countdown overlay.</p>
                    </div>
                    <div className="cosmetic">
                        <h2 className="course-title">Cosmetic</h2>
                        <p className="course-explained">Schedule events in advance & build excitement with a countdown overlay.</p>
                    </div>
                    <div className="digital-dental">
                        <h2 className="course-title">Digital Dental</h2>
                        <p className="course-explained">Schedule events in advance & build excitement with a countdown overlay.</p>
                    </div>
                </div>
                <div className="apply-now">
                    <Signup className="signup" />
                </div>
            </div>
        </div>
    )
}