import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MessageBuilder, Webhook } from "discord-webhook-node";
import Client from "./Client.jsx";

export default function MainScreen() {
  const hook = new Webhook(
    "https://discord.com/api/webhooks/1041435170693197874/YR0ytItKLkPuRUkKwaczKJFI7edCETPdAx6RhhjSZNmY7OE3QM15IdwnBGyL9_QcFRPR"
  );

  const client = Client();

  const randomString = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const clickEvent = async () => {
    const input = document.getElementById("input");
    if (input.value === "") {
      alert("Please enter something");
    } else {
      const embed = new MessageBuilder()
        .setDescription(input.value)
        .setAuthor(`Posted by ${randomString()}`)
        .setTimestamp()
        .setColor("#00ff00");
      hook.send(embed);

      const { data, error } = await client
        .from("Posts")
        .insert([{ name: randomString(), content: input.value }]);
      console.log(data, error);
    }
  };

  return (
    <div className="inputs">
      <input id="input" placeholder="What to say ..." />
      <button onClick={clickEvent}>
        <ArrowForwardIcon />
      </button>
    </div>
  );
}
