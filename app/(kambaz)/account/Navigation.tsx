import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link
        href="/account/signin"
        className={"list-group-item border-0 text-red-600"}
      >
        Signin
      </Link>{" "}
      <br />
      <Link
        href="/account/signup"
        className={"list-group-item border-0 text-red-600"}
      >
        Signup
      </Link>{" "}
      <br />
      <Link
        href="/account/profile"
        className={"list-group-item border-0 text-red-600"}
      >
        Profile
      </Link>{" "}
      <br />
    </div>
  );
}
