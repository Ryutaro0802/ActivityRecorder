import React, { FC, useEffect } from "react";
import { ActivityItem } from "../services/activityItems/models";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import NewActivityItemForm from "../components/Form/NewActivityItemForm";
import { ActivityItemState } from "../services/activityItems/reducers";
import { addItem, AddActivityItem } from "../services/activityItems/actions";

interface StateProps {
  activityItems: ActivityItem[];
}

interface DispatchProps {
  addItemStart: (item: AddActivityItem) => void;
}

type EnhancedNewActivityFormProps = StateProps & DispatchProps;

const mapStateToProps = (state: ActivityItemState): StateProps => ({
  activityItems: state.activityItems,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      addItemStart: (item: AddActivityItem) => addItem.start(item),
    },
    dispatch
  );

const NewActivityItemFormContainer: FC<EnhancedNewActivityFormProps> = ({
  addItemStart,
}) => {
  return <NewActivityItemForm addActivityItem={addItemStart} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewActivityItemFormContainer);
