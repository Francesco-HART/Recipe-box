import React, {Component, Fragment} from 'react'

class Admin extends Component {
    render() {
        return (
            <footer>
                <button onClick={this.props.chargeRecettes}> Remplir </button>
            </footer>
        );
    }
}

export default Admin;