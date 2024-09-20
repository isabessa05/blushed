

import Notes from './Notes'
import ToDo from './ToDo'

function App() {
  

  return (
    <div class="flex flex-col md:flex-row justify-between flex-wrap">
    {/* <div> */}
      <div>
     <ToDo/>
     </div>
     <Notes/>
    </div>
  )
}

export default App
