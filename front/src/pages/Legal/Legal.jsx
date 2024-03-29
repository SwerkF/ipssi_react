import Cgu from './Cgu'
import Confidentiality from './Confidentiality'
import LegalMention from './LegalMention'
import Cookies from './Cookies'

const Legal = (props) => {
    return (
        <>
            <div className="main">
                <div className="hero bg-orange-50 p-20">
                    <div className="hero-content">
                        <div className="w-full flex flex-col gap-3">
                            <h1 className="text-5xl font-bold">Légal</h1>
                            {props.page == 'cgu' && <Cgu />}
                            {props.page == 'mentions' && <LegalMention />}
                            {props.page == 'confidentiality' && (
                                <Confidentiality />
                            )}
                            {props.page == 'cookies' && <Cookies />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Legal
