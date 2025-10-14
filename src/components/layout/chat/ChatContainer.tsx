"use client";

import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import { useEffect } from "react";
import styles from "./chatContainer.module.css";

const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL!;

export default function ChatContainer() {
  useEffect(() => {
    createChat({
      webhookUrl: CHAT_URL,
      // webhookConfig: {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // },
      target: "#n8n-chat",
      mode: "window",
      showWelcomeScreen: false,
      initialMessages: [
        "Hi there! 👋",
        "I'm Rachael, your Bella Vista Assistant. I can help with reservations, menu questions, and more!",
      ],
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      enableStreaming: true,
      defaultLanguage: "en",
      i18n: {
        en: {
          title: "Hi, I’m Rachael! 👋",
          subtitle: "Start a chat. I'm here to help you 24/7.",
          footer: "",
          getStarted: "New Conversation",
          inputPlaceholder: "Ask me anything about Bella Vista...",
          closeButtonTooltip: "Close chat",
        },
      },
      metadata: {
        source: "nextjs-widget",
      },
    });
  }, []);

  return (
    <div
      style={styles}
      className="fixed right-6 bottom-6 z-50 flex flex-col-reverse items-end gap-4"
    >
      <div id="n8n-chat" className="h-[600px] w-[400px]"></div>
    </div>
  );
}
