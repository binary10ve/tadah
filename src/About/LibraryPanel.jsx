import React from 'react';

class LibraryPanel extends React.Component {

    render(){
        return (
            <div>
                <div className="post-quote">
                    <div className="post-heading">
                        <h4>{this.props.name}({this.props.version})</h4>
                        {this.props.children} &nbsp;&nbsp;
                        <a href={this.props.link} target="_blank">Read More..</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default LibraryPanel;