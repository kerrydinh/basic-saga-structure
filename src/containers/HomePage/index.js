import React, { PureComponent } from "react";
import H1 from "../../components/H1";
import {
  Button,
  PrimaryButton,
  SecondaryButton
} from "../../components/Button";
import { loadData } from "./action";
import { getExampleData } from "./selector";
import { connect } from "react-redux";
import { Trans } from "react-i18next";
class HomePage extends PureComponent {
  state = {};

  render() {
    return (
      <>
        <div>
          <H1>Home Page</H1>
          <Button text="Normal Button" />
          <PrimaryButton onClick={this.props.loadData} text="Primary Button" />
          <SecondaryButton text="Secondary Button" />
        </div>
        <Trans i18nKey="description.part1" />
        <Trans i18nKey="description.part2" />
        <Trans i18nKey="title1">
          345634563456
        </Trans>
        {this.props.exampleData.description}
      </>
    );
  }
}

const mapStatetoProps = state => {
  const data = getExampleData(state);
  return {
    exampleData: data
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadData: data => dispatch(loadData(data))
  };
}
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(HomePage);
