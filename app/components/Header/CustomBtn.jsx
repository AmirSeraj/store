import { Button } from "@nextui-org/button";
import Link from "next/link";

const CustomBtn = ({ title, href, color, className, variant, icon }) => {
    return (
        <Button variant={variant} color={color} radius="full" className={className}>
            <Link href={href} className="text-xs flex items-center justify-center gap-2" dir="ltr">
                {icon}
                {title}
            </Link>
        </Button>
    )
}

export default CustomBtn
