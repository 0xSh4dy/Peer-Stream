import Header from "../Header"
import VideoCard from "../VideoCard"



const Dashboard = () => {
    return (
        <>
            <Header />
            <div class="container px-32">
                <div class="flex flex-wrap mt-12 space-y-20 space-x-5">
                    <div className="hidden"></div>
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
            {/* </section> */}
        </>
    )
}

export default Dashboard