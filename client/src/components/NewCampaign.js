import { useState } from 'react'

function NewCampaign() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/campaigns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            title, 
            description,
            image_url : image,
         }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((campaign) => console.log(campaign));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }

    return(
        <div>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  autoComplete="off"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  id="image"
                  autoComplete="off"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  autoComplete="off"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>

              </form>
            </div>
        </div>
    )
}

export default NewCampaign