import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const CourseListRow = ({ course, deleteCourse }) => {
    const deleteCourseClicked = () => {
        deleteCourse(course.id);
    };

    return (
        <tr>
          <td><a onClick={deleteCourseClicked} href="#">delete</a></td>
          <td><a href={course.watchHref} target="_blank">Watch</a></td>
          <td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
          <td>{course.authorId}</td>
          <td>{course.category}</td>
          <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;