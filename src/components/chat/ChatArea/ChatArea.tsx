'use client'

import ChatInput from './ChatInput'
import MessageArea from './MessageArea'
const ChatArea = () => {
  return (
    <main className="relative m-1.5 flex flex-grow flex-col rounded-xl border border-white/5 bg-background/70 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur">
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_15%_10%,rgba(94,234,212,0.12),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(234,35,35,0.14),transparent_40%)]" />
      <MessageArea />
      <div className="sticky bottom-0 ml-9 px-4 pb-2">
        <ChatInput />
      </div>
    </main>
  )
}

export default ChatArea
