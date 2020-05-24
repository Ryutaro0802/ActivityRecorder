import React, { FC, useEffect } from "react";
import { ActivityItem } from "../services/activityItems/models";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ActivityItemList from "../components/List/ActivityItemList";
import { ActivityItemState } from "../services/activityItems/reducers";
import { getItems } from "../services/activityItems/actions";

interface StateProps {
  activityItems: ActivityItem[];
}

interface DispatchProps {
  getItemsStart: () => void;
}

type EnhancedActivityItemListProps = StateProps & DispatchProps;

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getItemsStart: () => getItems.start(),
    },
    dispatch
  );

const mapStateToProps = (state: ActivityItemState): StateProps => {
  const { activityItems } = state.activityItem;
  console.log("activityItemssssss", activityItems);
  return {
    activityItems: state.activityItem.activityItems,
  };
};

const ActivityItemListContainer: FC<EnhancedActivityItemListProps> = ({
  activityItems,
  getItemsStart,
}) => {
  useEffect(() => {
    getItemsStart();
  }, []);
  return <ActivityItemList activityItems={activityItems} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityItemListContainer);
