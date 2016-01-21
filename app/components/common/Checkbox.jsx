import React from 'react'
import ReactDOM from 'react-dom'

class Checkbox extends React.Component {
    getInputDOMNode() {
        return ReactDOM.findDOMNode(this.refs.input);
    }
    getChecked() {
        return this.getInputDOMNode().checked;
    }
    setChecked(checked){
        this.getInputDOMNode().checked = checked;
    }
    renderLabel(){
        var input = this.renderInput();
        return (
            <label>
                {input}
                {' '}
                {this.props.label}
            </label>
        );
    }
    renderInput(){
        return [
            <input {...this.props} type="checkbox" name={this.props.name} ref="input" key="input" />,
            <span key={'checkbox'+this.props.name} className="checkbox-material">
                <span className="ripple" />
                <span className="check" />
            </span>
        ];
    }
    render(){
        var className = 'checkbox';
        if (this.props.groupClassName) {
            className += ' ' + this.props.groupClassName;
        }
        return (
            <div {...this.props} className={className}>
                {this.renderLabel()}
            </div>
        );
    }
}

export default Checkbox