import { createChatBotMessage } from "react-chatbot-kit";
import GotItWidget from './widgets/gotIt';
import DateTimePicker from "react-datetime-picker";

const config = {
  initialMessages: [
    createChatBotMessage(`Do you want to reschedule?`),
  ],
  botName: 'Welcome to HappilyEver',
  widgets: [
    {
      widgetName: "DateTimePicker",
      widgetFunc: (props) => <DateTimePicker {...props} />,
      props: {},
    },
    {
      widgetName: "GotItWidget",
      widgetFunc: (props) => <GotItWidget {...props} />,
      props: {}
    }
  ]
};

export default config;