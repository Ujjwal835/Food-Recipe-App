import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>This Page Can Not be found</h1>
      <Link href={"/"}>Click Here to Go to Home</Link>
    </div>
  );
}
