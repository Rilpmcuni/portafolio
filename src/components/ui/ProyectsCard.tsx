import Link from "next/link";
import { Key } from "react";
import Badge from "./Badge";

interface Props {
  proyect: any;
}

const ProyectsCard: React.FC<Props> = ({ proyect }) => {
  const dirPath = proyect.page.toLowerCase().replace(/\s/g, "-");
  dirPath.toLowerCase().replace(/\s/g, "-");

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 z-0 flex items-center justify-center rounded-2xl bg-bg bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage: `url(${proyect.bgCard})`,
          opacity: "0.5",
        }}
      ></div>
      <div className="relative z-10 flex w-full h-full p-4 flex-col items-center justify-center rounded-2xl bg-bg/50 bg-cover bg-center bg-no-repeat px-4 text-center">
        <h3 className="text-xl font-bold text-brand mb-4 bg-bg px-2 py-1 rounded-2xl">
          {proyect.title}
        </h3>
        <div className="flex flex-row flex-wrap w-9/12 items-center justify-center gap-1">
          {proyect.badge.map((badge: string, index: Key) => (
            // <div key={index} className="text-xs font-medium text-brand border-2 border-brand bg-bgdark px-2 py-1 rounded-2xl ">{badge}</div>
            <Badge key={index}>{badge}</Badge>
          ))}
        </div>
        <div className="border border-brand/50 w-6/12 my-2"></div>
        <p className="text-lg bg-bg px-2 py-1 rounded-2xl">
          {proyect.description}
        </p>
        <Link
          href={`/proyectos/${dirPath}`}
          className="focus:ring-brand focus:ring-1 rounded-xl px-3 py-2 mt-2 hover:bg-bg border-2 border-brand"
        >
          ver más
        </Link>
      </div>
    </div>
  );
};
export default ProyectsCard;
