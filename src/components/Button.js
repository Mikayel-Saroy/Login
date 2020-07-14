import React, {Component} from "react";
import classes from './Button.module.css';

class Button extends Component {
    render(props) {
        return (
            <button disabled={this.props.isDisabled} onClick={this.props.func} className={classes.signIn}>Sign
                in</button>
        )
    }
}

export default Button;