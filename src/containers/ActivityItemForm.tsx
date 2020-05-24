import React, { FC, useEffect } from "react";
import { ActivityItem } from "../services/activityItems/models";
import { Tag } from "../services/tag/models";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import NewActivityItemForm from "../components/Form/NewActivityItemForm";
import { ActivityItemState } from "../services/activityItems/reducers";
import { TagState } from "../services/tag/reducers";
import { addItem, AddActivityItem } from "../services/activityItems/actions";
import { getTags } from "../services/tag/actions";

interface StateProps {
  activityItems: ActivityItem[];
  tags: Tag[];
}

interface DispatchProps {
  addItemStart: (item: AddActivityItem) => void;
  getTagsStart: () => void;
}

type EnhancedNewActivityFormProps = StateProps & DispatchProps;

const mapStateToProps = (state: ActivityItemState & TagState): StateProps => ({
  activityItems: state.activityItems,
  tags: state.tags,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      addItemStart: (item: AddActivityItem) => addItem.start(item),
      getTagsStart: () => getTags.start(),
    },
    dispatch
  );

const NewActivityItemFormContainer: FC<EnhancedNewActivityFormProps> = ({
  addItemStart,
  getTagsStart,
}) => {
  useEffect(() => {
    getTagsStart();
  }, []);
  return <NewActivityItemForm addActivityItem={addItemStart} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewActivityItemFormContainer);
