"use server";

import { hundleError } from "@/lib/utils";
import { CreateUserParams } from "@/types";
import { connectToDatabase } from "..";
import User from "../models/user.model";
import Event from "../models/event.model";
import Order from "../models/event.model";
import { revalidatePath } from "next/cache";

// 新規登録
export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase();
    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    hundleError(err);
  }
};

// プロフィール画面に利用
export const getUserId = async (userId: string) => {
  try {
    await connectToDatabase();
    const user = await User.findById(userId);

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    hundleError(error);
  }
};

export const updateUser = async (userId: string, user: CreateUserParams) => {
  try {
    connectToDatabase();
    const updateUser = await User.findByIdAndUpdate({ clerkId: userId }, user, {
      new: true,
    });

    if (!updateUser) {
      throw new Error("User not found");
    }

    return JSON.parse(JSON.stringify(updateUser));
  } catch (error) {
    hundleError(error);
  }
};
export const deleteUser = async (userId: string) => {
  try {
    connectToDatabase();
    await connectToDatabase();
    const deleteUser = await User.findById(userId);

    if (!deleteUser) {
      throw new Error("User not found");
    }

    await Promise.all([
      Event.updateMany(
        { id: { $in: deleteUser.events } },
        { $pull: { organizer: deleteUser._id } }
      ),

      Order.updateMany(
        { id: { $in: deleteUser.orders } },
        { $unset: { buyer: 1 } }
      ),
    ]);

    const deleteTo = await User.findByIdAndDelete(userId);
    revalidatePath("/");
    return JSON.parse(JSON.stringify(deleteTo));
  } catch (error) {
    hundleError(error);
  }
};
