import { ActivityItem } from "../services/activityItems/models";
import { connect } from "react-redux";
import ActivityItemList from "../components/List/ActivityItemList";
import { ActivityItemState } from "../services/activityItems/reducers";

interface StateProps {
  activityItems: ActivityItem[];
}

const mapStateToProps = (state: ActivityItemState): StateProps => ({
  activityItems: state.activityItems,
});

export default connect(mapStateToProps)(ActivityItemList);
