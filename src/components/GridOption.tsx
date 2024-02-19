import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
  image?: string;
}
function GridOption(props: Props) {
  const { title, className, image } = props;
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn("grid-options relative", className)}
    >
      {" "}
      <h2 className="text-xl font-bold">{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="object-cover opacity-20 rounded-md"
        />
      )}
    </Link>
  );
}

export default GridOption;