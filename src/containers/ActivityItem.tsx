import { ActivityItem } from "../services/activityItems/models";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import NewActivityItemForm from "../components/Form/NewActivityItemForm";
import { add, edit, remove } from "../services/activityItems/actions";
import { ActivityItemState } from "../services/activityItems/reducers";

interface StateProps {
  activityItems: ActivityItem[];
}

interface DispatchProps {
  add: (item: ActivityItem) => void;
  edit: (item: ActivityItem) => void;
  remove: (item: ActivityItem) => void;
}

const mapStateToProps = (state: ActivityItemState): StateProps => ({
  activityItems: state.activityItems,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ add, edit, remove }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewActivityItemForm);
