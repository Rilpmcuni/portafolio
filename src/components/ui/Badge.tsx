interface Props {
    children: string;
}

const Badge: React.FC<Props> = ({ children }) => {
    return (
        <div className="select-none rounded-2xl border-2 border-brand bg-bgdark px-2 py-1 text-xs font-medium text-brand ">
            {children}
        </div>
    );
};
export default Badge;
