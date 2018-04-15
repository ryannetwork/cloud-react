import { connect } from 'react-redux';
import Page from "./page";

const mapStateToProps = state => ({
  state: state.cognito.state,
  user: state.cognito.user,
  attributes: state.cognito.attributes,
});

const PageContainer = connect(mapStateToProps, null)(Page);
export default PageContainer;
