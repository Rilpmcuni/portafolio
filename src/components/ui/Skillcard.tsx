import Image from "next/image";
interface Props {
    ico: string;
}
const SkillCard: React.FC<Props> = ({ ico }) => {
    return (
        <>
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-bg">
                <Image
                    className="m-auto p-4"
                    src={ico}
                    objectFit="contain"
                    width={400}
                    height={400}
                    alt="Card image background"
                />
            </div>
        </>
    );
};

export default SkillCard;
