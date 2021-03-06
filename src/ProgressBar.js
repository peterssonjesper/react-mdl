import React, { PropTypes } from 'react';
import classNames from 'classnames';
import mdlUpgrade from './utils/mdlUpgrade';

class ProgressBar extends React.Component {
    static propTypes = {
        buffer: PropTypes.number,
        className: PropTypes.string,
        indeterminate: PropTypes.bool,
        progress: PropTypes.number
    }

    componentDidMount(){
        this.setProgress(this.props.progress);
        this.setBuffer(this.props.buffer);
    }

    componentDidUpdate() {
        this.setProgress(this.props.progress);
        this.setBuffer(this.props.buffer);
    }

    setProgress(progress) {
        if(!this.props.indeterminate && progress !== undefined) {
            React.findDOMNode(this).MaterialProgress.setProgress(progress);
        }
    }

    setBuffer(buffer) {
        if(buffer !== undefined) {
            React.findDOMNode(this).MaterialProgress.setBuffer(buffer);
        }
    }

    render() {
        var { buffer, className, indeterminate, progress, ...otherProps } = this.props;

        var classes = classNames('mdl-progress mdl-js-progress', {
            'mdl-progress__indeterminate': indeterminate
        }, className);

        return <div className={classes} {...otherProps}></div>;
    }
}

export default mdlUpgrade(ProgressBar);
