import React, {PropTypes} from 'react';
import { connect } from "react-redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course });
    }

    onClickSave() {
        this.props.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input 
                    placeholder="Course Title"
                    className="form-control"
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <br />
                <input className="btn btn-primary"
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createCourse: (course) => {
            dispatch(courseActions.createCourse(course));
        } 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);