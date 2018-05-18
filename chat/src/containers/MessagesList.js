import { connect } from "react-redux";
import MessagesListComponent from "../components/MessagesList";

export const MessageLists = connect(
  state => ({
    messages: state.messages
  }),
  {}
)(MessagesListComponent);
