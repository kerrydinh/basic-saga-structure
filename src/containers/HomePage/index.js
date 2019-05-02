import React, { PureComponent } from 'react';
import H1 from '../../components/H1';
import { Button, PrimaryButton, SecondaryButton} from '../../components/Button';
import { HOME_ACTION_TYPE } from './action';
import { updateData } from './action';
import { getExampleData } from './selector';
import { connect } from 'react-redux';

class HomePage extends PureComponent {
    state = {}

    render() {
        return (
            <div>
                <H1>Home Page</H1>
                <Button text="Normal Button" ></Button>
                <PrimaryButton onClick={this.props.updateData} text="Primary Button"></PrimaryButton>
                <SecondaryButton text="Secondary Button"></SecondaryButton>
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