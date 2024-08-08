import Link from "next/link";
import { Loading } from "@/components/base/loading";

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Loading type="area" />
        <div className="mt-10 text-center">
          <Link href="/bots">🚀 Go to Home</Link>
        </div>
      </div>
    </div>
  );
}
