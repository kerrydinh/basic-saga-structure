import React, { Component } from 'react';
import H1 from '../../components/H1';
import { Button, PrimaryButton, SecondaryButton} from '../../components/Button';
import { HOME_ACTION_TYPE } from './action';
import { updateData } from './action';
import { getExampleData } from './selector';
import { connect } from 'react-redux';

class HomePage extends Component {
    state = {}

    render() {
        return (
            <div>
                <H1>Testing</H1>
                <Button text="Click Here" ></Button>
                <Button text="Click Here" ></Button>
                <PrimaryButton onClick={this.props.updateData} text="Go Go Go"></PrimaryButton>
                <SecondaryButton text="Go Go Go"></SecondaryButton>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    const data = getExampleData(state);
    return {
        exampleData: data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateData: (data) => dispatch(updateData(data))
    }
}
export default connect(
    mapStatetoProps,
    mapDispatchToProps
)(HomePage);