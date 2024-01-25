import { getImageURL } from "../utils/image-util";

/* eslint-disable react/prop-types */
function Listing({job, handleTagClick, activeTags}) {

    const tags = [job.role, job.level, ...job.languages];
    let hasAllTags = true;
    if (activeTags.length > 0) {
        const setTags = new Set(tags);
        activeTags.forEach((tag) => {
            if (!setTags.has(tag)) {
                hasAllTags = false
            }
        })
    }

    return(
        <>
            {hasAllTags && 
                <div className="listing" key={job.id}>
                    <img src={getImageURL(job.logo)} alt="logo" className="companylogo"/>
                    <div className="listing-description">
                        <div className="listing-company">
                            <p className="listingcompnayname">{job.company}</p>
                            {job.new && <p className="listingcompanynew">NEW!</p>}
                            {job.featured && <p className="listingcompanyfeatured">FEATURED</p>}
                        </div>
                        <p className="listingposition" >{job.position}</p>
                        <div className="listing-info">
                            <p>{job.postedAt}</p>
                            <p className="bullet">&#x2022;</p>
                            <p>{job.contract}</p>
                            <p className="bullet">&#x2022;</p>
                            <p>{job.location}</p>
                        </div>
                    </div>
                    {window.innerWidth <= 600 && (
                        <hr></hr>
                    )}
                    <div className="listing-tags">
                        {tags.map((tag, index) => {
                            return(
                                <p 
                                    key={index} 
                                    className="tag"
                                    onClick={handleTagClick}>
                                    {tag}
                                </p>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    )
}

export default Listing;