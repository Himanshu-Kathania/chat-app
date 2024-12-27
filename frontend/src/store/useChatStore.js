import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";

export const useChatStore = create((set, get) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch messages"); // Improved error handling
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async (messageData) => {
    const { selectedUser, messages } = get();
    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      const newMessage = res.data;

      const authUser = useAuthStore.getState().authUser;
      if (authUser._id === newMessage.senderId) {
        set({ messages: [...messages, newMessage] });
      }

      const socket = useAuthStore.getState().socket;
      socket.emit("newMessage", {
        ...newMessage,
        receiverId: selectedUser._id,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  subscribeToMessages: () => {
    const { selectedUser } = get();
    if (!selectedUser) return;

    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");

    socket.on("newMessage", (newMessage) => {
      const authUser = useAuthStore.getState().authUser;
      if (
        newMessage.senderId === selectedUser._id &&
        newMessage.receiverId === authUser._id
      ) {
        set((state) => {
          const exists = state.messages.some(
            (msg) => msg._id === newMessage._id
          );
          if (!exists) {
            return { messages: [...state.messages, newMessage] };
          }
          return state;
        });
      }
    });
  },

  unsubscribeFromMessages: () => {
    const socket = useAuthStore.getState().socket;
    socket.off("newMessage");
  },

  setSelectedUser: (user) => set({ selectedUser: user }),
}));
