import { useState } from 'react'

function CharacterCreator({campaign}) {
    const [name, setName] = useState('')
    const [race, setRace] = useState('')
    const [characterClass, setCharacterClass] = useState('')
    const [isLoading, setIsLoading] = useState()
    const [errors, setErrors] = useState()



    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        console.log("form submitted...")
        console.log("name: " + name)
        console.log("race: " + race)
        console.log("characterClass: " + characterClass)
        console.log("campaign id: " + campaign.id)

        // fetch("/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ username, password }),
        // }).then((r) => {
        //   setIsLoading(false);
        //   if (r.ok) {
        //     r.json().then((user) => setUser(user));
        //     navigate("/");
        //   } else {
        //     r.json().then((err) => setErrors(err.error));
        //   }
        // });
      }

    return(
        <div>
            <h1>Character creator</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="race">Race</label>
                <input
                  type="race"
                  id="race"
                  autoComplete="off"
                  value={race}
                  onChange={(e) => setRace(e.target.value)}
                />
                <label htmlFor="characterClass">Class</label>
                <input
                  type="characterClass"
                  id="characterClass"
                  autoComplete="off"
                  value={characterClass}
                  onChange={(e) => setCharacterClass(e.target.value)}
                />
                <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
                <div>
                  {errors ? errors : ""}
                </div>
            </form>
        </div>
    )
}

export default CharacterCreator