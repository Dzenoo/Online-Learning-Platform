import { ProfileForm } from "@/components/profile";
import React from "react";

const ProfilePage = () => {
  return (
    <section className="py-20 px-40 flex justify-between">
      <div className="flex flex-col gap-4">
        <h1 className="headingTitle">Profile</h1>
        <div className="flex gap-4 mt-12">
          <div className="img"></div>
          <div>
            <h1 className="headingTitle">John Doe</h1>
            <p className="text-gray-400">johndoe@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <h1 className="headingTitle">Edit Profile</h1>
        <ProfileForm />
      </div>
    </section>
  );
};

export default ProfilePage;
