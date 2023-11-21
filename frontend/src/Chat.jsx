import { Send } from "@mui/icons-material";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./components/look.css";
import "./index.css";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
    }
  };
  const Styles = {
    you: {
      messageContent: {
        justifyContent: "flex-start",
 
      },
      messageMeta: {
        justifyContent: "flex-start",
        marginLeft: "5px",
    
      },
    },

    other: {
      messageContent: {

        justifyContent: "self-end",
        backgroundColor: "lightblue",
        alignSelf: 'right',
        textAlign:'right'

      },
      messageMeta: {
        justifyContent: "flex-end",
        marginRight: "5px",
        alignSelf: 'right',
        textAlign:'right'
   
      },
    },
  };

  useEffect(() => {
    socket.on("receiver_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    <div>
      <div className="body">
        <Box
          sx={{
            height: "70vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Paper>
            <Typography
              variant="h4"
              style={{
                color: "rgb(25, 119, 202)",
                borderRadius: "8px",
              }}
            >
              Online Chats
            </Typography>
          </Paper>
          <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
            {messageList.map((messageContent) => {
              const messageStyle =
                messageContent.author === username ? Styles.you : Styles.other;
              return (
                <div className="message" >
                  <div>
                    <Paper
                      className="messageContent"
                      style={messageStyle.messageContent}
                    >
                      <Typography variant="h5">
                        {messageContent.message}
                      </Typography>
                    </Paper>
                    <div
                      className="message-meta"
                      style={messageStyle.messageMeta}
                    >
                      <Typography variant="p" style={{ paddingRight: "5%" }}>
                        {messageContent.author}
                      </Typography>
                      <Typography variant="p">{messageContent.time}</Typography>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              );
            })}
          </Box>
        </Box>
      </div>
      <div className="footer">
        <TextField
          type="text"
          placeholder="hey... "
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
        />
        <Button onClick={sendMessage}>
          <Send />
        </Button>
      </div>
    </div>
  );
}

export default Chat;
