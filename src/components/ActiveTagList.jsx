import RemoveIcon from '../assets/icon-remove.svg'

/* eslint-disable react/prop-types */
function ActiveTagList({ activeTags , handleRemoveTag, handleClearTags}) {

   const activeTagsEmpty = (activeTags.length == 0);

    return(
        <>
            <div className="activeTagsList"
                style={{visibility: activeTagsEmpty ? 'hidden' : 'visible'}}>
                {activeTags.map((tag, index) => {
                    return(
                        <div key={index} className='activeTagContainer'>
                            <p className='tag activeTag'>
                                {tag}
                            </p>
                            <div className='removeIconContainer' onClick={() => handleRemoveTag(index)}>
                                <img src={RemoveIcon} alt='remove'/>
                            </div>
                        </div>
                    )
                })}
                <p 
                    className="clearTags"
                    onClick={handleClearTags}>
                        Clear
                </p>
            </div>
        </>
    )

}

export default ActiveTagList;