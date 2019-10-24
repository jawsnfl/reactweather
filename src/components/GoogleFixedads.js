import React, {Component} from 'react';

class GoogleFixedads extends Component{
    componentDidMount(){
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render(){
        return(
            <ins className="adsbygoogle"
                style={this.props.style}
                data-ad-client="">
            </ins>
        );
    }
}
export default GoogleFixedads;