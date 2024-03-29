import CardJob from '../../components/Card/CardJob/CardJob'
import jobsList from '../../components/Card/CardJob/jobs.json'

const Jobs = () => {
    return (
        <>
            <div className="main">
                <div className="hero bg-orange-50 p-20">
                    <div className="hero-content"></div>
                    <div className="w-full">
                        <h1 className="text-5xl font-bold">
                            Offres d&apos;emploi
                        </h1>
                        <h3 className="text-2xl py-2 font-semibold">
                            Veuillez trouver ci-dessous les offres
                            d&apos;emplois
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            {jobsList.map((job, index) => (
                                <div key={index}>
                                    <CardJob jobs={job} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs
