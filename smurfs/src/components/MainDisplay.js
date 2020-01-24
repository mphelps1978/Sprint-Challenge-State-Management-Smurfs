import React from 'react';
import { useContext } from 'react'
import { SmurfContext } from '../contexts/smurfContexts.js'




const MainDisplay = () => {
    const { smurf } = useContext(SmurfContext);


    console.log("in MainDisplay", smurf)

    deleteSmurf = (id) => {

      axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        console.log("Deleted a Smurf: ", res)
      })
      .catch(err => {
        console.log("Error in Delte: ", err)
      })
    }


    return (
        <div>

            {smurf.map(smurf => (
                <div>
                    <h1>{smurf.name}</h1>
                    <h2>{smurf.age}</h2>
                    <h2>{smurf.height}</h2>
                    <button onClick={deleteSmurf({smurf.id})}>Delete</button>
                </div>
            ))}
            {/* {console.log("in return", smurf.name)} */}
        </div>
    )
}

export default MainDisplay