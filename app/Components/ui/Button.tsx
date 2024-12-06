const PrimaryBtn = ({ name }: { name: string }) => {
    return (
        <button className="bg-black tracking-wide max-xs:py-2 max-xs:px-4 max-xs:text-xs uppercase duration-200 transition-all hover:bg-white hover:text-black text-white font-semibold text-lg py-4 px-8">{name}</button>
    );
};

export default PrimaryBtn