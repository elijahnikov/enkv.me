import { Clock, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";

export default function SecondaryProfileHeader() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/London",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  });
  const currentTimeInLondon = formatter.format(now);
  return (
    <div>
      <div className="flex items-center justify-between space-x-2 text-xs text-neutral-600 dark:text-neutral-400">
        <p className="flex items-center">
          Currently 🛠️ at{" "}
          <Link
            href={"https://airfinity.com"}
            target="_blank"
            className="mx-1 flex items-center text-black underline dark:text-white"
          >
            Airfinity
            <ExternalLink size={10} className="text-black dark:text-white" />
          </Link>
        </p>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-1">
            <MapPin className="dark:text-neutral-100" size={14} />
            <p>London - United Kingdom</p>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="dark:text-neutral-100" size={14} />
            <p>{currentTimeInLondon}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
