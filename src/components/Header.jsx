import React, {Component} from "react";

class Header extends Component{
    render() {


        this.style = {
            
            height: "50px",
            background: "grey"
            
        }

        return (
            <nav class="container" style={this.style}>
                <h1>Test</h1>
            </nav>
        );
    }


}

export default Header