import VideoCard from '../VideoCard';
import Layout from '../Layout';

const Dashboard = () => {
    return (
        <Layout>
            <div class='container px-32 bg-[#272727]'>
                <div class='flex flex-wrap mt-12 space-y-20 space-x-5'>
                    <div className='hidden'></div>
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
