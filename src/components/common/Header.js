import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading, numberOfCourses}) => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}            
            <Link to="/courses" activeClassName="active">Courses ({numberOfCourses})</Link>
            {" | "}            
            <Link to="/authors" activeClassName="active">Authors</Link>
            {loading && <LoadingDots interval={100} dots={20}/>}
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired,
    numberOfCourses: PropTypes.number.isRequired
};

export default Header;
