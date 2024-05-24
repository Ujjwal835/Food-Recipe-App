import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 ">
      <h2 className="text-xl font-extrabold">Foodlover</h2>
      <Link href="/recipe-list">
        <Button>Recipe List</Button>
      </Link>
      <Link href={"/"}>
        <Button>Home</Button>
      </Link>
    </div>
  );
}
