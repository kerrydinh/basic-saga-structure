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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class HomePage extends PureComponent {
  state = {};
  notify = () => {
    console.log('123');
    toast.success("Wow so easy !", {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }
  render() {
    return (
      <>
        <div>
          <H1>Home Page</H1>
          <Button text="Normal Button" />
          <PrimaryButton onClick={this.props.loadData} text="Load Data" />
          <SecondaryButton onClick={this.notify} text="Toast Message" />
        </div>
        <Trans i18nKey="description.part1" />
        <Trans i18nKey="description.part2" />
        <Trans i18nKey="title1">
          345634563456
        </Trans>
        {
          this.props.exampleData.length &&
          (
            <table style={{ border: "1px solid #ccc" }}>
              <thead>
                <tr>
                  <th>UserId</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody >
                {this.props.exampleData.map((item, index) =>
                  <tr key={index.toString()}>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                  </tr>
                )}
              </tbody>
            </table>
          )
        }
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
