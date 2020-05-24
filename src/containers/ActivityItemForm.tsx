import React, { FC, useEffect } from "react";
import { ActivityItem } from "../services/activityItems/models";
import { Tag } from "../services/tag/models";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import NewActivityItemForm from "../components/Form/NewActivityItemForm";
import { addItem, AddActivityItem } from "../services/activityItems/actions";
import { getTags } from "../services/tag/actions";
import { RootState } from "../services/rootReducer";

interface StateProps {
  activityItems: ActivityItem[];
  tags: Tag[];
}

interface DispatchProps {
  addItemStart: (item: AddActivityItem) => void;
  getTagsStart: () => void;
}

type EnhancedNewActivityFormProps = StateProps & DispatchProps;

const mapStateToProps = (state: RootState): StateProps => {
  const { activityItem, tag } = state;

  return {
    activityItems: activityItem.activityItems,
    tags: tag.tags,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      addItemStart: (item: AddActivityItem) => addItem.start(item),
      getTagsStart: () => getTags.start(),
    },
    dispatch
  );

const NewActivityItemFormContainer: FC<EnhancedNewActivityFormProps> = ({
  tags,
  addItemStart,
  getTagsStart,
}) => {
  useEffect(() => {
    getTagsStart();
  }, []);
  return <NewActivityItemForm addActivityItem={addItemStart} tags={tags} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewActivityItemFormContainer);
