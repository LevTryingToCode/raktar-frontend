import {useEffect} from "react";

const Dashboard = () => {

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = () => {

    }

    return <>Dashboard Basic</>
}

export default Dashboard;