"use client";

import { useState, type FormEvent } from "react";
import { validateProfile, type ProfileErrors } from "../profile/profile";
import ProfileAlert from "../profile/ProfileAlert";
import ProfileFields from "../profile/ProfileFields";
import { ProfileProvider, useProfileContext } from "./ProfileContext";

function ContextProfileFormBody() {
  const { profile, setProfile } = useProfileContext();
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const save = (e: FormEvent) => {
    e.preventDefault();
    setErrors(validateProfile(profile));
    setSubmitted(true);
  };
  return (
    <form id="wd-context-profile-form" onSubmit={save} noValidate>
      <h2>Profile (React Context)</h2>
      <ProfileAlert
        id="wd-context-profile-alert"
        submitted={submitted}
        errors={errors}
      />
      <ProfileFields
        prefix="wd-context-profile"
        profile={profile}
        errors={errors}
        setProfile={setProfile}
      />
      <button
        id="wd-context-profile-save"
        type="submit"
        className="mt-3 rounded bg-blue-600 px-4 py-1.5 text-white"
      >
        Save
      </button>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
    </form>
  );
}

export default function ContextProfileForm() {
  return (
    <ProfileProvider>
      <ContextProfileFormBody />
    </ProfileProvider>
  );
}
