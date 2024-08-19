import { Button } from "@nextui-org/button";
import Link from "next/link";

const CustomBtn = ({ title, href, color, className, variant }) => {
    return (
        <Button variant={variant} color={color} radius="full" className={className}>
            <Link href={href} className="text-xs" dir="ltr">
                {title}
            </Link>
        </Button>
    )
}

export default CustomBtn
