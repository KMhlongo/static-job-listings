import { useState } from 'react'
import './App.css'
import Listing from './components/Listing'
import data from '../data.json'
import ActiveTagList from './components/ActiveTagList';

function App() {

  const jobs = data;
  const [activeTags, setActiveTags] = useState([]);

   function handleTagClick(e) {
    if (!activeTags.includes(e.target.outerText)) {
      setActiveTags([...activeTags, e.target.outerText])
    }
   }

   function handleRemoveTag(index) {
    let tempTags = [...activeTags];
    tempTags.splice(index,1)
    setActiveTags(tempTags)
   }

   function handleClearTags() {
    setActiveTags([]);
   }

  return (
    <div>
      <ActiveTagList 
        activeTags={activeTags} 
        handleRemoveTag={handleRemoveTag} 
        handleClearTags={handleClearTags}/>
      <div className='listingscontainer'>
        {jobs.map(job => (
          <Listing 
            key={job.id} 
            job={job}
            handleTagClick={handleTagClick}
            activeTags={activeTags}/>
        ))}
      </div>
    </div>
  )
}

export default App
