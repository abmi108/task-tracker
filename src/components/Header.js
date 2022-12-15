import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onToggle, showAdd }) => {

    // const onClick = () => {
    //     console.log("click");
    // };

    return (
        <header className="header">
            <h1> {title} </h1>
            {showAdd ? 
                <Button color="#fd5c63" text="Close" onClick={onToggle}/> :
                <Button color="#00A86B" text="Add" onClick={onToggle}/>
            }
            
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker'
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;