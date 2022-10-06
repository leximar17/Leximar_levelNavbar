import Link from "next/link";
import { classNames } from "../../../lib/helper";


export default function NavbarLevel3Team({currentPath, href}) {
    return (
        <Link href={href}>
            <a
                className={classNames(
                    "/team" === currentPath
                        ? "border-indigo-500 text-gray-900"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "inline-flex items-center border-b-2 font-medium px-1 pt-1 text-sm "
                )}
            >
                Team
            </a>
        </Link>
    )
}
