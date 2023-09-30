import useWindowSize from "./hooks/useWindowSize.ts";

const Dashboard: React.FC = () => {
    const [width, height] = useWindowSize();
    return (
        <>
            <div>
                height:{height} width:{width}
            </div>
        </>
    );
};

export default Dashboard;